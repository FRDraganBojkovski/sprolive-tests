import { Locator, Page } from "@playwright/test";
<<<<<<< HEAD
import { assertVisible, assertNotVisible } from '../utils/assertHelper'
import { faker } from "@faker-js/faker";
import { Browser } from "@playwright/test";
import { OfficeNavigationPage } from "./OfficeNavigationPage";
=======
import { faker } from "@faker-js/faker";
import { delay } from "rxjs-compat/operator/delay";
import { Browser } from "@playwright/test";
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799






<<<<<<< HEAD
export class SetupNavigationPage extends OfficeNavigationPage {

 readonly page: Page
 readonly setupMenuPageAccess:Locator
 readonly accountAndSiteAccess:Locator
 readonly actionTagsSetupAccess:Locator
 readonly actionTagsSetupAddNewTag:Locator
 readonly actionTagsSetupInputTag:Locator
 readonly actionTagsDatePickerOpen:Locator
 readonly actionTagsDatePickerNextMonth:Locator
 readonly actionTagsDatePickerSet:Locator
 readonly actionTagsIsSiteTagCheckBox:Locator
 readonly actionTagsIsProspectTagCheckBox:Locator
 readonly actionTagsActiveCheckBox:Locator
 readonly actionTagsSortOrderTextBox:Locator
 readonly actionTagsAddActionTagToPrintCheckbox:Locator
 readonly actionTagsSaveButton:Locator
 readonly actionTagsBackButton:Locator
 readonly actionTagsFindSavedTagInList:Locator
 readonly actionTagsRemoveTagButton:Locator
 readonly actionTagsInactiveRadioButton:Locator
 webPortalPage: Page | null = null
=======
export class SetupNavigationPage {

 readonly page: Page
 readonly SetupMenuPageAccess:Locator
 readonly AccountAndSiteAccess:Locator
 readonly ActionTagsSetupAccess:Locator
 readonly ActionTagsSetupAddNewTag:Locator
 readonly ActionTagsSetupInputTag:Locator
 readonly ActionTagsDatePickerOpen:Locator
 readonly ActionTagsDatePickerNextMonth:Locator
 readonly ActionTagsDatePickerSet:Locator
 readonly ActionTagsIsSiteTagCheckBox:Locator
 readonly ActionTagsIsProspectTagCheckBox:Locator
 readonly ActionTagsActiveCheckBox:Locator
 readonly ActionTagsSortOrderTextBox:Locator
 readonly ActionTagsAddActionTagToPrintCheckbox:Locator
 readonly ActionTagsSaveButton:Locator
 readonly ActionTagsBackButton:Locator
 readonly ActionTagsFindSavedTagInList:Locator
 readonly ActionTagsRemoveTagButton:Locator
 readonly ActionTagsInactiveRadioButton:Locator
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799




