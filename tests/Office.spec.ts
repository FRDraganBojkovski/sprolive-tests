import {expect} from '@playwright/test'
import {test} from '../test-options'
import {OfficeNavigationPage} from '../page-objects/OfficeNavigationPage'
import { AccountNavigationPage } from "../page-objects/AccountNavigationPage";
import { SetupNavigationPage } from '../page-objects/SetupNavigationPage';

test.setTimeout(180000);
test('Enter Completed Work Orders', async({page, sproliveLoginFr: _sproliveLoginFr}) =>{
    test.setTimeout(120000);
    const navigatetoOffice = new OfficeNavigationPage(page);
    await navigatetoOffice.enterCompletedWorkOrders();
})

test('Enter Completed Work Orders by Batch', async({page, sproliveLoginFr: _sproliveLoginFr}) =>{
    test.setTimeout(180000);
    const navigatetoOffice = new OfficeNavigationPage(page);
    await navigatetoOffice.enterCompletedWorkOrderByBatch();
})

test('Release Work Orders for the Month', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.releaseWOsfortheMonth()
})

test('Enter Payments with Cash from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    const navigateToAccount = new AccountNavigationPage(page);
    await navigateToAccount.createMiscInvoiceFromAccount();
    await navigatetoOffice.enterPaymentsCashFromOffice()
})

test('Enter Payments with Stripe CC from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    const navigateToAccount = new AccountNavigationPage(page);
    await navigateToAccount.createMiscInvoiceFromAccount();
    await navigatetoOffice.enterPaymentsStripeCCFromOffice()
})

test('Print To Mail Overview CC from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.printToMailOverviewfromOffice()
})

test('Print Completed Work Orders from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.printCompletedWosFromOffice()
})

test('Email Statements from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeStatementsCriteria();
    await navigatetoOffice.emailStatementsFromOffice()
})

test('Print Statements from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeStatementsCriteria();
    await navigatetoOffice.printStatementsFromOffice()
})

test('Export Statements from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeStatementsCriteria();
    await navigatetoOffice.exportStatementsFromOffice()
})

test('Email Invoices from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeInvoicesCriteria();
    await navigatetoOffice.emailInvoicesFromOffice()
})

test('Print Invoice from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeInvoicesCriteria();
    await navigatetoOffice.printInvoicesFromOffice()
})

test('Export Invoices from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeInvoicesCriteria();
    await navigatetoOffice.exportInvoicesFromOffice()
})

test('Export Work Orders from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    test.setTimeout(180000);
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeWorkOrdersCriteria();
    await navigatetoOffice.exportWorkOrdersFromOffice()
})

test('Print Work Orders from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    test.setTimeout(180000);
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeWorkOrdersCriteria();
    await navigatetoOffice.printWorkOrdersFromOffice()
})

// Print & Upload tests run last — they are the most likely to timeout
// and should not block other tests when they fail
test('Print & Upload Statements from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    test.setTimeout(180000);
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeStatementsCriteria();
    await navigatetoOffice.printAndUploadStatementsFromOffice()
})

test('Print & Upload Invoices from Office', async({ page, sproliveLoginFr: _sproliveLoginFr }) => {
    test.setTimeout(180000);
    const navigatetoOffice = new OfficeNavigationPage(page)
    await navigatetoOffice.officeInvoicesCriteria();
    await navigatetoOffice.printAndUploadInvoicesFromOffice()
})
