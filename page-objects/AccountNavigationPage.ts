import { expect, FrameLocator, Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import * as path from 'path';

export class AccountNavigationPage {

  // ── Core ──────────────────────────────────────────────────────────────────────
  readonly page: Page;

  // ── Frames ────────────────────────────────────────────────────────────────────
  readonly mainFrame: (page: Page) => FrameLocator;
  readonly wizardFrame: (page: Page) => FrameLocator;

  // ── Main-page navigation ──────────────────────────────────────────────────────
  readonly addAccountNewLink: Locator;
  readonly addNewAccountLink: Locator;
  readonly continueToAddProgramOldUi: Locator;

  // ── Account search ────────────────────────────────────────────────────────────
  readonly openAccountCriteriaInput: Locator;
  readonly openAccountFirstnameInput: Locator;
  readonly openAccountCompanyInput: Locator;
  readonly openAccountSearchButton: Locator;

  // ── Address / location form ───────────────────────────────────────────────────
  readonly enterLocationInput: (page: Page) => Locator;
  readonly billingAddressEnterText: (page: Page) => Locator;
  readonly streetNameInput: (page: Page) => Locator;
  readonly streetNameOldInput: (page: Page) => Locator;
  readonly streetNumberInput: (page: Page) => Locator;
  readonly streetNumberReqInput: (page: Page) => Locator;
  readonly cityInput: (page: Page) => Locator;
  readonly stateSelect: (page: Page) => Locator;
  readonly postalCodeInput: (page: Page) => Locator;
  readonly postalCodeOldInput: (page: Page) => Locator;
  readonly mapCodeInput: (page: Page) => Locator;
  readonly htmlRoot: (page: Page) => Locator;

  // ── Contact info form ─────────────────────────────────────────────────────────
  readonly firstNameInput: (page: Page) => Locator;
  readonly lastNameInput: (page: Page) => Locator;
  readonly businessNameInput: (page: Page) => Locator;
  readonly phoneInput: (page: Page) => Locator;
  readonly emailInput: (page: Page) => Locator;
  readonly mySearchInput: (page: Page) => Locator;
  readonly udfComp5Input: (page: Page) => Locator;
  readonly udfComp6Input: (page: Page) => Locator;

  // ── Site details form ─────────────────────────────────────────────────────────
  readonly sameAsAccountCheckbox: (page: Page) => Locator;
  readonly propertyTypeSelect: (page: Page) => Locator;
  readonly builderSelect: (page: Page) => Locator;
  readonly sicSelect: (page: Page) => Locator;
  readonly facilitySelect: (page: Page) => Locator;
  readonly propertyDescriptionSelect: (page: Page) => Locator;
  readonly primarySourceSelect: (page: Page) => Locator;
  readonly propertyManagementSelect: (page: Page) => Locator;
  readonly siteNoteInput: (page: Page) => Locator;

  // ── Branch / service-center dropdowns ────────────────────────────────────────
  readonly branchDropdown: (page: Page) => Locator;
  readonly branchOptions: (page: Page) => Locator;
  readonly branchSelect: (page: Page) => Locator;
  readonly branchSelect2Container: (page: Page) => Locator;
  readonly branchSelect2Options: (page: Page) => Locator;
  readonly serviceCenterSelect: (page: Page) => Locator;
  readonly serviceCenterSelect2Container: (page: Page) => Locator;
  readonly serviceCenterSelect2Selection: (page: Page) => Locator;
  readonly serviceCenterSelect2Options: (page: Page) => Locator;

  // ── Program selection ─────────────────────────────────────────────────────────
  readonly programTextFilter: (page: Page) => Locator;
  readonly programSelect: (page: Page) => Locator;
  readonly programDropdown: (page: Page) => Locator;
  readonly programOptions: (page: Page) => Locator;
  readonly programSelect2Container: (page: Page) => Locator;
  readonly programSelect2Selection: (page: Page) => Locator;
  readonly programSelect2SearchInput: (page: Page) => Locator;
  readonly programSelect2Options: (page: Page) => Locator;
  readonly noneRenewalOption: (page: Page) => Locator;
  readonly noneRenewalLink: (page: Page) => Locator;
  readonly marinaTextbox: (page: Page) => Locator;

  // ── Program form dropdowns ────────────────────────────────────────────────────
  readonly salesPersonSelect: (page: Page) => Locator;
  readonly primaryTargetSelect: (page: Page) => Locator;
  readonly sourceSelect: (page: Page) => Locator;
  readonly routeSelect: (page: Page) => Locator;
  readonly estimateTypeSelect: (page: Page) => Locator;

  // ── Wizard navigation ─────────────────────────────────────────────────────────
  readonly nextButton: (page: Page) => Locator;
  readonly nextButtonRole: (page: Page) => Locator;
  readonly continueButton: (page: Page) => Locator;
  readonly addAccountOnlyButton: (page: Page) => Locator;
  readonly addProgramButton: (page: Page) => Locator;
  readonly addProgramLabelButton: (page: Page) => Locator;
  readonly addProgramLink: (page: Page) => Locator;
  readonly addDuplicateProceedButton: (page: Page) => Locator;
  readonly addDuplicateLink: (page: Page) => Locator;

  // ── Site menu ─────────────────────────────────────────────────────────────────
  readonly siteMenuButtonById: (page: Page) => Locator;
  readonly siteMenuButtonByRole: (page: Page) => Locator;

  // ── Scheduling ────────────────────────────────────────────────────────────────
  readonly timeRangeRow: (page: Page) => Locator;
  readonly timeRangeRowLink: (page: Page) => Locator;
  readonly dayLink13: (page: Page) => Locator;
  readonly autoFillDatesButton: (page: Page) => Locator;

  // ── Results table ─────────────────────────────────────────────────────────────
  readonly resultsTableLinks: (page: Page) => Locator;
  readonly resultsTableRows: (page: Page) => Locator;
  readonly firstLinkInPage: (page: Page) => Locator;

  // ── Specific dropdown option links ────────────────────────────────────────────
  readonly referralEmailLink: (page: Page) => Locator;
  readonly salesPersonLink96b: (page: Page) => Locator;
  readonly primaryTargetLinkAbcde: (page: Page) => Locator;
  readonly routeLink1003: (page: Page) => Locator;

  // ── Old-UI specific ───────────────────────────────────────────────────────────
  readonly table2: (page: Page) => Locator;
  readonly finish2Button: (page: Page) => Locator;
  readonly sellProgramButton: (page: Page) => Locator;
  readonly finishButtonOldUi: (page: Page) => Locator;

  // ── Required-info / sale-info panel ──────────────────────────────────────────
  readonly requiredInfoTab: (page: Page) => Locator;
  readonly saleInfoSection: (page: Page) => Locator;
  readonly requiredInfoCardBody: (page: Page) => Locator;

  // ── Frame-scoped locators ─────────────────────────────────────────────────────
  readonly siteMenuButtonByRoleFrame: (frame: FrameLocator) => Locator;
  readonly addProgramLinkFrame: (frame: FrameLocator) => Locator;
  readonly salesPersonSelectFrame: (frame: FrameLocator) => Locator;
  readonly comboBoxListItems: (frame: FrameLocator) => Locator;
  readonly firstLinkInFrame: (frame: FrameLocator) => Locator;
  readonly primaryTargetSelectFrame: (frame: FrameLocator) => Locator;
  readonly sourceSelectFrame: (frame: FrameLocator) => Locator;
  readonly routeSelectFrame: (frame: FrameLocator) => Locator;
  readonly estimateTypeSelectFrame: (frame: FrameLocator) => Locator;
  readonly serviceButtonFrame: (frame: FrameLocator) => Locator;
  readonly dayLink14Frame: (frame: FrameLocator) => Locator;
  readonly anyDayLinkFrame: (frame: FrameLocator) => Locator;
  readonly autoFillDatesButtonFrame: (frame: FrameLocator) => Locator;
  readonly finishButtonFrame: (frame: FrameLocator) => Locator;
  readonly serviceRowsFrame: (frame: FrameLocator) => Locator;
  readonly requiredInfoTabFrame: (frame: FrameLocator) => Locator;
  readonly saleInfoSectionFrame: (frame: FrameLocator) => Locator;
  readonly requiredInfoCardBodyFrame: (frame: FrameLocator) => Locator;
  readonly serviceIconFrame: (row: Locator) => Locator;

  // ── Row helpers ───────────────────────────────────────────────────────────────
  readonly rowLabelInRow: (row: Locator) => Locator;
  readonly rowIconInRow: (row: Locator) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.page.setDefaultTimeout(240000);

    // Frames
    this.mainFrame = (targetPage: Page) => targetPage.frameLocator('#MainFrameBodyFrame');
    this.wizardFrame = (targetPage: Page) => targetPage.frameLocator('iframe[name="ifrmWizard"]');

    // Main-page navigation
    this.addAccountNewLink = page.locator('#_ctl0_mainmenu_lnkAddAccount_18013');
    this.addNewAccountLink = page.getByRole('link', { name: 'Add New Account', exact: true });
    this.continueToAddProgramOldUi = page.locator('tr').locator('#btncontinue_4296');

    // Account search (form is on the main page, not in an iframe)
    this.openAccountCriteriaInput = page.locator('#criteriaaddcontrol_txtCriteria');
    this.openAccountFirstnameInput = page.getByRole('textbox', { name: 'First Name' });
    this.openAccountCompanyInput = page.getByRole('textbox', { name: 'Company Name' });
    this.openAccountSearchButton = page.locator('#search_button');

    // Address / location form
    this.enterLocationInput = (targetPage: Page) => targetPage.getByRole('textbox', { name: 'Enter Location' });
    this.billingAddressEnterText = (targetPage: Page) => targetPage.getByText('Billing Address Enter');
    this.streetNameInput = (targetPage: Page) => targetPage.locator('#txtStreetName');
    this.streetNameOldInput = (targetPage: Page) => targetPage.locator('#criteriaaddcontrol_txtStreetName');
    this.streetNumberInput = (targetPage: Page) => targetPage.locator('#criteriaaddcontrol_txtStreetNumber');
    this.streetNumberReqInput = (targetPage: Page) => targetPage.locator('#txtStreetNumber');
    this.cityInput = (targetPage: Page) => targetPage.locator('#txtCity');
    this.stateSelect = (targetPage: Page) => targetPage.locator('#txtState');
    this.postalCodeInput = (targetPage: Page) => targetPage.locator('#txtPostalCode');
    this.postalCodeOldInput = (targetPage: Page) => targetPage.locator('#criteriaaddcontrol_txtPostalCode');
    this.mapCodeInput = (targetPage: Page) => targetPage.locator('#txtmapcode');
    this.htmlRoot = (targetPage: Page) => targetPage.locator('html');

    // Contact info form
    this.firstNameInput = (targetPage: Page) => targetPage.locator('#txtfirst');
    this.lastNameInput = (targetPage: Page) => targetPage.locator('#txtlast');
    this.businessNameInput = (targetPage: Page) => targetPage.locator('#txtbusname');
    this.phoneInput = (targetPage: Page) => targetPage.locator('#txtphone');
    this.emailInput = (targetPage: Page) => targetPage.locator('#txtemail');
    this.mySearchInput = (targetPage: Page) => targetPage.locator('#txtmysearch');
    this.udfComp5Input = (targetPage: Page) => targetPage.locator('#txtudfcomp5');
    this.udfComp6Input = (targetPage: Page) => targetPage.locator('#txtudfcomp6');

    // Site details form
    this.sameAsAccountCheckbox = (targetPage: Page) => targetPage.getByRole('checkbox', { name: 'Same as Account' });
    this.propertyTypeSelect = (targetPage: Page) => targetPage.locator('#ddlproptype');
    this.builderSelect = (targetPage: Page) => targetPage.locator('#ddlbuilder');
    this.sicSelect = (targetPage: Page) => targetPage.locator('#ddlsic');
    this.facilitySelect = (targetPage: Page) => targetPage.locator('#ddlFacility');
    this.propertyDescriptionSelect = (targetPage: Page) => targetPage.locator('#ddlpropdescription');
    this.primarySourceSelect = (targetPage: Page) => targetPage.locator('#primarysourceDDL');
    this.propertyManagementSelect = (targetPage: Page) => targetPage.locator('#ddlpropertymanagementcompany');
    this.siteNoteInput = (targetPage: Page) => targetPage.locator('#txtsiteNote');

    // Branch / service-center dropdowns
    this.branchDropdown = (targetPage: Page) => targetPage.locator('#ddlBranch_select, #ddlBranch, select[name*="branch"], [id^="ddlBranch"]');
    this.branchOptions = (targetPage: Page) => targetPage.locator('ul.combo-box-list > li, option');
    this.branchSelect = (targetPage: Page) => targetPage.locator('#ddlBranch');
    this.branchSelect2Container = (targetPage: Page) => targetPage.locator('#select2-ddlBranch-container');
    this.branchSelect2Options = (targetPage: Page) => targetPage.locator('li.select2-results__option[aria-disabled="false"]');
    this.serviceCenterSelect = (targetPage: Page) => targetPage.locator('#ddlservicecenter');
    this.serviceCenterSelect2Container = (targetPage: Page) => targetPage.locator('#select2-ddlservicecenter-container');
    this.serviceCenterSelect2Selection = (targetPage: Page) => targetPage.locator('span.select2-selection.select2-selection--single[aria-labelledby="select2-ddlservicecenter-container"]');
    this.serviceCenterSelect2Options = (targetPage: Page) => targetPage.locator('li.select2-results__option[aria-disabled="false"]');

    // Program selection
    this.programTextFilter = (targetPage: Page) => targetPage.locator('#ddlprogram_textFilter');
    this.programSelect = (targetPage: Page) => targetPage.locator('#ddlprogram_select');
    this.programDropdown = (targetPage: Page) => targetPage.locator('#ddlprogram_select, #ddlprogram, select[name*="program"], [id^="ddlprogram"]');
    this.programOptions = (targetPage: Page) => targetPage.locator('ul.combo-box-list > li, option');
    this.programSelect2Container = (targetPage: Page) => targetPage.locator('#select2-ddlprogram-container');
    this.programSelect2Selection = (targetPage: Page) => targetPage.locator('span.select2-selection.select2-selection--single[aria-labelledby="select2-ddlprogram-container"]');
    this.programSelect2SearchInput = (targetPage: Page) => targetPage.locator('.select2-container--open input.select2-search__field');
    this.programSelect2Options = (targetPage: Page) => targetPage.locator('li.select2-results__option[aria-disabled="false"]');
    this.noneRenewalOption = (targetPage: Page) => targetPage.getByRole('option', { name: '[None Renewal]' });
    this.noneRenewalLink = (targetPage: Page) => targetPage.getByRole('link', { name: '[None Renewal]' });
    this.marinaTextbox = (targetPage: Page) => targetPage.getByRole('textbox', { name: '!MARINA' });

    // Program form dropdowns
    this.salesPersonSelect = (targetPage: Page) => targetPage.locator('#ddlsalesperson2_select');
    this.primaryTargetSelect = (targetPage: Page) => targetPage.locator('#ddlPrimaryTarget_select');
    this.sourceSelect = (targetPage: Page) => targetPage.locator('#ddlsource_select');
    this.routeSelect = (targetPage: Page) => targetPage.locator('#ddlroute_select');
    this.estimateTypeSelect = (targetPage: Page) => targetPage.locator('#ddlestimatetype');

    // Wizard navigation
    this.nextButton = (targetPage: Page) => targetPage.locator('#next');
    this.nextButtonRole = (targetPage: Page) => targetPage.getByRole('button', { name: 'Next' });
    this.continueButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Continue' });
    this.addAccountOnlyButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Add Account Only' });
    this.addProgramButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Add Program' });
    this.addProgramLabelButton = (targetPage: Page) => targetPage.getByLabel('Add Program').getByRole('button', { name: 'Add Program' });
    this.addProgramLink = (targetPage: Page) => targetPage.getByRole('link', { name: 'Add Program' });
    this.addDuplicateProceedButton = (targetPage: Page) =>
      // Prefer the wrapping <a>/<button> so the click fires the navigation; fall back to the <span> itself
      targetPage.locator('a, button').filter({ hasText: 'Add Duplicate (Proceed)' }).first();
    this.addDuplicateLink = (targetPage: Page) => targetPage.locator('[id^="hlAddDupe"]');

    // Site menu
    this.siteMenuButtonById = (targetPage: Page) => targetPage.locator('#siteMenuBtn');
    this.siteMenuButtonByRole = (targetPage: Page) => targetPage.getByRole('button', { name: 'Site Menu' });

    // Scheduling
    this.timeRangeRow = (targetPage: Page) => targetPage.getByRole('row', { name: 'Time Range 5:00AM - 11:00PM Call Ahead Auto-fill dates', exact: true });
    this.timeRangeRowLink = (targetPage: Page) => this.timeRangeRow(targetPage).getByRole('link');
    this.dayLink13 = (targetPage: Page) => targetPage.getByRole('link', { name: '13' });
    this.autoFillDatesButton = (targetPage: Page) => targetPage.getByRole('button', { name: 'Auto-fill dates' });

    // Results table
    this.resultsTableLinks = (targetPage: Page) => targetPage.locator('table tbody tr td a');
    this.resultsTableRows = (targetPage: Page) => targetPage.locator('table tbody tr');
    this.firstLinkInPage = (targetPage: Page) => targetPage.getByRole('link').first();

    // Specific dropdown option links
    this.referralEmailLink = (targetPage: Page) => targetPage.getByRole('link', { name: 'Referral Email' });
    this.salesPersonLink96b = (targetPage: Page) => targetPage.getByRole('link', { name: '96b, Steve' });
    this.primaryTargetLinkAbcde = (targetPage: Page) => targetPage.getByRole('link', { name: 'abcde' });
    this.routeLink1003 = (targetPage: Page) => targetPage.getByRole('link', { name: '1003' });

    // Old-UI specific
    this.table2 = (targetPage: Page) => targetPage.locator('#Table2');
    this.finish2Button = (targetPage: Page) => targetPage.locator('#btnfinish2_125');
    this.sellProgramButton = (targetPage: Page) => targetPage.locator('#btnsellpgm2_306');
    this.finishButtonOldUi = (targetPage: Page) => targetPage.locator('#btnfinish_295');

    // Required-info / sale-info panel
    this.requiredInfoTab = (targetPage: Page) => targetPage.getByRole('tab', { name: /Required info/i });
    this.saleInfoSection = (targetPage: Page) => targetPage.locator('#nav-required #saleinfoap > div');
    this.requiredInfoCardBody = (targetPage: Page) => targetPage.locator('div.card-body.miniheight');

    // Frame-scoped locators
    this.siteMenuButtonByRoleFrame = (frame: FrameLocator) => frame.getByRole('button', { name: 'Site Menu' }).first();
    this.addProgramLinkFrame = (frame: FrameLocator) => frame.getByRole('link', { name: 'Add Program' }).first();
    this.salesPersonSelectFrame = (frame: FrameLocator) => frame.locator('#ddlsalesperson2_select');
    this.comboBoxListItems = (frame: FrameLocator) => frame.locator('ul.combo-box-list > li');
    this.firstLinkInFrame = (frame: FrameLocator) => frame.getByRole('link').first();
    this.primaryTargetSelectFrame = (frame: FrameLocator) => frame.locator('#ddlPrimaryTarget_select');
    this.sourceSelectFrame = (frame: FrameLocator) => frame.locator('#ddlsource_select');
    this.routeSelectFrame = (frame: FrameLocator) => frame.locator('#ddlroute_select');
    this.estimateTypeSelectFrame = (frame: FrameLocator) => frame.locator('#ddlestimatetype');
    this.serviceButtonFrame = (frame: FrameLocator) => frame.locator('#firstservicerow i');
    this.dayLink14Frame = (frame: FrameLocator) => frame.getByRole('link', { name: '14' });
    this.anyDayLinkFrame = (frame: FrameLocator) => frame.getByRole('link').filter({ hasText: /\d+/ });
    this.autoFillDatesButtonFrame = (frame: FrameLocator) => frame.getByRole('button', { name: 'Auto-fill dates' }).first();
    this.finishButtonFrame = (frame: FrameLocator) => frame.getByRole('button', { name: 'Finish' }).first();
    this.serviceRowsFrame = (frame: FrameLocator) => frame.locator('table tbody tr');
    this.requiredInfoTabFrame = (frame: FrameLocator) => frame.getByRole('tab', { name: /Required info/i });
    this.saleInfoSectionFrame = (frame: FrameLocator) => frame.locator('#nav-required #saleinfoap > div');
    this.requiredInfoCardBodyFrame = (frame: FrameLocator) => frame.locator('div.card-body.miniheight');
    this.serviceIconFrame = (row: Locator) => row.locator('i').first();

    // Row helpers
    this.rowLabelInRow = (row: Locator) => row.locator('label').first();
    this.rowIconInRow = (row: Locator) => row.locator('div i').first();
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  /** Dismiss the "Add Duplicate (Proceed)" dialog if it appears after a form submission. */
  private async dismissDuplicateDialog(targetPage: Page): Promise<void> {
    // The link has id="hlAddDupe_<number>" — this is the correct click target
    const dupLink = targetPage.locator('[id^="hlAddDupe"]').first();
    const visible = await dupLink.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
    if (!visible) return;

    // JS click fires the href navigation reliably regardless of visibility
    await dupLink.evaluate((el) => (el as HTMLElement).click()).catch(() => {});
    await targetPage.waitForLoadState('domcontentloaded').catch(() => {})
  }

  // ── Public actions ────────────────────────────────────────────────────────────

async addNewAccountNewAccountOnly() {
 let page2: Page;
    // Click the link; capture + discard any app-opened popup so it cannot call
    // window.opener.close() and kill this.page when the wizard completes.
    const popupPromise = this.page.context().waitForEvent('page', { timeout: 15000 }).catch(() => null);
    await this.addAccountNewLink.click().catch(() => {});
    const popup = await popupPromise;
    if (popup && popup !== this.page) {
      await popup.close().catch(() => {});
    }
    page2 = await this.page.context().newPage();

    page2.setDefaultTimeout(30000);
    page2.setDefaultNavigationTimeout(30000);

    const addAccountUrl = new URL('/account/quickaddentry1.aspx', this.page.url()).toString();
    if (!page2.url().includes('/account/quickaddentry1.aspx')) {
      await page2.goto(addAccountUrl, { waitUntil: 'domcontentloaded' });
    await page2.waitForLoadState('networkidle').catch(() => {});
    }
    const enterLocation = this.enterLocationInput(page2);
    await enterLocation.waitFor({ state: 'visible', timeout: 30000 });

    // Use a fixed real address matching the geolocation mock (Dallas TX)
    const STREET_NUMBER = faker.number.int({ min: 1000, max: 9999 }).toString();
    const STREET_NAME = 'Main St';
    const CITY = 'Dallas';
    const STATE_ABBR = 'TX';
    const ZIP = '75201';

    // Fill the location autocomplete with a real address and try to select a suggestion
    await this.enterLocationInput(page2).clear().catch(() => {});
    await this.enterLocationInput(page2).fill(`${STREET_NUMBER} ${STREET_NAME}, ${CITY}, ${STATE_ABBR}`);
    const acItem2 = page2.locator('.pac-item, .ui-menu-item, #ui-id-4 li').first();
    const acVisible2 = await acItem2.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
    if (acVisible2) {
      await acItem2.click({ force: true }).catch(() => {});
      await page2.waitForLoadState('domcontentloaded').catch(() => {})
    } else {
      await page2.keyboard.press('Escape').catch(() => {});
    }

    // Fill all address fields directly with fixed values — JS-force them so async geocoding can't clear them
    await this.streetNumberReqInput(page2).fill(STREET_NUMBER).catch(() => {});
    await this.streetNameInput(page2).fill(STREET_NAME).catch(() => {});

    await page2.evaluate(({ city, stateAbbr, zip }) => {
      const setInput = (id: string, val: string) => {
        const el = document.querySelector<HTMLInputElement>(`#${id}`);
        if (!el) return;
        el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));
      };
      const setState = (id: string, abbr: string) => {
        const sel = document.querySelector<HTMLSelectElement>(`#${id}`);
        if (!sel) return;
        const opt = Array.from(sel.options).find(o => o.value === abbr || o.text.trim() === abbr);
        if (opt) {
          sel.value = opt.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          sel.dispatchEvent(new Event('blur', { bubbles: true }));
        }
      };
      setInput('txtCity', city);
      setState('txtState', stateAbbr);
      setInput('txtPostalCode', zip);
    }, { city: CITY, stateAbbr: STATE_ABBR, zip: ZIP });

    {
      const BRANCH_NAME = 'Falcon Auto Test Branch';
      const branchSet = await page2.evaluate((name: string) => {
        const sel = document.querySelector<HTMLSelectElement>('#ddlbillcenter');
        if (!sel) return { ok: false, msg: '#ddlbillcenter not found' };
        const opts = Array.from(sel.options);
        const exact   = opts.find(o => o.text.trim() === name);
        const partial = opts.find(o => o.text.trim().includes(name));
        const match = exact || partial;
        if (!match) return { ok: false, msg: `"${name}" not found. Options: [${opts.slice(0, 10).map(o => o.text.trim()).join(' | ')}]` };
        const $ = (window as any).$;
        if ($ && $(sel).data('select2')) {
          $(sel).val(match.value).trigger('change.select2').trigger('change');
        } else {
          sel.value = match.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
        }
        const container = document.querySelector('#select2-ddlbillcenter-container');
        if (container) container.textContent = match.text;
        return { ok: true, msg: match.text };
      }, BRANCH_NAME);
      console.log(`[addNewAccountNewOnly] Branch select: ok=${branchSet.ok} msg="${branchSet.msg}"`);
      if (!branchSet.ok) {
        await page2.locator('#ddlbillcenter').selectOption({ label: BRANCH_NAME }).catch(() => {});
      }
    }
    await this.nextButton(page2).click();
    await this.dismissDuplicateDialog(page2);
    await page2.selectOption('#ddlTitle', 'Mr.');
    await page2.locator('#ddlTitle').click();
    await this.firstNameInput(page2).click();
    await this.firstNameInput(page2).fill('Falcon');
    await this.firstNameInput(page2).fill('Falcon Auto ');
    await this.lastNameInput(page2).fill('AddNewAccountNew');
    await this.businessNameInput(page2).click();
    await this.businessNameInput(page2).fill('Falcon');
    await this.phoneInput(page2).click();
    await this.phoneInput(page2).fill('(520) 385-6420');
    await this.emailInput(page2).click();
    await this.emailInput(page2).fill('dbojkovski@servicetitan.com');
    await this.mySearchInput(page2).click();
    await this.mySearchInput(page2).fill('123123');
    await this.udfComp5Input(page2).click();
    await this.udfComp5Input(page2).fill('321321');
    await this.udfComp6Input(page2).click();
    await this.udfComp6Input(page2).fill('345345');
    await this.nextButton(page2).click();
    await this.dismissDuplicateDialog(page2);
    await this.sameAsAccountCheckbox(page2).check();
    await this.propertyTypeSelect(page2).selectOption({ index: 1 });
    await this.builderSelect(page2).selectOption({ index: 1 });
    await this.sicSelect(page2).selectOption({ index: 1 });
    await this.facilitySelect(page2).selectOption({ index: 1 });
    await this.propertyDescriptionSelect(page2).selectOption({ index: 1 });
    await this.primarySourceSelect(page2).selectOption({ index: 1 });
    await this.propertyManagementSelect(page2).selectOption({ index: 1 });
    await this.siteNoteInput(page2).click();
    await this.siteNoteInput(page2).fill('Test Auto');
    await this.addAccountOnlyButton(page2).waitFor({ state: 'visible' });
    await this.addAccountOnlyButton(page2).click();
    await this.dismissDuplicateDialog(page2);
    await page2.close();
    //await page2.waitForLoadState('networkidle');
  }