 constructor(page:Page){
<<<<<<< HEAD
     super(page)
     this.page=page
     this.page.setDefaultTimeout(240000);
   
     //Setup menu > Action&Site >Action Tags Setup
     const iframeInSetup = page.frameLocator('#ifrmWizard')
     const actionTagName = 'Falcon Auto Test'
     this.setupMenuPageAccess = page.locator('#_ctl0_mainmenu_lnkSetupNew_253')
     this.accountAndSiteAccess = page.getByRole('link', { name: ' Account & Site' })
     this.actionTagsSetupAccess = page.getByRole('link', { name: 'Action Tags Setup' })
     this.actionTagsSetupAddNewTag = iframeInSetup.locator('#HyperLink2_15370')
     this.actionTagsSetupInputTag = iframeInSetup.locator('input#txttag')
     this.actionTagsDatePickerOpen = iframeInSetup.locator('[class="btn datepicker-trigger"]')
     this.actionTagsDatePickerNextMonth = iframeInSetup.locator('[class="ui-icon ui-icon-circle-triangle-e"]')
     this.actionTagsDatePickerSet = iframeInSetup.locator('[class="ui-datepicker-calendar"]').getByText('28',{exact:true}) //getByRole('button', {name:'Today'})
     this.actionTagsIsSiteTagCheckBox = iframeInSetup.locator('label[for="chkissitetag_15526"]')
     this.actionTagsIsProspectTagCheckBox = iframeInSetup.locator('label[for="chkisprospecttag_15527"]')
     this.actionTagsActiveCheckBox = iframeInSetup.locator('label[for="chkactive_108"]')
     this.actionTagsAddActionTagToPrintCheckbox = iframeInSetup.locator('label[for="chkaddtositeinstruction_32209"]')
     this.actionTagsSortOrderTextBox = iframeInSetup.locator('#txtsort')
     this.actionTagsBackButton = iframeInSetup.locator('#btnBack_103')
     this.actionTagsSaveButton = iframeInSetup.locator('#btnOK_639')
     this.actionTagsFindSavedTagInList = iframeInSetup.locator('tr').filter({hasText: actionTagName}).getByText(actionTagName)
     this.actionTagsRemoveTagButton = iframeInSetup.locator('tr').filter({hasText: actionTagName}).locator('a, button, input[type="button"]').filter({hasText: 'Remove'})
     this.actionTagsInactiveRadioButton = iframeInSetup.locator('label[for="rdoinactive_1167"]')
=======
     
     this.page=page
   
     //Setup menu > Action&Site >Action Tags Setup
     const iframeInSetup = page.frameLocator('#ifrmWizard')
     const ActionTagName = 'Falcon Auto Test'
     this.SetupMenuPageAccess = page.locator('#_ctl0_mainmenu_lnkSetupNew_253')
     this.AccountAndSiteAccess = page.getByRole('link', { name: ' Account & Site' })
     this.ActionTagsSetupAccess = page.locator('#wr_130').getByText('Action Tags Setup')
     this.ActionTagsSetupAddNewTag = iframeInSetup.locator('#HyperLink2_15370')
     this.ActionTagsSetupInputTag = iframeInSetup.locator('input#txttag')
     this.ActionTagsDatePickerOpen = iframeInSetup.locator('[class="btn datepicker-trigger"]')
     this.ActionTagsDatePickerNextMonth = iframeInSetup.locator('[class="ui-icon ui-icon-circle-triangle-e"]')
     this.ActionTagsDatePickerSet = iframeInSetup.locator('[class="ui-datepicker-calendar"]').getByText('28',{exact:true}) //getByRole('button', {name:'Today'})
     this.ActionTagsIsSiteTagCheckBox = iframeInSetup.locator('label[for="chkissitetag_15526"]')
     this.ActionTagsIsProspectTagCheckBox = iframeInSetup.locator('label[for="chkisprospecttag_15527"]')
     this.ActionTagsActiveCheckBox = iframeInSetup.locator('label[for="chkactive_108"]')
     this.ActionTagsAddActionTagToPrintCheckbox = iframeInSetup.locator('label[for="chkaddtositeinstruction_32209"]')
     this.ActionTagsSortOrderTextBox = iframeInSetup.locator('#txtsort')
     this.ActionTagsBackButton = iframeInSetup.locator('#btnBack_103')
     this.ActionTagsSaveButton = iframeInSetup.locator('#btnOK_639')
     this.ActionTagsFindSavedTagInList = iframeInSetup.getByRole('row', {name:ActionTagName}).getByText(ActionTagName)
     this.ActionTagsRemoveTagButton = iframeInSetup.getByRole('row', {name:ActionTagName}).getByText('Remove')
     this.ActionTagsInactiveRadioButton = iframeInSetup.locator('label[for="rdoinactive_1167"]')
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799


 }


<<<<<<< HEAD
 async setupMenuPage(){
     await this.setupMenuPageAccess.click()

 }
 async accountAndSite(){
     await this.accountAndSiteAccess.click()
     await this.page.waitForLoadState('networkidle').catch(() => {})

 }



