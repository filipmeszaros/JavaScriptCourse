// @ts-check
const { test, expect } = require('@playwright/test');


/**
 * Test to show how to use different locators and methods working with locators
 * By default, Playwright suggests to use CSS selectors, but other selectors are available as well.
 */
test('Playwright locators test', async ({ page }) => {
  await page.locator('#username').fill('Username CSS locator');
  await page.locator('[type="password"]').fill('Password CSS locator');
  await page.locator('div.signInButton').click();
  const errorText = await page.locator('div[style*="none"]').textContent(); // Returns text of the element

  // If locator is not specific enough and it returns multiple elements, you can specify the one you need
  await page.locator('.list-elements').first().click();   // Returns  first element from a list of elements and clicks on it
  await page.locator('.list-elements').nth(1).click();    // Returns second element from a list of elements and clicks on it
  await page.locator('.list-elements').last().click();    // Returns last element from a list of elements and clicks on it

});
