import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { delay } from "rxjs-compat/operator/delay";
import { Browser } from "@playwright/test";
import { timeout } from "rxjs/operators";



export class AccountNavigationPage {

 readonly page: Page

 constructor(page:Page){
     
     this.page=page
 }
    //Add New Account New - Account Only

async AddNewAccountNewAccountOnly() {

  const [page2] = await Promise.all([
         this.page.context().waitForEvent('page'),  // Wait for the new tab
         this.page.click('#_ctl0_mainmenu_lnkAddAccount_18013')
  ])
  
  
  await page2.getByRole('textbox', { name: 'Enter Location' }).click();
  await page2.getByRole('textbox', { name: 'Enter Location' }).fill('Washington Monument, Washington, DC 20024, United States');
  await page2.getByText('Billing Address Enter').click();
  await page2.locator('#txtStreetName').click();
  await page2.locator('#txtStreetName').fill('Washington Monument');
  await page2.locator('#txtState').selectOption({ index: 1 });
  await page2.locator('#txtCity').click();
  await page2.locator('#txtCity').fill('Washington');
  await page2.locator('#txtPostalCode').click();
  await page2.locator('#txtPostalCode').fill('20024');
  await page2.locator('#next').click();
  await page2.locator('#txtfirst').click();
  await page2.locator('#txtfirst').fill('FAlcon');
  await page2.locator('#txtfirst').fill('Falcon AddNewAccountNew ');
  await page2.locator('#txtlast').fill('Auto');
  await page2.locator('#txtbusname').click();
  await page2.locator('#txtbusname').fill('Falcon');
  await page2.locator('#txtphone').click();
  await page2.locator('#txtphone').fill('(520) 385-6420');
  await page2.locator('#txtemail').click();
  await page2.locator('#txtemail').fill('dbojkovski@fieldroutes.com');
  await page2.locator('#txtmysearch').click();
  await page2.locator('#txtmysearch').fill('123123');
  await page2.locator('#txtudfcomp5').click();
  await page2.locator('#txtudfcomp5').fill('321321');
  await page2.locator('#txtudfcomp6').click();
  await page2.locator('#txtudfcomp6').fill('345345');
  await page2.locator('#txtudfcomp7').click();
  await page2.locator('#txtudfcomp7').fill('345');
  await page2.locator('#next').click();
  await page2.getByRole('checkbox', { name: 'Same as Account' }).check();
  await page2.locator('#ddlproptype').selectOption({ index: 1 });
  await page2.locator('#ddlbuilder').selectOption({ index: 1 });
  await page2.locator('#ddlsic').selectOption({ index: 1 });
  await page2.locator('#ddlFacility').selectOption({ index: 1 });
  await page2.locator('#ddlpropdescription').selectOption({ index: 1 });
  await page2.locator('#primarysourceDDL').selectOption({ index: 1 });
  await page2.locator('#ddlpropertymanagementcompany').selectOption({ index: 1 });
  await page2.locator('#txtsiteNote').click();
  await page2.locator('#txtsiteNote').fill('Test Auto');
  await page2.getByRole('button', { name: 'Add Account Only' }).click();
  await page2.getByRole('button', { name: 'Add Duplicate (Proceed)' }).click();

}
 //Add New Account New - Account and Program added


async AddNewAccountNewAccountAndProgram() {

  const [page2] = await Promise.all([
         this.page.context().waitForEvent('page'),  // Wait for the new tab
         this.page.click('#_ctl0_mainmenu_lnkAddAccount_18013')
  ])  
  
  await page2.getByRole('textbox', { name: 'Enter Location' }).click();
  await page2.getByRole('textbox', { name: 'Enter Location' }).fill('Washington Monument, Washington, DC 20024, United States');
  await page2.getByText('Billing Address Enter').click();
  await page2.locator('#txtStreetName').click();
  await page2.locator('#txtStreetName').fill('Washington Monument');
  await page2.locator('#txtState').selectOption('DC');
  await page2.locator('#txtCity').click();
  await page2.locator('#txtCity').fill('Washington');
  await page2.locator('#txtPostalCode').click();
  await page2.locator('#txtPostalCode').fill('20024');
  await page2.locator('#next').click();
  await page2.locator('#txtfirst').click();
  await page2.locator('#txtfirst').fill('Falcon');
  await page2.locator('#txtfirst').fill('Falcon AddNewAccountNew ');
  await page2.locator('#txtlast').fill('Auto');
  await page2.locator('#txtbusname').click();
  await page2.locator('#txtbusname').fill('Falcon');
  await page2.locator('#txtphone').click();
  await page2.locator('#txtphone').fill('(520) 385-6420');
  await page2.locator('#txtemail').click();
  await page2.locator('#txtemail').fill('dbojkovski@fieldroutes.com');
  await page2.locator('#txtmysearch').click();
  await page2.locator('#txtmysearch').fill('123123');
  await page2.locator('#txtudfcomp5').click();
  await page2.locator('#txtudfcomp5').fill('321321');
  await page2.locator('#txtudfcomp6').click();
  await page2.locator('#txtudfcomp6').fill('345345');
  await page2.locator('#txtudfcomp7').click();
  await page2.locator('#txtudfcomp7').fill('345');
  await page2.locator('#next').click();
  await page2.getByRole('checkbox', { name: 'Same as Account' }).check();
  await page2.locator('#ddlproptype').selectOption({ index: 1 });
  await page2.locator('#ddlbuilder').selectOption({ index: 1 });
  await page2.locator('#ddlsic').selectOption({ index: 1 });
  await page2.locator('#ddlFacility').selectOption({ index: 1 });
  await page2.locator('#ddlpropdescription').selectOption({ index: 1 });
  await page2.locator('#primarysourceDDL').selectOption({ index: 1 });
  await page2.locator('#ddlpropertymanagementcompany').selectOption({ index: 1 });
  await page2.locator('#txtsiteNote').click();
  await page2.locator('#txtsiteNote').fill('Test Auto');
  await page2.getByRole('button', { name: 'Add Program' }).click();
  await page2.getByRole('button', { name: 'Add Duplicate (Proceed)' }).click();
  await page2.getByRole('textbox', { name: '!MARINA' }).click();
  await page2.getByRole('option', { name: '[None Renewal]' }).click();
  //await page2.getByRole('combobox', { name: '!MARINA' }).locator('b').click();
  await page2.getByLabel('Add Program').getByRole('button', { name: 'Add Program' }).click();

  // use a FrameLocator for the inner main frame for reliable interactions
  const inner = page2.frameLocator('#MainFrameBodyFrame');

  // select salesperson: open dropdown and click first item
  const salesSel = inner.locator('#ddlsalesperson2_select');
  await salesSel.waitFor({ state: 'visible', timeout: 10000 });
  await salesSel.click();
  const salesList = inner.locator('ul.combo-box-list > li');
  if (await salesList.count() > 0) {
    await salesList.nth(0).waitFor({ state: 'visible', timeout: 5000 });
    await salesList.nth(0).click();
  } else {
    // fallback: click first link in frame
    const firstLink = inner.getByRole('link').first();
    if (await firstLink.count() > 0) await firstLink.click();
  }

  // select primary target: open and choose first option
  const targetSel = inner.locator('#ddlPrimaryTarget_select');
  await targetSel.waitFor({ state: 'visible', timeout: 10000 });
  await targetSel.click();
  const targetList = inner.locator('ul.combo-box-list > li');
  if (await targetList.count() > 0) {
    await targetList.nth(0).click();
  } else {
    // try to click any visible role link
    const anyTarget = inner.getByRole('link').first();
    if (await anyTarget.count() > 0) await anyTarget.click();
  }

  // open service row and choose first service/day
  const serviceBtn = inner.locator('#firstservicerow i');
  if (await serviceBtn.count() > 0) {
    await serviceBtn.click();
    const dayLink = inner.getByRole('link', { name: '14' }).first();
    if (await dayLink.count() > 0) {
      await dayLink.click();
    } else {
      // pick first numeric link as fallback
      const anyDay = inner.getByRole('link').filter({ hasText: /\d+/ }).first();
      if (await anyDay.count() > 0) await anyDay.click();
    }
  }

  // Auto-fill dates and finish
  const autoFill = inner.getByRole('button', { name: 'Auto-fill dates' }).first();
  if (await autoFill.count() > 0) await autoFill.click();
  const finishBtn = inner.getByRole('button', { name: 'Finish' }).first();
  if (await finishBtn.count() > 0) await finishBtn.click();

  // handle potential confirmation dialog
  try {
    page2.once('dialog', dialog => {
      try { dialog.accept(); } catch { dialog.dismiss().catch(() => {}); }
    });
  } catch {}

  // wait for save/processing then close the popup
  await page2.waitForTimeout(2000);
  try { await page2.close(); } catch {}
}

