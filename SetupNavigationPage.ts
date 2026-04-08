import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { delay } from "rxjs-compat/operator/delay";
import { Browser } from "@playwright/test";






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




 constructor(page:Page){
     
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


 }


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

 }