 async actionTagsSetup(){
     
     const actionTagName = 'Falcon Auto Test'//faker.person.firstName()+" Falcon Auto Test" //
     const actionSortOrderNumber = '1'
 
 
     // Adding Without Saving New Tag details

     await this.actionTagsSetupAccess.waitFor({ state: 'visible' })
     await this.actionTagsSetupAccess.click()
     await this.actionTagsSetupAddNewTag.click()
     await this.actionTagsSetupInputTag.waitFor({ state: 'visible' })
     await this.actionTagsSetupInputTag.fill(actionTagName)
     await this.actionTagsDatePickerOpen.click({delay:500})
     await this.actionTagsDatePickerNextMonth.click()
     await this.actionTagsDatePickerSet.click({delay:500})
     await this.actionTagsIsSiteTagCheckBox.waitFor({ state: 'visible' })
     await this.actionTagsIsSiteTagCheckBox.check({force:true})
     await this.actionTagsIsProspectTagCheckBox.check({force:true})
     await this.actionTagsSortOrderTextBox.fill(actionSortOrderNumber)
     await this.actionTagsActiveCheckBox.check({force:true})
     await this.actionTagsAddActionTagToPrintCheckbox.check({force:true})
     await this.actionTagsBackButton.click()

     let removeBtnCount = await this.actionTagsRemoveTagButton.count();
    while (removeBtnCount > 0) {
      await this.actionTagsRemoveTagButton.first().click();
      await this.page.waitForLoadState('domcontentloaded').catch(() => {})
      removeBtnCount = await this.actionTagsRemoveTagButton.count();
    }

     await this.actionTagsInactiveRadioButton.click();
   
      // Adding and Saving New Tag details
   
      await this.actionTagsSetupAccess.click()
      await this.actionTagsSetupAddNewTag.click()
      await this.actionTagsSetupInputTag.waitFor({ state: 'visible' })
      await this.actionTagsSetupInputTag.fill(actionTagName)
      await this.actionTagsDatePickerOpen.click({delay:500})
      await this.actionTagsDatePickerNextMonth.click()
      await this.actionTagsDatePickerSet.click({delay:500})
      await this.actionTagsIsSiteTagCheckBox.waitFor({ state: 'visible' })
      await this.actionTagsIsSiteTagCheckBox.check({force:true})
      await this.actionTagsIsProspectTagCheckBox.check({force:true})
      await this.actionTagsSortOrderTextBox.fill(actionSortOrderNumber)
      await this.actionTagsActiveCheckBox.check({force:true})
      await this.actionTagsAddActionTagToPrintCheckbox.check({force:true})
      await this.actionTagsSaveButton.click()

     await assertVisible(this.actionTagsFindSavedTagInList, 'Action Tag is added to the list after saving')

     let removeCount = await this.actionTagsRemoveTagButton.count();
     while (removeCount > 0) {
       await this.actionTagsRemoveTagButton.first().click();
       await this.page.waitForLoadState('domcontentloaded').catch(() => {})
       removeCount = await this.actionTagsRemoveTagButton.count();
     }

     await assertNotVisible(this.actionTagsFindSavedTagInList, 'Action Tag is removed from the list')

    }

    async  companySetupInvoiceHcNonPTMform() {
      await this.page.getByRole('link', { name: ' Company' }).click();
      await this.page.getByRole('link', { name: 'Company Form Setup' }).click();
      await this.page.locator('iframe[name="iframebody"]').contentFrame().locator('#ddlinvoiceform').selectOption('2');
      await this.page.locator('iframe[name="iframebody"]').contentFrame().getByRole('link', { name: 'Save' }).click();
      await this.page.getByRole('link', { name: 'Home' }).click();
      await assertVisible(this.setupMenuPageAccess, 'HC non-PTM Form saved - Home page loaded successfully')

     };
    
    async  companySetupInvoiceCustmPTMform() {
      await this.page.getByRole('link', { name: ' Company' }).click();
      await this.page.getByRole('link', { name: 'Company Form Setup' }).click();
      await this.page.locator('iframe[name="iframebody"]').contentFrame().locator('#ddlinvoiceform').selectOption('-866');
      await this.page.locator('iframe[name="iframebody"]').contentFrame().getByRole('link', { name: 'Save' }).click();
      await this.page.getByRole('link', { name: 'Home' }).click();
      await assertVisible(this.setupMenuPageAccess, 'Custom PTM Form saved - Home page loaded successfully')

    };