 //Add New Account OldUI - Account Only

async AddNewAccountOldAccountOnly() {

  const [page1] = await Promise.all([
         this.page.context().waitForEvent('page'),  // Wait for the new tab
         this.page.getByRole('link', { name: 'Add New Account', exact: true }).click()
  
  ])
  await page1.locator('#txtfirst').click();
  await page1.locator('#txtfirst').fill('Falcon');
  await page1.locator('#txtlast').click();
  await page1.locator('#txtlast').fill('TestAuto');
  await page1.locator('#txtbusname').click();
  await page1.locator('#txtbusname').fill('Falcon');
  await page1.locator('#txtphone').click();
  await page1.locator('#txtphone').fill('(520) 385-6420');
  await page1.locator('#txtemail').click();
  await page1.locator('#txtemail').fill('dbojkovski@fieldroutes.com');
  await page1.locator('#criteriaaddcontrol_txtStreetNumber').click();
  await page1.locator('#criteriaaddcontrol_txtStreetNumber').fill('14');
  await page1.locator('#criteriaaddcontrol_txtStreetName').click();
  await page1.locator('#criteriaaddcontrol_txtStreetName').fill('asdasd');
  await page1.locator('#criteriaaddcontrol_txtPostalCode').click();
  await page1.locator('#criteriaaddcontrol_txtPostalCode').fill('94005');
  await page1.locator('html').click();
  await page1.waitForTimeout(5000);
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(5000);
  await page1.locator('#hlAddDupe_1066').click();
  await page1.getByRole('checkbox', { name: 'Same as Account' }).check();
  
  await page1.locator('#ddlproptype').selectOption('1');
  await page1.locator('#ddlproptype').click();

  await page1.locator('#txtmapcode').click();
  await page1.locator('#txtmapcode').fill('123123');
  
 await page1.locator('#Table2').click();
 await page1.locator('#btnfinish2_125').click();
 await page1.waitForTimeout(5000);

};


