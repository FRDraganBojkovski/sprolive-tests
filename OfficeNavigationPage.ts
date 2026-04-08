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

}
