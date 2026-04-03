import {expect} from '@playwright/test'
import {test} from '../test-options'
import {SetupNavigationPage} from '../page-objects/SetupNavigationPage'

test.setTimeout(180000);

test('Action Tags Setup', async({page, sproliveLoginFr }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    try {
        await navigatetoSetupandAccess.setupMenuPage()
        await navigatetoSetupandAccess.accountAndSite()
        await navigatetoSetupandAccess.actionTagsSetup()
        console.log('[PASSED] Action Tags Setup completed successfully')
        test.info().annotations.push({ type: 'Result', description: 'PASSED: Action Tags Setup completed successfully' })
    } catch (error) {
        console.log(`[FAILED] Action Tags Setup - ${(error as Error).message}`)
        test.info().annotations.push({ type: 'Result', description: `FAILED: ${(error as Error).message}` })
        throw error
    }
})

test('Company Form Setup Invoice Hardcoded non-PTM Form', async({page, sproliveLoginFr }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    try {
        await navigatetoSetupandAccess.setupMenuPage()
        await navigatetoSetupandAccess.companySetupInvoiceHcNonPTMform()
        console.log('[PASSED] Company Form Setup Invoice Hardcoded non-PTM Form saved successfully')
        test.info().annotations.push({ type: 'Result', description: 'PASSED: HC non-PTM Form saved successfully' })
    } catch (error) {
        console.log(`[FAILED] Company Form Setup Invoice Hardcoded non-PTM Form - ${(error as Error).message}`)
        test.info().annotations.push({ type: 'Result', description: `FAILED: ${(error as Error).message}` })
        throw error
    }
})

test('Company Form Setup Invoice Custom FD PTM Form', async({page, sproliveLoginFr }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    try {
        await navigatetoSetupandAccess.setupMenuPage()
        await navigatetoSetupandAccess.companySetupInvoiceCustmPTMform()
        console.log('[PASSED] Company Form Setup Invoice Custom FD PTM Form saved successfully')
        test.info().annotations.push({ type: 'Result', description: 'PASSED: Custom FD PTM Form saved successfully' })
    } catch (error) {
        console.log(`[FAILED] Company Form Setup Invoice Custom FD PTM Form - ${(error as Error).message}`)
        test.info().annotations.push({ type: 'Result', description: `FAILED: ${(error as Error).message}` })
        throw error
    }
})

test('Company Form Setup Invoice Hardcoded PTM Form', async({page, sproliveLoginFr }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    try {
        await navigatetoSetupandAccess.setupMenuPage()
        await navigatetoSetupandAccess.companySetupInvoiceHcPTMform()
        console.log('[PASSED] Company Form Setup Invoice Hardcoded PTM Form saved successfully')
        test.info().annotations.push({ type: 'Result', description: 'PASSED: HC PTM Form saved successfully' })
    } catch (error) {
        console.log(`[FAILED] Company Form Setup Invoice Hardcoded PTM Form - ${(error as Error).message}`)
        test.info().annotations.push({ type: 'Result', description: `FAILED: ${(error as Error).message}` })
        throw error
    }
})

test('Company Form Setup Invoice Custom FD non PTM Form', async({page, sproliveLoginFr }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    try {
        await navigatetoSetupandAccess.setupMenuPage()
        await navigatetoSetupandAccess.companySetupInvoiceCustomNonPTMform()
        console.log('[PASSED] Company Form Setup Invoice Custom FD non PTM Form saved successfully')
        test.info().annotations.push({ type: 'Result', description: 'PASSED: Custom FD non-PTM Form saved successfully' })
    } catch (error) {
        console.log(`[FAILED] Company Form Setup Invoice Custom FD non PTM Form - ${(error as Error).message}`)
        test.info().annotations.push({ type: 'Result', description: `FAILED: ${(error as Error).message}` })
        throw error
    }
})

test('Web Portal setup', async({page, sproliveLoginFr }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    try {
        await navigatetoSetupandAccess.setupMenuPage()
        await navigatetoSetupandAccess.webPortalSetup()
        await navigatetoSetupandAccess.webportalPrintCompletedWO()
        console.log('[PASSED] Web Portal setup and print completed WO successfully')
        test.info().annotations.push({ type: 'Result', description: 'PASSED: Web Portal setup and print completed WO successfully' })
    } catch (error) {
        console.log(`[FAILED] Web Portal setup - ${(error as Error).message}`)
        test.info().annotations.push({ type: 'Result', description: `FAILED: ${(error as Error).message}` })
        throw error
    }
})

test('Route Setup', async({page, sproliveLoginFr }) =>{
    const navigatetoSetupandAccess = new SetupNavigationPage(page)
    try {
        await navigatetoSetupandAccess.setupMenuPage()
        await navigatetoSetupandAccess.routeSetup()
        console.log('[PASSED] Route created and inactivated successfully')
        test.info().annotations.push({ type: 'Result', description: 'PASSED: Route created and inactivated successfully' })
    } catch (error) {
        console.log(`[FAILED] Route Setup - ${(error as Error).message}`)
        test.info().annotations.push({ type: 'Result', description: `FAILED: ${(error as Error).message}` })
        throw error
    }
})
