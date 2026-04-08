import {expect} from '@playwright/test'
import {test} from '../test-options'
import {SetupNavigationPage} from '../page-objects/SetupNavigationPage'
<<<<<<< HEAD
=======
import { Faker } from "@faker-js/faker/.";
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799


/*
test('Home access', async({page}) =>{
    //by class
await page.locator('#_ctl0_mainmenu_Li1').click();

})
*/


<<<<<<< HEAD
test('Action Tags Setup', async({page, sproglobalLogin }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    await navigatetoSetupandAccess.setupMenuPage()
    await navigatetoSetupandAccess.accountAndSite()
    await navigatetoSetupandAccess.actionTagsSetup()
})

test('Company Form Setup Invoice Hardcoded non-PTM Form', async({page, sproglobalLogin }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    await navigatetoSetupandAccess.setupMenuPage();
    await navigatetoSetupandAccess.companySetupInvoiceHcNonPTMform()

})

test('Company Form Setup Invoice Custom FD PTM Form', async({page, sproglobalLogin }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    await navigatetoSetupandAccess.setupMenuPage()
    await navigatetoSetupandAccess.companySetupInvoiceCustmPTMform()

})
test('Company Form Setup Invoice Hardcoded PTM Form', async({page, sproglobalLogin }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    await navigatetoSetupandAccess.setupMenuPage()
    await navigatetoSetupandAccess.companySetupInvoiceHcPTMform()

})

test('Company Form Setup Invoice Custom FD non PTM Form', async({page, sproglobalLogin }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    await navigatetoSetupandAccess.setupMenuPage()
    await navigatetoSetupandAccess.companySetupInvoiceCustomNonPTMform()

})

test('Web Portal setup', async({page, sproglobalLogin }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    await navigatetoSetupandAccess.setupMenuPage()
    await navigatetoSetupandAccess.webPortalSetup()
    await navigatetoSetupandAccess.webportalPrintCompletedWO()

})

test('Route Setup', async({page, sproglobalLogin }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    await navigatetoSetupandAccess.setupMenuPage()
    await navigatetoSetupandAccess.routeSetup()

=======
test('Action Tags Setup', async({page, SprodevLogin }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    await navigatetoSetupandAccess.SetupMenuPage()
    await navigatetoSetupandAccess.AccountAndSite()
    await navigatetoSetupandAccess.ActionTagsSetup()
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799
})