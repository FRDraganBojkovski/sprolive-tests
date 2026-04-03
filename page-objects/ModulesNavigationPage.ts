import { Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { Browser } from "@playwright/test";
import { AccountNavigationPage } from "./AccountNavigationPage";
import { delay } from "rxjs";


export class ModulesNavigationPage extends AccountNavigationPage {

 readonly page: Page

 constructor(page:Page){
     super(page)
     this.page=page
     this.page.setDefaultTimeout(240000);
 }

async routingModule(){
  // Compute tomorrow's date dynamically
  const today    = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const fmt = (d: Date) =>
    `${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}/${d.getFullYear()}`;
  const todayStr    = fmt(today);
  const tomorrowDay = String(tomorrow.getDate());
  const tomorrowYear = String(tomorrow.getFullYear());

  // Default "To" date is today + 30 days; compute month offset back to tomorrow's month
  const defaultTo = new Date(today);
  defaultTo.setDate(today.getDate() + 30);
  const monthDiff =
    (defaultTo.getFullYear() - tomorrow.getFullYear()) * 12 +
    (defaultTo.getMonth() - tomorrow.getMonth());

  await this.page.getByRole('link', { name: 'Modules' }).click();
  const routingPagePromise = this.page.context().waitForEvent('page');
  await this.page.getByRole('link', { name: 'Routing', exact: true }).click();
  const p = await routingPagePromise;
  await p.waitForLoadState();

  await p.getByRole('link', { name: 'Service/Routes by date' }).click();
  await p.getByRole('link', { name: 'Arrange svcs by date' }).click();
  await p.waitForLoadState();

  // "From" date picker — cell shows today; select tomorrow
  await p.getByRole('cell', { name: `${todayStr} ...`, exact: true }).getByRole('img').click();
  await p.getByRole('link', { name: tomorrowDay, exact: true }).click();

  // "To" date picker — default is today+30; navigate back to tomorrow's month then select tomorrow
  await p.getByRole('cell', { name: `${fmt(defaultTo)} ...`, exact: true }).getByRole('img').click();
  for (let i = 0; i < monthDiff; i++) {
    await p.getByTitle('Prev').click();
  }
  await p.getByRole('link', { name: tomorrowDay, exact: true }).click();

  await p.locator('input:nth-child(67)').check();
  await p.locator('#selArrByDateRoutes').selectOption('375');
  await p.locator('#AllArrProgEventLead').check();
  await p.getByRole('button', { name: 'Get Services' }).click();
  await p.getByRole('cell', { name: `/${tomorrowDay}/${tomorrowYear}` }).click();
  await p.getByRole('button', { name: 'Daily planner' }).click();
  await p.getByRole('button', { name: 'Calculate' }).click();
  await p.getByRole('button', { name: 'Optimize' }).click();
  await p.getByText('Daily planner = WOs, = Leads').click();
  await p.getByTitle('Save estimated times').click();
  await p.getByLabel('Daily planner').getByText('Daily planner').click();
};

async inteligentRoutingModule(){
    const today      = new Date();
    const tomorrow   = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);

    const fmt = (d: Date) =>
      `${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}/${d.getFullYear()}`;
    const tomorrowStr    = fmt(tomorrow);
    const oneWeekAgoStr  = fmt(oneWeekAgo);

    // Generic helper: fill the input adjacent to a glyphicon-calendar icon with the given date
    const selectDate = async (calIcon: import('@playwright/test').Locator, dateStr: string) => {
      // Walk up the DOM to find the nearest input sibling (Bootstrap input-group pattern)
      const candidates = [
        calIcon.locator('..').locator('input').first(),          // direct parent → input
        calIcon.locator('../..').locator('input').first(),       // grandparent → input
        calIcon.locator('../../..').locator('input').first(),    // great-grandparent → input
      ];
      let input: import('@playwright/test').Locator | null = null;
      for (const candidate of candidates) {
        if (await candidate.count() > 0) { input = candidate; break; }
      }
      if (input) {
        await input.click({ clickCount: 3 });
        await input.fill(dateStr);
        await input.press('Tab');
      } else {
        // Fallback: open calendar and click the correct day from dateStr
        const [, , dayPart] = dateStr.split('/');  // MM/DD/YYYY
        await calIcon.click({ force: true });
        await page1.locator('table.ui-datepicker-calendar td').first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
        await page1.locator('td').filter({ hasText: new RegExp(`^\\s*${Number(dayPart)}\\s*$`) })
          .first().click();
      }
    };
    const selectTomorrow = (calIcon: import('@playwright/test').Locator) => selectDate(calIcon, tomorrowStr);

    await this.page.getByRole('link', { name: 'Modules' }).click();
    const page1Promise = this.page.context().waitForEvent('page');
    await this.page.getByRole('link', { name: 'Intelligent Routing' }).click();
    const page1 = await page1Promise;
    await page1.getByText('OPTIMIZE ROUTES').click();
    await page1.getByText('All Service Centers (102)').click();
    const falconBranch = page1.getByRole('listitem').filter({ hasText: 'Falcon Auto Test Branch' }).first();
    await falconBranch.scrollIntoViewIfNeeded().catch(() => {});
    await falconBranch.click({ force: true });
    await page1.getByRole('textbox', { name: 'Search' }).waitFor({ state: 'visible', timeout: 10000 });
    await page1.getByRole('textbox', { name: 'Search' }).click();
    await page1.getByRole('textbox', { name: 'Search' }).fill('Falcon Auto Route');
    await page1.getByRole('textbox', { name: 'Search' }).press('Enter');
    await page1.locator('.datatable-body-cell-label')
      .filter({ hasText: /Falcon Auto Route/i })
      .first()
      .waitFor({ state: 'visible', timeout: 15000 });
    await page1.locator('.datatable-body-cell-label')
      .filter({ hasText: /Falcon Auto Route/i })
      .first()
      .click();

    await selectTomorrow(page1.locator('i.glyphicon-calendar').nth(0));
    await selectTomorrow(page1.locator('i.glyphicon-calendar').nth(1));
    await page1.getByRole('button', { name: 'Next', exact: true }).click();
    await page1.getByRole('button', { name: 'Start Optimization' }).click();
    await page1.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    // After submitting, app returns to home — wait for the home page cards to reappear
    await page1.getByText('VIEW HISTORY', { exact: true }).waitFor({ state: 'visible', timeout: 240000 });

    await page1.getByText('VIEW HISTORY', { exact: true }).click();
    await selectDate(page1.locator('i.glyphicon-calendar').nth(0), oneWeekAgoStr); // From: 1 week ago
    await selectDate(page1.locator('i.glyphicon-calendar').nth(1), tomorrowStr);   // To: tomorrow
    await page1.getByRole('button', { name: 'Update' }).click();
    await page1.getByRole('button').nth(5).click();

    await page1.getByRole('checkbox', { name: 'I am sure this is where I' }).check();
  //  await page1.getByRole('button', { name: 'Commit Changes' }).click();
}

 }