    async  companySetupInvoiceHcPTMform() {
      await this.page.getByRole('link', { name: ' Company' }).click();
      await this.page.getByRole('link', { name: 'Company Form Setup' }).click();
      await this.page.locator('iframe[name="iframebody"]').contentFrame().locator('#ddlinvoiceform').selectOption('5');
      await this.page.locator('iframe[name="iframebody"]').contentFrame().getByRole('link', { name: 'Save' }).click();
      await this.page.getByRole('link', { name: 'Home' }).click();
      await assertVisible(this.setupMenuPageAccess, 'HC PTM Form saved - Home page loaded successfully')
    };

    async companySetupInvoiceCustomNonPTMform(){
      await this.page.getByRole('link', { name: ' Company' }).click();
      await this.page.getByRole('link', { name: 'Company Form Setup' }).click();
      await this.page.locator('iframe[name="iframebody"]').contentFrame().locator('#ddlinvoiceform').selectOption('-507');
      await this.page.locator('iframe[name="iframebody"]').contentFrame().getByRole('link', { name: 'Save' }).click();
      await this.page.getByRole('link', { name: 'Home' }).click();
      await assertVisible(this.setupMenuPageAccess, 'Custom non-PTM Form saved - Home page loaded successfully')
    };
    async webPortalSetup(){
        await this.page.getByRole('link', { name: ' Communications' }).click();
        await this.page.getByRole('link', { name: 'Web Portal Setup' }).click();
        const page1Promise = this.page.context().waitForEvent('page');
        await this.page.locator('iframe[name="iframebody"]').contentFrame().getByRole('link', { name: 'https://sprolive.' }).click();
        this.webPortalPage = await page1Promise;
        await this.webPortalPage.waitForLoadState();
        await this.webPortalPage.locator('#txtEmail').click();
        await this.webPortalPage.locator('#txtEmail').fill('dbojkovski@servicetitan.com');
        await this.webPortalPage.locator('#txtEmail').press('Tab');
        await this.webPortalPage.locator('#txtPassword').fill('Testing123!');
        await this.webPortalPage.locator('a, button, input[type="submit"]').filter({ hasText: 'Log In' }).first().click();
        await this.webPortalPage.waitForLoadState();
        await this.webPortalPage.getByRole('link', { name: 'Go to account' }).nth(1).click();
        await this.webPortalPage.waitForLoadState();
        await assertVisible(this.webPortalPage.locator('body'), 'Web Portal account page loaded successfully')

    };
   async webportalPrintCompletedWO() {
    const page1 = this.webPortalPage!
    await page1.getByRole('link', { name: ' Service Information' }).click();
    await page1.getByText('Show me appointment history').click();
    await page1.getByRole('link', { name: 'Print Completed WO' }).first().click();
    await page1.waitForLoadState();
    await page1.locator('#ddlWOList').selectOption('0126', { force: true });
    await page1.locator('input[value="Print Work Orders"], button:has-text("Print Work Orders")').click();
    await page1.waitForLoadState();
    await assertVisible(page1.locator('body'), 'Print Completed WO page loaded successfully')
   }    

