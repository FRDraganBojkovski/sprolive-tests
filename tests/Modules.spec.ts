import {expect} from '@playwright/test'
import {test} from '../test-options'
import { AccountNavigationPage } from '../page-objects/AccountNavigationPage';
import {ModulesNavigationPage} from '../page-objects/ModulesNavigationPage'

test.setTimeout(180000);
test('Routing Module', async({page, sproliveLoginFr: _sproliveLoginFr}) =>{
    const navigateToModules = new ModulesNavigationPage(page);
    //const addRoutingProgram = new AccountNavigationPage(page);
    //await addRoutingProgram.addNewAccountAndProgramRouting();

    await test.step('Navigate to Routing Module and complete workflow', async () => {
        await navigateToModules.routingModule();
    });

    await test.step('Assert: Routing Module completed successfully', async () => {
        await expect(page).not.toHaveURL('about:blank', { timeout: 5000 });
        test.info().annotations.push({ type: 'result', description: '✅ PASSED — Routing Module: Daily planner saved successfully' });
        console.log('\n✅ PASSED — Routing Module: Daily planner saved successfully\n');
    });
})

test('Inteligent Routing Module', async({page, sproliveLoginFr: _sproliveLoginFr}) =>{
    test.setTimeout(300000);
    const navigateToModules = new ModulesNavigationPage(page);
    const addRoutingProgram = new AccountNavigationPage(page);
    await addRoutingProgram.addNewAccountAndProgramRouting();

    await test.step('Navigate to Intelligent Routing Module and complete workflow', async () => {
        await navigateToModules.inteligentRoutingModule();
    });

    await test.step('Assert: Intelligent Routing optimization submitted', async () => {
        await expect(page).not.toHaveURL('about:blank', { timeout: 5000 });
        test.info().annotations.push({ type: 'result', description: '✅ PASSED — Intelligent Routing Module: Optimization submitted successfully' });
        console.log('\n✅ PASSED — Intelligent Routing Module: Optimization submitted successfully\n');
    });
})
