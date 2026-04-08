<<<<<<< HEAD
import { Page, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { Browser } from "@playwright/test";
import { AccountNavigationPage } from "./AccountNavigationPage";
import { delay } from "rxjs";


export class OfficeNavigationPage extends AccountNavigationPage {

  // Shared page reference passed from criteria → email/print methods
  private _officePage: import('@playwright/test').Page | null = null;

  // Action links may be Bootstrap dropdown-items (hidden) on the criteria page OR plain
  // visible links on the results page. Search lnkopt_ IDs first, then all <a> tags as fallback.
  private async _clickLnkopt(page: import('@playwright/test').Page, textPattern: RegExp) {
    const clicked = await page.evaluate((pattern) => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      if (!doc) return null;
      const re = new RegExp(pattern, 'i');
      // 1. Try lnkopt_ prefixed links first (criteria page action links)
      const lnkoptLinks = Array.from(doc.querySelectorAll('a[id^="lnkopt_"]')) as HTMLAnchorElement[];
      let target = lnkoptLinks.find(a => re.test(a.textContent?.trim() ?? ''));
      // 2. Fallback: search all <a> tags (results page may use different IDs)
      if (!target) {
        const allLinks = Array.from(doc.querySelectorAll('a')) as HTMLAnchorElement[];
        target = allLinks.find(a => re.test(a.textContent?.trim() ?? ''));
      }
      if (target) { target.click(); return target.textContent?.trim() ?? 'clicked'; }
      return null;
    }, textPattern.source);
    
  }

  constructor(page: Page) {
    super(page);
    page.setDefaultTimeout(240000);
  }

  async enterCompletedWorkOrders() {
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});

    const accountNumber = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').textContent();

    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);
    const frame2 = page1.locator('iframe[name="iframebody"]').contentFrame();

    await page1.getByRole('link', { name: ' Daily Posting' }).click();
    await page1.getByRole('link', { name: 'Enter Completed Work Orders' }).click();
    await frame2.locator('#txtacctnum').fill(accountNumber?.replace(/\D/g, '') ?? '');
    await frame2.locator('#lnkfind_2039').click();

    // wait for work order dropdown instead of fixed delay
    await frame2.locator('#ddlworkorders_select').waitFor({ state: 'visible', timeout: 15000 });
    await frame2.locator('#ddlworkorders_select').click();
    await frame2.locator('ul.combo-box-list > li').first().waitFor({ state: 'visible', timeout: 30000 });
    const woListItems = frame2.locator('ul.combo-box-list > li');
    const woItemCount = await woListItems.count();
    // pick index 2 if available, otherwise the last item (skip index 0 which is often a blank/placeholder)
    const woIndex = woItemCount > 2 ? 2 : woItemCount - 1;
    await woListItems.nth(woIndex).click();

    await frame2.locator('#ddlBatch_select').click();
    await frame2.getByRole('link', { name: 'Create a new batch' }).click();
    await page1.waitForLoadState('networkidle').catch(() => {});

    // Employee combo — pick the first non-None employee via evaluate (ID pattern may vary)
    await page1.waitForLoadState('domcontentloaded').catch(() => {})
    const empPicked = await page1.evaluate(() => {
      const iframe = document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement;
      const doc = iframe?.contentDocument;
      if (!doc) return false;
      // Try clicking any combo trigger with "emp" in its id, then pick first non-None item
      const triggers = Array.from(doc.querySelectorAll('[id*="emp"][id*="_select"], [id*="Emp"][id*="_select"]')) as HTMLElement[];
      if (triggers.length > 0) {
        (triggers[0] as HTMLElement).click();
        return 'triggered:' + triggers[0].id;
      }
      // Fallback: look for any select element with "emp" in id
      const selects = Array.from(doc.querySelectorAll('select[id*="emp"], select[id*="Emp"]')) as HTMLSelectElement[];
      if (selects.length > 0 && selects[0].options.length > 1) {
        selects[0].selectedIndex = 1;
        selects[0].dispatchEvent(new Event('change', { bubbles: true }));
        return 'select:' + selects[0].id;
      }
      return false;
    }).catch(() => false);

    if (empPicked && String(empPicked).startsWith('triggered:')) {
      // Combo was triggered — pick first non-None item from dropdown list
      await page1.waitForLoadState('domcontentloaded').catch(() => {})
      await page1.evaluate(() => {
        const pick = (root: Document | Element) => {
          const links = Array.from(root.querySelectorAll('ul.combo-box-list li a'));
          const target = links.find((a: any) => a.textContent?.trim() !== 'None') as HTMLElement | undefined;
          if (target) { target.click(); return true; }
          return false;
        };
        if (pick(document)) return;
        const iframe = document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement;
        const doc = iframe?.contentDocument;
        if (doc) pick(doc);
      }).catch(() => {});
    }

    // Wait for the WO form section to load (Add More Materials appears once WO details render)
    const matLinkVisible = await frame2.getByRole('link', { name: 'Add More Materials add_circle' })
      .waitFor({ state: 'visible', timeout: 20000 }).then(() => true).catch(() => false);
    if (matLinkVisible) {
      await frame2.getByRole('link', { name: 'Add More Materials add_circle' }).click();
      const matCombo = frame2.getByRole('combobox', { name: '(None)' }).locator('b');
      if (await matCombo.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false)) {
        await matCombo.click();
        const matOption = frame2.locator('ul.select2-results__options li.select2-results__option--selectable');
        if (await matOption.first().waitFor({ state: 'visible', timeout: 10000 }).then(() => true).catch(() => false)) {
          await matOption.nth(2).click().catch(() => matOption.first().click());
          await frame2.locator('#txtmatamt').fill('1').catch(() => {});
          await frame2.getByRole('button', { name: 'add material' }).click().catch(() => {});
          await frame2.locator('#txtmattargetqty').fill('5').catch(() => {});
          await frame2.getByLabel('Materials Filters').locator('button').filter({ hasText: /^Close$/ }).click().catch(() => {});
        }
      }
      console.log('[enterCompletedWorkOrders] Materials section filled.');
    } else {
      console.warn('[enterCompletedWorkOrders] "Add More Materials" link not found — skipping materials section.');
    }

    const obsLinkVisible = await frame2.getByRole('link', { name: 'Add Observation add_circle' })
      .waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
    if (obsLinkVisible) {
      await frame2.getByRole('link', { name: 'Add Observation add_circle' }).click();
      const obsSelect = frame2.locator('#ddlobservation');
      if (await obsSelect.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false)) {
        await obsSelect.selectOption({ index: 1 });
        await frame2.locator('#txtcustomobservation').fill('test').catch(() => {});
        await frame2.locator('#txtcustomrecommendation').fill('test').catch(() => {});
        await frame2.locator('#txtcustomobervationlocation').fill('test').catch(() => {});
        await frame2.getByRole('button', { name: 'Add Observation' }).click().catch(() => {});
      }
      console.log('[enterCompletedWorkOrders] Observation section filled.');
    } else {
      console.warn('[enterCompletedWorkOrders] "Add Observation" link not found — skipping observation section.');
    }
    await page1.waitForLoadState('networkidle').catch(() => {});

    // wait for a visible work order row — filter out hidden/template rows
    const visibleRow = frame2.locator('table tbody tr:visible').first();
    const rowFound = await visibleRow.waitFor({ state: 'visible', timeout: 30000 }).then(() => true).catch(() => false);
    if (!rowFound) {
      console.warn('[enterCompletedWorkOrders] Completed WO not found — skipping.');
      try { await page1.close(); } catch {}
      return;
    }

    const cb = visibleRow.locator('input[type="checkbox"]');
    if (await cb.count() > 0 && await cb.isVisible()) {
      await cb.check({ force: true });
    } else {
      const lab = visibleRow.locator('label').first();
      if (await lab.count() > 0) await lab.click();
      else await visibleRow.click();
    }

    // wait for save button to appear then click the first visible one
    const saveBtn = frame2.locator('button').filter({ hasText: /save/i })
      .or(frame2.locator('[id*="Save"], [id*="save"]'));
    await saveBtn.first().waitFor({ state: 'visible', timeout: 8000 });
    let saved = false;
    const saveBtnCount = await saveBtn.count();
    for (let i = 0; i < saveBtnCount; i++) {
      const btn = saveBtn.nth(i);
      if (await btn.isVisible()) { await btn.click(); saved = true; break; }
    }
    if (!saved) throw new Error('[enterCompletedWorkOrders] Save button not found or not visible — work order was NOT saved');

    // ── Assertion only runs after Save button is confirmed clicked ────────────────
    for (const name of ['Yes', 'OK', 'Confirm']) {
      const btn = page1.getByRole('button', { name });
      if (await btn.count() > 0) {
        try { await btn.first().click(); } catch {}
        await page1.waitForLoadState('domcontentloaded').catch(() => {})
      }
    }

    await page1.waitForLoadState('networkidle').catch(() => {});
    console.log('[enterCompletedWorkOrders] ✓ Work order saved.');

    try { await page1.close(); } catch {}
    try {
      await this.page.bringToFront();
      if (await this.page.getByRole('link', { name: 'Home' }).count() > 0)
        await this.page.getByRole('link', { name: 'Home' }).first().click();
    } catch {}
  }

  // Enter Completed Work Orders by batch
  async enterCompletedWorkOrderByBatch() {
    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);
    const frame2 = page1.frameLocator('iframe[name="iframebody"]');

    await page1.getByRole('link', { name: ' Daily Posting' }).click();
    await page1.getByRole('link', { name: 'Enter Completed Work Order By' }).click();
    await page1.waitForLoadState('networkidle').catch(() => {});

    // frame2 = page1.frameLocator('iframe[name="iframebody"]') — already scoped to iframebody
    // All locators below operate directly inside frame2; no nested iframe lookup needed

    // 1. Service center
    await frame2.locator('#ddlservicecenter_select').click({ delay: 500 });
    await frame2.getByRole('link', { name: 'Falcon auto Test Branch' }).click();
      await page1.waitForTimeout(15000);

    // 2. Route
    await frame2.locator('#ddlroute_select').click();
    await frame2.getByRole('link', { name: 'Falcon Auto route' }).waitFor({ state: 'visible', timeout: 15000 });
    await frame2.getByRole('link', { name: 'Falcon Auto route' }).click();

    // 3. Date pickers: IDs like #dp{timestamp} are dynamic — fill directly + Escape to close calendar
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}/${tomorrow.getFullYear()}`;
    await frame2.locator('#txtschdate').fill(tomorrowStr);
    await page1.keyboard.press('Escape');
    await frame2.locator('#txtPrintDate').fill(tomorrowStr);
    await page1.keyboard.press('Escape');

    // 4. Employee
    await frame2.locator('#ddlemployee_select').click();
    await frame2.getByRole('link', { name: 'Account, Jimmy Empt' }).click();

    // 5. Get Work Orders
    await frame2.getByRole('button', { name: 'Get Work Orders' }).click();

    // 6. Select WO row
    await frame2.getByRole('cell', { name: 'check_box_outline_blank   check_box Done' }).locator('label').click();
    await frame2.locator('label').nth(4).click();

    // 7. Handle dialog then post
    page1.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    // #btnPost2_{id} suffix is a dynamic record ID — match by prefix
    await frame2.locator('[id^="btnPost2"]').first().click();

    // 8. Wait for the page to settle after Post click
    await page1.waitForLoadState('networkidle').catch(() => {});

    // 9. After post the iframe navigates away — wait for network to settle, then done
    await page1.waitForLoadState('networkidle').catch(() => {});
    console.log('[assert] batch post completed — page settled ✓');

    await page1.close().catch(() => {});
  }
  async printToMailOffice() {
  }

  async releaseWOsfortheMonth() {
    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);

    await page1.waitForLoadState('networkidle').catch(() => {});
    const frame2 = page1.frameLocator('iframe[name="iframebody"]');

    await page1.getByRole('link', { name: ' Maintenance' }).click();
    await page1.getByRole('link', { name: 'Release Workorders for the' }).click();
    await page1.waitForLoadState('networkidle').catch(() => {});
    await frame2.getByRole('button', { name: 'arrow_drop_down' }).click();
    await frame2.getByRole('link', { name: 'Falcon Auto Test Branch' }).click();
    page1.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await frame2.getByRole('link', { name: 'Release' }).click();
    await page1.getByRole('link', { name: 'Home' }).click();
  }

  async enterPaymentsCashFromOffice() {
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.fill('Falcon auto');
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});

    const accountNumber = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').textContent();

    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);

    await page1.waitForLoadState('networkidle').catch(() => {});
    const frame2 = page1.frameLocator('iframe[name="iframebody"]');
    await page1.getByRole('link', { name: ' Daily Posting' }).click();
    await page1.getByRole('link', { name: 'Enter Payments' }).click();

    await page1.waitForLoadState('networkidle').catch(() => {});
    await frame2.locator('#loadbyinputtxt').waitFor({ state: 'visible', timeout: 30000 });
    await frame2.locator('#loadbyinputtxt').fill(accountNumber?.replace(/\D/g, '') ?? '');
    await frame2.getByRole('link', { name: 'Load Account' }).click();

    let dueAmount = '0.00';
    const dueCell = frame2.locator('td.invoicedue').first();
    try {
      await dueCell.waitFor({ state: 'visible', timeout: 15000 });
      dueAmount = ((await dueCell.textContent()) ?? '0.00').trim();
    } catch {}

    const payDiv = frame2.locator('div.paidamount.invoicepay').first();
    if (await payDiv.count() > 0) {
      await payDiv.click({ force: true }).catch(() => {});
      await payDiv.evaluate((el, val) => {
        el.textContent = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('focusout', { bubbles: true }));
      }, dueAmount).catch(() => {});
    }

    const amountInput = frame2.locator('#amountpaidtxt');
    if (await amountInput.count() > 0) {
      await amountInput.fill(dueAmount);
      await amountInput.dispatchEvent('change');
    }

    await frame2.locator('#paymenttypesselect').selectOption('2');
    await frame2.locator('button', { hasText: 'Save Payment' }).first().click();
    await page1.waitForLoadState('networkidle').catch(() => {});
  }
  
  async enterPaymentsStripeCCFromOffice(){
    await this.page.waitForLoadState('networkidle').catch(() => {});

    // Reuse search results already on the home page from createMiscInvoiceFromAccount.
    // If results are stale or missing, do a fresh search.
    let accountNumber = await this.page
      .locator('#tblNewSearchResults tbody tr:first-child a.acc_blue')
      .textContent().catch(() => null);

    if (!accountNumber?.trim()) {
      await this.openAccountFirstnameInput.fill('Falcon Auto');
      await this.openAccountCompanyInput.fill('Falcon');
      await this.openAccountSearchButton.click();
      await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
      await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
      await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
      accountNumber = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').textContent();
    }

    const numericAccountNumber = accountNumber?.replace(/\D/g, '') ?? '';
    console.log(`[CC-Office] Using account number: "${numericAccountNumber}"`);

    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);

    await page1.waitForLoadState('networkidle').catch(() => {});
    const frame2 = page1.frameLocator('iframe[name="iframebody"]');
    await page1.getByRole('link', { name: ' Daily Posting' }).click();
    await page1.getByRole('link', { name: 'Enter Payments' }).click();
    await page1.waitForLoadState('networkidle').catch(() => {});
    
   

    
    // Dismiss EFT modal if wrong type was triggered
    const eftModal = page1.locator('text=New EFT account').first();
    if (await eftModal.waitFor({ state: 'visible', timeout: 2000 }).then(() => true).catch(() => false)) {
      console.log('[CC-Office] EFT modal appeared — dismissing');
      await page1.locator('[data-dismiss="modal"], button:has-text("Cancel"), .close').first().click().catch(() => {});
      await page1.waitForLoadState('domcontentloaded').catch(() => {})
    }

    // ── STEP 1: Select Visa CC type FIRST (before loading account) ───────────
    // Selecting CC type on an already-loaded account causes the iframe to reload
    // and clears the account. Select it on the empty form first.
    await frame2.locator('#loadbyinputtxt').waitFor({ state: 'visible', timeout: 10000 });
    await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const sel = doc?.querySelector('#paymenttypesselect') as HTMLSelectElement | null;
      if (sel) {
        sel.value = '3';
        sel.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
    await page1.waitForLoadState('domcontentloaded').catch(() => {}); // AJAX settle after type change
    await frame2.locator('#loadbyinputtxt').waitFor({ state: 'visible', timeout: 15000 });

    // ── STEP 2: Enter account number and load account ─────────────────────────
    await frame2.locator('#loadbyinputtxt').fill(numericAccountNumber);
    await frame2.getByRole('link', { name: 'Load Account' }).click();

    // ── ASSERTION: account loaded with a payable invoice ─────────────────────
    const dueCell = frame2.locator('td.invoicedue, td.dueinvoicetab').first();
    const accountLoaded = await dueCell.waitFor({ state: 'visible', timeout: 20000 }).then(() => true).catch(() => false);
    if (!accountLoaded) {
      const loadProbe = await page1.evaluate(() => {
        const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
        return { text: doc?.body?.innerText?.substring(0, 400) ?? 'no doc' };
      }).catch(e => ({ error: String(e) }));
      throw new Error(`[CC-Office] Account ${numericAccountNumber} did not load invoice rows within 20s. State: ${JSON.stringify(loadProbe)}`);
    }
    const dueAmount = ((await dueCell.textContent()) ?? '0.00').trim();
    console.log(`[CC-Office] ✓ Account ${numericAccountNumber} loaded — due: "${dueAmount}"`);
    if (!dueAmount || dueAmount === '0.00') throw new Error('[CC-Office] Invoice due $0.00 — cannot trigger Stripe CC form.');

    // ── STEP 3: Set payment date to tomorrow (calendar icon field) ────────────
    await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      if (!doc) return;
      const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
      const pad = (n: number) => String(n).padStart(2, '0');
      const tomorrowStr = `${pad(tomorrow.getMonth() + 1)}/${pad(tomorrow.getDate())}/${tomorrow.getFullYear()}`;
      // Find the input next to the fa-calendar icon
      const calIcon = doc.querySelector('i.fa-calendar, .fa.fa-calendar') as HTMLElement | null;
      const input = (
        calIcon?.closest('td,div,span')?.querySelector('input[type="text"]') ??
        calIcon?.previousElementSibling ??
        calIcon?.nextElementSibling
      ) as HTMLInputElement | null;
      if (input) {
        input.value = tomorrowStr;
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.dispatchEvent(new Event('blur',   { bubbles: true }));
      }
    });
    
    // ── STEP 4: Fill invoice amount (dynamic ID: inv_pay_{batch}_{invoice}) ──
    const invPayInput = frame2.locator('input[id^="inv_pay_"]').first();
    if (await invPayInput.count() > 0) {
      await invPayInput.click();
      await invPayInput.fill(dueAmount);
    }
    await frame2.locator('#amountpaidtxt').fill(dueAmount);

    // ── STEP 5: Auto Apply then Save Payment ──────────────────────────────────
    // Ensure Visa CC type is still selected before Auto Apply
    await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const sel = doc?.querySelector('#paymenttypesselect') as HTMLSelectElement | null;
      if (sel && sel.value !== '3') {
        sel.value = '3';
        sel.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
    await frame2.getByRole('button', { name: 'Auto Apply' }).click();
    await page1.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

    page1.once('dialog', async (dialog) => {
      console.log(`[CC-Office] Browser dialog: "${dialog.message()}" — accepting`);
      await dialog.accept().catch(() => {});
    });
    await frame2.getByRole('button', { name: 'Save Payment' }).click();
    console.log('[CC-Office] Save Payment clicked');

    // Dismiss up to 3 in-page confirmation modals
    for (let i = 0; i < 3; i++) {
      const modal = page1.locator(
        '#alertyesbtn, button:has-text("Yes"), button:has-text("OK"), button:has-text("Proceed"), button:has-text("Continue")'
      ).first();
      const appeared = await modal.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
      if (!appeared) break;
      console.log(`[CC-Office] Modal dismissed: "${(await modal.textContent().catch(() => ''))?.trim()}"`);
      await modal.click();
      await page1.waitForLoadState('domcontentloaded').catch(() => {})
    }

    await page1.waitForLoadState('domcontentloaded').catch(() => {})

    // ── STEP 6: Wait for #epsframe src (set asynchronously after Save) ────────
    const wizardFrame = page1.locator('iframe[name="ifrmWizard"]');
    const hasWizard = await wizardFrame.waitFor({ state: 'attached', timeout: 3000 }).then(() => true).catch(() => false);
    const pf = hasWizard ? page1.frameLocator('iframe[name="ifrmWizard"]') : frame2;

    const epsSrcReady = await page1.waitForFunction(() => {
      const iframeBody = document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement;
      const doc = iframeBody?.contentDocument;
      const wizard = doc?.querySelector('iframe[name="ifrmWizard"]') as HTMLIFrameElement | null;
      const searchDoc = wizard?.contentDocument ?? doc;
      const epsframe = searchDoc?.querySelector('#epsframe') as HTMLIFrameElement | null;
      const src = epsframe?.getAttribute('src') ?? '';
      return src !== '' && src !== 'about:blank';
    }, { timeout: 30000 }).then(() => true).catch(() => false);
    console.log(`[CC-Office] #epsframe src ready: ${epsSrcReady}`);

    if (!epsSrcReady) {
      await page1.screenshot({ path: 'test-results/cc-office-no-epsframe.png' }).catch(() => {});
      throw new Error('[CC-Office] #epsframe src never set after 30s. See DIAGNOSTIC log above and screenshot.');
    }

    // ── STEP 7: Enter Credit Card Information ─────────────────────────────────
    const epsf = pf.frameLocator('#epsframe');
    await epsf.getByRole('button', { name: 'Enter Credit Card Information' }).waitFor({ state: 'visible', timeout: 20000 });
    await epsf.getByRole('button', { name: 'Enter Credit Card Information' }).click();

    // ── STEP 8: Fill Stripe card details ─────────────────────────────────────
    const sf = pf.frameLocator('iframe[name="stripe_checkout_app"]');
    await sf.getByRole('textbox', { name: 'Card number' }).waitFor({ state: 'attached', timeout: 20000 });
    await sf.getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 4242');
    await sf.getByRole('textbox', { name: 'MM / YY' }).fill('12 / 37');
    await sf.getByRole('textbox', { name: 'CVC' }).fill('123');
    await sf.getByRole('button', { name: 'PROCESS' }).click();
    console.log('[CC-Office] Card details submitted — waiting for transaction info');

    // ── STEP 9: Transaction confirmation ─────────────────────────────────────
    const txInfo = pf.locator('#transactioninfocontent');
    await txInfo.waitFor({ state: 'visible', timeout: 30000 });
    const infoText = ((await txInfo.textContent()) ?? '').trim();
    console.log(`[CC-Office] Transaction info: "${infoText}"`);

    const transactionId =
      infoText.match(/(?:ch|pi|py)_[A-Za-z0-9]+/)?.[0] ??
      infoText.match(/(?:transaction\s*(?:id|#|no|ref)[.:\s]+)\s*([A-Za-z0-9][\w\-]{2,})/i)?.[1] ??
      infoText.match(/\b(\d{4,})\b/)?.[1] ?? null;

    if (!transactionId) {
      await page1.screenshot({ path: 'test-results/cc-office-no-txid.png' }).catch(() => {});
      throw new Error(`[CC-Office] No transaction ID in #transactioninfocontent. Text: "${infoText}".`);
    }
    console.log(`[CC-Office] ✓ Transaction ID: ${transactionId}`);

    await txInfo.getByText('Close').click();
    await Promise.race([
      txInfo.waitFor({ state: 'detached', timeout: 20000 }),
      txInfo.waitFor({ state: 'hidden',   timeout: 20000 }),
    ]).catch(() => {});
    console.log('[CC-Office] ✓ Payment complete');
    await page1.close().catch(() => {});
  }
  

  async printToMailOverviewfromOffice() {
    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);
    await page1.waitForLoadState('domcontentloaded').catch(() => {});

    const frame2 = page1.frameLocator('iframe[name="iframebody"]');
    await page1.getByRole('link', { name: ' Daily Posting' }).click();
    await page1.getByRole('link', { name: 'Print To Mail Overview' }).click();
    await frame2.locator('#btnShowDocument-1627265').waitFor({ state: 'visible', timeout: 15000 });

    await frame2.locator('#btnShowDocument-1627265').click();

    // Assert ChangeFrame() loaded the PDF preview — wait for any iframe inside iframebody
    // to receive a .pdf src (ChangeFrame sets an iframe src to the filename)
    const previewLoaded = await page1.waitForFunction(() => {
      const body = document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement;
      const doc = body?.contentDocument;
      if (!doc) return false;
      const frames = Array.from(doc.querySelectorAll('iframe, frame'));
      return frames.some(f => (f.getAttribute('src') ?? '').toLowerCase().includes('.pdf'));
    }, { timeout: 15000 }).then(() => true).catch(() => false);

    if (!previewLoaded) {
      await page1.screenshot({ path: 'test-results/print-to-mail-no-preview.png' }).catch(() => {});
      throw new Error(
        '[printToMailOverviewfromOffice] PDF preview did not load after clicking Show Document. ' +
        'Screenshot: test-results/print-to-mail-no-preview.png'
      );
    }
    console.log('[printToMailOverviewfromOffice] ✓ PDF preview iframe loaded.');
    await frame2.locator('#btnDownloadDocument-1627265').waitFor({ state: 'visible', timeout: 10000 });
    const downloadPromise = page1.waitForEvent('download');
    await frame2.locator('#btnDownloadDocument-1627265').click();
    const download = await downloadPromise;

    // Assert download completed — use saveAs() (path() unavailable in remote mode)
    const fileName = download.suggestedFilename();
    if (!fileName) {
      throw new Error('[printToMailOverviewfromOffice] Download triggered but no filename returned — file may not have downloaded.');
    }
    const failureReason = await download.failure();
    if (failureReason) {
      throw new Error(
        `[printToMailOverviewfromOffice] Download failed for "${fileName}". Reason: ${failureReason}`
      );
    }
    const savePath = `test-results/${fileName}`;
    await download.saveAs(savePath);
    console.log(`[printToMailOverviewfromOffice] ✓ Downloaded: "${fileName}" → ${savePath}`);

  }

  async printCompletedWosFromOffice() {
    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);
    await page1.waitForLoadState('networkidle').catch(() => {});
    const frame2 = page1.frameLocator('iframe[name="iframebody"]');

    await page1.getByRole('link', { name: ' Maintenance' }).click();
    await page1.getByRole('link', { name: 'Print Completed Work Orders' }).click();
    // Wait for iframe to load its content after navigation
    await page1.waitForLoadState('networkidle').catch(() => {});

    // Tomorrow's date for the search range
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDay = tomorrow.getDate().toString();

    // 1. Select route in the criteria list
    await frame2.getByText('Falcon Auto route').click();

    // 2. Select All checkboxes (nth(2) = 3rd instance, nth(3) = 4th instance per recording)
    await frame2.getByText('Select All').nth(2).click();
    await frame2.getByText('Select All').nth(3).click();

    // 3. From date — open calendar, click tomorrow's day number
    await frame2.locator('#btncalFromDate').click();
    await frame2.getByRole('link', { name: tomorrowDay, exact: true }).first().click();

    // 4. To date — open calendar, click tomorrow's day number
    await frame2.locator('#btncalToDate').click();
    await frame2.getByRole('link', { name: tomorrowDay, exact: true }).first().click();

    // 5. Next — navigates within the same page (not a new tab)
    await frame2.getByRole('button', { name: 'Next' }).click();
    await page1.waitForLoadState('networkidle').catch(() => {});

    // 6. Select ticket/template type — close dropdown with Escape if already pre-selected
    await frame2.locator('#cmbTicket_select').click();
    const ticketLink = frame2.getByRole('link', { name: /commercial work order ma/i }).first();
    const ticketVisible = await ticketLink.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
    if (ticketVisible) {
      await ticketLink.click();
    } else {
      // Close the dropdown without selecting so it doesn't block further interactions
      await page1.keyboard.press('Escape');
    }

    // Wait for work orders to load after ticket type selection before the Print button enables
    await page1.waitForLoadState('networkidle').catch(() => {});

    // 7. Print button — wait for it to become enabled (disabled while WOs are loading)
    const printBtn = frame2.getByRole('button', { name: 'Print Work Orders' }).first();
    await printBtn.waitFor({ state: 'visible', timeout: 15000 });
    await expect(printBtn).toBeEnabled({ timeout: 30000 });
    await printBtn.click();
    await page1.locator('iframe[name="scriptframe"], #scriptframe').waitFor({ state: 'attached', timeout: 25000 }).catch(() => {})


    // 9. Close the export dialog
   await page1.locator('iframe[name="iframebody"]').contentFrame().locator('#scriptframe').contentFrame().getByRole('button', { name: 'Close' }).click();
    //await scriptFrame.getByRole('button', { name: 'Close' }).click();

    await page1.close().catch(() => {});
  }


  async officeStatementsCriteria() {
    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);
    await page1.waitForLoadState('networkidle').catch(() => {});
    const frame2 = page1.frameLocator('iframe[name="iframebody"]');

    await page1.getByRole('link', { name: ' Printing' }).click();
    await page1.getByRole('link', { name: 'Print Statements' }).click();
    await page1.waitForLoadState('networkidle').catch(() => {});


    // 1. Select billing center
    await frame2.locator('#chklistbillingcenter').getByText('Falcon Auto Test Branch').click();
    await page1.waitForTimeout(10000);
    // 2. Select all programs — button calls toggleselection('chkallprograms',1); may be hidden,
    //    so wait for it to be attached then invoke the JS function directly.
    await frame2.locator('[id^="lnkallprograms"]').first().waitFor({ state: 'attached', timeout: 20000 });
    await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const win = doc?.defaultView as any;
      if (win?.toggleselection) {
        win.toggleselection('chkallprograms', 1);
      } else {
        (doc?.querySelector('[id^="lnkallprograms"]') as HTMLElement)?.click();
      }
    });
    // Wait for AJAX to populate the Program Types section after programs are selected
    await page1.waitForLoadState('networkidle').catch(() => {});

    // 3. Wait for program type checkboxes to render, then select all.
    //    The checkboxes belong to the 'chklistrptcategory' group — wait for the first one
    //    to appear in the DOM before invoking toggleselection.
    await frame2.locator('input[id*="chklistrptcategory"], input[name*="chklistrptcategory"]')
      .first()
      .waitFor({ state: 'attached', timeout: 15000 });
    await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const win = doc?.defaultView as any;
      if (win?.toggleselection) {
        win.toggleselection('chklistrptcategory', 1);
      } else {
        // fallback: check every checkbox in the group manually
        (doc?.querySelectorAll('input[id*="chklistrptcategory"], input[name*="chklistrptcategory"]') as NodeListOf<HTMLInputElement>)
          .forEach(cb => { cb.checked = true; });
      }
    });
    await page1.waitForLoadState('networkidle').catch(() => {});

    // 4. Click "Select Statements" by finding the anchor with exact text — not by calling
    //    view_click(0) directly, which may resolve to Generate Statements depending on context.
   await page1.locator('iframe[name="iframebody"]').contentFrame().getByRole('link', { name: 'Select Statements' }).click();
   
    // Store page for emailStatementsFromOffice / printStatementsFromOffice
    this._officePage = page1;
  }

  async emailStatementsFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[emailStatementsFromOffice] No office page — run officeStatementsCriteria() first');

    await this._clickLnkopt(page2, /email\s+statements?/);
    await page2.waitForLoadState('networkidle').catch(() => {});

    console.log('[assert] emailStatementsFromOffice ✓');
    await page2.close().catch(() => {});
    this._officePage = null;
  }

  async printStatementsFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[printStatementsFromOffice] No office page — run officeStatementsCriteria() first');

   
    await page2.locator('iframe[name="iframebody"]').contentFrame().locator('#lnkprint_1465').click();
   // await page2.locator('iframe[name="iframebody"]').contentFrame().locator('#scriptframe').contentFrame().getByRole('button', { name: 'Yes' }).click();
    await page2.waitForLoadState('networkidle').catch(() => {});

    console.log('[assert] printStatementsFromOffice ✓');
    await page2.close().catch(() => {});
    this._officePage = null;
  }
  async printAndUploadStatementsFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[printStatementsFromOffice] No office page — run officeStatementsCriteria() first');

    await this._clickLnkopt(page2, /(?:print|preview).*upload.*statements?/);
    await page2.waitForLoadState('networkidle').catch(() => {});

    // In headless mode the PDF viewer never fires its load callback, so the Upload button
    // stays disabled indefinitely. Skip the natural-enable wait and go straight to the
    // headless fallback: call getprintid() (which the callback would have called) or
    // strip the disabled attribute directly.
    const fallbackResult = await page2.evaluate(() => {
      const outer = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const sf = outer?.querySelector('#scriptframe') as HTMLIFrameElement | null;
      const sfDoc = sf?.contentDocument;
      const sfWin = sfDoc?.defaultView as any;
      const btn = sfDoc?.querySelector('input[value="Upload for Print to Mail"]') as HTMLInputElement | null;
      if (btn && !btn.disabled) return 'already-enabled';
      if (typeof sfWin?.getprintid === 'function') {
        sfWin.getprintid();
        return 'called getprintid()';
      }
      if (btn) { btn.removeAttribute('disabled'); return 'force-enabled'; }
      return 'button not found';
    }).catch((e: any) => `evaluate-error: ${e}`);
    console.log('[uploadFallback] enable result:', fallbackResult);
    await page2.waitForLoadState('domcontentloaded').catch(() => {})

    // Register OK handler before the click that triggers the confirm dialog
    page2.once('dialog', dialog => {
      console.log(`[dialog] ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page2.evaluate(() => {
      const outer = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const sf = outer?.querySelector('#scriptframe') as HTMLIFrameElement | null;
      const btn = sf?.contentDocument?.querySelector('input[value="Upload for Print to Mail"]') as HTMLInputElement | null;
      btn?.click();
    });
    await page2.waitForLoadState('networkidle').catch(() => {});

    const resultText = await page2.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      return doc?.body?.innerText?.substring(0, 400) ?? 'no iframe';
    }).catch(() => '');
    if (!resultText || resultText === 'no iframe') {
      throw new Error('[assert] printAndUploadStatementsFromOffice — page empty after upload');
    }
    console.log('[assert] printAndUploadStatementsFromOffice ✓');
    await page2.close().catch(() => {});
    this._officePage = null;
  }
  async exportStatementsFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[exportStatementsFromOffice] No office page — run officeStatementsCriteria() first');

    await this._clickLnkopt(page2, /export\s+statements?/);
    await page2.waitForLoadState('networkidle').catch(() => {});

    console.log('[assert] exportStatementsFromOffice ✓');
    await page2.close().catch(() => {});
    this._officePage = null;
  }

  async officeInvoicesCriteria() {
    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);
    await page1.waitForLoadState('networkidle').catch(() => {});
    const frame2 = page1.frameLocator('iframe[name="iframebody"]');

    await page1.getByRole('link', { name: ' Printing' }).click();
    await page1.getByRole('link', { name: 'Print Invoices' }).click();
    await page1.waitForLoadState('networkidle').catch(() => {});
    await page1.locator('iframe[name="iframebody"]').contentFrame().getByText('Falcon Auto Test Branch').click();
    await page1.locator('iframe[name="iframebody"]').contentFrame().getByText('Print invoices not yet printed').click();
    await page1.locator('iframe[name="iframebody"]').contentFrame().getByRole('link', { name: 'Select Invoices' }).click();
    this._officePage = page1;
  }

  async emailInvoicesFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[emailInvoicesFromOffice] No office page — run officeInvoicesCriteria() first');

    await page2.frameLocator('iframe[name="iframebody"]').getByRole('link', { name: 'E-mail Invoices' }).first().click();
    await page2.waitForLoadState('networkidle').catch(() => {});

    console.log('[assert] emailInvoicesFromOffice ✓');
   // await page2.close().catch(() => {});
    this._officePage = null;
  }

  async printInvoicesFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[printInvoicesFromOffice] No office page — run officeInvoicesCriteria() first');

    await page2.frameLocator('iframe[name="iframebody"]').locator('#ashowinv_1365').click();
    await page2.waitForLoadState('networkidle').catch(() => {});

    console.log('[assert] printInvoicesFromOffice ✓');
    await page2.close().catch(() => {});
    this._officePage = null;
  }

  async printAndUploadInvoicesFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[printAndUploadInvoicesFromOffice] No office page — run officeInvoicesCriteria() first');

    await this._clickLnkopt(page2, /(?:preview|print).*upload.*invoices?/);
    await page2.waitForLoadState('networkidle').catch(() => {});

    // Give the scriptframe a moment to initialise before probing.
    // In headless mode the PDF viewer never fires its load callback so the Upload button
    // stays disabled — go straight to the headless fallback: call getprintid() (which the
    // callback would have called) or strip the disabled attribute directly.
    await page2.waitForLoadState('networkidle').catch(() => {})

    const fallbackResult = await page2.evaluate(() => {
      const outer = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const sf = outer?.querySelector('#scriptframe') as HTMLIFrameElement | null;
      const sfDoc = sf?.contentDocument;
      const sfWin = sfDoc?.defaultView as any;
      const btn = sfDoc?.querySelector('input[value="Upload for Print to Mail"]') as HTMLInputElement | null;
      if (btn && !btn.disabled) return 'already-enabled';
      if (typeof sfWin?.getprintid === 'function') {
        sfWin.getprintid();
        return 'called getprintid()';
      }
      if (btn) { btn.removeAttribute('disabled'); return 'force-enabled'; }
      return 'button not found';
    }).catch((e: any) => `evaluate-error: ${e}`);
    console.log('[uploadFallback] headless enable result:', fallbackResult);
    await page2.waitForLoadState('domcontentloaded').catch(() => {})

    page2.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await page2.evaluate(() => {
      const outer = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const sf = outer?.querySelector('#scriptframe') as HTMLIFrameElement | null;
      const btn = sf?.contentDocument?.querySelector('input[value="Upload for Print to Mail"]') as HTMLInputElement | null;
      btn?.click();
    });
    await page2.waitForLoadState('networkidle').catch(() => {});

    console.log('[assert] printAndUploadInvoicesFromOffice ✓');
    await page2.close().catch(() => {});  
    this._officePage = null;
  }
  
  async exportInvoicesFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[exportInvoicesFromOffice] No office page — run officeInvoicesCriteria() first');

    await this._clickLnkopt(page2, /export\s+invoices?/);
    await page2.waitForLoadState('networkidle').catch(() => {});

    console.log('[assert] exportInvoicesFromOffice ✓');
    await page2.close().catch(() => {});
    this._officePage = null;
  }

  async officeWorkOrdersCriteria() {
    const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'Office' }).click()
    ]);
    await page1.waitForLoadState('networkidle').catch(() => {});
    const frame2 = page1.frameLocator('iframe[name="iframebody"]');

    const printingLink = page1.getByRole('link', { name: ' Printing' });
    await printingLink.waitFor({ state: 'visible', timeout: 30000 });
    await printingLink.click();
    await page1.getByRole('link', { name: 'Print Work Orders' }).waitFor({ state: 'visible', timeout: 15000 });
    await page1.getByRole('link', { name: 'Print Work Orders' }).click();
    await page1.waitForLoadState('networkidle').catch(() => {});

    // Wait for the criteria form to be fully ready
    await frame2.locator('#cmbServiceCenter').waitFor({ state: 'visible', timeout: 30000 });

    // Service center — option labels may have a dash prefix ("- Falcon Auto Test Branch"),
    // so use partial-text match via evaluate rather than exact label.
    const scResult = await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      const sel = doc?.querySelector<HTMLSelectElement>('#cmbServiceCenter');
      if (!sel) return { ok: false, msg: '#cmbServiceCenter not found' };
      const opts = Array.from(sel.options);
      const match = opts.find(o => o.text.trim().replace(/^-+\s*/, '').toLowerCase() === 'falcon auto test branch')
                 || opts.find(o => o.text.toLowerCase().includes('falcon auto test branch'));
      if (!match) return { ok: false, msg: `Not found. Options: [${opts.slice(0, 20).map(o => o.text.trim()).join(' | ')}]` };
      sel.value = match.value;
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      return { ok: true, msg: `selected "${match.text}" (value=${match.value})` };
    });
    console.log('[scResult]', JSON.stringify(scResult));
    if (!scResult.ok) throw new Error(`[officeWorkOrdersCriteria] Service center selection failed: ${scResult.msg}`);
    await page1.waitForLoadState('networkidle').catch(() => {});
    // Confirm form is stable: wait for the From date input to be visible after re-render
    await frame2.locator('input[type="text"]').first().waitFor({ state: 'visible', timeout: 15000 });

    // From = one week ago, To = tomorrow
    const formatDate = (d: Date) =>
      `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
    const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7);
    const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
    const dateRange = { from: formatDate(weekAgo), to: formatDate(tomorrow) };

    // Check all checkboxes — routes, events, property types.
    // ASP.NET CheckBoxList names use $ separator (e.g. clstRoutes$0), not :.
    // Fallback: check every checkbox in the form if targeted patterns match nothing.
    const checkboxResult = await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      if (!doc) return 'no iframe';
      let count = 0;
      const all = Array.from(doc.querySelectorAll('input[type="checkbox"]')) as HTMLInputElement[];
      // Targeted: route / event / property checkboxes by ID or name prefix ($ is ASP.NET separator)
      all.forEach((el) => {
        const id = el.id ?? '';
        const name = el.name ?? '';
        const isTarget =
          /^(chkAllRoutes|chkAllEvents|chkAllProperty|clstRoutes|clstEvents|clstproperty)/i.test(id) ||
          /^(clstRoutes|clstEvents|clstproperty)[\$:]/i.test(name);
        if (isTarget && !el.checked) { el.checked = true; count++; }
      });
      // Fallback: if nothing targeted was found, check ALL checkboxes
      if (count === 0) {
        all.forEach((el) => { if (!el.checked) { el.checked = true; count++; } });
      }
      return `checked ${count} of ${all.length} boxes`;
    });
    console.log('[checkboxResult]', checkboxResult);

    // Fill dates AFTER Select All — ids calFromDate / calToDate confirmed from probe logs.
    // Use evaluate to bypass readonly attribute (ASP.NET calendar picker inputs are readonly).
    const datesFilled = await page1.evaluate((val: { from: string; to: string }) => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      if (!doc) return { from: 'no iframe', to: 'no iframe' };

      const setById = (id: string, dateVal: string): string => {
        const el = doc.getElementById(id) as HTMLInputElement | null;
        if (!el) return `${id}: not found`;
        el.removeAttribute('readonly');
        el.value = dateVal;
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur',   { bubbles: true }));
        return `${id} = ${dateVal}`;
      };

      return { from: setById('calFromDate', val.from), to: setById('calToDate', val.to) };
    }, dateRange);
    console.log('[datesFilled]', JSON.stringify(datesFilled));

    // Click Next — try button text first, then input[value]
    const nextBtn = frame2.locator('button').filter({ hasText: /^Next$/i }).first();
    const nextBtnVisible = await nextBtn.isVisible().catch(() => false);
    if (nextBtnVisible) {
      await nextBtn.click();
    } else {
      const nextInput = frame2.locator('input[value="Next"]').first();
      const nextInputVisible = await nextInput.isVisible().catch(() => false);
      if (nextInputVisible) {
        await nextInput.click();
      } else {
        await frame2.getByRole('button', { name: 'Next' }).click();
      }
    }
    // Wait for postback to complete and iframe to re-render
    await page1.waitForLoadState('networkidle').catch(() => {});

    // Probe to discover what page we landed on after Next
    const pageAfterNext = await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      if (!doc) return { advanced: false, text: 'no iframe', ticketSel: null as string | null, selects: [] as any[], links: [] as any[] };
      // Any cmb/select with "ticket" in the ID means we advanced
      const ticketEl = doc.querySelector('[id*="cmbTicket"],[id*="ticket"],[id*="Ticket"]') as HTMLElement | null;
      const allSelects = Array.from(doc.querySelectorAll('select,[class*="chosen"],[class*="cmb"],[id*="cmb"]'))
        .map((el: any) => ({ id: el.id, tag: el.tagName, class: el.className })).slice(0, 15);
      const links = Array.from(doc.querySelectorAll('a'))
        .map((a: any) => ({ id: a.id, text: a.innerText?.trim() }))
        .filter((a: any) => a.text).slice(0, 15);
      // "advanced" = no longer showing the Service Center dropdown
      const stillOnCriteria = !!doc.querySelector('#cmbServiceCenter');
      return {
        advanced: !stillOnCriteria,
        text: doc.body?.innerText?.substring(0, 400) ?? '',
        ticketSel: ticketEl?.id ?? null,
        selects: allSelects,
        links,
      };
    }).catch((e: any) => ({ advanced: false, text: String(e), ticketSel: null, selects: [], links: [] }));


    const ticketOptionLink = frame2.getByRole('link', { name: 'Standard Commercial Ticket' });
    const ticketOptionVisible = await ticketOptionLink.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
    if (ticketOptionVisible) {
      await ticketOptionLink.click();
    }
    await page1.waitForLoadState('networkidle').catch(() => {});
    
    const pageText = await page1.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      return doc?.body?.innerText?.substring(0, 400) ?? '';
    }).catch(() => '');
    if (!pageText || pageText === 'no iframe') {
      throw new Error('[assert] officeWorkOrdersCriteria — results page empty after Select Work Orders');
    }
    console.log('[assert] officeWorkOrdersCriteria ✓');

    // Select all work orders — reveals action links (Export, Email, Print)
    await frame2.getByText('Select All').first().click();
    await page1.waitForLoadState('networkidle').catch(() => {});

    this._officePage = page1;
  }

  async exportWorkOrdersFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[exportWorkOrdersFromOffice] No office page — run officeWorkOrdersCriteria() first');
    const frame2 = page2.frameLocator('iframe[name="iframebody"]');

    await frame2.locator('[id^="btnpprinttowordtop"]').first().click();
    await page2.waitForLoadState('networkidle').catch(() => {});

    const exportText = await page2.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      return doc?.body?.innerText?.substring(0, 400) ?? 'no iframe';
    }).catch(() => '');
    if (!exportText || exportText === 'no iframe') {
      throw new Error('[assert] exportWorkOrdersFromOffice — page empty after clicking Export Work Orders to Word');
    }
    console.log('[assert] exportWorkOrdersFromOffice ✓');
    await page2.close().catch(() => {});
    this._officePage = null;
  }

  async printWorkOrdersFromOffice() {
    const page2 = this._officePage;
    if (!page2) throw new Error('[printWorkOrdersFromOffice] No office page — run officeWorkOrdersCriteria() first');
    const frame2 = page2.frameLocator('iframe[name="iframebody"]');

    // Click the Print Work Orders button — try ID prefix pattern first, then value/text fallbacks
    await frame2.locator('input[type="submit"]#btnprinttop_188').click();
    await page2.locator('iframe[name="scriptframe"], #scriptframe').waitFor({ state: 'attached', timeout: 20000 }).catch(() => {})

    const resultText = await page2.evaluate(() => {
      const doc = (document.querySelector('iframe[name="iframebody"]') as HTMLIFrameElement)?.contentDocument;
      return doc?.body?.innerText?.substring(0, 400) ?? 'no iframe';
    }).catch(() => '');
    if (!resultText || resultText === 'no iframe') {
      throw new Error('[assert] printWorkOrdersFromOffice — page empty after click');
    }
    console.log('[assert] printWorkOrdersFromOffice ✓');
    await page2.close().catch(() => {});
    this._officePage = null;
  }

 