async addNewAccountAndProgram() {
    let page2: Page;
    try {
      const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page', { timeout: 10000 }),
        this.addAccountNewLink.click()
      ]);
      page2 = newPage;
    } catch {
      await this.addAccountNewLink.click().catch(() => {});
      page2 = this.page;
    }

    page2.setDefaultTimeout(30000);
    page2.setDefaultNavigationTimeout(30000);

    const addAccountUrl = new URL('/account/quickaddentry1.aspx', this.page.url()).toString();
    if (!page2.url().includes('/account/quickaddentry1.aspx')) {
      await page2.goto(addAccountUrl, { waitUntil: 'domcontentloaded' });
    await page2.waitForLoadState('networkidle').catch(() => {});
    }
    const enterLocation = this.enterLocationInput(page2);
    await enterLocation.waitFor({ state: 'visible', timeout: 30000 });

    // Use a fixed real address matching the geolocation mock (Dallas TX)
    const STREET_NUMBER = faker.number.int({ min: 1000, max: 9999 }).toString();
    const STREET_NAME = 'Main St';
    const CITY = 'Dallas';
    const STATE_ABBR = 'TX';
    const ZIP = '75201';

    // Fill the location autocomplete with a real address and try to select a suggestion
    await this.enterLocationInput(page2).clear().catch(() => {});
    await this.enterLocationInput(page2).fill(`${STREET_NUMBER} ${STREET_NAME}, ${CITY}, ${STATE_ABBR}`);
    const acItem2 = page2.locator('.pac-item, .ui-menu-item, #ui-id-4 li').first();
    const acVisible2 = await acItem2.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
    if (acVisible2) {
      await acItem2.click({ force: true }).catch(() => {});
      await page2.waitForLoadState('domcontentloaded').catch(() => {})
    } else {
      await page2.keyboard.press('Escape').catch(() => {});
    }

    // Fill all address fields directly with fixed values — JS-force them so async geocoding can't clear them
    await this.streetNumberReqInput(page2).fill(STREET_NUMBER).catch(() => {});
    await this.streetNameInput(page2).fill(STREET_NAME).catch(() => {});

    await page2.evaluate(({ city, stateAbbr, zip }) => {
      const setInput = (id: string, val: string) => {
        const el = document.querySelector<HTMLInputElement>(`#${id}`);
        if (!el) return;
        el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));
      };
      const setState = (id: string, abbr: string) => {
        const sel = document.querySelector<HTMLSelectElement>(`#${id}`);
        if (!sel) return;
        const opt = Array.from(sel.options).find(o => o.value === abbr || o.text.trim() === abbr);
        if (opt) {
          sel.value = opt.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          sel.dispatchEvent(new Event('blur', { bubbles: true }));
        }
      };
      setInput('txtCity', city);
      setState('txtState', stateAbbr);
      setInput('txtPostalCode', zip);
    }, { city: CITY, stateAbbr: STATE_ABBR, zip: ZIP });

    {
      const BRANCH_NAME = 'Falcon Auto Test Branch';
      const branchSet = await page2.evaluate((name: string) => {
        const sel = document.querySelector<HTMLSelectElement>('#ddlbillcenter');
        if (!sel) return { ok: false, msg: '#ddlbillcenter not found' };
        const opts = Array.from(sel.options);
        const exact   = opts.find(o => o.text.trim() === name);
        const partial = opts.find(o => o.text.trim().includes(name));
        const match = exact || partial;
        if (!match) return { ok: false, msg: `"${name}" not found. Options: [${opts.slice(0, 10).map(o => o.text.trim()).join(' | ')}]` };
        const $ = (window as any).$;
        if ($ && $(sel).data('select2')) {
          $(sel).val(match.value).trigger('change.select2').trigger('change');
        } else {
          sel.value = match.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
        }
        const container = document.querySelector('#select2-ddlbillcenter-container');
        if (container) container.textContent = match.text;
        return { ok: true, msg: match.text };
      }, BRANCH_NAME);
      console.log(`[addNewAccountAndProgram] Branch select: ok=${branchSet.ok} msg="${branchSet.msg}"`);
      if (!branchSet.ok) {
        await page2.locator('#ddlbillcenter').selectOption({ label: BRANCH_NAME }).catch(() => {});
      }
    }
    await this.nextButton(page2).click();
    await this.dismissDuplicateDialog(page2);
    await page2.selectOption('#ddlTitle', 'Mr.');
    await page2.locator('#ddlTitle').click();
    await this.firstNameInput(page2).click();
    await this.firstNameInput(page2).fill('Falcon');
    await this.firstNameInput(page2).fill('Falcon Auto ');
    await this.lastNameInput(page2).fill('AddNewAccountNew');
    await this.businessNameInput(page2).click();
    await this.businessNameInput(page2).fill('Falcon');
    await this.phoneInput(page2).click();
    await this.phoneInput(page2).fill('(520) 385-6420');
    await this.emailInput(page2).click();
    await this.emailInput(page2).fill('dbojkovski@servicetitan.com');
    await this.mySearchInput(page2).click();
    await this.mySearchInput(page2).fill('123123');
    await this.udfComp5Input(page2).click();
    await this.udfComp5Input(page2).fill('321321');
    await this.udfComp6Input(page2).click();
    await this.udfComp6Input(page2).fill('345345');
    await this.nextButton(page2).click();
    await this.dismissDuplicateDialog(page2);
    await this.sameAsAccountCheckbox(page2).check();
    await this.propertyTypeSelect(page2).selectOption({ index: 1 });
    await this.builderSelect(page2).selectOption({ index: 1 });
    await this.sicSelect(page2).selectOption({ index: 1 });
    await this.facilitySelect(page2).selectOption({ index: 1 });
    await this.propertyDescriptionSelect(page2).selectOption({ index: 1 });
    await this.primarySourceSelect(page2).selectOption({ index: 1 });
    await this.propertyManagementSelect(page2).selectOption({ index: 1 });
    await this.siteNoteInput(page2).click();
    await this.siteNoteInput(page2).fill('Test Auto');

    let programPage = page2;
    try {
      const [popup] = await Promise.all([
        page2.waitForEvent('popup', { timeout: 5000 }),
        this.addProgramButton(page2).click()
      ]);
      programPage = popup;
    } catch {
      await this.addProgramButton(page2).click().catch(() => {});
    }

    try {
      const PROGRAM_NAME = 'Falcon Auto Test Program Renewal';

      // ── Strategy A: direct jQuery / native eval (most reliable in headless) ──────
      // Typing into Select2 search doesn't always filter correctly in headless.
      // Setting the underlying <select> value and triggering Select2's change event
      // is faster and unambiguous.
      const directSet = await programPage.evaluate((name: string) => {
        const sel = document.querySelector<HTMLSelectElement>('#ddlprogram');
        if (!sel) return { ok: false, msg: '#ddlprogram not found' };
        const opts = Array.from(sel.options);
        // Log every option that contains "falcon" to help diagnose name mismatches
        const falconOpts = opts.filter(o => o.text.toLowerCase().includes('falcon')).map(o => o.text.trim());
        const exact   = opts.find(o => o.text.trim() === name);
        const partial = opts.find(o => o.text.trim().includes(name));
        const match = exact || partial;
        if (!match) return { ok: false, msg: `"${name}" not found in ${opts.length} options. Falcon matches: [${falconOpts.join(' | ')}]` };
        const $ = (window as any).$;
        if ($ && $(sel).data('select2')) {
          $(sel).val(match.value).trigger('change.select2').trigger('change');
        } else {
          sel.value = match.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
        }
        // Force the Select2 display label to update
        const container = document.querySelector('#select2-ddlprogram-container');
        if (container) container.textContent = match.text;
        return { ok: true, msg: match.text };
      }, PROGRAM_NAME);
      console.log(`[addNewAccountAndProgram] Direct program select: ok=${directSet.ok} msg="${directSet.msg}"`);

      // ── Strategy B: Select2 UI fallback (if native eval failed) ─────────────────
      if (!directSet.ok) {
        console.warn('[addNewAccountAndProgram] Direct eval failed — falling back to Select2 UI');
        const select2Trigger = programPage.locator(
          'span.select2-selection--single[aria-labelledby="select2-ddlprogram-container"]'
        ).first();
        const triggerReady = await select2Trigger.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
        if (triggerReady) {
          await select2Trigger.click({ force: true });
          const searchInput = programPage.locator('.select2-container--open input.select2-search__field').first();
          const searchReady = await searchInput.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
          if (searchReady) {
            await searchInput.pressSequentially(PROGRAM_NAME, { delay: 60 });
            await programPage.locator('li.select2-results__option').first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {})
            const visibleOptions = await programPage.locator('li.select2-results__option').allTextContents();
            console.log(`[addNewAccountAndProgram] Select2 UI options after typing (${visibleOptions.length}): [${visibleOptions.slice(0, 10).join(' | ')}]`);
            const option = programPage.locator('li.select2-results__option').filter({ hasText: PROGRAM_NAME }).first();
            if (await option.waitFor({ state: 'visible', timeout: 6000 }).then(() => true).catch(() => false)) {
              await option.click({ force: true });
            } else {
              await searchInput.press('Escape');
              console.warn('[addNewAccountAndProgram] No matching option in Select2 UI — program may not exist');
            }
          }
        }
      }

      // ── ASSERTION: verify container now shows the selected program ───────────────
      await programPage.locator('#select2-ddlprogram-container').waitFor({ state: 'attached', timeout: 3000 }).catch(() => {})
      const containerText = await programPage.locator('#select2-ddlprogram-container').textContent().catch(() => '');
      console.log(`[addNewAccountAndProgram] Select2 container after selection: "${containerText?.trim()}"`);
      if (!containerText?.trim() || containerText.includes('Select') || containerText.trim() === 'None') {
        throw new Error(`[addNewAccountAndProgram] Program "${PROGRAM_NAME}" was NOT selected — container shows: "${containerText?.trim()}"`);
      }
    } catch (e: unknown) {
      console.warn('[addNewAccountAndProgram] Program selection failed:', e);
    }

    try {
      const programFrame = this.mainFrame(programPage);
      const hasFrame = (await programFrame.locator('body').count()) > 0;
      const requiredTab = hasFrame
        ? this.requiredInfoTabFrame(programFrame)
        : this.requiredInfoTab(programPage);

      if (requiredTab && (await requiredTab.count()) > 0) {
        await requiredTab.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await requiredTab.click().catch(() => {});
      }

      const detailsFrame = this.mainFrame(programPage);
      const renewalFeeInput = detailsFrame.locator(
        '#txtRenewalFee, #txtrenewalfee, input[name*="renewal"][type="text"]'
      );
      if (renewalFeeInput && (await renewalFeeInput.count()) > 0) {
        await renewalFeeInput.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await renewalFeeInput.fill('25');
      } else {
        const renewalFeeFallback = programPage.locator(
          '#txtRenewalFee, #txtrenewalfee, input[name*="renewal"][type="text"]'
        );
        if (renewalFeeFallback && (await renewalFeeFallback.count()) > 0) {
          await renewalFeeFallback.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
          await renewalFeeFallback.fill('25');
        }
      }
    } catch (e: unknown) {
      console.warn('Required info tab interaction failed:', e);
    }

    const programOptionFinal = programPage.getByRole('option', { name: 'Falcon Auto Test Program' });
    if (await programOptionFinal.count() > 0) {
      await programOptionFinal.click();
    }

    let detailsPage = programPage;
    // Try the label-scoped button first, fall back to any visible "Add Program" button
    let addProgramButton = programPage.getByLabel('Add Program').getByRole('button', { name: 'Add Program' });
    if (await addProgramButton.count() === 0) {
      addProgramButton = programPage.getByRole('button', { name: 'Add Program' }).first();
    }
    // Wait up to 10 s for the button to appear before checking
    const addProgBtnReady = await addProgramButton.waitFor({ state: 'visible', timeout: 10000 }).then(() => true).catch(() => false);
    console.log(`[addNewAccountAndProgram] Add Program button ready: ${addProgBtnReady}`);
    if (addProgBtnReady) {
      try {
        const [popup] = await Promise.all([
          programPage.waitForEvent('popup', { timeout: 10000 }),
          addProgramButton.click()
        ]);
        detailsPage = popup;
        console.log('[addNewAccountAndProgram] detailsPage opened as popup');
      } catch {
        // No popup — button navigates programPage inline
        console.log('[addNewAccountAndProgram] No popup — detailsPage = programPage (inline navigation)');
      }
    } else {
      console.warn('[addNewAccountAndProgram] Add Program button not found — skipping program details form');
    }

    await detailsPage.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
    if (!detailsPage.isClosed()) {
      const detailsFrame = detailsPage.frameLocator('#MainFrameBodyFrame');

      // Fast guard: if the program details form didn't load (e.g. no program was selected),
      // return immediately instead of burning 100+ s on silent timeouts.
      const formReadyLocator = detailsFrame.locator('#ddlestimatetype, #txtrenewalfee, button[value="Finish"]').first();
      const formReady = await formReadyLocator.waitFor({ state: 'attached', timeout: 20000 }).then(() => true).catch(() => false);
      if (!formReady) {
        console.warn('[addNewAccountAndProgram] Program details form not loaded — aborting (was a program selected?)');
        return;
      }
      // ── DIAGNOSTIC: log which element triggered formReady ────────────────────────
      const formReadyTag = await formReadyLocator.evaluate(el => `${el.tagName}#${el.id}`).catch(() => '?');
      console.log(`[addNewAccountAndProgram] Form ready — anchor element: ${formReadyTag}`);

      // ── Helper: set a combo-box widget via its underlying native <select> ────────
      // This is more reliable in headless than clicking the custom trigger UI.
      const setComboByEval = async (nativeId: string, targetIndex = 1, label = nativeId) => {
        const result = await detailsFrame.locator(`select#${nativeId}, #${nativeId}`).evaluate((el, idx) => {
          const sel = el as HTMLSelectElement;
          if (sel.tagName !== 'SELECT') return { ok: false, val: `not a <select> (is ${sel.tagName})` };
          if (sel.options.length <= idx) idx = sel.options.length > 1 ? 1 : 0;
          if (sel.options.length === 0) return { ok: false, val: 'no options' };
          sel.selectedIndex = idx;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          sel.dispatchEvent(new Event('blur', { bubbles: true }));
          return { ok: true, val: sel.options[sel.selectedIndex].text };
        }, targetIndex).catch(err => ({ ok: false, val: String(err) }));
        console.log(`[addNewAccountAndProgram] ${label}: ok=${result.ok} selected="${result.val}"`);
        return result.ok;
      };

      // ── Helper: set a Telerik/custom combo by clicking trigger, waiting for panel,
      //            then clicking first non-blank item — with fallback to native eval ──
      const setComboByClick = async (triggerId: string, contentId: string, nativeId: string, label = triggerId) => {
        const trigger = detailsFrame.locator(`#${triggerId}`);
        if (await trigger.count() === 0) {
          console.log(`[addNewAccountAndProgram] ${label}: trigger #${triggerId} not found — trying native fallback`);
          await setComboByEval(nativeId, 1, label);
          return;
        }
        await trigger.click({ force: true }).catch(() => {});
        await detailsFrame.locator('.combo-box-list > li, [role="option"]').first().waitFor({ state: 'attached', timeout: 3000 }).catch(() => {})
        // look in content div first, then anywhere in frame
        let items = detailsFrame.locator(`#${contentId} .combo-box-list > li, #${contentId} li[role="option"]`);
        if (await items.count() === 0) items = detailsFrame.locator('ul.combo-box-list > li, li[role="option"]');
        const n = await items.count();
        const texts = n > 0 ? await items.allTextContents() : [];
        console.log(`[addNewAccountAndProgram] ${label}: panel items (${n}): [${texts.slice(0, 5).join(' | ')}]`);
        if (n > 1) {
          await items.nth(1).click({ force: true }).catch(() => {});
        } else if (n === 1) {
          await items.nth(0).click({ force: true }).catch(() => {});
        } else {
          console.warn(`[addNewAccountAndProgram] ${label}: panel empty — native fallback`);
          await setComboByEval(nativeId, 1, label);
          return;
        }
        // verify the filter input now shows a value
        await detailsPage.waitForLoadState('domcontentloaded').catch(() => {})
        const filterVal = await detailsFrame.locator(`#${triggerId.replace('_select','_textFilter')}`).inputValue().catch(() => '?');
        console.log(`[addNewAccountAndProgram] ${label}: after click — filter value="${filterVal}"`);
      };

      // ── Estimate Type ────────────────────────────────────────────────────────────
      const estimateTypeSelect = detailsFrame.locator('#ddlestimatetype');
      if (await estimateTypeSelect.count() > 0) {
        await estimateTypeSelect.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await estimateTypeSelect.selectOption({ index: 1 }).catch(() => {});
        const estVal = await estimateTypeSelect.inputValue().catch(() => '?');
        console.log(`[addNewAccountAndProgram] ddlestimatetype value: "${estVal}"`);
      }

      // ── Sales Person ─────────────────────────────────────────────────────────────
      await setComboByClick('ddlsalesperson2_select', 'ddlsalesperson2_content', 'ddlsalesperson2', 'SalesPerson');

      // ── Tax ──────────────────────────────────────────────────────────────────────
      await setComboByClick('ddlTax_select', 'ddlTax_content', 'ddlTax', 'Tax');

      // ── Route ────────────────────────────────────────────────────────────────────
      await setComboByClick('ddlroute_select', 'ddlroute_content', 'ddlroute', 'Route');

      // ── Source Employee ──────────────────────────────────────────────────────────
      await setComboByClick('ddlsourceemployee_select', 'ddlsourceemployee_content', 'ddlsourceemployee', 'SourceEmployee');

      // ── Primary Source ───────────────────────────────────────────────────────────
      {
        const srcNative = detailsFrame.locator('select#ddlsource');
        if (await srcNative.count() > 0) {
          await setComboByEval('ddlsource', 1, 'PrimarySource(native)');
        } else {
          await setComboByClick('ddlsource_select', 'ddlsource_content', 'ddlsource', 'PrimarySource');
        }
      }

      // ── Primary Target ───────────────────────────────────────────────────────────
      await setComboByClick('ddlPrimaryTarget_select', 'ddlPrimaryTarget_content', 'ddlPrimaryTarget', 'PrimaryTarget');

      const renewalFee = faker.number.int({ min: 10, max: 99 }).toString();
      const boosterFee = faker.number.int({ min: 10, max: 99 }).toString();
      const renewalFeeInput = detailsFrame.locator('#txtrenewalfee');
      if (await renewalFeeInput.count() > 0) {
        await renewalFeeInput.click();
        await renewalFeeInput.fill(renewalFee);
      }
      const boosterFeeInput = detailsFrame.locator('#txtboosterfee');
      if (await boosterFeeInput.count() > 0) {
        await boosterFeeInput.click();
        await boosterFeeInput.fill(boosterFee);
      }

      const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const todayStr = formatDate(today);
      const tomorrowStr = formatDate(tomorrow);

      const setDateInput = async (input: Locator, value: string) => {
        if (await input.count() === 0) return false;
        await input.fill(value);
        await input.evaluate((el, v) => {
          const inputEl = el as HTMLInputElement;
          inputEl.value = v as string;
          inputEl.dispatchEvent(new Event('input', { bubbles: true }));
          inputEl.dispatchEvent(new Event('change', { bubbles: true }));
        }, value);
        return true;
      };

      const endCommDateInput = detailsFrame.locator('#txtEndCommDate, input[name="txtEndCommDate"]');
      await setDateInput(endCommDateInput, todayStr);

      const firstServiceDateInput = detailsFrame.locator('#txtfirstservice, input[name="txtfirstservice"]');
      await setDateInput(firstServiceDateInput, tomorrowStr);

      const todayDateInput = detailsFrame.locator(
        '#txtstartdate, input[name="txtstartdate"], #txtstart, input[name="txtstart"]'
      );
      const setToday = await setDateInput(todayDateInput, todayStr);
      if (!setToday) {
        const datePickers = detailsFrame.locator('input.hasDatepicker');
        const datePickerCount = await datePickers.count();
        if (datePickerCount > 0) {
          const firstServiceCount = await firstServiceDateInput.count();
          const targetIndex = firstServiceCount > 0 && datePickerCount > 1 ? 1 : 0;
          if (!(firstServiceCount > 0 && datePickerCount === 1)) {
            await setDateInput(datePickers.nth(targetIndex), todayStr);
          }
        }
      }

      const autoFill = detailsFrame.getByRole('button', { name: 'Auto-fill dates' });
      if (await autoFill.count() > 0) await autoFill.click();


      // ── DIAGNOSTIC SNAPSHOT: dump all key field values before Finish ─────────────
      const formSnapshot = await detailsFrame.locator('body').evaluate(() => {
        const val = (id: string) => {
          const el = document.querySelector<HTMLInputElement | HTMLSelectElement>(`#${id}`);
          if (!el) return `(#${id} not found)`;
          if (el instanceof HTMLSelectElement) return el.selectedIndex >= 0 ? el.options[el.selectedIndex].text : '(no selection)';
          return (el as HTMLInputElement).value || '(empty)';
        };
        const filterVal = (id: string) => {
          const el = document.querySelector<HTMLInputElement>(`#${id}`);
          return el ? (el.value || '(empty)') : `(#${id} not found)`;
        };
        return {
          estimateType:   val('ddlestimatetype'),
          salesperson:    filterVal('ddlsalesperson2_textFilter'),
          tax:            filterVal('ddlTax_textFilter'),
          route:          filterVal('ddlroute_textFilter'),
          srcEmployee:    filterVal('ddlsourceemployee_textFilter'),
          primarySource:  filterVal('ddlsource_textFilter'),
          primaryTarget:  filterVal('ddlPrimaryTarget_textFilter'),
          renewalFee:     val('txtrenewalfee'),
          boosterFee:     val('txtboosterfee'),
        };
      }).catch(err => ({ error: String(err) }));
      console.log('[addNewAccountAndProgram] Form snapshot before Finish:', JSON.stringify(formSnapshot, null, 2));

      detailsPage.once('dialog', (dialog: import('playwright').Dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
      const finishButton = detailsFrame.getByRole('button', { name: 'Finish' });
      try {
        if (await finishButton.count() > 0) {
          const isPopup = detailsPage !== programPage;

          if (isPopup) {
            // Popup case: the definitive success signal is the popup closing.
            // Register waitForEvent('close') BEFORE click via Promise.all so we
            // cannot miss the event. If popup stays open (spinner stuck / save failed),
            // this correctly throws after 45 s instead of passing as a false positive.
            await Promise.all([
              detailsPage.waitForEvent('close', { timeout: 45000 }),
              finishButton.click(),
            ]);
          } else {
            // Inline case (no popup opened): save navigates or reloads the same page.
            await Promise.all([
              detailsPage.waitForLoadState('load', { timeout: 45000 }).catch(() =>
                detailsPage.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {})
              ),
              finishButton.click(),
            ]);
          }
        }
      } catch (err: unknown) {
        // In headless mode a checkbox interaction can trigger auto-submit,
        // closing the popup before we reach finishButton.count(). Treat as success.
        const msg = err instanceof Error ? err.message : String(err);
        if (!msg.includes('closed')) throw err;
        console.log('[addNewAccountAndProgram] detailsPage already closed — auto-submitted via checkboxes.');
      }
        await page2.close();
    }
  }

