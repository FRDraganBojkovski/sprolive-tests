import { test } from '../test-options';
import { AccountNavigationPage } from '../page-objects/AccountNavigationPage';
import { SetupNavigationPage } from '../page-objects/SetupNavigationPage';

test.setTimeout(180000);
test('Add New Account new - only', async({ page, sproliveLoginFr }) => {
    test.setTimeout(240000);
    const navigateToAccount = new AccountNavigationPage(page);
    await navigateToAccount.addNewAccountNewAccountOnly();
    //await navigateToAccount.activateAccount();
});
test('Add New Account New + Program', async({ page, sproliveLoginFr }) => {
    test.setTimeout(240000);
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.addNewAccountAndProgram()
})

test('Add New Account OldUI - only', async({page, sproliveLoginFr })=>{
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.addNewAccountOldAccountOnly()
    
})

test('Add New Account OldUI + Program', async({page, sproliveLoginFr }) =>{
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.addNewAccountOldUIAccountAndProgram();
 
})


test('Open Account ', async({page, sproliveLoginFr}) =>{
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.openAccount()
 
})

test('Open Account and add Renewal program ', async({page, sproliveLoginFr }) =>{
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.openAccountAddRenewalProgram()
 
})
test('Open Account and add Non Renewal program ', async({page, sproliveLoginFr }) =>{
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.openAccountAddNonRenewalProgram()
 
})
test('Open Account and add Seasonal program ', async({page, sproliveLoginFr }) =>{
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.addSeasonalProgramNewUI()

})

test('Complete Work Order from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.completeWorkOrderFromAccount()
})

test('Create Misc Invoice from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.createMiscInvoiceFromAccount()
})

test('Enter Payments access and Cash Payment from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.createMiscInvoiceFromAccount()
    await navigateToAccount.enterPaymentsCashFromAccount()
})

test('Enter Payments access CC Payment from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.createMiscInvoiceFromAccount()
    await navigateToAccount.enterPaymentsStripeCCFromAccount()
})

test('Accessing Scheduler from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
   // await navigateToAccount.openAccountAddNonRenewalProgram(page)
    await navigateToAccount.accessingSchedulerFromAccount()
})

test('Linked Documents  from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.accessingLinkedDocumentsFromAccount()
})

test('Add New Site from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.addNewSiteFromAccount()
})

test('Add New Event from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
    await navigateToAccount.addNewEventFromAccount()
})

test('Print Invoices from Account', async({ page, sproliveLoginFr }) => {
      const navigateToAccount = new AccountNavigationPage(page)
      const navigateToSetup = new SetupNavigationPage(page)

      await navigateToSetup.setupMenuPage();
      await navigateToSetup.companySetupInvoiceHcNonPTMform();
      await navigateToAccount.billingAccountInformationOptions();
      await navigateToAccount.createMiscInvoiceFromAccount();
      await navigateToAccount.printInvoicesFromAccount()

})

test('Deactivate Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
      await navigateToAccount.deactivateAccount()

})

test('Activate Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
      await navigateToAccount.activateAccount()

})

test('Billinig Account information options', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
      await navigateToAccount.billingAccountInformationOptions()

})
test('Print To Mail Invoices from Account', async({ page, sproliveLoginFr }) => {
      const navigateToAccount = new AccountNavigationPage(page)
      const navigateToSetup = new SetupNavigationPage(page)
     
      await navigateToSetup.setupMenuPage();
      await navigateToSetup.companySetupInvoiceHcPTMform(); 
      await navigateToAccount.createMiscInvoiceFromAccount();
      await navigateToAccount.billingAccountInformationOptions();
      await navigateToAccount.printToMailInvoicesFromAccount()

})

test('Email Invoices from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
      await navigateToAccount.emailInvoicesFromAccount()

})
/*
test('Primer test from Account', async({ page, sproliveLoginFr }) => {
    const navigateToAccount = new AccountNavigationPage(page)
      await navigateToAccount.primerTestfromAccount()

})
*/









