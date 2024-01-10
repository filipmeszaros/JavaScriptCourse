// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Tests to show how to use different Playwright methods to parse HTML tables
 */


test('Playwright tables test', async ({ page }) => {
  const tableRows = page.locator('tbody tr');
  await tableRows.waitFor(); // Wait for table to be loaded

  for (let i = 0; i < await tableRows.count(); i++) {
    const column1Text = await tableRows.nth(i).locator('td').nth(0).textContent();
    const column2Text = await tableRows.nth(i).locator('td').nth(1).textContent();
    const lastColumnText = await tableRows.nth(i).locator('td').last().textContent();

    if (column1Text?.includes('Our substring')) {
      console.log('We found correct table line');
      break;
    }
  }
});