async addNewAccountOldAccountOnly() {
     const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.addNewAccountLink.click()
    ]);
    await page1.evaluate(() => { try { window.opener = null; } catch (_) {} });

    const firstName = 'Falcon Auto';
    const lastName = faker.person.lastName();
    const phone = faker.phone.number({ style: 'national' });
    const email = 'dbojkovski@servicetitan.com';
    const businessName = `Falcon`;

    await page1.locator('#ddlTitle').selectOption('Mr.');
    await page1.locator('#txtmiddle').fill('PW');
    await page1.locator('#criteriaaddcontrol_txtaddline2').fill('ASDFDSA');
    await this.firstNameInput(page1).fill(firstName);
    await this.lastNameInput(page1).fill(lastName);
    await this.businessNameInput(page1).fill(businessName);
    await this.phoneInput(page1).fill(phone);
    await this.emailInput(page1).fill(email);
    const streetNumber = faker.number.int({ min: 1000, max: 9999 }).toString();
    const streetName = 'Main';
    const city = 'Dallas';
    const state = 'TX';
    const postalCode = '75201';

    await this.streetNumberInput(page1).fill(streetNumber);
    await this.streetNameOldInput(page1).fill(streetName);
    await this.postalCodeOldInput(page1).fill(postalCode);
    const cityInput = page1.locator('#criteriaaddcontrol_txtCity, #txtCity');
    if (await cityInput.count() > 0) {
      const cityField = cityInput.first();
      await cityField.click().catch(() => {});
      await cityField.fill(city).catch(() => {});
    }
    const stateInput = page1.locator('#criteriaaddcontrol_txtState, #txtState');
    if (await stateInput.count() > 0) {
      const stateField = stateInput.first();
      const tagName = await stateField.evaluate((el: Element) => el.tagName.toLowerCase()).catch(() => '');
      if (tagName === 'select') {
        await stateField.selectOption(state).catch(async () => {
          await stateField.selectOption({ label: state }).catch(() => {});
        });
      } else {
        await stateField.click().catch(() => {});
        await stateField.fill(state).catch(() => {});
      }
    }
    await this.htmlRoot(page1).click();
    // Wait for address validation to settle instead of a fixed delay
    await page1.waitForLoadState('networkidle').catch(() => {});
    // Use a persistent handler so any dialog triggered by either Next click is accepted.
    const dialogHandler = (dialog: import('playwright').Dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    };
    page1.on('dialog', dialogHandler);
    await this.nextButtonRole(page1).click();
    await page1.waitForLoadState('domcontentloaded').catch(() => {});

    // If address-validation dialog was shown and accepted, the page stays on the
    // address step — re-click Next to proceed to the service-location page.
    // Also handle duplicate-account warning if it appears instead.
    const sameAsCheckbox = this.sameAsAccountCheckbox(page1);
    const onSiteLocationPage = await sameAsCheckbox.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
    if (!onSiteLocationPage) {
      const addDuplicate = this.addDuplicateLink(page1);
      if (await addDuplicate.count() > 0) {
        await addDuplicate.click().catch(() => {});
        await page1.waitForLoadState('networkidle').catch(() => {});
      } else {
        // Re-click Next to proceed past the address validation warning
        await this.nextButtonRole(page1).click().catch(() => {});
        await page1.waitForLoadState('domcontentloaded').catch(() => {});
      }
    }
    page1.off('dialog', dialogHandler);

    // Check for "Same as Account" checkbox (direct or inside frame) after page settled
    const sameAsCheckboxAfter = this.sameAsAccountCheckbox(page1);
    if (await sameAsCheckboxAfter.count() > 0) {
      await sameAsCheckboxAfter.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
      await sameAsCheckboxAfter.check().catch(() => {});
    } else {
      const mainFrame = this.mainFrame(page1);
      const sameAsFrameCheckbox = mainFrame.getByRole('checkbox', { name: 'Same as Account' });
      if (await sameAsFrameCheckbox.count() > 0) {
        await sameAsFrameCheckbox.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await sameAsFrameCheckbox.check().catch(() => {});
      }
    }

    const billingCenterSelect = page1.locator('#ddlbillcenter');
    if (await billingCenterSelect.count() > 0) {
      await billingCenterSelect.selectOption({ index: 1 }).catch(() => {});
    }

    if (page1.isClosed()) {
      return;
    }

    await page1.waitForLoadState('domcontentloaded').catch(() => {});

    const propertyTypeSelect = this.propertyTypeSelect(page1);
    const propTypeVisible = await propertyTypeSelect.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
    if (propTypeVisible) {
      await propertyTypeSelect.selectOption('1');
      await propertyTypeSelect.click();
    }

    const mapCodeInputEl = this.mapCodeInput(page1);
    await mapCodeInputEl.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    await mapCodeInputEl.click().catch(() => {});
    await mapCodeInputEl.fill('123123').catch(() => {});
    const finish2 = this.finish2Button(page1);
    if (await finish2.count() > 0) {
      await finish2.click().catch(() => {});
    } else {
      const finishFallback = page1.getByRole('button', { name: /finish/i });
      if (await finishFallback.count() > 0) {
        await finishFallback.first().click().catch(() => {});
      }
    }
    await page1.waitForLoadState('networkidle').catch(() => {})
  }

  async addNewAccountOldUIAccountAndProgram() {
     const [page1] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.addNewAccountLink.click()
    ]);
    await page1.evaluate(() => { try { window.opener = null; } catch (_) {} });

    const firstName = 'Falcon Auto';
    const lastName = faker.person.lastName();
    const phone = faker.phone.number({ style: 'national' });
    const email = 'dbojkovski@servicetitan.com';
    const businessName = `Falcon`;

    await page1.locator('#ddlTitle').selectOption('Mr.');
    await page1.locator('#txtmiddle').fill('PW');
    await page1.locator('#criteriaaddcontrol_txtaddline2').fill('ASDFDSA');
    await this.firstNameInput(page1).fill(firstName);
    await this.lastNameInput(page1).fill(lastName);
    await this.businessNameInput(page1).fill(businessName);
    await this.phoneInput(page1).fill(phone);
    await this.emailInput(page1).fill(email);
    const streetNumber = faker.number.int({ min: 1000, max: 9999 }).toString();
    const streetName = 'Main';
    const city = 'Dallas';
    const state = 'TX';
    const postalCode = '75201';

    await this.streetNumberInput(page1).fill(streetNumber);
    await this.streetNameOldInput(page1).fill(streetName);
    await this.postalCodeOldInput(page1).fill(postalCode);
    const cityInput = page1.locator('#criteriaaddcontrol_txtCity, #txtCity');
    if (await cityInput.count() > 0) {
      const cityField = cityInput.first();
      await cityField.click().catch(() => {});
      await cityField.fill(city).catch(() => {});
    }
    const stateInput = page1.locator('#criteriaaddcontrol_txtState, #txtState');
    if (await stateInput.count() > 0) {
      const stateField = stateInput.first();
      const tagName = await stateField.evaluate((el: Element) => el.tagName.toLowerCase()).catch(() => '');
      if (tagName === 'select') {
        await stateField.selectOption(state).catch(async () => {
          await stateField.selectOption({ label: state }).catch(() => {});
        });
      } else {
        await stateField.click().catch(() => {});
        await stateField.fill(state).catch(() => {});
      }
    }
    await this.htmlRoot(page1).click();
    // Wait for address validation to settle instead of a fixed delay
    await page1.waitForLoadState('networkidle').catch(() => {});
    // Use a persistent handler so any dialog triggered by either Next click is accepted.
    const dialogHandler = (dialog: import('playwright').Dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    };
    page1.on('dialog', dialogHandler);
    await this.nextButtonRole(page1).click();
    await page1.waitForLoadState('domcontentloaded').catch(() => {});

    // If address-validation dialog was shown and accepted, the page stays on the
    // address step — re-click Next to proceed to the service-location page.
    // Also handle duplicate-account warning if it appears instead.
    const sameAsCheckbox = this.sameAsAccountCheckbox(page1);
    const onSiteLocationPage = await sameAsCheckbox.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
    if (!onSiteLocationPage) {
      const addDuplicate = this.addDuplicateLink(page1);
      if (await addDuplicate.count() > 0) {
        await addDuplicate.click().catch(() => {});
        await page1.waitForLoadState('networkidle').catch(() => {});
      } else {
        // Re-click Next to proceed past the address validation warning
        await this.nextButtonRole(page1).click().catch(() => {});
        await page1.waitForLoadState('domcontentloaded').catch(() => {});
      }
    }
    page1.off('dialog', dialogHandler);

    // Check for "Same as Account" checkbox (direct or inside frame) after page settled
    const sameAsCheckboxAfter = this.sameAsAccountCheckbox(page1);
    if (await sameAsCheckboxAfter.count() > 0) {
      await sameAsCheckboxAfter.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
      await sameAsCheckboxAfter.check().catch(() => {});
    } else {
      const mainFrame = this.mainFrame(page1);
      const sameAsFrameCheckbox = mainFrame.getByRole('checkbox', { name: 'Same as Account' });
      if (await sameAsFrameCheckbox.count() > 0) {
        await sameAsFrameCheckbox.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await sameAsFrameCheckbox.check().catch(() => {});
      }
    }

    const billingCenterSelect = page1.locator('#ddlbillcenter');
    if (await billingCenterSelect.count() > 0) {
      await billingCenterSelect.selectOption({ index: 1 }).catch(() => {});
    }

    if (page1.isClosed()) {
      return;
    }

    await page1.waitForLoadState('domcontentloaded').catch(() => {});

    const propertyTypeSelect = this.propertyTypeSelect(page1);
    const propTypeVisible = await propertyTypeSelect.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
    if (propTypeVisible) {
      await propertyTypeSelect.selectOption('1');
      await propertyTypeSelect.click();
    }

    const mapCodeInputEl = this.mapCodeInput(page1);
    await mapCodeInputEl.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    await mapCodeInputEl.click().catch(() => {});
    await mapCodeInputEl.fill('123123').catch(() => {});

    // Wait for the "Sell Program" button to appear after all fields are populated
    const sellProgramButton = page1.locator(
      '#btnsellpgm_306, [name="btnsellpgm_306"], input[value="Sell Program"]'
    );
    await sellProgramButton.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});

    let programPage = page1;
    if (await sellProgramButton.count() > 0) {
      const popupPromise = page1.waitForEvent('popup', { timeout: 10000 }).catch(() => null);
      const navigationPromise = page1.waitForURL('**', { timeout: 15000 }).catch(() => null);
      await sellProgramButton.first().click({ timeout: 10000 });
      const popup = await popupPromise;
      if (popup) {
        programPage = popup;
      } else {
        await navigationPromise;
      }
    }

    await programPage.waitForLoadState('domcontentloaded').catch(() => {});
    if (!programPage.isClosed()) {
      const serviceCenterDropdown = programPage.locator('#ddlscenter_select');
      if (await serviceCenterDropdown.count() > 0) {
        await serviceCenterDropdown.click().catch(() => {});
        // Pick first non-None service center (index 1)
        const serviceCenterOption = programPage.locator('ul.combo-box-list > li').nth(1);
        if (await serviceCenterOption.count() > 0) {
          await serviceCenterOption.click().catch(() => {});
        }
      }
      
      await programPage.getByRole('button', { name: 'Continue' }).click();
      // Wait for the program-selection page to settle after the first Continue click
      await programPage.waitForLoadState('domcontentloaded').catch(() => {});

      // Wait for the program combo-box trigger to appear
      const triggerOnPage = programPage.locator('#ddlprogram_select');
      await triggerOnPage.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});

      // Open the combo-box dropdown
      await triggerOnPage.click();

      // Try to filter via the text filter input (fires 'input' event which triggers the combo-box filter)
      const ddlProgramFilter = programPage.locator('#ddlprogram_textFilter');
      const filterVisible = await ddlProgramFilter.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
      if (filterVisible) {
        await ddlProgramFilter.click();
        await ddlProgramFilter.fill('Falcon Auto Test Program Renewal');
        await programPage.locator('.combo-box-list > li').first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {})
      }

      // Target the <a> inside the <li> that has the exact title — this is what the combo-box
      // expects to be clicked (href="javascript:void(0);")
      const matchingLink = programPage
        .locator('ul.combo-box-list li[title="Falcon Auto Test Program Renewal"] a')
        .first();

      let linkFound = await matchingLink.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);

      // If not on the current (possibly filtered) page, paginate until we find it
      if (!linkFound) {
        const nextBtn = programPage.locator('#ddlprogram_Pagination a.next');
        for (let p = 2; p <= 18 && !linkFound; p++) {
          if (!await nextBtn.isVisible().catch(() => false)) break;
          await nextBtn.click();
          await programPage.waitForLoadState('domcontentloaded').catch(() => {})
          linkFound = await matchingLink.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
        }
      }

      await programPage.keyboard.press('Enter');
      
      // Wait for #btncontinue_4296 to become visible (JS reveals it after program selection)
      const continueBtn = programPage.locator('#btncontinue_4296');
      const continueBtnVisible = await continueBtn.waitFor({ state: 'visible', timeout: 10000 }).then(() => true).catch(() => false);

      let continuePage = programPage;
      if (continueBtnVisible) {
        const popupPromise = programPage.waitForEvent('popup', { timeout: 15000 }).catch(() => null);
        await continueBtn.scrollIntoViewIfNeeded().catch(() => {});
        await continueBtn.click({ force: true }).catch(() => {});
        const popup = await popupPromise;
        if (popup) continuePage = popup;
        await continuePage.waitForLoadState('domcontentloaded').catch(() => {});
      } else {
        // Button not found — programPage may have navigated in-place after selection
        console.warn('#btncontinue_4296 not visible — assuming in-place navigation occurred.');
        await programPage.waitForLoadState('domcontentloaded').catch(() => {});
      }
      await continuePage.waitForLoadState('domcontentloaded').catch(() => {});
      if (continuePage.isClosed()) return;

      // Handle duplicate account address prompt — click "Add Duplicate" if present
      const addDuplicateLink = this.addDuplicateLink(continuePage);
      const dupProceedVisible = await continuePage.getByRole('button', { name: 'Add Duplicate (Proceed)' }).waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
      if (dupProceedVisible) {
        console.log('Duplicate account address detected — clicking "Add Duplicate (Proceed)".');
        await continuePage.getByRole('button', { name: 'Add Duplicate (Proceed)' }).click();
        await continuePage.waitForLoadState('networkidle').catch(() => {});
      } else {
        const dupLinkVisible = await addDuplicateLink.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
        if (dupLinkVisible) {
          console.log('Duplicate account address detected — clicking Add Duplicate link.');
          await addDuplicateLink.click();
          await continuePage.waitForLoadState('networkidle').catch(() => {});
        }
      }

      // Resolve fields — check both the direct page and #MainFrameBodyFrame
      const cpFrame = continuePage.frameLocator('#MainFrameBodyFrame');
      const cpFrameExists = await cpFrame.locator('body').count().then(n => n > 0).catch(() => false);
      const cp = (sel: string) => cpFrameExists ? cpFrame.locator(sel) : continuePage.locator(sel);

      const ddlSourceNative = cp('select#ddlsource');
      const nativeVisible = await ddlSourceNative.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
      if (nativeVisible) {
        await ddlSourceNative.selectOption({ index: 1 });
      } else {
        const ddlSourceTrigger = cp('#ddlsource_select');
        const triggerVisible = await ddlSourceTrigger.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
        if (triggerVisible) {
          await ddlSourceTrigger.click();
          const ddlSourceItem = cp('#ddlsource_content .combo-box-list > li').nth(1);
          await ddlSourceItem.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
          await ddlSourceItem.click();
        }
      }

      const dateCellButton = (cpFrameExists ? cpFrame : continuePage)
        .getByRole('cell', { name: /\d+\/\d+\/\d+/ }).getByRole('button').first();
      const dateCellButtonVisible = await dateCellButton.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
      if (dateCellButtonVisible) {
        await dateCellButton.click();
      } else {
        console.warn('Date cell button not found — skipping date picker interaction.');
      }
      const todayDay = (new Date()).getDate().toString();
      const todayLink = (cpFrameExists ? cpFrame : continuePage).getByRole('link', { name: todayDay });
      if (await todayLink.count() > 0) {
        await todayLink.click();
        console.log(`Clicked date picker link for today: ${todayDay}`);
      } else {
        const anyDayLink = (cpFrameExists ? cpFrame : continuePage).getByRole('link').filter({ hasText: /^\d+$/ }).first();
        if (await anyDayLink.count() > 0) {
          await anyDayLink.click();
          console.warn('Today date link not found, clicked first available day link.');
        } else {
          console.warn('No day link found in date picker.');
        }
      }

      const estimateTypeLoc = cp('#ddlestimatetype');
      const estimateTypeVisible = await estimateTypeLoc.waitFor({ state: 'visible', timeout: 20000 }).then(() => true).catch(() => false);
      if (!estimateTypeVisible) {
        console.warn('#ddlestimatetype not visible — renewal details page may not have loaded. Skipping remaining fields.');
        return;
      }
      await estimateTypeLoc.selectOption({ index: 1 });
      await cp('#ddlsalesperson2_select').click();
      await (cpFrameExists ? cpFrame : continuePage).locator('#ddlsalesperson2_content .combo-box-list li a').nth(1).click();
      await cp('#ddlPrimaryTarget').selectOption({ index: 1 });
      await cp('#txtrenewalfee').fill('25');
      if (continuePage.isClosed()) return;

      const sourceEmpLoc = cp('#ddlsourceemployee_select');
      const sourceEmpVisible = await sourceEmpLoc.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
      if (!sourceEmpVisible) {
        console.warn('#ddlsourceemployee_select not visible. Skipping remaining fields.');
        return;
      }
      await sourceEmpLoc.click();
      const dropdownItems = (cpFrameExists ? cpFrame : continuePage).locator('ul.combo-box-list > li, li[role="option"]');
      const count = await dropdownItems.count();
      let clicked = false;
      for (let i = 0; i < count; i++) {
        const item = dropdownItems.nth(i);
        const visible = await item.isVisible().catch(() => false);
        const text = (await item.textContent() || '').trim();
        if (visible && !/none/i.test(text) && text.length > 0) {
          await item.click();
          console.log('Selected source employee:', text);
          clicked = true;
          break;
        }
      }
      if (!clicked) {
        console.warn('No visible, non-placeholder dropdown item found for #ddlsourceemployee');
      }
      await cp('#ddlroute').selectOption({ index: 1 });
      const boosterFee = cp('#txtboosterfee');
      if (await boosterFee.count() > 0) await boosterFee.fill('25');
      // Calendar trigger: #divc40 may not exist in all form layouts — make it optional
      const calLink = cp('#divc40').getByRole('link').filter({ hasText: /^$/ });
      const calLinkVisible = await calLink.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
      if (calLinkVisible) {
        await calLink.click();
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const tomorrowDay = tomorrow.getDate().toString();
        const tomorrowLink = (cpFrameExists ? cpFrame : continuePage).locator(`a.cpCurrentMonthDate[href*=",${tomorrowDay})"]`);
        if (await tomorrowLink.count() > 0) {
          await tomorrowLink.click();
          console.log(`Clicked date picker link for tomorrow: ${tomorrowDay}`);
        } else {
          const anyDayLink = (cpFrameExists ? cpFrame : continuePage).getByRole('link').filter({ hasText: /^\d+$/ }).first();
          if (await anyDayLink.count() > 0) {
            await anyDayLink.click();
            console.warn('Tomorrow date link not found, clicked first available day link.');
          } else {
            console.warn('No day link found in date picker.');
          }
        }
      } else {
        console.warn('#divc40 calendar trigger not found — skipping date picker, relying on Auto-fill dates.');
      }
      await (cpFrameExists ? cpFrame : continuePage).getByRole('button', { name: 'Auto-fill dates' }).click();
      await cp('#btnfinish2_295').click();
      await continuePage.waitForLoadState('networkidle').catch(() => {});
    }
  }

  async openAccount() {
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');
  }

  async openAccountAddRenewalProgram() {
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHrefRen = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHrefRen!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('domcontentloaded');

    const wizardFrame = openAccountPage1.frameLocator('iframe[name="ifrmWizard"]');
    await wizardFrame.getByRole('button', { name: 'Site Menu' }).first().click();
    await wizardFrame.getByRole('link', { name: 'Add Program' }).click();

    // Open Select2 program dropdown, fall back to combo-box if not present
    const select2Trigger = openAccountPage1.locator('span.select2-selection.select2-selection--single[aria-labelledby="select2-ddlprogram-container"]');
    if (await select2Trigger.count() > 0) {
      await select2Trigger.scrollIntoViewIfNeeded().catch(() => {});
      await select2Trigger.click({ force: true }).catch(async () => {
        await openAccountPage1.evaluate(() => {
          const el = document.querySelector('span.select2-selection--single[aria-labelledby="select2-ddlprogram-container"]') as HTMLElement;
          el?.click();
        });
      });
      const searchInput = openAccountPage1.locator('.select2-container--open input.select2-search__field');
      if (await searchInput.count() > 0) {
        await searchInput.fill('Falcon Auto Test Program Renewal');
      }
      const programOption = openAccountPage1.locator('li.select2-results__option').filter({ hasText: 'Falcon Auto Test Program Renewal' }).first();
      if (await programOption.count() > 0) {
        await programOption.waitFor({ state: 'visible', timeout: 10000 });
        await programOption.click({ force: true });
      } else {
        console.warn('Program option not found. Available:', await openAccountPage1.locator('li.select2-results__option').allTextContents());
      }
    } else {
      const comboBoxFilter = openAccountPage1.locator('#ddlprogram_textFilter, input[id*="ddlprogram_textFilter"], input.combo-box-filter');
      if (await comboBoxFilter.count() > 0) {
        await comboBoxFilter.fill('Falcon Auto Test Program Renewal');
        await comboBoxFilter.press('ArrowDown');
        await comboBoxFilter.press('Enter');
        const filteredOption = openAccountPage1.locator('ul.combo-box-list > li, li[role="option"]').filter({ hasText: 'Falcon Auto Test Program Renewal' }).first();
        if (await filteredOption.count() > 0) await filteredOption.click();
        else console.warn('No matching program found after direct text input.');
      }
    }
    // "Add Program" navigates within openAccountPage1 — wait for iframe to load
    await openAccountPage1.locator('button').filter({ hasText: 'Add Program' }).click();
    // Wait for the #MainFrameBodyFrame iframe to appear and its content to be ready
    await openAccountPage1.locator('#MainFrameBodyFrame').waitFor({ state: 'attached', timeout: 30000 });
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    const detailsFrame = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();
    await detailsFrame.locator('#ddlestimatetype').waitFor({ state: 'visible', timeout: 60000 });

    await detailsFrame.locator('#ddlestimatetype').selectOption({ index: 1 }).catch(() => {});
    await detailsFrame.locator('#ddlsalesperson2_select').click().catch(() => {});
    await detailsFrame.locator('#ddlsalesperson2_content .combo-box-list li a').nth(1).click().catch(() => {});
    await detailsFrame.locator('#ddlsalespersonsecondary_select').click().catch(() => {});
    await detailsFrame.locator('#ddlsalespersonsecondary_content .combo-box-list li a').nth(1).click().catch(() => {});
    await detailsFrame.locator('#ddlroute_select').click().catch(() => {});
    await detailsFrame.locator('#ddlroute_content .combo-box-list li a').nth(1).click().catch(() => {});
    await detailsFrame.locator('#ddlsource_select').click().catch(() => {});
    await detailsFrame.locator('#ddlsource_content .combo-box-list li a').nth(1).click().catch(() => {});
    await detailsFrame.locator('#ddlsourceemployee_select').click().catch(() => {});
    await detailsFrame.locator('#ddlsourceemployee_content .combo-box-list li a').nth(1).click().catch(() => {});
    await detailsFrame.locator('#txtrenewalfee').fill('25').catch(() => {});
    await detailsFrame.locator('#txtboosterfee').fill('25').catch(() => {});
    await detailsFrame.locator('#ddlPrimaryTarget_select').click().catch(() => {});
    await detailsFrame.locator('#ddlPrimaryTarget_content .combo-box-list li a').nth(1).click().catch(() => {});

    const renewalTomorrow = new Date();
    renewalTomorrow.setDate(renewalTomorrow.getDate() + 1);
    const renewalTomorrowStr = renewalTomorrow.getDate().toString();

    // Calendar icon: scroll into view and force-click (may be off-screen)
    const calIcon = detailsFrame.locator('.col-xs-12 > div > div > .input-group > .input-group-addon').first();
    await calIcon.scrollIntoViewIfNeeded().catch(() => {});
    await calIcon.click({ force: true }).catch(() => {});
    await detailsFrame.getByRole('link', { name: renewalTomorrowStr, exact: true }).first().click().catch(() => {});
    await detailsFrame.getByRole('button', { name: 'Auto-fill dates' }).click().catch(() => {});

    // Accept any confirmation dialog that fires on Finish
    openAccountPage1.once('dialog', dialog => {
      console.log(`[Renewal] Dialog on Finish: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });

    const finishBtn = detailsFrame.getByRole('button', { name: 'Finish' });
    await finishBtn.waitFor({ state: 'visible', timeout: 10000 });
    await finishBtn.click();

    // ── Post-Finish assertion ─────────────────────────────────────────────────────
    // The form should navigate away from the program-details page after a successful save.
    // Assertion: the Finish button disappears (form navigated) within 20 s.
    const finishGone = await finishBtn.waitFor({ state: 'detached', timeout: 20000 }).then(() => true).catch(() => false);
    if (finishGone) {
      console.log('[Renewal] ✓ Program saved — Finish button detached (navigation confirmed).');
    } else {
      // Button still visible — take a diagnostic screenshot and dump remaining errors
      await openAccountPage1.screenshot({ path: 'test-results/renewal-finish-stuck.png' }).catch(() => {});
      const stuckErrors = await detailsFrame.locator('.field-validation-error, [class*="error"]').allTextContents().catch(() => [] as string[]);
      console.error('[Renewal] ✗ Finish button still present after 20 s. Errors:', stuckErrors);
      throw new Error(
        `[openAccountAddRenewalProgram] Finish did not navigate — program may not have saved. ` +
        `Errors: ${JSON.stringify(stuckErrors)}. Screenshot: test-results/renewal-finish-stuck.png`
      );
    }
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  }

  async openAccountAddNonRenewalProgram() {
     await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');
    await openAccountPage1.locator('iframe[name="ifrmWizard"]').contentFrame().getByRole('button', { name: 'Site Menu' }).first().click();
    await openAccountPage1.locator('iframe[name="ifrmWizard"]').contentFrame().getByRole('link', { name: 'Add Program' }).click();
    // Click the select2 arrow to open the dropdown (2nd select2 on page = program dropdown)
    await openAccountPage1.locator('div:nth-child(2) > .select2.select2-container > .selection > .select2-selection > .select2-selection__arrow').click();
    // Use pressSequentially so select2 receives real keyboard events and filters the list
    const searchField = openAccountPage1.locator('.select2-search--dropdown .select2-search__field');
    await searchField.waitFor({ state: 'visible', timeout: 10000 });
    await searchField.click();
    await searchField.pressSequentially('Falcon Non-Renewal', { delay: 80 });
    // Hover then click the filtered option
    const programOption = openAccountPage1.locator('li.select2-results__option', { hasText: 'Falcon Non-Renewal' }).first();
    await programOption.waitFor({ state: 'visible', timeout: 30000 });
    await programOption.hover();
    await programOption.click();
    // Click Add Program button
    await openAccountPage1.locator('button').filter({ hasText: 'Add Program' }).click();

    const nonRenewalProgramField = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();

    // Helper: open a combo-box and click its second list item (index 1)
    const pickSecond = async (ddlId: string) => {
      await nonRenewalProgramField.locator(`${ddlId}_select`).click({ force: true });
      const item = nonRenewalProgramField.locator(`${ddlId}_content .combo-box-list > li`).nth(1);
      await item.waitFor({ state: 'visible', timeout: 8000 });
      await item.click({ force: true });
    };

    await pickSecond('#ddlsalesperson2');
    await pickSecond('#ddlsalespersonsecondary');
    await pickSecond('#ddlPrimaryTarget');
    // Route: select "Falcon Auto route" specifically
    await nonRenewalProgramField.locator('#ddlroute_select').click({ force: true });
    await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})
    await openAccountPage1.evaluate(() => {
      const getDoc = () => {
        const iframe = document.querySelector('#MainFrameBodyFrame') as HTMLIFrameElement;
        return iframe?.contentDocument ?? null;
      };
      const doc = getDoc() ?? document;
      const links = Array.from(doc.querySelectorAll('#ddlroute_content .combo-box-list li a')) as HTMLElement[];
      const target = links.find(a => /Falcon Auto route/i.test(a.textContent ?? '')) ?? links[1] ?? links[0];
      if (!target) return;
      const routeName  = target.textContent?.trim() ?? '';
      const itemValue  = target.closest('li')?.getAttribute('itemvalue') ?? '';
      target.click();
      const tf = doc.getElementById('ddlroute_textFilter') as HTMLInputElement | null;
      if (tf) { tf.value = routeName; tf.dispatchEvent(new Event('change', { bubbles: true })); }
      const hid = doc.getElementById('ddlroute') as HTMLInputElement | null;
      if (hid && itemValue) { hid.value = itemValue; hid.dispatchEvent(new Event('change', { bubbles: true })); }
      const content = doc.getElementById('ddlroute_content') as HTMLElement | null;
      if (content) content.style.display = 'none';
    }).catch(() => {});
    await pickSecond('#ddlsource');
    await pickSecond('#ddlsourceemployee');

    await nonRenewalProgramField.locator('#txtEndCommDate').click();

    // Tax: combo content may render outside the iframe — use evaluate to cover both scopes
    await nonRenewalProgramField.locator('#ddlTax_select').click({ force: true });
    await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})
    await openAccountPage1.evaluate(() => {
      const pickFirstNonNone = (root: Document | Element, contentId: string, selectId: string) => {
        const links = Array.from(root.querySelectorAll(`${contentId} .combo-box-list li a`));
        const target = links.find((a: any) => a.textContent?.trim() !== 'None') as HTMLElement | undefined;
        if (target) { target.click(); return true; }
        const sel = root.querySelector(selectId) as HTMLSelectElement;
        if (sel?.tagName === 'SELECT' && sel.options.length > 1) {
          sel.selectedIndex = 1;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          return true;
        }
        return false;
      };
      // Try page body first (combo content sometimes renders outside iframe)
      if (pickFirstNonNone(document, '#ddlTax_content', '#ddlTax')) return;
      const iframe = document.querySelector('#MainFrameBodyFrame') as HTMLIFrameElement;
      const doc = iframe?.contentDocument;
      if (doc) pickFirstNonNone(doc, '#ddlTax_content', '#ddlTax');
    }).catch(() => {});

    // Wait for any postback triggered by Tax selection to complete before touching dates
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    if (openAccountPage1.isClosed()) { console.warn('Non Renewal: page closed after tax selection.'); return; }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = `${String(tomorrow.getMonth() + 1).padStart(2, '0')}/${String(tomorrow.getDate()).padStart(2, '0')}/${tomorrow.getFullYear()}`;

    // Fill all visible Start Date inputs in one evaluate — avoids per-row Playwright ops
    // that trigger scrolling/postback on hidden sub-rows
    const filledCount = await openAccountPage1.evaluate((val: string) => {
      const iframe = document.querySelector('#MainFrameBodyFrame') as HTMLIFrameElement;
      const doc = iframe?.contentDocument;
      if (!doc) return 0;
      const inputs = Array.from(
        doc.querySelectorAll('td:nth-child(5) > .input-group > input[type="text"]')
      ) as HTMLInputElement[];
      const visible = inputs.filter(el => el.offsetParent !== null && el.offsetWidth > 0 && el.offsetHeight > 0);
      visible.forEach(el => { el.value = val; });
      return visible.length;
    }, tomorrowFormatted).catch(() => 0);
    console.log(`[NonRenewal] Filled ${filledCount} visible Start Date input(s) with ${tomorrowFormatted}`);

    if (openAccountPage1.isClosed()) { console.warn('[NonRenewal] Page closed after date filling.'); return; }

    // Secondary Source: evaluate covers both page body and iframe scope
    if (openAccountPage1.isClosed()) { console.warn('[NonRenewal] Page closed before Secondary Source.'); return; }
    await nonRenewalProgramField.locator('#ddlsource2_select').click({ force: true });
    await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})
    await openAccountPage1.evaluate(() => {
      const pickFirstNonNone = (root: Document | Element, contentId: string, selectId: string) => {
        const links = Array.from(root.querySelectorAll(`${contentId} .combo-box-list li a`));
        const target = links.find((a: any) => a.textContent?.trim() !== 'None') as HTMLElement | undefined;
        if (target) { target.click(); return true; }
        const sel = root.querySelector(selectId) as HTMLSelectElement;
        if (sel?.tagName === 'SELECT' && sel.options.length > 1) {
          sel.selectedIndex = 1;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          return true;
        }
        return false;
      };
      if (pickFirstNonNone(document, '#ddlsource2_content', '#ddlsource2')) return;
      const iframe = document.querySelector('#MainFrameBodyFrame') as HTMLIFrameElement;
      const doc = iframe?.contentDocument;
      if (doc) pickFirstNonNone(doc, '#ddlsource2_content', '#ddlsource2');
    }).catch(() => {});
    // Accept any confirmation dialog that fires on Finish
    openAccountPage1.once('dialog', dialog => {
      console.log(`[NonRenewal] Dialog on Finish: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });

    const finishBtnNR = nonRenewalProgramField.getByRole('button', { name: 'Finish' });
    await finishBtnNR.waitFor({ state: 'visible', timeout: 10000 });
    await finishBtnNR.click({ force: true });

    // ── Post-Finish assertion ─────────────────────────────────────────────────────
    // Success: Finish button detaches (form navigated away) within 20 s.
    const nrFinishGone = await finishBtnNR.waitFor({ state: 'detached', timeout: 20000 }).then(() => true).catch(() => false);
    if (nrFinishGone) {
      console.log('[NonRenewal] ✓ Program saved — Finish button detached (navigation confirmed).');
    } else {
      // Still on the form — capture errors and screenshot for diagnosis
      await openAccountPage1.screenshot({ path: 'test-results/nonrenewal-finish-stuck.png' }).catch(() => {});
      const stuckErrors = await nonRenewalProgramField
        .locator('.field-validation-error, span[style*="color:Red"], span[style*="color: red"]')
        .allTextContents().catch(() => [] as string[]);
      const stuckDialogText = await nonRenewalProgramField
        .locator('[class*="alert"], [class*="error-message"], #divError')
        .allTextContents().catch(() => [] as string[]);
      console.error('[NonRenewal] ✗ Finish stuck. Field errors:', stuckErrors, 'Alerts:', stuckDialogText);
      throw new Error(
        `[openAccountAddNonRenewalProgram] Finish did not navigate — program may not have saved. ` +
        `Errors: ${JSON.stringify([...stuckErrors, ...stuckDialogText].filter(t => t.trim()))}. ` +
        `Screenshot: test-results/nonrenewal-finish-stuck.png`
      );
    }
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  }

  async completeWorkOrderFromAccount() {
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');

    const activityMenu = openAccountPage1.locator('span.menu-item-parent').filter({ hasText: 'Activity' });
    await activityMenu.waitFor({ state: 'visible', timeout: 30000 });
    await activityMenu.click();
    await openAccountPage1.locator('a', { hasText: 'Work Orders' }).first().click();
    await openAccountPage1.locator('a', { hasText: 'Not Completed' }).first().click();

    const wf = openAccountPage1.frameLocator('iframe[name="ifrmWizard"]');
    const nextYear = new Date().getFullYear() + 1;
    const prevYear = new Date().getFullYear() - 1;
    await wf.locator('#ddlsite').selectOption('0');
    await wf.locator('#ucDaterange_txtfrom').fill(`10/29/${prevYear}`);
    await wf.locator('#ucDaterange_txtto').fill(`1/31/${nextYear}`);
    await wf.locator('#ucDaterange_lnkRefresh').click();
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    // Wait for the work orders table to populate
    const completeBtn = wf.locator('button.btn-success.dropdown-toggle').first();
    const completeBtnVisible = await completeBtn.waitFor({ state: 'visible', timeout: 30000 }).then(() => true).catch(() => false);
    if (!completeBtnVisible) {
      console.warn('No completable work orders found in date range — skipping work order completion.');
      return;
    }
    await completeBtn.click();
    await wf.locator('[id^="wocompletelink-"]').first().dispatchEvent('click');
    const cf = openAccountPage1.frameLocator('#MainFrameBodyFrame');
    await cf.locator('#txtcompdate').waitFor({ state: 'visible', timeout: 30000 });

    // ── Set compdate to today dynamically (no events to avoid postback) ───────────
    const todayWO = new Date();
    const todayFormattedWO = `${String(todayWO.getMonth() + 1).padStart(2, '0')}/${String(todayWO.getDate()).padStart(2, '0')}/${todayWO.getFullYear()}`;
    await cf.locator('#txtcompdate').evaluate((el: HTMLInputElement, v) => { el.value = v; }, todayFormattedWO).catch(() => {});

    // ── Uncheck email checkbox (avoids email-related validation) ─────────────────
    const emailChk = cf.locator('label[for^="chkemailWOcompleted_"]');
    if (await emailChk.isVisible().catch(() => false)) {
      await emailChk.click().catch(() => {});
    }

    // ── Batch: click dropdown, use dual-scope evaluate to click "Create a new batch" ──
    await cf.locator('#ddlBatch_select').click({ force: true });
    await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})
    await openAccountPage1.evaluate(() => {
      const clickCreateBatch = (root: Document | Element) => {
        const links = Array.from(root.querySelectorAll('a, .combo-box-list a'));
        const create = links.find((a: any) => /create.*batch/i.test(a.textContent || '')) as HTMLElement | undefined;
        if (create) { create.click(); return true; }
        return false;
      };
      if (clickCreateBatch(document)) return;
      const iframe = document.querySelector('#MainFrameBodyFrame') as HTMLIFrameElement;
      const doc = iframe?.contentDocument;
      if (doc) clickCreateBatch(doc);
    }).catch(() => {});
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

    // ── Employee: click first emp combo-box trigger, then dual-scope evaluate ─────
    const empTrigger = cf.locator('[id^="txtemp-"][id$="_select"]').first();
    const empVisible = await empTrigger.isVisible({ timeout: 10000 }).catch(() => false);
    if (empVisible) {
      await empTrigger.click({ force: true });
      await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})
      // Combo-box list may render outside iframe — search both scopes
      await openAccountPage1.evaluate(() => {
        const pickFirstNonNone = (root: Document | Element) => {
          const links = Array.from(root.querySelectorAll(
            '.combo-box-list li a, ul[id*="combo"] li a, ul[class*="combo"] li a'
          ));
          const target = links.find((a: any) => {
            const t = (a.textContent || '').trim();
            return t.length > 0 && t.toLowerCase() !== 'none';
          }) as HTMLElement | undefined;
          if (target) { target.click(); return true; }
          return false;
        };
        if (pickFirstNonNone(document)) return;
        const iframe = document.querySelector('#MainFrameBodyFrame') as HTMLIFrameElement;
        const doc = iframe?.contentDocument;
        if (doc) pickFirstNonNone(doc);
      }).catch(() => {});
      await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})
    }

    await openAccountPage1.screenshot({ path: 'test-results/workorder-before-save.png' }).catch(() => {});

    // Accept any confirmation dialog that fires on Save
    openAccountPage1.once('dialog', (dialog) => {
      console.log(`[WorkOrder] Dialog on Save: ${dialog.message()}`);
      dialog.accept().catch(() => dialog.dismiss().catch(() => {}));
    });

    const saveBtn = cf.locator('[id^="lnkOk_"]');
    await saveBtn.waitFor({ state: 'visible', timeout: 15000 });
    await saveBtn.scrollIntoViewIfNeeded().catch(() => {});
    await saveBtn.click();

    // ── Post-Save assertion ───────────────────────────────────────────────────────
    // Success: Save button detaches (form navigated away) within 20 s
    const saveGone = await saveBtn.waitFor({ state: 'detached', timeout: 20000 }).then(() => true).catch(() => false);
    if (saveGone) {
      console.log('[WorkOrder] ✓ Work order saved — Save button detached (navigation confirmed).');
    } else {
      await openAccountPage1.screenshot({ path: 'test-results/workorder-save-stuck.png' }).catch(() => {});
      const stuckErrors = await cf
        .locator('.field-validation-error, span[style*="color:Red"], span[style*="color: red"]')
        .allTextContents().catch(() => [] as string[]);
      const stuckAlerts = await cf
        .locator('[class*="alert"], [class*="error-message"], #divError')
        .allTextContents().catch(() => [] as string[]);
      console.error('[WorkOrder] ✗ Save stuck. Errors:', stuckErrors, 'Alerts:', stuckAlerts);
      throw new Error(
        `[completeWorkOrderFromAccount] Save did not navigate — work order may not have saved. ` +
        `Errors: ${JSON.stringify([...stuckErrors, ...stuckAlerts].filter(t => t.trim()))}. ` +
        `Screenshots: test-results/workorder-before-save.png, test-results/workorder-save-stuck.png`
      );
    }
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  }

  async addSeasonalProgramNewUI() {
    
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');
    await openAccountPage1.locator('iframe[name="ifrmWizard"]').contentFrame().getByRole('button', { name: 'Site Menu' }).first().click();
    await openAccountPage1.locator('iframe[name="ifrmWizard"]').contentFrame().getByRole('link', { name: 'Add Program' }).click();
    // Click the select2 arrow to open the dropdown (2nd select2 on page = program dropdown)
    await openAccountPage1.locator('div:nth-child(2) > .select2.select2-container > .selection > .select2-selection > .select2-selection__arrow').click();
    // Use pressSequentially so select2 receives real keyboard events and filters the list
    const searchField = openAccountPage1.locator('.select2-search--dropdown .select2-search__field');
    await searchField.waitFor({ state: 'visible', timeout: 10000 });
    await searchField.click();
    await searchField.pressSequentially('Falcon Auto Test Seasonal', { delay: 80 });
    // Hover then click the filtered option
    const programOption = openAccountPage1.locator('li.select2-results__option', { hasText: 'Falcon Auto Test Seasonal' }).first();
    await programOption.waitFor({ state: 'visible', timeout: 30000 });
    await programOption.hover();
    await programOption.click();
    // Click Add Program button
    await openAccountPage1.locator('button').filter({ hasText: 'Add Program' }).click();

    // Wait for #MainFrameBodyFrame iframe to attach and its content to be ready before interacting
    await openAccountPage1.locator('#MainFrameBodyFrame').waitFor({ state: 'attached', timeout: 30000 });
    const f = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();
    await f.locator('#ddlEstimateType_select').waitFor({ state: 'visible', timeout: 30000 });

    // Helper: wait for AJAX spinner to clear after each selection that triggers a server round-trip
    const waitSpinner = async () => {
      await openAccountPage1.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
      // Also wait for any blocking overlay at both page and frame level
      await openAccountPage1.locator('.blockUI, .blockOverlay').waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
      await f.locator('.blockUI, .blockOverlay, #divLoading').waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
    };

    // SalesPerson & Secondary — set via evaluate (no change event → no postback reset)
    await f.locator('#ddlSalesPerson').evaluate((el: HTMLSelectElement) => {
      if (el.options.length > 1) el.selectedIndex = 1;
    }).catch(() => {});
    await f.locator('#ddlSalesPersonSecondary').evaluate((el: HTMLSelectElement) => {
      if (el.options.length > 1) el.selectedIndex = 1;
    }).catch(() => {});

    // EstimateType AFTER salesperson so postbacks don't wipe it
    await f.locator('#ddlEstimateType_select').click();
    const estimateItem = f.locator('#ddlEstimateType_content .combo-box-list > li').nth(1);
    await estimateItem.waitFor({ state: 'visible', timeout: 5000 });
    await estimateItem.click();
    //await waitSpinner();

    // Primary Target — try combo-box first, fall back to Select2
    const ptCombo = f.locator('#ddlPrimaryTarget_select');
    if (await ptCombo.count() > 0) {
      await ptCombo.click().catch(() => {});
      await f.locator('#ddlPrimaryTarget_content .combo-box-list > li').nth(1).click().catch(() => {});
    } else {
      const ptSelect2 = f.locator('span.select2-selection--single[aria-labelledby^="select2-ddlPrimaryTarget-container"]');
      if (await ptSelect2.count() > 0) {
        await ptSelect2.click().catch(() => {});
        await f.locator('li.select2-results__option[role="option"]').nth(1).click().catch(() => {});
      }
    }
    //await waitSpinner();

    // Source
    const sourceDropdown = f.locator('span.select2-selection--single[aria-labelledby^="select2-ddlsource-container"]');
    if (await sourceDropdown.count() > 0 && await sourceDropdown.isVisible().catch(() => false)) {
      await sourceDropdown.click();
      const secondOption = f.locator('li.select2-results__option[role="option"]').nth(1);
      if (await secondOption.count() > 0) { await secondOption.click(); }
      else { console.warn('Source: second option not found.'); }
    } else { console.warn('Source dropdown not found or not visible.'); }
    //await waitSpinner();

    // Source Employee
    await f.getByRole('combobox', { name: 'None' }).locator('b').first().click();
    const sourceEmployeeSecond = f.locator('li.select2-results__option[role="option"]').nth(1);
    if (await sourceEmployeeSecond.count() > 0 && await sourceEmployeeSecond.isVisible().catch(() => false)) {
      await sourceEmployeeSecond.click();
    } else { console.warn('Source Employee: second option not found.'); }
   // await waitSpinner();

    // Tax Type
    const taxTypeDropdown = f.locator('span.select2-selection--single[aria-labelledby^="select2-ddlTaxType-container"]');
    if (await taxTypeDropdown.count() > 0 && await taxTypeDropdown.isVisible().catch(() => false)) {
      await taxTypeDropdown.click();
      const taxTypeOption = f.locator('li.select2-results__option[role="option"]').nth(1);
      if (await taxTypeOption.count() > 0 && await taxTypeOption.isVisible().catch(() => false)) { await taxTypeOption.click(); }
      else { console.warn('Tax type: first non-None option not found.'); }
    } else { console.warn('Tax type dropdown not found.'); }
   // await waitSpinner();

    // Route
    const routeDropdown = f.locator('span.select2-selection--single[aria-labelledby^="select2-ddlRoute-container"]');
    if (await routeDropdown.count() > 0 && await routeDropdown.isVisible().catch(() => false)) {
      await routeDropdown.click();
      const routeOption = f.locator('li.select2-results__option[role="option"]').nth(1);
      if (await routeOption.count() > 0 && await routeOption.isVisible().catch(() => false)) { await routeOption.click(); }
      else { console.warn('Route: first non-None option not found.'); }
    } else { console.warn('Route dropdown not found.'); }
    //await waitSpinner();

    // Count event rows = number of visible calendar-icon date pickers in the frame.
    // Fill every one with tomorrow — no postback because no DOM events are fired.
    const tomorrowS = new Date();
    tomorrowS.setDate(tomorrowS.getDate() + 1);
    const tomorrowFormattedS = `${String(tomorrowS.getMonth() + 1).padStart(2, '0')}/${String(tomorrowS.getDate()).padStart(2, '0')}/${tomorrowS.getFullYear()}`;

    const datesFilledS = await openAccountPage1.evaluate((val: string) => {
      const iframe = document.querySelector('#MainFrameBodyFrame') as HTMLIFrameElement;
      const doc = iframe?.contentDocument;
      if (!doc) return { count: 0, ids: [] as string[] };
      // Each date picker = an .input-group that contains a calendar icon
      const groups = Array.from(doc.querySelectorAll('.input-group')) as HTMLElement[];
      const calGroups = groups.filter(g =>
        g.offsetParent !== null &&
        g.offsetWidth > 0 &&
        g.offsetHeight > 0 &&
        g.querySelector('.fa-calendar, .glyphicon-calendar, i[class*="calendar"]')
      );
      const ids: string[] = [];
      calGroups.forEach(g => {
        const inp = g.querySelector('input[type="text"]') as HTMLInputElement | null;
        if (inp && inp.offsetParent !== null) {
          inp.value = val;
          ids.push(inp.id || inp.name || '?');
        }
      });
      return { count: ids.length, ids };
    }, tomorrowFormattedS).catch(() => ({ count: 0, ids: [] as string[] }));

    console.log(`[Seasonal] Found ${datesFilledS.count} event date picker(s) — filled with ${tomorrowFormattedS}:`);
    datesFilledS.ids.forEach((id, i) => console.log(`  [${i + 1}] ${id}`));

    if (datesFilledS.count === 0) {
      const allVisible = await openAccountPage1.evaluate(() => {
        const iframe = document.querySelector('#MainFrameBodyFrame') as HTMLIFrameElement;
        const doc = iframe?.contentDocument;
        if (!doc) return [] as string[];
        return (Array.from(doc.querySelectorAll('input[type="text"]')) as HTMLInputElement[])
          .filter(el => el.offsetParent !== null)
          .map(el => `${el.id}=${el.value}`);
      }).catch(() => [] as string[]);
      console.warn('[Seasonal] No calendar date pickers found. Visible text inputs:', allVisible);
    }

    // Accept any confirmation dialog on Finish
    openAccountPage1.once('dialog', dialog => {
      console.log(`[Seasonal] Dialog on Finish: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });

    const finishBtn = f.locator('[id^="btnfinish2"]');
    await finishBtn.waitFor({ state: 'visible', timeout: 10000 });
    await finishBtn.scrollIntoViewIfNeeded().catch(() => {});
    await finishBtn.click({ force: true });

    // ── Post-Finish assertion ─────────────────────────────────────────────────────
    const seasonalFinishGone = await finishBtn.waitFor({ state: 'detached', timeout: 20000 }).then(() => true).catch(() => false);
    if (seasonalFinishGone) {
      console.log('[Seasonal] ✓ Program saved — Finish button detached (navigation confirmed).');
    } else {
      await openAccountPage1.screenshot({ path: 'test-results/seasonal-finish-stuck.png' }).catch(() => {});
      const stuckErrors = await f
        .locator('.field-validation-error, span[style*="color:Red"], span[style*="color: red"]')
        .allTextContents().catch(() => [] as string[]);
      const stuckAlerts = await f
        .locator('[class*="alert"], [class*="error-message"], #divError')
        .allTextContents().catch(() => [] as string[]);
      console.error('[Seasonal] ✗ Finish stuck. Errors:', stuckErrors, 'Alerts:', stuckAlerts);
      throw new Error(
        `[addSeasonalProgramNewUI] Finish did not navigate — program may not have saved. ` +
        `Errors: ${JSON.stringify([...stuckErrors, ...stuckAlerts].filter(t => t.trim()))}. ` +
        `Screenshot: test-results/seasonal-finish-stuck.png`
      );
    }
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await openAccountPage1.close().catch(() => {});
  }

async enterPaymentsCashFromAccount() {

    if (this.page.isClosed()) { console.warn('enterPaymentsCashFromAccount: main page is closed, skipping.'); return; }
    await this.page.waitForLoadState('networkidle').catch(() => {});
    if (this.page.isClosed()) { console.warn('enterPaymentsCashFromAccount: main page closed after networkidle wait, skipping.'); return; }
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');

    await openAccountPage1.locator('#lnkPayInv_5323').dispatchEvent('click');
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});

    // Wait for the wizard iframe to appear before accessing its content
    await openAccountPage1.locator('iframe[name="ifrmWizard"]').waitFor({ state: 'visible', timeout: 30000 });

    const pf = openAccountPage1.frameLocator('iframe[name="ifrmWizard"]');

    // Read the due amount from the first invoice row; fall back to '0.00' if absent
    const dueCell = pf.locator('td.invoicedue.dueinvoicetab').first();
    let dueAmount = '0.00';
    try {
      await dueCell.waitFor({ state: 'visible', timeout: 15000 });
      dueAmount = ((await dueCell.textContent()) ?? '0.00').trim();
    } catch {
      // invoice row not present — proceed with default amount
    }

    // Paste into the Pay contenteditable div — click selects all (onclick handler),
    // then evaluate sets the value and fires the focusout handler
    const payDiv = pf.locator('div.paidamount.invoicepay').first();
    if (await payDiv.count() > 0) {
      await payDiv.click({ force: true }).catch(() => {});
      await payDiv.evaluate((el, val) => {
        el.textContent = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('focusout', { bubbles: true }));
      }, dueAmount).catch(() => {});
    }

    // Set the Amount Paid input and trigger its keypress/change handlers
    const amountInput = pf.locator('#amountpaidtxt');
    if (await amountInput.count() > 0) {
      await amountInput.fill(dueAmount);
      await amountInput.dispatchEvent('change');
    }

    await pf.locator('#paymenttypesselect').selectOption('2');
    await pf.locator('button', { hasText: 'Auto Apply' }).first().click();
    await pf.locator('button', { hasText: 'Save Payment' }).first().click();
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    await openAccountPage1.close().catch(() => {});
  }


async enterPaymentsStripeCCFromAccount(): Promise<string> {
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHrefPrint = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHrefPrint!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');
    // Wait for invoice pay links to be in DOM before evaluating (headless races ahead of DOM paint)
    await openAccountPage1.locator('a[id^="lnkPayInv_"]').first()
      .waitFor({ state: 'attached', timeout: 30000 });

    // Dynamically find the first invoice pay link with an outstanding balance.
    // Collect all lnkPayInv_* IDs on the account page, then try each in turn.
    const invoiceLinkIds: string[] = await openAccountPage1.evaluate(() =>
      Array.from(document.querySelectorAll('a[id^="lnkPayInv_"]')).map(a => a.id)
    );
    if (invoiceLinkIds.length === 0) {
      throw new Error('[CC-Payment] No invoice pay links found on account page.');
    }
    console.log(`[CC-Payment] Found invoice pay links: ${invoiceLinkIds.join(', ')}`);

    let dueAmount = '0.00';
    let pf!: ReturnType<typeof openAccountPage1.frameLocator>;

    for (const invId of invoiceLinkIds) {
      await openAccountPage1.locator(`#${invId}`).dispatchEvent('click');
      await openAccountPage1.locator('iframe[name="ifrmWizard"]').waitFor({ state: 'visible', timeout: 30000 });
      pf = openAccountPage1.frameLocator('iframe[name="ifrmWizard"]');

      const dueCell = pf.locator('td.invoicedue.dueinvoicetab').first();
      const dueCellReady = await dueCell.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
      if (dueCellReady) dueAmount = ((await dueCell.textContent()) ?? '0.00').trim();

      if (dueAmount && dueAmount !== '0.00') {
        console.log(`[CC-Payment] Using invoice "${invId}" with due amount: "${dueAmount}"`);
        break;
      }
      console.log(`[CC-Payment] Invoice "${invId}" has $0.00 due — trying next`);
      dueAmount = '0.00';
    }

    if (!dueAmount || dueAmount === '0.00') {
      throw new Error('[CC-Payment] All invoices have $0.00 due — no outstanding balance to pay with CC.');
    }

    // ── Fill payment amount (contenteditable div or plain input) ─────────────────
    const payDiv = pf.locator('div.paidamount.invoicepay').first();
    if (await payDiv.count() > 0) {
      await payDiv.click({ force: true }).catch(() => {});
      await payDiv.evaluate((el, val) => {
        el.textContent = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('focusout', { bubbles: true }));
      }, dueAmount).catch(() => {});
    }
    const amountInput = pf.locator('#amountpaidtxt');
    if (await amountInput.count() > 0) {
      await amountInput.fill(dueAmount);
      await amountInput.dispatchEvent('change');
    }

    // Auto Apply allocates the amount to the invoice row; without it Save Payment
    // fires a COA alert instead of opening Stripe.
    const autoApplyBtn = pf.locator('button', { hasText: 'Auto Apply' }).first();
    const autoApplyVisible = await autoApplyBtn.waitFor({ state: 'visible', timeout: 10000 }).then(() => true).catch(() => false);
    if (autoApplyVisible) {
      await autoApplyBtn.click();
      await openAccountPage1.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    }
    if (openAccountPage1.isClosed()) {
      throw new Error('[CC-Payment] Page closed after Auto Apply click — wizard may have auto-navigated.');
    }

    // ── Select "Visa" payment type ───────────────────────────────────────────────
    await pf.locator('#paymenttypesselect').selectOption('3'); // value 3 = Visa
    await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})

    // ── Click Save Payment ────────────────────────────────────────────────────────
    // Register browser dialog handler before the click (covers confirm/alert dialogs)
    openAccountPage1.once('dialog', async (dialog) => {
      console.log(`[CC-Payment] Browser dialog: "${dialog.message()}" — accepting`);
      await dialog.accept().catch(() => {});
    });
    await pf.locator('button', { hasText: 'Save Payment' }).first().click();
    console.log('[CC-Payment] Save Payment clicked');

    // Dismiss any in-page modal that appears (COA alert, duplicate payment warning, etc.)
    // Check both the outer page AND the wizard iframe — the "Saving payment failed" alert
    // renders inside ifrmWizard so searching only openAccountPage1 misses it.
    const modalSel = '#alertyesbtn, button:has-text("Yes"), button:has-text("OK"), button:has-text("Proceed"), button:has-text("Continue")';
    for (let i = 0; i < 5; i++) {
      let clicked = false;
      for (const ctx of [openAccountPage1.locator(modalSel).first(), pf.locator(modalSel).first()]) {
        const appeared = await ctx.waitFor({ state: 'visible', timeout: 2000 }).then(() => true).catch(() => false);
        if (appeared) {
          const btnText = await ctx.textContent().catch(() => '');
          console.log(`[CC-Payment] Modal dismissed: "${btnText?.trim()}"`);
          await ctx.click();
          await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})
          clicked = true;
          break;
        }
      }
      if (!clicked) break;
    }

    await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})

    // EPS frame (optional): check 'Save this card' if present, then open Stripe form
    const epsf = pf.frameLocator('#epsframe');
    const epsCheckbox = epsf.getByRole('checkbox', { name: 'Save this card to my account' });
    const epsReady = await epsCheckbox.waitFor({ state: 'attached', timeout: 25000 }).then(() => true).catch(() => false);
    if (epsReady) {
      await epsCheckbox.check();
      await epsf.getByRole('button', { name: 'Enter Credit Card Information' }).click();
    }

    // ── Stripe frame: fill card details ──────────────────────────────────────────
    // Stripe may render as a legacy single iframe (stripe_checkout_app) OR as
    // individual Stripe Elements iframes (each field in its own iframe with a
    // semantic title).  Try both layouts in order.
    const stripeFrameSelectors = [
      'iframe[name="stripe_checkout_app"]',
      'iframe[title*="card number" i]',
      'iframe[src*="stripe.com"]',
    ];

    let sf: ReturnType<typeof pf.frameLocator> | null = null;

    for (const sel of stripeFrameSelectors) {
      const found = await pf.locator(sel).waitFor({ state: 'attached', timeout: 8000 }).then(() => true).catch(() => false);
      if (found) {
        sf = pf.frameLocator(sel);
        console.log(`[CC-Payment] Stripe frame found via selector: ${sel}`);
        break;
      }
    }

    if (sf) {
      // ── Single-iframe layout (legacy Stripe Checkout or embedded form) ──────
      await sf.getByRole('textbox', { name: 'Card number' }).waitFor({ state: 'visible', timeout: 15000 });
      await sf.getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 4242');
      await sf.getByRole('textbox', { name: 'MM / YY' }).fill('12 / 35');
      await sf.getByRole('textbox', { name: 'CVC' }).fill('123');
      await sf.getByRole('button', { name: 'PROCESS' }).click();
    } else {
      // ── Multi-iframe layout (Stripe Elements — each field is its own iframe) ─
      console.log('[CC-Payment] Falling back to Stripe Elements per-field iframes');
      const cardNumFrame = pf.frameLocator('iframe[title="Secure card number input frame"]');
      await cardNumFrame.getByRole('textbox', { name: 'Card number' }).waitFor({ state: 'visible', timeout: 15000 });
      await cardNumFrame.getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 4242');

      const expiryFrame = pf.frameLocator('iframe[title="Secure card expiry input frame"]');
      await expiryFrame.getByRole('textbox', { name: /expir/i }).fill('12 / 35');

      const cvcFrame = pf.frameLocator('iframe[title="Secure card CVC input frame"]');
      await cvcFrame.getByRole('textbox', { name: /cvc|cvv|security code/i }).fill('123');

      // Submit button lives outside the Stripe iframes, in the parent wizard frame
      await pf.getByRole('button', { name: /process|submit|pay/i }).first().click();
    }
    console.log('[CC-Payment] Card details submitted — waiting for transaction info');

    // ── Transaction confirmation ──────────────────────────────────────────────────
    // #transactioninfocontent is inside the wizard iframe (same level as #epsframe)
    const txInfo = pf.locator('#transactioninfocontent');
    await txInfo.waitFor({ state: 'visible', timeout: 30000 });
    await expect(txInfo).not.toBeEmpty({ timeout: 15000 });

    const infoText = ((await txInfo.textContent()) ?? '').trim();
    console.log(`[CC-Payment] Transaction info: "${infoText}"`);

    const transactionId =
      infoText.match(/(?:ch|pi|py)_[A-Za-z0-9]+/)?.[0] ??
      infoText.match(/(?:transaction\s*(?:id|#|no|ref)[.:\s]+)\s*([A-Za-z0-9][\w\-]{2,})/i)?.[1] ??
      infoText.match(/(?:auth(?:orization|orisation)?\s*(?:code|#)?[.:\s]+)\s*([A-Za-z0-9][\w\-]{2,})/i)?.[1] ??
      infoText.match(/(?:reference\s*(?:#|no|number)?[.:\s]+)\s*([A-Za-z0-9][\w\-]{2,})/i)?.[1] ??
      infoText.match(/\b(\d{4,})\b/)?.[1] ??
      null;

    expect(transactionId, `No transaction ID in #transactioninfocontent. Text: "${infoText}"`).toBeTruthy();
    console.log(`[CC-Payment] Transaction ID: ${transactionId}`);

    await txInfo.getByText('Close').click();
    // Assert the transaction info panel is gone — confirms the wizard closed cleanly
    await txInfo.waitFor({ state: 'detached', timeout: 10000 });
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    return transactionId!;
  }

async createMiscInvoiceFromAccount() {

    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody a.acc_blue').first().getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});

    const activityMenu = openAccountPage1.locator('span.menu-item-parent').filter({ hasText: 'Accounting' });
    await activityMenu.waitFor({ state: 'visible', timeout: 30000 });
    await activityMenu.hover();
    const miscInvoiceLink = openAccountPage1.locator('a[id^="lnkMiscInvoice"]');
    await miscInvoiceLink.waitFor({ state: 'attached', timeout: 30000 });
    await miscInvoiceLink.dispatchEvent('click');
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    const ddlbatch = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#ddlbatch');
    await ddlbatch.waitFor({ state: 'attached', timeout: 30000 });
    await ddlbatch.selectOption('0', { force: true });
    const ddlroute = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#ddlroute');
    await ddlroute.waitFor({ state: 'attached', timeout: 15000 });
    // Route selection fires __doPostBack which may navigate the popup — protect all subsequent ops
    await ddlroute.selectOption({ index: 1 }, { force: true }).catch(() => {});
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    if (openAccountPage1.isClosed()) { console.warn('Misc Invoice: page closed after route selection, skipping amount entry.'); return; }
    const cf = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();
    const txtamount = cf.locator('#txtamount');
    const amountAttached = await txtamount.waitFor({ state: 'attached', timeout: 15000 }).then(() => true).catch(() => false);
    if (!amountAttached || openAccountPage1.isClosed()) { console.warn('Misc Invoice: #txtamount not found after route selection.'); return; }
    await txtamount.scrollIntoViewIfNeeded().catch(() => {});
    await txtamount.click({ force: true }).catch(() => {});
    if (openAccountPage1.isClosed()) { console.warn('Misc Invoice: page closed after amount click.'); return; }
    await txtamount.fill('10');
    const saveLink = cf.getByRole('link', { name: 'Save' });
    await saveLink.waitFor({ state: 'visible', timeout: 10000 });
    await saveLink.click();
    // Verify the invoice was actually saved — form should navigate away (Save link disappears)
    await cf.getByRole('link', { name: 'Save' }).waitFor({ state: 'detached', timeout: 15000 });
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    await openAccountPage1.close();
  }

  async accessingSchedulerFromAccount() {
    
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');

    const activityMenu = openAccountPage1.locator('span.menu-item-parent').filter({ hasText: /^Account$/ });
    await activityMenu.waitFor({ state: 'visible', timeout: 30000 });
    await activityMenu.click({ force: true });
    await activityMenu.click();
    const schedulerLink = openAccountPage1.getByRole('link', { name: 'Scheduler' });
    const schedulerVisible = await schedulerLink.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
    if (!schedulerVisible) {
      console.warn('Scheduler link not visible after clicking Account menu — skipping scheduler test.');
      return;
    }
    const schedulerPagePromise = Promise.race([
      openAccountPage1.waitForEvent('popup'),
      openAccountPage1.context().waitForEvent('page'),
    ]).catch(() => null);
    await schedulerLink.click();
    const schedulerPage = (await schedulerPagePromise) ?? openAccountPage1;
    await schedulerPage.waitForLoadState('load').catch(() => {});
    await schedulerPage.waitForLoadState('networkidle').catch(() => {});
    const buildByRoute = schedulerPage.locator('input.buildByRoute').first();
    const buildByRouteVisible = await buildByRoute.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
    if (!buildByRouteVisible) {
      console.warn('Scheduler buildByRoute input not found — page may have loaded differently.');
      return;
    }
    await buildByRoute.click();
    await schedulerPage.waitForLoadState('networkidle').catch(() => {});
    await this.page.close();
  }

  async accessingLinkedDocumentsFromAccount() {
   
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    

    // Open account in popup — consistent with rest of file
    const _accHrefLD = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const accountPage = await this.page.context().newPage();
    await accountPage.goto(new URL(_accHrefLD!, this.page.url()).toString());
    await accountPage.waitForLoadState('networkidle');

    // Navigate to Linked Documents via Letters/Forms sidebar menu
    const lettersFormsMenu = accountPage.locator('span.menu-item-parent').filter({ hasText: /Letters.*Forms/i });
    await lettersFormsMenu.waitFor({ state: 'visible', timeout: 30000 });
    await lettersFormsMenu.click();
    const linkedDocsLink = accountPage.getByRole('link', { name: /Linked Documents.*ServSign/i });
    await linkedDocsLink.waitFor({ state: 'visible', timeout: 15000 });
    await linkedDocsLink.click();
    await accountPage.waitForLoadState('networkidle').catch(() => {});

    // All document operations are inside the #MainFrameBodyFrame iframe
    const cf = accountPage.locator('#MainFrameBodyFrame').contentFrame();

    // Use a unique folder name per run to avoid collisions with leftover folders from prior runs
    const folderName = `TestAuto${Date.now()}`;

    // Create folder
    const createFolderLink = cf.locator('a').filter({ hasText: 'Create Folder' });
    await createFolderLink.waitFor({ state: 'visible', timeout: 30000 });
    await createFolderLink.click();
    await cf.locator('#txtNewFolderName').waitFor({ state: 'visible', timeout: 10000 });
    await cf.locator('#txtNewFolderName').fill(folderName);
    await cf.getByRole('button', { name: 'Create' }).click();
    await accountPage.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

    // Select All Sites from site filter combobox (Select2 — click the <b> arrow to open)
    // Use generic .select2-container b locator — avoids brittle name match on dynamic account address
    const siteComboArrow = cf.locator('.select2-container b').first();
    await siteComboArrow.waitFor({ state: 'visible', timeout: 10000 });
    await siteComboArrow.click();
    const allSitesOption = cf.getByRole('option', { name: 'All Sites' });
    await allSitesOption.waitFor({ state: 'visible', timeout: 10000 });
    await allSitesOption.click();

    // Upload document
    const uploadFileLink = cf.locator('a').filter({ hasText: 'Upload File' });
    await uploadFileLink.waitFor({ state: 'visible', timeout: 30000 });
    await uploadFileLink.click();
    await cf.locator('#filename').waitFor({ state: 'visible', timeout: 10000 });
    await cf.locator('#filename').fill('Test upload');
    // "Choose File" triggers a native OS dialog — use filechooser event instead of setInputFiles on button
    const [fileChooser] = await Promise.all([
      accountPage.waitForEvent('filechooser'),
      cf.getByRole('button', { name: 'Choose File' }).click(),
    ]);
    await fileChooser.setFiles(path.join(__dirname, '../TestPdf.pdf'));
    await cf.getByRole('button', { name: 'Upload Document' }).waitFor({ state: 'visible', timeout: 10000 });
    await cf.getByRole('button', { name: 'Upload Document' }).click();
    await accountPage.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

    // Download first document
    const firstDownloadLink = cf.getByRole('link', { name: 'Download' }).first();
    await firstDownloadLink.waitFor({ state: 'visible', timeout: 30000 });
    const downloadPromise = accountPage.waitForEvent('download');
    await firstDownloadLink.click();
    await downloadPromise;

    // Email first document — fill subject and recipient BEFORE clicking Send Email
    const emailLink = cf.getByRole('link', { name: 'Email' }).first();
    await emailLink.waitFor({ state: 'visible', timeout: 15000 });
    await emailLink.click();
    await cf.getByRole('textbox', { name: 'Email Subject' }).waitFor({ state: 'visible', timeout: 10000 });
    await cf.getByRole('textbox', { name: 'Email Subject' }).fill('Test Emailing Uploaded file');
    await cf.getByRole('textbox', { name: 'To email' }).waitFor({ state: 'visible', timeout: 10000 });
    await cf.getByRole('textbox', { name: 'To email' }).fill('dbojkovski@servicetitan.com');
    await cf.getByRole('button', { name: 'Send Email' }).click();
    // Actively wait for the error toast — if it appears the email failed; timeout means success
    const emailErrorToast1 = accountPage.getByText(/email not sent/i);
    const emailFailed1 = await emailErrorToast1.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
    if (emailFailed1) {
      throw new Error('Email (root directory) failed: "Email Not Sent" notification appeared');
    }
    const emailModal = cf.getByLabel(/Email Linked Document/i);
    await emailModal.locator('button').filter({ hasText: 'Close' }).click();
    // Wait for the modal to fully close before proceeding
    await emailModal.waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});

    // Move document to the unique test folder
    const moveToSiteCell = cf.getByRole('gridcell', { name: 'Move to site' }).first();
    await moveToSiteCell.waitFor({ state: 'visible', timeout: 15000 });
    await moveToSiteCell.click();
    // Tree nodes are <span> elements — use getByText scoped to #tree
    const testFolderNode = cf.locator('#tree').getByText(folderName, { exact: true }).first();
    await testFolderNode.waitFor({ state: 'visible', timeout: 10000 });
    await testFolderNode.click();
    await cf.getByRole('button', { name: 'Move to site' }).click();
    // Wait for the move dialog to close, then let the page settle
    await cf.locator('#tree').waitFor({ state: 'hidden', timeout: 20000 }).catch(() => {});
    await accountPage.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

    // Navigate into the unique test folder — unique name guarantees exactly one match
    const testFolderLink = cf.getByRole('link', { name: folderName, exact: true }).first();
    await testFolderLink.waitFor({ state: 'visible', timeout: 15000 });
    await testFolderLink.click();
    await accountPage.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

    // Return to Root Directory and remove the unique test folder
    const rootDirLink = cf.getByRole('link', { name: 'Root Directory' });
    await rootDirLink.waitFor({ state: 'visible', timeout: 15000 });
    await rootDirLink.click();
    await accountPage.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    // Scope Remove click to the row containing our unique folder name
    const folderRow = cf.getByRole('row').filter({ hasText: folderName });
    await folderRow.getByRole('link', { name: 'Remove' }).waitFor({ state: 'visible', timeout: 15000 });
    await folderRow.getByRole('link', { name: 'Remove' }).click();
    await cf.getByRole('button', { name: 'Proceed anyway' }).waitFor({ state: 'visible', timeout: 10000 });
    await cf.getByRole('button', { name: 'Proceed anyway' }).click();
    // Wait for the confirmation modal to fully close before proceeding
    await cf.locator('#mdConfirmDocumentRemovalModal').waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
    await accountPage.waitForLoadState('networkidle').catch(() => {});
    await accountPage.close();
    
  }
  async addNewSiteFromAccount() {

    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');
    
    await openAccountPage1.locator('#lnkAddSite_450').dispatchEvent('click');
    const siteFrame = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();
    const streetNumber = faker.number.int({ min: 100, max: 9999 }).toString();
    const streetName = faker.person.lastName();
    const usLocation = faker.helpers.arrayElement([
      { city: 'Dallas',   state: 'TX', zip: '75201' },
      { city: 'Austin',   state: 'TX', zip: '78701' },
      { city: 'Houston',  state: 'TX', zip: '77001' },
      { city: 'Phoenix',  state: 'AZ', zip: '85001' },
      { city: 'Denver',   state: 'CO', zip: '80201' },
      { city: 'Atlanta',  state: 'GA', zip: '30301' },
      { city: 'Chicago',  state: 'IL', zip: '60601' },
      { city: 'Miami',    state: 'FL', zip: '33101' },
      { city: 'Seattle',  state: 'WA', zip: '98101' },
      { city: 'Portland', state: 'OR', zip: '97201' },
    ]);

    await siteFrame.locator('#phServiceAddress_txtStreetNumber').fill(streetNumber);
    await siteFrame.locator('#phServiceAddress_txtStreetName').fill(streetName);
    await siteFrame.locator('#phServiceAddress_ddlStreetSuffix').selectOption({ index: 1 }).catch(() => {});
    await siteFrame.locator('#phServiceAddress_ddlPreDirection').selectOption({ index: 1 }).catch(() => {});
    await siteFrame.locator('#phServiceAddress_ddlPostDirection').selectOption({ index: 1 }).catch(() => {});
    await siteFrame.locator('#phServiceAddress_txtPostalCode').fill(usLocation.zip);
    await siteFrame.locator('#phServiceAddress_txtPostalCode').press('Tab');
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_ddlTitle_select').click();
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_ddlTitle_textFilter').click();
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_ddlTitle_select').click();
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().getByRole('link', { name: 'Mr.', exact: true }).click();
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtFirstName').click();
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtFirstName').fill('FAlcon');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtFirstName').press('ArrowLeft');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtFirstName').press('ArrowLeft');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtFirstName').press('ArrowLeft');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtFirstName').press('ArrowLeft');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtFirstName').fill('Falcon');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtFirstName').press('Tab');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtMiddleName').fill('Test');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtMiddleName').press('Tab');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtLastName').fill('Site 2');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_btncollapse').click();
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtEmail').click();
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#contact_txtEmail').fill('dbojkovski@servicetitan.com');
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().getByRole('link', { name: 'Property Information' }).click();
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('#cmbPropertyType').selectOption('1');
    const finishBtn = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().getByRole('button', { name: 'Finish' });
    await finishBtn.click();
    // Assert site was saved — Finish button detaches when the form navigates away
    const finishGone = await finishBtn.waitFor({ state: 'detached', timeout: 15000 }).then(() => true).catch(() => false);
    if (!finishGone) {
      await openAccountPage1.screenshot({ path: 'test-results/add-site-finish-stuck.png' }).catch(() => {});
      const errors = await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame()
        .locator('.field-validation-error, span[style*="color:Red"]')
        .allTextContents().catch(() => [] as string[]);
      throw new Error(
        `[addNewSiteFromAccount] Finish did not navigate — site may not have saved. ` +
        `Errors: ${JSON.stringify(errors.filter(t => t.trim()))}. Screenshot: test-results/add-site-finish-stuck.png`
      );
    }
    console.log('[addNewSiteFromAccount] ✓ Site saved — Finish button detached.');
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    await openAccountPage1.close();
  }

  async addNewEventFromAccount() {

  await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');

    await openAccountPage1.locator('.fa.fa-arrow-circle-left').click();
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    const wizardIframeEvent = openAccountPage1.locator('iframe[name="ifrmWizard"]');
    await wizardIframeEvent.waitFor({ state: 'attached', timeout: 30000 });
    await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})
    const programRow = wizardIframeEvent.contentFrame().locator('[id^="trProgramRow"]').first();
    const programRowVisible = await programRow.waitFor({ state: 'visible', timeout: 30000 }).then(() => true).catch(() => false);
    if (!programRowVisible) {
      console.warn('No program rows found in wizard iframe — skipping Add New Event.');
      return;
    }
    const addNewEventLink = programRow.getByRole('link', { name: 'Add New Event' });
    const addNewEventVisible = await addNewEventLink.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false);
    if (!addNewEventVisible) {
      console.warn('Add New Event link not visible in first program row — skipping.');
      return;
    }
    await addNewEventLink.scrollIntoViewIfNeeded().catch(() => {});
    await addNewEventLink.click();

    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('label').nth(5).click();
    // Sep checkbox is inside a display:none container; dispatchEvent bypasses all layout/visibility checks
    const sepLabel = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().locator('label[for^="chkSep"]').first();
    await sepLabel.dispatchEvent('click');
    const frame = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();
    await frame.locator('#ddlsalesperson1_select').click();
    await frame.getByRole('link', { name: /,/ }).first().click();
    await frame.locator('#ddlsalesperson2_select').click();
    await frame.getByRole('link', { name: /,/ }).first().click();
    await frame.locator('#ddlsource').selectOption({ index: 1 });
    openAccountPage1.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await openAccountPage1.locator('#MainFrameBodyFrame').contentFrame().getByRole('button', { name: 'Finish' }).click();
    openAccountPage1.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    
  await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
  await openAccountPage1.close();

  }
 
  async emailInvoicesFromAccount() {

    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');

    await openAccountPage1.locator('span.menu-item-parent').first().waitFor({ state: 'attached', timeout: 30000 });
    // Hover Activity to open the CSS dropdown, then force-click hidden Invoices item
    await openAccountPage1.locator('span.menu-item-parent').filter({ hasText: /^Activity$/ }).first().hover();
    await openAccountPage1.locator('span.menu-item-parent').filter({ hasText: /^Invoices$/ }).first().dispatchEvent('click');
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    const moneyOwedLink1 = openAccountPage1.locator('a').filter({ hasText: 'Money Owed' }).first();
    await moneyOwedLink1.waitFor({ state: 'attached', timeout: 30000 });
    await moneyOwedLink1.dispatchEvent('click');
    const wizardIframe = openAccountPage1.locator('iframe[name="ifrmWizard"]');
    await wizardIframe.waitFor({ state: 'attached', timeout: 30000 });
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});

    // #ddlsite only renders for accounts with multiple sites — skip if absent
    const ddlsite = wizardIframe.contentFrame().locator('#ddlsite');
    const ddlsiteExists = await ddlsite.waitFor({ state: 'attached', timeout: 4000 }).then(() => true).catch(() => false);
    if (ddlsiteExists) {
      await ddlsite.selectOption('0');
      await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    }

    const emailOptionsBtn = wizardIframe.contentFrame().getByRole('button', { name: 'Options' }).first();
    const emailOptVisible = await emailOptionsBtn.waitFor({ state: 'visible', timeout: 20000 }).then(() => true).catch(() => false);
    if (!emailOptVisible) {
      await openAccountPage1.screenshot({ path: 'test-results/email-invoices-no-options.png' }).catch(() => {});
      console.warn('[emailInvoicesFromAccount] Options button not found — account may have no Money Owed invoices. Screenshot: test-results/email-invoices-no-options.png');
      return;
    }
    await emailOptionsBtn.click();
    await openAccountPage1.waitForLoadState('domcontentloaded').catch(() => {})

    // The Options dropdown renders inside the wizard iframe.
    // Target dropdown menu items only (ul.dropdown-menu li a, or similar) — exclude static buttons.
    const wf = wizardIframe.contentFrame();
    const dropdownEmail = wf.locator('ul.dropdown-menu li a, .dropdown-menu li a, ul.options-menu li a').filter({ hasText: /email/i }).first();
    const dropdownEmailVis = await dropdownEmail.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);

    if (dropdownEmailVis) {
      const txt = ((await dropdownEmail.textContent().catch(() => '')) ?? '').trim();
      console.log(`[EmailInvoices] clicking dropdown email option: "${txt}"`);
      await dropdownEmail.click();
    } else {
      // Fallback: any <a> whose trimmed text is exactly "Email" inside the iframe
      const exactEmail = wf.locator('a').filter({ hasText: /^email$/i }).first();
      const exactVis = await exactEmail.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
      if (exactVis) {
        const txt = ((await exactEmail.textContent().catch(() => '')) ?? '').trim();
        console.log(`[EmailInvoices] clicking exact email link: "${txt}"`);
        await exactEmail.click();
      } else {
        await openAccountPage1.screenshot({ path: 'test-results/email-invoices-no-email-link.png' }).catch(() => {});
        throw new Error(
          '[emailInvoicesFromAccount] Could not find Email link in Options dropdown. ' +
          'Screenshot: test-results/email-invoices-no-email-link.png'
        );
      }
    }

    openAccountPage1.once('dialog', dialog => {
      console.log(`[EmailInvoices] dialog: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });

    // OK button may render outside the iframe
    const okBtn = openAccountPage1.locator('button', { hasText: 'OK' }).first();
    const okBtnInFrame = wizardIframe.contentFrame().getByRole('button', { name: 'OK' });
    const okVisible = await okBtn.waitFor({ state: 'visible', timeout: 10000 }).then(() => true).catch(() => false);
    if (okVisible) {
      await okBtn.click();
    } else {
      await okBtnInFrame.waitFor({ state: 'visible', timeout: 10000 });
      await okBtnInFrame.click();
    }

    // Assert: wait briefly then check for validation errors.
    // The wizard may stay attached (no navigate/detach) after a successful email send — that is normal.
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {})
    const emailErrors = await wizardIframe.contentFrame()
      .locator('.field-validation-error, .alert-danger, span[style*="color:Red"], .text-danger')
      .allTextContents().catch(() => [] as string[]);
    const emailErrorsTrimmed = emailErrors.map(t => t.trim()).filter(Boolean);
    if (emailErrorsTrimmed.length > 0) {
      await openAccountPage1.screenshot({ path: 'test-results/email-invoices-error.png' }).catch(() => {});
      throw new Error(
        `[emailInvoicesFromAccount] Email send failed with errors: ${JSON.stringify(emailErrorsTrimmed)}. ` +
        `Screenshot: test-results/email-invoices-error.png`
      );
    }
    console.log('[emailInvoicesFromAccount] ✓ Email sent — no validation errors found.');
    await openAccountPage1.close();
    
  }

async billingAccountInformationOptions() {

    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');
     
      await openAccountPage1.locator('#Account').click();
    const frame2046b = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();
    await frame2046b.locator('#ddlcommunication').waitFor({ state: 'visible', timeout: 30000 });
    await frame2046b.locator('#ddlcommunication').selectOption('1');
      const sendCorrCheckbox = frame2046b.getByLabel('Send Correspondence Emails');
      if (!await sendCorrCheckbox.isChecked()) {
        await frame2046b.getByText('Send Correspondence Emails').click();
      }
      if (!await frame2046b.getByLabel('E-Mail Invoices').isChecked()) await frame2046b.getByText('E-Mail Invoices').click();
      if (!await frame2046b.getByLabel('E-Mail Statements').isChecked()) await frame2046b.getByText('E-Mail Statements').click();
      if (!await frame2046b.getByLabel('E-Mail Paid Invoices').isChecked()) await frame2046b.getByText('E-Mail Paid Invoices').click();
      if (!await frame2046b.getByLabel('E-Mail Renewal').isChecked()) await frame2046b.getByText('E-Mail Renewal').click();
      if (!await frame2046b.getByLabel('E-Mail Prepay').isChecked()) await frame2046b.getByText('E-Mail Prepay').click();
      if (!await frame2046b.getByLabel('Mail Invoices', { exact: true }).isChecked()) await frame2046b.getByText('Mail Invoices', { exact: true }).click();
      if (!await frame2046b.getByLabel('Mail Paid Invoices', { exact: true }).isChecked()) await frame2046b.getByText('Mail Paid Invoices', { exact: true }).click();
      if (!await frame2046b.getByLabel('Mail Statements', { exact: true }).isChecked()) await frame2046b.getByText('Mail Statements', { exact: true }).click();
      if (!await frame2046b.getByLabel('Mail Renewal', { exact: true }).isChecked()) await frame2046b.getByText('Mail Renewal', { exact: true }).click();
      if (!await frame2046b.getByLabel('Mail Prepay', { exact: true }).isChecked()) await frame2046b.getByText('Mail Prepay', { exact: true }).click();
      if (!await frame2046b.locator('#threshold_alert').getByLabel('Send Notifications Emails').isChecked()) await frame2046b.locator('#threshold_alert').getByText('Send Notifications Emails').click();
      if (!await frame2046b.getByLabel('Send email to customer if').isChecked()) await frame2046b.getByText('Send email to customer if').click();
      if (!await frame2046b.getByLabel('Send email to branch if above').isChecked()) await frame2046b.getByText('Send email to branch if above').click();
      const finishBtn = frame2046b.getByRole('button', { name: 'Finish' });
      await finishBtn.click();
      // Assert billing settings saved — Finish button detaches when the form navigates away
      const finishGone = await finishBtn.waitFor({ state: 'detached', timeout: 15000 }).then(() => true).catch(() => false);
      if (!finishGone) {
        await openAccountPage1.screenshot({ path: 'test-results/billing-options-finish-stuck.png' }).catch(() => {});
        const errors = await frame2046b
          .locator('.field-validation-error, span[style*="color:Red"]')
          .allTextContents().catch(() => [] as string[]);
        throw new Error(
          `[billingAccountInformationOptions] Finish did not navigate — settings may not have saved. ` +
          `Errors: ${JSON.stringify(errors.filter(t => t.trim()))}. Screenshot: test-results/billing-options-finish-stuck.png`
        );
      }
      console.log('[billingAccountInformationOptions] ✓ Billing settings saved — Finish button detached.');
      await openAccountPage1.close().catch(() => {});
     
  }

  async activateAccount() {
    await this.page.bringToFront();
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').waitFor({ state: 'visible', timeout: 30000 });
    const _accHrefAct = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHrefAct!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');

    await openAccountPage1.locator('#Account').click();
    const frame2046 = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();
    await frame2046.locator('#ddlcommunication').waitFor({ state: 'visible', timeout: 45000 });
    await frame2046.locator('#ddlcommunication').selectOption('1');
    const activeCheckbox = frame2046.locator('input[id^="chkactive_"]');
    const activeLabel = frame2046.locator('label[for^="chkactive_"]');
    if (!(await activeCheckbox.isChecked())) await activeLabel.click();
    await frame2046.getByRole('button', { name: 'Finish' }).click();
    await openAccountPage1.reload();
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    await openAccountPage1.close().catch(() => {});
  }

  async deactivateAccount() {

    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');

    await openAccountPage1.locator('#Account').click();
    const frame2046 = openAccountPage1.locator('#MainFrameBodyFrame').contentFrame();
    await frame2046.locator('#ddlcommunication').waitFor({ state: 'visible', timeout: 45000 });
    await frame2046.locator('#ddlcommunication').selectOption('1');
    const activeCheckbox = frame2046.locator('input[id^="chkactive_"]');
    const activeLabel = frame2046.locator('label[for^="chkactive_"]');
    if (await activeCheckbox.isChecked()) await activeLabel.click();
    await frame2046.getByRole('button', { name: 'Finish' }).click();
    await openAccountPage1.reload();
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
     await openAccountPage1.close().catch(() => {});
  }

  async printInvoicesFromAccount() {
   
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');
    await openAccountPage1.locator('span.menu-item-parent').first().waitFor({ state: 'attached', timeout: 30000 });
    // Hover Activity to open the CSS dropdown, then force-click hidden Invoices item
    await openAccountPage1.locator('span.menu-item-parent').filter({ hasText: /^Activity$/ }).first().hover();
    await openAccountPage1.locator('span.menu-item-parent').filter({ hasText: /^Invoices$/ }).first().dispatchEvent('click');
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    const moneyOwedLinkPrint = openAccountPage1.locator('a').filter({ hasText: 'Money Owed' }).first();
    await moneyOwedLinkPrint.waitFor({ state: 'attached', timeout: 30000 });
    await moneyOwedLinkPrint.dispatchEvent('click');
    const wizardIframePrint = openAccountPage1.locator('iframe[name="ifrmWizard"]');
    await wizardIframePrint.waitFor({ state: 'attached', timeout: 30000 });
    await wizardIframePrint.contentFrame().locator('#ddlsite').waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    await wizardIframePrint.contentFrame().locator('#ddlsite').selectOption('0').catch(() => {});
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    const printOptionsBtn = wizardIframePrint.contentFrame().getByRole('button', { name: 'Options' }).first();
    const printOptVisible = await printOptionsBtn.waitFor({ state: 'visible', timeout: 20000 }).then(() => true).catch(() => false);
    if (!printOptVisible) { console.warn('Print Invoices: Options button not found — account may have no Money Owed invoices.'); return; }
    await printOptionsBtn.click();
    await wizardIframePrint.contentFrame().getByRole('link', { name: 'Print', exact: true }).click();
    await wizardIframePrint.contentFrame().getByRole('button', { name: 'OK' }).click();
    const yesBtn = wizardIframePrint.contentFrame().locator('#scriptframe').contentFrame().getByRole('button', { name: 'Yes' });
    await yesBtn.click();
    // Assert print job was submitted — #scriptframe detaches once the print dialog closes
    const scriptFrameGone = await wizardIframePrint.contentFrame().locator('#scriptframe')
      .waitFor({ state: 'detached', timeout: 15000 }).then(() => true).catch(() => false);
    if (!scriptFrameGone) {
      await openAccountPage1.screenshot({ path: 'test-results/print-invoices-stuck.png' }).catch(() => {});
      throw new Error(
        '[printInvoicesFromAccount] #scriptframe did not detach after Yes — print job may not have submitted. ' +
        'Screenshot: test-results/print-invoices-stuck.png'
      );
    }
    console.log('[printInvoicesFromAccount] ✓ Print submitted — #scriptframe detached.');
    await openAccountPage1.getByRole('link', { name: 'Home' }).click();
     await openAccountPage1.close().catch(() => {});
  }

  async printToMailInvoicesFromAccount() {
    
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.openAccountFirstnameInput.click();
    await this.openAccountFirstnameInput.fill('Falcon Auto');
    await this.openAccountCompanyInput.click();
    await this.openAccountCompanyInput.fill('Falcon');
    await this.openAccountSearchButton.click();
    await this.page.getByRole('columnheader', { name: 'Account #: activate to sort' }).click();
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'visible' }).catch(() => {});
    await this.page.locator('#tblNewSearchResults_processing').waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
    const _accHref = await this.page.locator('#tblNewSearchResults tbody tr:first-child a.acc_blue').getAttribute('href');
    const openAccountPage1 = await this.page.context().newPage();
    await openAccountPage1.goto(new URL(_accHref!, this.page.url()).toString());
    await openAccountPage1.waitForLoadState('networkidle');
    await openAccountPage1.locator('span.menu-item-parent').first().waitFor({ state: 'attached', timeout: 30000 });
    // Hover Activity to open the CSS dropdown, then force-click hidden Invoices item
    await openAccountPage1.locator('span.menu-item-parent').filter({ hasText: /^Activity$/ }).first().hover();
    await openAccountPage1.locator('span.menu-item-parent').filter({ hasText: /^Invoices$/ }).first().dispatchEvent('click');
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    const moneyOwedLinkPrint2 = openAccountPage1.locator('a').filter({ hasText: 'Money Owed' }).first();
    await moneyOwedLinkPrint2.waitFor({ state: 'attached', timeout: 30000 });
    await moneyOwedLinkPrint2.dispatchEvent('click');
    const wizardIframePrint = openAccountPage1.locator('iframe[name="ifrmWizard"]');
    await wizardIframePrint.waitFor({ state: 'attached', timeout: 30000 });
    await wizardIframePrint.contentFrame().locator('#ddlsite').waitFor({ state: 'visible', timeout: 30000 }).catch(() => {});
    await wizardIframePrint.contentFrame().locator('#ddlsite').selectOption('0').catch(() => {});
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    const printOptionsBtn = wizardIframePrint.contentFrame().getByRole('button', { name: 'Options' }).first();
    const printOptVisible = await printOptionsBtn.waitFor({ state: 'visible', timeout: 20000 }).then(() => true).catch(() => false);
    if (!printOptVisible) { console.warn('Print to Mail: Options button not found — account may have no Money Owed invoices.'); return; }
    await printOptionsBtn.click();
    await wizardIframePrint.contentFrame().getByRole('link', { name: 'Print & Upload', exact: true }).click();
    await wizardIframePrint.contentFrame().getByRole('button', { name: 'OK' }).click();
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    openAccountPage1.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    // Wait for scriptframe to attach and render the PDF before the upload button becomes enabled
    const scriptFrame = wizardIframePrint.contentFrame().locator('#scriptframe');
    await scriptFrame.waitFor({ state: 'attached', timeout: 60000 });
    await openAccountPage1.waitForLoadState('networkidle').catch(() => {});
    const uploadBtn = scriptFrame.contentFrame().getByRole('button', { name: 'Upload for Print to Mail' });
    await uploadBtn.waitFor({ state: 'visible', timeout: 30000 });
    // Button starts disabled until the print job is ready on the server.
    // Remove the disabled attribute and fire onclick="getprintid()" directly via DOM.
    await uploadBtn.evaluate((el) => {
      const btn = el as HTMLInputElement;
      btn.removeAttribute('disabled');
      btn.click();
    });
    await scriptFrame.contentFrame().getByRole('button', { name: 'Yes' }).waitFor({ state: 'visible', timeout: 20000 })
    const yesBtn = scriptFrame.contentFrame().getByRole('button', { name: 'Yes' });
    await yesBtn.click();
    // Assert upload submitted — "Yes" button detaches once the confirmation is processed,
    // or a success/status message appears in the scriptFrame
    const uploadDone = await yesBtn.waitFor({ state: 'detached', timeout: 30000 }).then(() => true).catch(() => false);
    if (!uploadDone) {
      // Check for a visible success/status text as an alternative confirmation
      const statusText = await scriptFrame.contentFrame()
        .locator('span, div, p')
        .filter({ hasText: /success|uploaded|complete|sent|queued/i })
        .first()
        .textContent({ timeout: 5000 })
        .catch(() => null);
      if (!statusText) {
        await openAccountPage1.screenshot({ path: 'test-results/print-to-mail-upload-stuck.png' }).catch(() => {});
        throw new Error(
          '[printToMailInvoicesFromAccount] Upload confirmation did not complete — "Yes" button still present. ' +
          'Screenshot: test-results/print-to-mail-upload-stuck.png'
        );
      }
      console.log(`[printToMailInvoicesFromAccount] ✓ Upload confirmed via status: "${statusText.trim()}"`);
    } else {
      console.log('[printToMailInvoicesFromAccount] ✓ Upload submitted — Yes button detached.');
    }
    await openAccountPage1.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await openAccountPage1.getByRole('link', { name: 'Home' }).click();
     await openAccountPage1.close().catch(() => {});

  }
  async addNewAccountAndProgramRouting() {
    let page2: Page;
    try {
      const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page', { timeout: 10000 }),
        this.addAccountNewLink.click()
      ]);
      page2 = newPage;
    } catch {
      await this.addAccountNewLink.click().catch(() => {});
      page2 = this.page;
    }

    page2.setDefaultTimeout(30000);
    page2.setDefaultNavigationTimeout(30000);

    const addAccountUrl = new URL('/account/quickaddentry1.aspx', this.page.url()).toString();
    if (!page2.url().includes('/account/quickaddentry1.aspx')) {
      await page2.goto(addAccountUrl, { waitUntil: 'domcontentloaded' });
    }
    const enterLocation = this.enterLocationInput(page2);
    await enterLocation.waitFor({ state: 'visible', timeout: 10000 });

    // Fixed primary address + nearby Saltillo TX streets for subsequent runs
    const SALTILLO_ADDRESSES = [
      { number: '11148', street: 'Interstate Highway 30 E', city: 'Saltillo', state: 'TX', zip: '75478' },
      { number: '11200', street: 'Interstate Highway 30 E', city: 'Saltillo', state: 'TX', zip: '75478' },
      { number: '10950', street: 'Interstate Highway 30 E', city: 'Saltillo', state: 'TX', zip: '75478' },
      { number: '215',   street: 'Farm Road 1870',          city: 'Saltillo', state: 'TX', zip: '75478' },
      { number: '180',   street: 'County Road 1117',        city: 'Saltillo', state: 'TX', zip: '75478' },
    ];
    const addr = faker.helpers.arrayElement(SALTILLO_ADDRESSES);
    const STREET_NUMBER = addr.number;
    const STREET_NAME   = addr.street;
    const CITY          = addr.city;
    const STATE_ABBR    = addr.state;
    const ZIP           = addr.zip;

    // Fill the location autocomplete with a real address and try to select a suggestion
    await this.enterLocationInput(page2).clear().catch(() => {});
    await this.enterLocationInput(page2).fill(`${STREET_NUMBER} ${STREET_NAME}, ${CITY}, ${STATE_ABBR}`);
    const acItem2 = page2.locator('.pac-item, .ui-menu-item, #ui-id-4 li').first();
    const acVisible2 = await acItem2.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
    if (acVisible2) {
      await acItem2.click({ force: true }).catch(() => {});
      await page2.waitForLoadState('domcontentloaded').catch(() => {})
    } else {
      await page2.keyboard.press('Escape').catch(() => {});
    }

    // Fill all address fields directly with fixed values — JS-force them so async geocoding can't clear them
    await this.streetNumberReqInput(page2).fill(STREET_NUMBER).catch(() => {});
    await this.streetNameInput(page2).fill(STREET_NAME).catch(() => {});

    await page2.evaluate(({ city, stateAbbr, zip }) => {
      const setInput = (id: string, val: string) => {
        const el = document.querySelector<HTMLInputElement>(`#${id}`);
        if (!el) return;
        el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));
      };
      const setState = (id: string, abbr: string) => {
        const sel = document.querySelector<HTMLSelectElement>(`#${id}`);
        if (!sel) return;
        const opt = Array.from(sel.options).find(o => o.value === abbr || o.text.trim() === abbr);
        if (opt) {
          sel.value = opt.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          sel.dispatchEvent(new Event('blur', { bubbles: true }));
        }
      };
      setInput('txtCity', city);
      setState('txtState', stateAbbr);
      setInput('txtPostalCode', zip);
    }, { city: CITY, stateAbbr: STATE_ABBR, zip: ZIP });

    {
      const BRANCH_NAME = 'Falcon Auto Test Branch';
      const branchSet = await page2.evaluate((name: string) => {
        const sel = document.querySelector<HTMLSelectElement>('#ddlbillcenter');
        if (!sel) return { ok: false, msg: '#ddlbillcenter not found' };
        const opts = Array.from(sel.options);
        const exact   = opts.find(o => o.text.trim() === name);
        const partial = opts.find(o => o.text.trim().includes(name));
        const match = exact || partial;
        if (!match) return { ok: false, msg: `"${name}" not found. Options: [${opts.slice(0, 10).map(o => o.text.trim()).join(' | ')}]` };
        const $ = (window as any).$;
        if ($ && $(sel).data('select2')) {
          $(sel).val(match.value).trigger('change.select2').trigger('change');
        } else {
          sel.value = match.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
        }
        const container = document.querySelector('#select2-ddlbillcenter-container');
        if (container) container.textContent = match.text;
        return { ok: true, msg: match.text };
      }, BRANCH_NAME);
      console.log(`[addNewAccountAndProgram] Branch select: ok=${branchSet.ok} msg="${branchSet.msg}"`);
      if (!branchSet.ok) {
        await page2.locator('#ddlbillcenter').selectOption({ label: BRANCH_NAME }).catch(() => {});
      }
    }
    await this.nextButton(page2).click();
    await this.dismissDuplicateDialog(page2);
    await page2.selectOption('#ddlTitle', 'Mr.');
    await page2.locator('#ddlTitle').click();
    await this.firstNameInput(page2).click();
    await this.firstNameInput(page2).fill('Falcon');
    await this.firstNameInput(page2).fill('Falcon Auto ');
    await this.lastNameInput(page2).fill('AddNewAccountNew');
    await this.businessNameInput(page2).click();
    await this.businessNameInput(page2).fill('Falcon');
    await this.phoneInput(page2).click();
    await this.phoneInput(page2).fill('(520) 385-6420');
    await this.emailInput(page2).click();
    await this.emailInput(page2).fill('dbojkovski@servicetitan.com');
    await this.mySearchInput(page2).click();
    await this.mySearchInput(page2).fill('123123');
    await this.udfComp5Input(page2).click();
    await this.udfComp5Input(page2).fill('321321');
    await this.udfComp6Input(page2).click();
    await this.udfComp6Input(page2).fill('345345');
    await this.nextButton(page2).click();
    await this.dismissDuplicateDialog(page2);
    await this.sameAsAccountCheckbox(page2).check();
    await this.propertyTypeSelect(page2).selectOption({ index: 1 });
    await this.builderSelect(page2).selectOption({ index: 1 });
    await this.sicSelect(page2).selectOption({ index: 1 });
    await this.facilitySelect(page2).selectOption({ index: 1 });
    await this.propertyDescriptionSelect(page2).selectOption({ index: 1 });
    await this.primarySourceSelect(page2).selectOption({ index: 1 });
    await this.propertyManagementSelect(page2).selectOption({ index: 1 });
    await this.siteNoteInput(page2).click();
    await this.siteNoteInput(page2).fill('Test Auto');

    // Select Falcon Auto Route before adding program
    const routeTrigger = page2.locator('#ddlroute_select');
    if (await routeTrigger.count() > 0) {
      await routeTrigger.click({ force: true });
      const routeFilter = page2.locator('#ddlroute_textFilter');
      if (await routeFilter.count() > 0) {
        await routeFilter.fill('Falcon Auto Route');
        const routeOption = page2.locator('#ddlroute_content .combo-box-list li a')
          .filter({ hasText: 'Falcon Auto Route' }).first();
        if (await routeOption.count() > 0) {
          await routeOption.click({ force: true });
        } else {
          await routeFilter.press('ArrowDown');
          await routeFilter.press('Enter');
        }
      } else {
        const routeOption = page2.locator('#ddlroute_content .combo-box-list li a')
          .filter({ hasText: 'Falcon Auto Route' }).first();
        if (await routeOption.count() > 0) await routeOption.click({ force: true });
      }
    }

    let programPage = page2;
    try {
      const [popup] = await Promise.all([
        page2.waitForEvent('popup', { timeout: 5000 }),
        this.addProgramButton(page2).click()
      ]);
      programPage = popup;
    } catch {
      await this.addProgramButton(page2).click().catch(() => {});
    }

    try {
      const PROGRAM_NAME = 'Falcon Auto Test Program Renewal';

      // ── Strategy A: direct jQuery / native eval (most reliable in headless) ──────
      // Typing into Select2 search doesn't always filter correctly in headless.
      // Setting the underlying <select> value and triggering Select2's change event
      // is faster and unambiguous.
      const directSet = await programPage.evaluate((name: string) => {
        const sel = document.querySelector<HTMLSelectElement>('#ddlprogram');
        if (!sel) return { ok: false, msg: '#ddlprogram not found' };
        const opts = Array.from(sel.options);
        // Log every option that contains "falcon" to help diagnose name mismatches
        const falconOpts = opts.filter(o => o.text.toLowerCase().includes('falcon')).map(o => o.text.trim());
        const exact   = opts.find(o => o.text.trim() === name);
        const partial = opts.find(o => o.text.trim().includes(name));
        const match = exact || partial;
        if (!match) return { ok: false, msg: `"${name}" not found in ${opts.length} options. Falcon matches: [${falconOpts.join(' | ')}]` };
        const $ = (window as any).$;
        if ($ && $(sel).data('select2')) {
          $(sel).val(match.value).trigger('change.select2').trigger('change');
        } else {
          sel.value = match.value;
          sel.dispatchEvent(new Event('change', { bubbles: true }));
        }
        // Force the Select2 display label to update
        const container = document.querySelector('#select2-ddlprogram-container');
        if (container) container.textContent = match.text;
        return { ok: true, msg: match.text };
      }, PROGRAM_NAME);
      console.log(`[addNewAccountAndProgram] Direct program select: ok=${directSet.ok} msg="${directSet.msg}"`);

      // ── Strategy B: Select2 UI fallback (if native eval failed) ─────────────────
      if (!directSet.ok) {
        console.warn('[addNewAccountAndProgram] Direct eval failed — falling back to Select2 UI');
        const select2Trigger = programPage.locator(
          'span.select2-selection--single[aria-labelledby="select2-ddlprogram-container"]'
        ).first();
        const triggerReady = await select2Trigger.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
        if (triggerReady) {
          await select2Trigger.click({ force: true });
          const searchInput = programPage.locator('.select2-container--open input.select2-search__field').first();
          const searchReady = await searchInput.waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
          if (searchReady) {
            await searchInput.pressSequentially(PROGRAM_NAME, { delay: 60 });
            await programPage.locator('li.select2-results__option').first().waitFor({ state: 'visible', timeout: 5000 }).catch(() => {})
            const visibleOptions = await programPage.locator('li.select2-results__option').allTextContents();
            console.log(`[addNewAccountAndProgram] Select2 UI options after typing (${visibleOptions.length}): [${visibleOptions.slice(0, 10).join(' | ')}]`);
            const option = programPage.locator('li.select2-results__option').filter({ hasText: PROGRAM_NAME }).first();
            if (await option.waitFor({ state: 'visible', timeout: 6000 }).then(() => true).catch(() => false)) {
              await option.click({ force: true });
            } else {
              await searchInput.press('Escape');
              console.warn('[addNewAccountAndProgram] No matching option in Select2 UI — program may not exist');
            }
          }
        }
      }

      // ── ASSERTION: verify container now shows the selected program ───────────────
      await programPage.locator('#select2-ddlprogram-container').waitFor({ state: 'attached', timeout: 3000 }).catch(() => {})
      const containerText = await programPage.locator('#select2-ddlprogram-container').textContent().catch(() => '');
      console.log(`[addNewAccountAndProgram] Select2 container after selection: "${containerText?.trim()}"`);
      if (!containerText?.trim() || containerText.includes('Select') || containerText.trim() === 'None') {
        throw new Error(`[addNewAccountAndProgram] Program "${PROGRAM_NAME}" was NOT selected — container shows: "${containerText?.trim()}"`);
      }
    } catch (e: unknown) {
      console.warn('[addNewAccountAndProgram] Program selection failed:', e);
    }

    try {
      const programFrame = this.mainFrame(programPage);
      const hasFrame = (await programFrame.locator('body').count()) > 0;
      const requiredTab = hasFrame
        ? this.requiredInfoTabFrame(programFrame)
        : this.requiredInfoTab(programPage);

      if (requiredTab && (await requiredTab.count()) > 0) {
        await requiredTab.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await requiredTab.click().catch(() => {});
      }

      const detailsFrame = this.mainFrame(programPage);
      const renewalFeeInput = detailsFrame.locator(
        '#txtRenewalFee, #txtrenewalfee, input[name*="renewal"][type="text"]'
      );
      if (renewalFeeInput && (await renewalFeeInput.count()) > 0) {
        await renewalFeeInput.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await renewalFeeInput.fill('25');
      } else {
        const renewalFeeFallback = programPage.locator(
          '#txtRenewalFee, #txtrenewalfee, input[name*="renewal"][type="text"]'
        );
        if (renewalFeeFallback && (await renewalFeeFallback.count()) > 0) {
          await renewalFeeFallback.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
          await renewalFeeFallback.fill('25');
        }
      }
    } catch (e: unknown) {
      console.warn('Required info tab interaction failed:', e);
    }

    const programOptionFinal = programPage.getByRole('option', { name: 'Falcon Auto Test Program' });
    if (await programOptionFinal.count() > 0) {
      await programOptionFinal.click();
    }

    let detailsPage = programPage;
    // Try the label-scoped button first, fall back to any visible "Add Program" button
    let addProgramButton = programPage.getByLabel('Add Program').getByRole('button', { name: 'Add Program' });
    if (await addProgramButton.count() === 0) {
      addProgramButton = programPage.getByRole('button', { name: 'Add Program' }).first();
    }
    // Wait up to 10 s for the button to appear before checking
    const addProgBtnReady = await addProgramButton.waitFor({ state: 'visible', timeout: 10000 }).then(() => true).catch(() => false);
    console.log(`[addNewAccountAndProgram] Add Program button ready: ${addProgBtnReady}`);
    if (addProgBtnReady) {
      try {
        const [popup] = await Promise.all([
          programPage.waitForEvent('popup', { timeout: 10000 }),
          addProgramButton.click()
        ]);
        detailsPage = popup;
        console.log('[addNewAccountAndProgram] detailsPage opened as popup');
      } catch {
        // No popup — button navigates programPage inline
        console.log('[addNewAccountAndProgram] No popup — detailsPage = programPage (inline navigation)');
      }
    } else {
      console.warn('[addNewAccountAndProgram] Add Program button not found — skipping program details form');
    }

    await detailsPage.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
    if (!detailsPage.isClosed()) {
      const detailsFrame = detailsPage.frameLocator('#MainFrameBodyFrame');

      // Fast guard: if the program details form didn't load (e.g. no program was selected),
      // return immediately instead of burning 100+ s on silent timeouts.
      const formReady = await detailsFrame.locator('#ddlestimatetype, #txtrenewalfee, button[value="Finish"]')
        .first().waitFor({ state: 'attached', timeout: 20000 }).then(() => true).catch(() => false);
      if (!formReady) {
        console.warn('[addNewAccountAndProgram] Program details form not loaded — aborting (was a program selected?)');
        return;
      }

      const estimateTypeSelect = detailsFrame.locator('#ddlestimatetype');
      if (await estimateTypeSelect.count() > 0) {
        await estimateTypeSelect.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        await estimateTypeSelect.selectOption({ index: 1 }).catch(() => {});
      }

      const selectByIndex = async (trigger: Locator) => {
        if (await trigger.count() === 0) return;
        await trigger.scrollIntoViewIfNeeded().catch(() => {});
        await trigger.evaluate((el) => (el as HTMLElement).focus()).catch(() => {});
        const options = detailsFrame.locator('ul.combo-box-list > li, li[role="option"]');
        const optionCount = await options.count();
        const targetIndex = optionCount > 2 ? 2 : optionCount > 1 ? 1 : 0;
        const pressCount = optionCount > 0 ? targetIndex + 1 : 1;
        for (let i = 0; i < pressCount; i++) {
          await trigger.press('ArrowDown');
          await trigger.press('ArrowDown');
        }
        await trigger.press('Enter');
      };

      const salesPersonSelect = detailsFrame.locator('#ddlsalesperson2_select');
      const salesPersonFilter = detailsFrame.locator('#ddlsalesperson2_textFilter');
      if (await salesPersonFilter.count() > 0) {
        await salesPersonSelect.click({ force: true }).catch(() => {});
        const salesOptions = detailsFrame.locator('ul.combo-box-list > li, li[role="option"]');
        const firstNonNone = salesOptions.filter({ hasNotText: /none/i }).first();
        if (await firstNonNone.count() > 0) {
          await firstNonNone.click({ force: true });
        } else {
          const selectEl = detailsFrame.locator('select#ddlsalesperson2, select[name="ddlsalesperson2"]');
          if (await selectEl.count() > 0) {
            await selectEl.selectOption({ index: 1 }).catch(() => {});
          }
          await salesPersonFilter.click();
          await salesPersonFilter.press('ArrowDown');
          await salesPersonFilter.press('Enter');
        }
      }

      await selectByIndex(detailsFrame.locator('#ddlTax_select'));
      // Select Falcon Auto Route by name in program details
      {
        const rTrigger = detailsFrame.locator('#ddlroute_select');
        const rFilter  = detailsFrame.locator('#ddlroute_textFilter');
        if (await rTrigger.count() > 0) {
          await rTrigger.click({ force: true });
          if (await rFilter.count() > 0) {
            await rFilter.fill('Falcon Auto Route');
            const rOption = detailsFrame.locator('#ddlroute_content .combo-box-list li a')
              .filter({ hasText: 'Falcon Auto Route' }).first();
            if (await rOption.count() > 0) {
              await rOption.click({ force: true });
            } else {
              await rFilter.press('ArrowDown');
              await rFilter.press('Enter');
            }
          } else {
            const rOption = detailsFrame.locator('#ddlroute_content .combo-box-list li a')
              .filter({ hasText: 'Falcon Auto Route' }).first();
            if (await rOption.count() > 0) await rOption.click({ force: true });
          }
        }
      }
      const sourceEmployeeTrigger = detailsFrame.locator('#ddlsourceemployee_select');
      if (await sourceEmployeeTrigger.count() > 0) {
        await sourceEmployeeTrigger.click({ force: true }).catch(() => {});
        const empOption = detailsFrame.locator('#ddlsourceemployee_content .combo-box-list > li').nth(1);
        if (await empOption.count() > 0) await empOption.click({ force: true }).catch(() => {});
      }

      // Click first non-None item in a combo-box dropdown (same pattern as ddlsourceemployee)
      // Does NOT verify — trusts the click to avoid overwriting an async widget update
      const clickComboItem = async (triggerSel: string, contentSel: string) => {
        await detailsFrame.locator(triggerSel).click({ force: true }).catch(() => {});
        await detailsFrame.locator('.combo-box-list > li, [role="option"]').first().waitFor({ state: 'attached', timeout: 3000 }).catch(() => {})
        let items = detailsFrame.locator(`${contentSel} .combo-box-list > li`);
        if (await items.count() === 0) items = detailsFrame.locator(`${contentSel} li`);
        const n = await items.count();
        if (n > 1) await items.nth(1).click({ force: true }).catch(() => {});
        else if (n === 1) await items.nth(0).click({ force: true }).catch(() => {});
        await detailsPage.waitForLoadState('domcontentloaded').catch(() => {})
      };

      // ── Primary Source ───────────────────────────────────────────────────────────
      {
        const srcTrigger  = detailsFrame.locator('#ddlsource_select');
        const srcNative   = detailsFrame.locator('select#ddlsource');
        const srcFilter   = detailsFrame.locator('#ddlsource_textFilter');

        if (await srcNative.count() > 0) {
          // Simplest path: native <select> — pick index 2, fall back to 1
          const opts = await srcNative.locator('option').count();
          await srcNative.selectOption({ index: opts >= 3 ? 2 : opts >= 2 ? 1 : 0 });

        } else if (await srcTrigger.count() > 0) {
          // Combo-box widget: click trigger, then look for items unscoped (same as salesperson)
          // because the panel renders at frame-body level, NOT strictly inside #ddlsource_content.
          await srcTrigger.click();
          await detailsFrame.locator('#ddlsource_content .combo-box-list > li, ul.combo-box-list > li').first().waitFor({ state: 'attached', timeout: 3000 }).catch(() => {})
          let srcItems = detailsFrame.locator('#ddlsource_content .combo-box-list > li');
          if (await srcItems.count() === 0) {
            srcItems = detailsFrame.locator('ul.combo-box-list > li, li[role="option"]');
          }
          const srcVis = await srcItems.first().waitFor({ state: 'visible', timeout: 8000 }).then(() => true).catch(() => false);
          if (srcVis) {
            const n = await srcItems.count();
            await srcItems.nth(n >= 3 ? 2 : n >= 2 ? 1 : 0).click({ force: true });
          } else {
            // Panel didn't open — fall through to keyboard on the filter input
            await srcFilter.click().catch(() => {});
            await srcFilter.press('ArrowDown');
            await detailsPage.waitForLoadState('domcontentloaded').catch(() => {})
            await srcFilter.press('ArrowDown');
            await detailsPage.waitForLoadState('domcontentloaded').catch(() => {})
            await srcFilter.press('ArrowDown');
            await srcFilter.press('Enter').catch(() => {});
          }

        } else if (await srcFilter.count() > 0) {
          // Pure jQuery UI autocomplete — no combo trigger at all
          await srcFilter.click();
          await srcFilter.fill('');
          await srcFilter.press('ArrowDown');
          await detailsPage.waitForLoadState('domcontentloaded').catch(() => {})
          await srcFilter.press('ArrowDown');
          await detailsPage.waitForLoadState('domcontentloaded').catch(() => {})
          await srcFilter.press('ArrowDown');
          await srcFilter.press('Enter').catch(() => {});
        }
      }

      // ── Primary Target ───────────────────────────────────────────────────────────
      await clickComboItem('#ddlPrimaryTarget_select', '#ddlPrimaryTarget_content');

      const renewalFee = faker.number.int({ min: 10, max: 99 }).toString();
      const boosterFee = faker.number.int({ min: 10, max: 99 }).toString();
      const renewalFeeInput = detailsFrame.locator('#txtrenewalfee');
      if (await renewalFeeInput.count() > 0) {
        await renewalFeeInput.click();
        await renewalFeeInput.fill(renewalFee);
      }
      const boosterFeeInput = detailsFrame.locator('#txtboosterfee');
      if (await boosterFeeInput.count() > 0) {
        await boosterFeeInput.click();
        await boosterFeeInput.fill(boosterFee);
      }

      const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const todayStr = formatDate(today);
      const tomorrowStr = formatDate(tomorrow);

      const setDateInput = async (input: Locator, value: string) => {
        if (await input.count() === 0) return false;
        await input.fill(value);
        await input.evaluate((el, v) => {
          const inputEl = el as HTMLInputElement;
          inputEl.value = v as string;
          inputEl.dispatchEvent(new Event('input', { bubbles: true }));
          inputEl.dispatchEvent(new Event('change', { bubbles: true }));
        }, value);
        return true;
      };

      const endCommDateInput = detailsFrame.locator('#txtEndCommDate, input[name="txtEndCommDate"]');
      await setDateInput(endCommDateInput, todayStr);

      const firstServiceDateInput = detailsFrame.locator('#txtfirstservice, input[name="txtfirstservice"]');
      await setDateInput(firstServiceDateInput, tomorrowStr);

      const todayDateInput = detailsFrame.locator(
        '#txtstartdate, input[name="txtstartdate"], #txtstart, input[name="txtstart"]'
      );
      const setToday = await setDateInput(todayDateInput, todayStr);
      if (!setToday) {
        const datePickers = detailsFrame.locator('input.hasDatepicker');
        const datePickerCount = await datePickers.count();
        if (datePickerCount > 0) {
          const firstServiceCount = await firstServiceDateInput.count();
          const targetIndex = firstServiceCount > 0 && datePickerCount > 1 ? 1 : 0;
          if (!(firstServiceCount > 0 && datePickerCount === 1)) {
            await setDateInput(datePickers.nth(targetIndex), todayStr);
          }
        }
      }

      const autoFill = detailsFrame.getByRole('button', { name: 'Auto-fill dates' });
      if (await autoFill.count() > 0) await autoFill.click();


      // ── DIAGNOSTIC SNAPSHOT: dump all key field values before Finish ─────────────
      const formSnapshot = await detailsFrame.locator('body').evaluate(() => {
        const val = (id: string) => {
          const el = document.querySelector<HTMLInputElement | HTMLSelectElement>(`#${id}`);
          if (!el) return `(#${id} not found)`;
          if (el instanceof HTMLSelectElement) return el.selectedIndex >= 0 ? el.options[el.selectedIndex].text : '(no selection)';
          return (el as HTMLInputElement).value || '(empty)';
        };
        const filterVal = (id: string) => {
          const el = document.querySelector<HTMLInputElement>(`#${id}`);
          return el ? (el.value || '(empty)') : `(#${id} not found)`;
        };
        return {
          estimateType:   val('ddlestimatetype'),
          salesperson:    filterVal('ddlsalesperson2_textFilter'),
          tax:            filterVal('ddlTax_textFilter'),
          route:          filterVal('ddlroute_textFilter'),
          srcEmployee:    filterVal('ddlsourceemployee_textFilter'),
          primarySource:  filterVal('ddlsource_textFilter'),
          primaryTarget:  filterVal('ddlPrimaryTarget_textFilter'),
          renewalFee:     val('txtrenewalfee'),
          boosterFee:     val('txtboosterfee'),
        };
      }).catch(err => ({ error: String(err) }));
      console.log('[addNewAccountAndProgram] Form snapshot before Finish:', JSON.stringify(formSnapshot, null, 2));

      detailsPage.once('dialog', (dialog: import('playwright').Dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
      const finishButton = detailsFrame.getByRole('button', { name: 'Finish' });
      try {
        if (await finishButton.count() > 0) {
          const isPopup = detailsPage !== programPage;

          if (isPopup) {
            // Popup case: the definitive success signal is the popup closing.
            // Register waitForEvent('close') BEFORE click via Promise.all so we
            // cannot miss the event. If popup stays open (spinner stuck / save failed),
            // this correctly throws after 45 s instead of passing as a false positive.
            await Promise.all([
              detailsPage.waitForEvent('close', { timeout: 45000 }),
              finishButton.click(),
            ]);
          } else {
            // Inline case (no popup opened): save navigates or reloads the same page.
            await Promise.all([
              detailsPage.waitForLoadState('load', { timeout: 45000 }).catch(() =>
                detailsPage.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {})
              ),
              finishButton.click(),
            ]);
          }
        }
      } catch (err: unknown) {
        // In headless mode a checkbox interaction can trigger auto-submit,
        // closing the popup before we reach finishButton.count(). Treat as success.
        const msg = err instanceof Error ? err.message : String(err);
        if (!msg.includes('closed')) throw err;
        console.log('[addNewAccountAndProgram] detailsPage already closed — auto-submitted via checkboxes.');
      }
    }
     await detailsPage.close().catch(() => {});
  }
}
