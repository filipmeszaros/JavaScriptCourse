// @ts-check
const { test, expect } = require('@playwright/test');


/**
 * Test to show how to use PlayWright debugger.
 * You can open Playwright debugger in 2 ways:
 * 1, run test with "--debug" parameter
 * 2, using "await page.pause()" method, that will pause a test and open a debugger
 * 
 * With debugger, you can:
 * Step over        - proceed to next line of code and execute it
 * Pick locator     - use this tool to find a locator of given element of currently opened webpage
 * Explore elements - show CSS selector or Xpath for selected web element, or validate your own selectors
 * 
 */
test.only('Playwright debugger test', async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.getByRole('button', { name: 'Přijmout vše' }).click();
  await page.locator('textarea[type="search"]').fill('My first Google search');
  await page.locator('input[type="btnK"]').click();
});