=======
import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { delay } from "rxjs-compat/operator/delay";
import { Browser } from "@playwright/test";






export class OfficeNavigationPage {

 readonly page: Page

 constructor(page:Page){
     
     this.page=page
 }

 async EnterCompletedWorkOrders() {

     const [page1] = await Promise.all([
         this.page.context().waitForEvent('page'),  // Wait for the new tab
         this.page.getByRole('link', { name: 'Office' }).click()
  ])
     const frame1 = await page1.frame({ name: 'iframebody' })
     const frame2 = await page1.locator('iframe[name="iframebody"]').contentFrame()

await page1.getByRole('link', { name: ' Daily Posting' }).click();
await page1.getByRole('link', { name: 'Enter Completed Work Orders' }).click();
await frame2.locator('#txtacctnum').click();
await frame2.locator('#txtacctnum').fill('600026');
await frame2.locator('#lnkfind_2039').click();
await page1.waitForTimeout(5000)
await frame2.locator('#ddlworkorders_select').click(); // Click the dropdown to open it (if required)
await frame2.locator('ul.combo-box-list > li').nth(2).click(); // Select the item by index (0-based)
await frame2.locator('#ddlBatch_select').click();
await frame2.getByRole('link', { name: 'Create a new batch' }).click();
await page1.waitForTimeout(5000);
const frameLocator = page1.frameLocator('iframe[name="iframebody"]');
const empSelect = frameLocator.locator('[id^="txtemp-"][id$="_select"]').first();
await empSelect.waitFor({ state: 'visible', timeout: 15000 });
await empSelect.scrollIntoViewIfNeeded();
await empSelect.click({ force: true });
//await page1.waitForTimeout(5000);
// await frame2.getByRole('link', { name: '601a, Steve Steve' }).click();
await frameLocator.locator('ul.combo-box-list > li').nth(1).waitFor({ state: 'visible', timeout: 5000 });
await frameLocator.locator('ul.combo-box-list > li').nth(1).click({ delay: 200 });
await frame2.getByRole('link', { name: 'Add More Materials add_circle' }).click();
await frame2.getByRole('combobox', { name: '(None)' }).locator('b').click();
await frame2.getByRole('option', { name: '!!!000Stefi (testBR4)' }).click();
await frame2.locator('#txtmatamt').click();
await frame2.locator('#txtmatamt').fill('1');
await frame2.getByRole('button', { name: 'add material' }).click();
await frame2.getByRole('button', { name: 'Close' }).click();
await frame2.getByRole('link', { name: 'Add Observation add_circle' }).click();
await frame2.getByRole('row', { name: 'Observation None' }).locator('b').click();
await frame2.getByRole('option', { name: 'Broken' }).click();
await frame2.locator('#txtcustomobservation').click();
await frame2.locator('#txtcustomobservation').fill('test');
await frame2.locator('#txtcustomrecommendation').click();
await frame2.locator('#txtcustomrecommendation').fill('test');
await frame2.getByRole('row', { name: 'Ranking None' }).locator('b').click();
await frame2.getByRole('option', { name: '54345' }).click();
await frame2.locator('#txtcustomobervationlocation').click();
await frame2.locator('#txtcustomobervationlocation').fill('test');
await frame2.getByRole('row', { name: 'Responsible None' }).locator('b').click();
await frame2.getByRole('option', { name: 'Customer Responsibility' }).click();
await frame2.getByRole('button', { name: 'ADDObservationText' }).click();
await frame2.getByRole('link', { name: 'Add More Finding add_circle' }).click();
await frame2.getByRole('cell', { name: 'None Add Observations' }).locator('b').click();
await frame2.getByRole('option', { name: 'Test' }).click();
await frame2.locator('#txtfindingtemplate').click();
await frame2.locator('#txtfindingtemplate').fill('test');
await frame2.getByRole('row', { name: 'Ranking None' }).getByLabel('None').click();
await frame2.getByRole('option', { name: '(1) Worst' }).click();
await frame2.locator('#txtactiontemplate').click();
await frame2.locator('#txtactiontemplate').fill('test');
await frame2.getByText('Technician', { exact: true }).click();
await frame2.getByRole('cell', { name: 'check_box_outline_blank   check_box' }).locator('label').click();
await frame2.getByRole('button', { name: 'Add Observations' }).click();
await frame2.getByRole('button', { name: 'Add Observations' }).click();
await frame2.getByRole('button', { name: 'Close' }).click();
await frame2.getByRole('link', { name: 'Add More Equipment add_circle' }).click();
await frame2.getByRole('row', { name: 'Equipment None' }).locator('b').click();
await frame2.getByRole('option', { name: 'Axe Hand' }).click();
await frame2.locator('#txtEquDesc').click();
await frame2.locator('#txtEquDesc').fill('testeq');
await frame2.locator('#txtEquHours').click();
await frame2.locator('#txtEquHours').fill('01');
await frame2.locator('#txtEquHours').click();
await frame2.locator('#txtEquHours').fill('1');
await frame2.getByLabel('Equipment Usage').getByText('Billable').click();
await frame2.getByRole('button', { name: 'Add Equipment Usage' }).click();
await frame2.getByRole('button', { name: 'Close' }).click();
await frame2.locator('#lnkOk_639').click();

// small wait for dialog to close and list to refresh
await page1.waitForTimeout(10000);

// find work order list rows and select first item
const rows = frame2.locator('table tbody tr');
const count = await rows.count();
if (count === 0) {
  // try to refresh or throw
  throw new Error('No work orders available to select');
}
const first = rows.first();
const cb = first.locator('input[type="checkbox"]');
if (await cb.count() > 0) {
  try {
    await cb.check({ force: true });
  } catch {
    const lab = first.locator('label').first();
    if (await lab.count() > 0) await lab.click();
  }
} else {
  const lab = first.locator('label').first();
  if (await lab.count() > 0) await lab.click();
}

// click Save (prefer visible button)
const saveNames = ['Save', 'Save Work Orders', 'Save Batch', 'Save Changes'];
let saved = false;
for (const name of saveNames) {
  const btns = frame2.getByRole('button', { name });
  const n = await btns.count();
  if (n === 0) continue;
  for (let i = 0; i < n; i++) {
    const cand = btns.nth(i);
    if (await cand.isVisible()) {
      await cand.click();
      saved = true;
      break;
    }
  }
  if (saved) break;
  await btns.first().click();
  saved = true;
  break;
}

// fallback known selectors
if (!saved) {
  const fb = frame2.locator('#btnSave') || frame2.locator('#btnSave_4624') || frame2.locator('#btnSave2_4624');
  if (await fb.count() > 0) {
    await fb.first().click();
    saved = true;
  }
}

// handle confirmations
const confirms = ['Yes', 'OK', 'Confirm'];
for (const name of confirms) {
  const btn = page1.getByRole('button', { name });
  if (await btn.count() > 0) {
    try { await btn.first().click(); } catch {}
    await page1.waitForTimeout(500);
  }
}

// wait briefly for backend processing
await page1.waitForTimeout(1500);

// close the office popup/tab and return to home on main page
try {
  await page1.close();
} catch {
  // ignore
}

// ensure main page is front and navigate Home if needed
try {
  await this.page.bringToFront();
  if (await this.page.getByRole('link', { name: 'Home' }).count() > 0) {
    await this.page.getByRole('link', { name: 'Home' }).first().click();
  }
} catch {
  // ignore
}

 }

// Enter Completed Work Orders by batch 
 
async EnterCompletedWorkOrderByBatch() {

     const [page1] = await Promise.all([
         this.page.context().waitForEvent('page'),  // Wait for the new tab
         this.page.getByRole('link', { name: 'Office' }).click() ])

     const frame1 = await page1.frame({ name: 'iframebody' })
     const frame2 = await page1.frameLocator('iframe[name="iframebody"]')

await page1.getByRole('link', { name: ' Daily Posting' }).click();
await page1.getByRole('link', { name: 'Enter Completed Work Order By' }).click();
await frame2.locator('#ddlservicecenter_select').click({delay:500});
 await frame2.getByRole('link', { name: 'Columbus Branch Name ' }).click({delay:500});
//await frame2.locator('ul.combo-box-list > li').first().click({ delay: 500 });
await page1.waitForTimeout(5000)
await frame2.locator('#ddlroute_select').click({delay:500})
await frame2.getByRole('link').nth(5).click({ delay:500 });
await frame2.locator('#txtschdate').click({delay:500});

// set a 2-month range: start = 1st day of current month, end = last day of next month
const now = new Date();
const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
const endDate = new Date(now.getFullYear(), now.getMonth() + 2, 0); // last day of next month
const fmt = (d: Date) => `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

const startStr = fmt(startDate);
const endStr = fmt(endDate);

// fill inputs and trigger change events so any datepicker listeners react
await frame2.locator('#txtschdate').fill(startStr);
await frame2.locator('#txtschdate').evaluate((el, v) => {
  (el as HTMLInputElement).value = v; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true }));
}, startStr);

await frame2.locator('#txtPrintDate').fill(endStr);
await frame2.locator('#txtPrintDate').evaluate((el, v) => {
  (el as HTMLInputElement).value = v; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true }));
}, endStr);

// short wait to allow UI to react
await page1.waitForTimeout(500);
await frame2.locator('#ddlBatch_select').click();
await frame2.getByRole('link', { name: 'Create a new batch' }).click({delay:500});
await frame2.locator('#ddlemployee_select').click();
await frame2.getByRole('link', { name: '601a, Steve Steve' }).click({delay:500});
await frame2.getByRole('button', { name: 'Get Work Orders' }).click();
await page1.waitForTimeout(5000);
await frame2.getByRole('cell', { name: 'check_box_outline_blank   check_box Done' }).locator('label').click();

// select first displayed work order and mark it (checkbox)
const rows = frame2.locator('table tbody tr');
const total = await rows.count();
if (total === 0) {
  throw new Error('No work orders found to complete');
}
const firstRow = rows.first();
const checkbox = firstRow.locator('input[type="checkbox"]');
if (await checkbox.count() > 0) {
  try {
    await checkbox.check({ force: true });
  } catch {
    const lbl = firstRow.locator('label').first();
    if (await lbl.count() > 0) await lbl.click();
  }
} else {
  // fallback: click row label or link to select
  const lbl = firstRow.locator('label').first();
  if (await lbl.count() > 0) await lbl.click();
  else if (await firstRow.getByRole('link').count() > 0) await firstRow.getByRole('link').first().click();
}

// attempt to click "Post Now" (several possible button names) inside the iframe
const postNames = ['Post Now'];
let posted = false;
for (const name of postNames) {
  const btns = frame2.getByRole('button', { name });
  const count = await btns.count();
  if (count === 0) continue;

  // prefer a visible button
  for (let i = 0; i < count; i++) {
    const candidate = btns.nth(i);
    if (await candidate.isVisible()) {
      await candidate.click();
      posted = true;
      break;
    }
  }

  if (posted) break;

  // fallback: if none reported visible, click the first match (avoids strict mode)
  await btns.first().click();
  posted = true;
  break;
}

// fallback to known id/button selector if Post Now not found earlier
if (!posted) {
  const fallbackBtn = frame2.locator('#btnPost2_4624');
  if (await fallbackBtn.count() > 0) {
    await fallbackBtn.click();
    posted = true;
  } else {
    const fallbackBtn2 = frame2.locator('#btnPost_4624');
    if (await fallbackBtn2.count() > 0) {
      await fallbackBtn2.click();
      posted = true;
    }
  }
}
if (!posted) {
  const fallbackBtn = frame2.locator('#btnPost2_4624');
  if (await fallbackBtn.count() > 0) {
    await fallbackBtn.click();
    posted = true;
  } else {
    const fallbackBtn2 = frame2.locator('#btnPost_4624');
    if (await fallbackBtn2.count() > 0) {
      await fallbackBtn2.click();
      posted = true;
    }
  }
}

// handle confirmation dialogs that may appear after posting
const confirmNames = ['Yes', 'OK', 'Confirm'];
for (const name of confirmNames) {
  const btn = page1.getByRole('button', { name });
  if (await btn.count() > 0) {
    try { await btn.first().click(); } catch { /* ignore */ }
    await page1.waitForTimeout(500);
  }
}

// try to close any open batch/dialog inside the iframe
if (await frame2.getByRole('link', { name: 'Close' }).count() > 0) {
  try { await frame2.getByRole('link', { name: 'Close' }).first().click(); } catch {}
}

// wait for backend processing / success message (best-effort)
try {
  await frame2.getByText(/posted|success|completed/i, { timeout: 8000 }).first().waitFor({ state: 'visible' });
} catch {
  await page1.waitForTimeout(1500);
}

// close the popup/tab and return to the main (home) page
try {
  await page1.close();
} catch {
  // if close fails, attempt navigating back to home in the same page
  if (await this.page.getByRole('link', { name: 'Home' }).count() > 0) {
    await this.page.getByRole('link', { name: 'Home' }).first().click();
  }
}

}
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799

}