 //Add New Account OldUI - Account and Program Added

async AddNewAccountOldUIAccountAndProgram() {

  const [page1] = await Promise.all([
         this.page.context().waitForEvent('page'),  // Wait for the new tab
         this.page.getByRole('link', { name: 'Add New Account', exact: true }).click()
  ])

  await page1.locator('#txtfirst').click();
  await page1.locator('#txtfirst').fill('Falcon');
  await page1.locator('#txtlast').click();
  await page1.locator('#txtlast').fill('TestAuto');
  await page1.locator('#txtbusname').click();
  await page1.locator('#txtbusname').fill('Falcon');
  await page1.locator('#txtphone').click();
  await page1.locator('#txtphone').fill('(520) 385-6420');
  await page1.locator('#txtemail').click();
  await page1.locator('#txtemail').fill('dbojkovski@fieldroutes.com');
  await page1.locator('#criteriaaddcontrol_txtStreetNumber').click();
  await page1.locator('#criteriaaddcontrol_txtStreetNumber').fill('14');
  await page1.locator('#criteriaaddcontrol_txtStreetName').click();
  await page1.locator('#criteriaaddcontrol_txtStreetName').fill('asdasd');
  await page1.locator('#criteriaaddcontrol_txtPostalCode').click();
  await page1.locator('#criteriaaddcontrol_txtPostalCode').fill('94005');
  await page1.locator('html').click();
  await page1.waitForTimeout(5000);
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(5000);
  await page1.locator('#hlAddDupe_1066').click();
  await page1.getByRole('checkbox', { name: 'Same as Account' }).check();
  
  await page1.locator('#ddlproptype').selectOption('1');
  await page1.locator('#ddlproptype').click();

  await page1.locator('#txtmapcode').click();
  await page1.locator('#txtmapcode').fill('123123');
  await page1.locator('#btnsellpgm2_306').click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await page1.locator('#ddlprogram_textFilter').click();
  await page1.locator('#ddlprogram_select').click();
  await page1.getByRole('link', { name: '[None Renewal]' }).click();
  await page1.locator('#ddlsource_select').click();
  await page1.getByRole('link', { name: 'Referral Email' }).click();
  await page1.locator('#ddlsalesperson2_select').click();
  await page1.getByRole('link', { name: '96b, Steve' }).click();
  await page1.locator('#ddlPrimaryTarget_select').click();
  await page1.getByRole('link', { name: 'abcde' }).click();
  await page1.locator('#ddlroute_select').click();
  await page1.getByRole('link', { name: '1003' }).click();
  await page1.getByRole('row', { name: 'Time Range 5:00AM - 11:00PM Call Ahead Auto-fill dates', exact: true }).getByRole('link').click();
  await page1.getByRole('link', { name: '13' }).click();
  await page1.getByRole('button', { name: 'Auto-fill dates' }).click();
  await page1.locator('#btnfinish_295').click();
  await page1.waitForTimeout(5000);
}


async OpenAccount() {

  // search from main page and open result popup
  // use this.page (class instance) instead of a bare 'page'
  await this.page.getByRole('textbox', { name: 'Enter Criteria' }).click();
  await this.page.getByRole('textbox', { name: 'Enter Criteria' }).fill('600063');

  // start waiting for popup then trigger search
  const popupPromise = this.page.waitForEvent('popup');
  await this.page.locator('#search_button').click();
  const page2 = await popupPromise;

  // wait for popup to be ready (allow domcontent + network activity to settle)
  await page2.waitForLoadState('domcontentloaded');
  await page2.waitForLoadState('networkidle', { timeout: 12000 }).catch(() => {}); // may be optional but helps stability

  // if results show in popup as a table or links, click first result or open details
  // Try common selectors: first link in popup or first row double click
  try {
    // prefer a link with account number or first row
    const firstLink = page2.locator('table tbody tr td a').first();
    if (await firstLink.count() > 0) {
      await firstLink.waitFor({ state: 'visible', timeout: 5000 });
      await firstLink.click();
      // wait for account details to load
      await page2.waitForLoadState('networkidle');
      // continue — we'll detect where the details loaded below and proceed
    }

    // fallback: click any visible link in the popup
    const anyLink = page2.getByRole('link').first();
    if (await anyLink.count() > 0) {
      await anyLink.click();
      await page2.waitForLoadState('networkidle');
      // continue — next section will determine which page contains the account details
    }

    // if there are rows but no anchor, click the first row
    const firstRow = page2.locator('table tbody tr').first();
    if (await firstRow.count() > 0) {
      await firstRow.click();
      await page2.waitForLoadState('networkidle');
      // continue so we can detect where details loaded and add a program
    }
  } catch (err) {
    // ignore failures and leave popup open for manual inspection
    // rethrow only for debugging if necessary
    console.warn('OpenAccount: popup interaction failed', err);
  }

  // if no action possible, keep popup open and return it to the caller
  return page2;
 
};


async OpenAccountAddProgram() {
  
  // search from main page and open result popup
  // use this.page (class instance) instead of a bare 'page'
  await this.page.getByRole('textbox', { name: 'Enter Criteria' }).click();
  await this.page.getByRole('textbox', { name: 'Enter Criteria' }).fill('600063');

  // start waiting for popup then trigger search
  const popupPromise = this.page.waitForEvent('popup');
  await this.page.locator('#search_button').click();
  const page2 = await popupPromise;

  // wait for popup to be ready (main frame inside popup)
  await page2.waitForLoadState('domcontentloaded');

  // Try to click the first search result in the popup (table link, role link, or row)
  try {
    const firstLink = page2.locator('table tbody tr td a').first();
    if (await firstLink.count() > 0) {
      await firstLink.waitFor({ state: 'visible', timeout: 15000 });
      await firstLink.click();
      await page2.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    } else {
      const anyLink = page2.getByRole('link').first();
      if (await anyLink.count() > 0) {
      await anyLink.waitFor({ state: 'visible', timeout: 12000 }).catch(() => {});
      await anyLink.click();
      await page2.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      } else {
        const firstRow = page2.locator('table tbody tr').first();
        if (await firstRow.count() > 0) {
          await firstRow.waitFor({ state: 'visible', timeout: 12000 }).catch(() => {});
          await firstRow.click();
          await page2.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
        }
      }
    }
  } catch (err) {
    console.warn('OpenAccountAddProgram: clicking search result failed', err);
  }

  // decide which page contains the account and frames: popup (page2) or main (this.page)
  let accountPage = page2;
  try {
    const mainHasWizard = await this.page.locator('iframe[name="ifrmWizard"]').count();
    const mainHasMainFrame = await this.page.locator('#MainFrameBodyFrame').count();
    if (mainHasWizard || mainHasMainFrame) accountPage = this.page;
  } catch (e) {
    // ignore
  }

  // now try to open Add Program and interact with the inner frame
  // prefer working inside the wizard frame when present
  // allow the page/frame to appear — give some time for frames to be attached
  await accountPage.waitForTimeout(400);
  const hasWizardFrame = (await accountPage.locator('iframe[name="ifrmWizard"]').count()) > 0;
  const wizard = accountPage.frameLocator('iframe[name="ifrmWizard"]');

  try {
    if (hasWizardFrame) {
      const siteMenu = wizard.getByRole('button', { name: 'Site Menu' }).first();
      if (await siteMenu.count() > 0) {
        await siteMenu.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await siteMenu.click();
        const addProg = wizard.getByRole('link', { name: 'Add Program' }).first();
        if (await addProg.count() > 0) {
          await addProg.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
          await addProg.click();
        }
      }
    }

    // fallback to clicking any 'Add Program' button or link on the page
    const addProgAny = accountPage.getByRole('button', { name: 'Add Program' }).first();
    if (await addProgAny.count() > 0) await addProgAny.click();
  } catch (e) {
    console.warn('OpenAccountAddProgram: error opening Add Program', e);
  }

  // inner frame for program details (declare early so combobox selection can use it)
  const inner = accountPage.frameLocator('#MainFrameBodyFrame');


  // prefer Add Program button on the account page
  const addProgramBtn = accountPage.getByRole('button', { name: 'Add Program' }).first();
  if (await addProgramBtn.count() > 0) await addProgramBtn.click();
  timeout(5000)
  // select first salesperson option
  const salesSel = inner.locator('#ddlsalesperson2_select');
  if (await salesSel.count() > 0) {
    await salesSel.click();
    const salesOption = inner.getByRole('link').first();
    if (await salesOption.count() > 0) await salesOption.click();
  }

  // select first primary target
  const targetSel = inner.locator('#ddlPrimaryTarget_select');
  if (await targetSel.count() > 0) {
    await targetSel.click();
    const targetOption = inner.getByRole('link').first();
    if (await targetOption.count() > 0) await targetOption.click();
  }

  // select first source
  const sourceSel = inner.locator('#ddlsource_select');
  if (await sourceSel.count() > 0) {
    await sourceSel.click();
    const sourceOption = inner.getByRole('link').first();
    if (await sourceOption.count() > 0) await sourceOption.click();
  }

  // interact with the first service row: open, pick a day
  const firstServiceRow = inner.locator('table tbody tr').first();
  if (await firstServiceRow.count() > 0) {
    const rowLabel = firstServiceRow.locator('label').first();
    if (await rowLabel.count() > 0) await rowLabel.click();
    const rowIcon = firstServiceRow.locator('div i').first();
    if (await rowIcon.count() > 0) await rowIcon.click();
    const anyDay = inner.getByRole('link').filter({ hasText: /\d+/ }).first();
    if (await anyDay.count() > 0) await anyDay.click();
  }

  // click Finish if present
  const finishBtn = inner.getByRole('button', { name: 'Finish' }).first();
  if (await finishBtn.count() > 0) await finishBtn.click();
}

// Open Account > Click Site Menu > Add Program > Select Branch > Next > Select Program > Populate Fields > Finish
async OpenAccountClickSiteMenuAddProgram() {
  // Step 1: Search for and open any account
  await this.page.getByRole('textbox', { name: 'Enter Criteria' }).click();
  await this.page.getByRole('textbox', { name: 'Enter Criteria' }).fill('600063');

  // Wait for search results popup
  const popupPromise = this.page.waitForEvent('popup');
  await this.page.locator('#search_button').click();
  const accountPopup = await popupPromise;

  // Wait for popup to load
  await accountPopup.waitForLoadState('domcontentloaded');
  await accountPopup.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

  // Step 2: Click first search result to open account
  try {
    const firstLink = accountPopup.locator('table tbody tr td a').first();
    if (await firstLink.count() > 0) {
      await firstLink.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
      await firstLink.click();
      await accountPopup.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    } else {
      const anyLink = accountPopup.getByRole('link').first();
      if (await anyLink.count() > 0) {
        await anyLink.click();
        await accountPopup.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
      }
    }
  } catch (err) {
    console.warn('Failed to click search result:', err);
  }

  // Step 3: Click Site Menu button
  accountPopup.locator('#siteMenuBtn').click
  
  // Try to find Site Menu button - could be in wizard frame or main frame
  let siteMenuClicked = false;
  try {
    // First try in wizard frame if it exists
    const wizardFrame = accountPopup.frameLocator('iframe[name="ifrmWizard"]');
    const siteMenuBtn = wizardFrame.getByRole('button', { name: 'Site Menu' }).first();
    if (await siteMenuBtn.count() > 0) {
      await siteMenuBtn.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
      await siteMenuBtn.click();
      siteMenuClicked = true;
      console.log('Site Menu clicked from wizard frame');
    }
  } catch (e) {
    console.warn('Site Menu not found in wizard frame');
  }

  // Fallback: try main page
  if (!siteMenuClicked) {
    try {
      const siteMenuBtn = accountPopup.getByRole('button', { name: 'Site Menu' }).first();
      if (await siteMenuBtn.count() > 0) {
        await siteMenuBtn.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await siteMenuBtn.click();
        siteMenuClicked = true;
        console.log('Site Menu clicked from main page');
      }
    } catch (e) {
      console.warn('Site Menu button not found');
    }
  }

  // Step 4: Click "Add Program" from Site Menu
  await accountPopup.waitForTimeout(500);
  try {
    const addProgLink = accountPopup.getByRole('link', { name: 'Add Program' }).first();
    if (await addProgLink.count() > 0) {
      await addProgLink.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
      await addProgLink.click();
      console.log('Add Program link clicked');
      await accountPopup.waitForTimeout(1000);
    }
  } catch (e) {
    console.warn('Add Program link not found:', e);
  }

  // Step 5: Select Branch (using first available branch in dropdown)
  await accountPopup.waitForTimeout(500);
  try {
    const branchDropdown = accountPopup.locator('#ddlBranch, [id*="branch"], select[name*="branch"]').first();
    if (await branchDropdown.count() > 0) {
      await branchDropdown.click();
      await accountPopup.waitForTimeout(300);
      
      // Select first branch option
      const branchOptions = accountPopup.locator('ul.combo-box-list > li, option').first();
      if (await branchOptions.count() > 0) {
        await branchOptions.click();
        console.log('Branch selected');
      }
    }
  } catch (e) {
    console.warn('Branch selection failed:', e);
  }

  // Step 6: Click Next button
  await accountPopup.waitForTimeout(500);
  try {
    const nextBtn = accountPopup.getByRole('button', { name: 'Next' }).first();
    if (await nextBtn.count() > 0) {
      await nextBtn.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
      await nextBtn.click();
      console.log('Next button clicked');
      await accountPopup.waitForTimeout(1500);
    }
  } catch (e) {
    console.warn('Next button not found:', e);
  }

  // Step 7: Select Program (from dropdown)
  try {
    const programDropdown = accountPopup.locator('#ddlprogram_select, #ddlprogram, [id*="program"]').first();
    if (await programDropdown.count() > 0) {
      await programDropdown.click();
      await accountPopup.waitForTimeout(300);
      
      // Select first program option
      const programOptions = accountPopup.locator('ul.combo-box-list > li, option').first();
      if (await programOptions.count() > 0) {
        await programOptions.click();
        console.log('Program selected');
      }
    }
  } catch (e) {
    console.warn('Program selection failed:', e);
  }

  // Step 8: Populate all necessary fields
  await accountPopup.waitForTimeout(500);

  // Get the inner frame for program details
  const innerFrame = accountPopup.frameLocator('#MainFrameBodyFrame');

  // 8a: Select Salesperson
  try {
    const salesPersonDropdown = innerFrame.locator('#ddlsalesperson2_select');
    if (await salesPersonDropdown.count() > 0) {
      await salesPersonDropdown.click();
      await accountPopup.waitForTimeout(300);
      const salesPersonOption = innerFrame.locator('ul.combo-box-list > li').first();
      if (await salesPersonOption.count() > 0) {
        await salesPersonOption.click();
        console.log('Salesperson selected');
      }
    }
  } catch (e) {
    console.warn('Salesperson selection failed:', e);
  }

  // 8b: Select Primary Target
  try {
    const primaryTargetDropdown = innerFrame.locator('#ddlPrimaryTarget_select');
    if (await primaryTargetDropdown.count() > 0) {
      await primaryTargetDropdown.click();
      await accountPopup.waitForTimeout(300);
      const primaryTargetOption = innerFrame.locator('ul.combo-box-list > li').first();
      if (await primaryTargetOption.count() > 0) {
        await primaryTargetOption.click();
        console.log('Primary Target selected');
      }
    }
  } catch (e) {
    console.warn('Primary Target selection failed:', e);
  }

  // 8c: Select Source
  try {
    const sourceDropdown = innerFrame.locator('#ddlsource_select');
    if (await sourceDropdown.count() > 0) {
      await sourceDropdown.click();
      await accountPopup.waitForTimeout(300);
      const sourceOption = innerFrame.locator('ul.combo-box-list > li').first();
      if (await sourceOption.count() > 0) {
        await sourceOption.click();
        console.log('Source selected');
      }
    }
  } catch (e) {
    console.warn('Source selection failed:', e);
  }

  // 8d: Select Route (if available)
  try {
    const routeDropdown = innerFrame.locator('#ddlroute_select');
    if (await routeDropdown.count() > 0) {
      await routeDropdown.click();
      await accountPopup.waitForTimeout(300);
      const routeOption = innerFrame.locator('ul.combo-box-list > li').first();
      if (await routeOption.count() > 0) {
        await routeOption.click();
        console.log('Route selected');
      }
    }
  } catch (e) {
    console.warn('Route selection is optional or not available');
  }

  // 8e: Select Service and Day
  try {
    const firstServiceRow = innerFrame.locator('table tbody tr').first();
    if (await firstServiceRow.count() > 0) {
      // Open service details
      const serviceIcon = firstServiceRow.locator('i').first();
      if (await serviceIcon.count() > 0) {
        await serviceIcon.click();
        await accountPopup.waitForTimeout(300);
        
        // Click on a day (numeric link)
        const dayLink = innerFrame.getByRole('link').filter({ hasText: /\d+/ }).first();
        if (await dayLink.count() > 0) {
          await dayLink.click();
          console.log('Service day selected');
        }
      }
    }
  } catch (e) {
    console.warn('Service/Day selection failed:', e);
  }

  // 8f: Click Auto-fill dates (if available)
  try {
    const autoFillBtn = innerFrame.getByRole('button', { name: 'Auto-fill dates' }).first();
    if (await autoFillBtn.count() > 0) {
      await autoFillBtn.click();
      console.log('Auto-fill dates clicked');
      await accountPopup.waitForTimeout(500);
    }
  } catch (e) {
    console.warn('Auto-fill dates button not found');
  }

  // Step 9: Click Finish button to complete the workflow
  try {
    const finishBtn = innerFrame.getByRole('button', { name: 'Finish' }).first();
    if (await finishBtn.count() > 0) {
      await finishBtn.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
      await finishBtn.click();
      console.log('Finish button clicked - Program added successfully');
      await accountPopup.waitForTimeout(2000);
    }
  } catch (e) {
    console.warn('Finish button click failed:', e);
  }

  // Handle any confirmation dialogs
  try {
    accountPopup.once('dialog', dialog => {
      try {
        dialog.accept();
        console.log('Dialog accepted');
      } catch (err) {
        dialog.dismiss().catch(() => {});
      }
    });
  } catch {}

  return accountPopup;
}

 }