   async routeSetup(){
    const routeNumber = faker.number.int({ min: 100, max: 999 });
    const routeName = `Falcon Auto ${routeNumber}`;
    const routeFrame=  this.page.locator('iframe[name="iframebody"]').contentFrame()
    await this.page.getByRole('link', { name: ' Routing' }).click();
    await this.page.getByRole('link', { name: 'Route Setup' }).click();
    await routeFrame.getByRole('link', { name: 'Add New Route' }).click();
    await routeFrame.locator('#txtRouteName').click();
    await routeFrame.locator('#txtRouteName').fill(routeName);
    await routeFrame.locator('#txtvieworder').click();
    await routeFrame.locator('#txtvieworder').fill('2');
    await routeFrame.getByText('Use Employee\'s Home Address').first().click();
    await routeFrame.getByText('Use Branch Address').first().click();
    await routeFrame.getByText('Use Branch Address').nth(1).click();
    await routeFrame.locator('#ddlStartBranch_select').click();
    await routeFrame.getByRole('link', { name: 'Falcon Auto Test Branch' }).click();
    await routeFrame.locator('#ddlEndBranch_select').click();
    await routeFrame.getByRole('link', { name: 'Falcon Auto Test Branch' }).click();
    await routeFrame.locator('#tabBranches').getByText('Select All').click();
    await routeFrame.getByRole('link', { name: 'Save' }).click();
    await assertVisible(routeFrame.getByRole('link', { name: routeName }), `Route '${routeName}' saved successfully`);
    
    // Removing Route from the list
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.accept().catch(() => {});
    });
    await routeFrame.getByRole('row', { name: routeName }).getByRole('link', { name: 'Inactivate' }).click();
    await assertNotVisible(routeFrame.getByRole('link', { name: routeName }), `Route '${routeName}' removed successfully`);

   }

    


=======
 async SetupMenuPage(){
     await this.SetupMenuPageAccess.click()

 }
 async AccountAndSite(){
     await this.AccountAndSiteAccess.click()
     await this.page.waitForTimeout(1000)
 
 }



 async ActionTagsSetup(){
     const ActionTagName = 'Falcon Auto Test'//faker.person.firstName()+" Falcon Auto Test" //
     const ActionSortOrderNumber = '1'
     const ActionSortOrderNumber2 = '2'  // faker.number.int().toString()
 
     // Adding Without Saving New Tag details

     await this.ActionTagsSetupAccess.click()
     await this.ActionTagsSetupAddNewTag.click()
     await this.ActionTagsSetupInputTag.fill(ActionTagName)
     await this.ActionTagsDatePickerOpen.click({delay:500})
     await this.ActionTagsDatePickerNextMonth.click()
     await this.ActionTagsDatePickerSet.click({delay:500})
     await this.page.waitForTimeout(3000)
     await this.ActionTagsIsSiteTagCheckBox.check({force:true})
     await this.ActionTagsIsProspectTagCheckBox.check({force:true})
     await this.ActionTagsSortOrderTextBox.fill(ActionSortOrderNumber)
     await this.ActionTagsActiveCheckBox.check({force:true})
     await this.ActionTagsAddActionTagToPrintCheckbox.check({force:true})
     await this.ActionTagsBackButton.click()
   
      // Adding and Saving New Tag details
   
      await this.ActionTagsSetupAccess.click()
      await this.ActionTagsSetupAddNewTag.click()
      await this.ActionTagsSetupInputTag.fill(ActionTagName)
      await this.ActionTagsDatePickerOpen.click({delay:500})
      await this.ActionTagsDatePickerNextMonth.click()
      await this.ActionTagsDatePickerSet.click({delay:500})
      await this.page.waitForTimeout(3000)
      await this.ActionTagsIsSiteTagCheckBox.check({force:true})
      await this.ActionTagsIsProspectTagCheckBox.check({force:true})
      await this.ActionTagsSortOrderTextBox.fill(ActionSortOrderNumber)
      await this.ActionTagsActiveCheckBox.check({force:true})
      await this.ActionTagsAddActionTagToPrintCheckbox.check({force:true})
      await this.ActionTagsSaveButton.click()
       
      // Edit>Saving and Removing  New Tag details
     
     /* await this.ActionTagsFindSavedTagInList.click()
      await this.page.waitForTimeout(3000)
      await this.ActionTagsIsSiteTagCheckBox.uncheck({force:true})
      await this.ActionTagsIsProspectTagCheckBox.uncheck({force:true})
      await this.ActionTagsSortOrderTextBox.fill(ActionSortOrderNumber2)
      await this.ActionTagsActiveCheckBox.uncheck({force:true})
      await this.ActionTagsAddActionTagToPrintCheckbox.uncheck({force:true})
      await this.ActionTagsSaveButton.click()
      await this.ActionTagsInactiveRadioButton.click()
      // await this.ActionTagsRemoveTagButton.click({delay:500})
        */
    }

    //Add New Account New - Account Only
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799

 }
