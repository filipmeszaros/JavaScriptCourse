// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Tests to show how to handle screenshots and visual testing with Playwright.
 * Visual testing is a Playwright feature that is comparing visual representation of current page/element with some old screenshot that you provide.
 * It will fail if screenshot looks different.
 * This way you can be testing that colors of buttons, or alignment of text are still the same, etc.
 */


test('Playwright screenshots test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.screenshot({ path: 'screenshots/homepage.png' }); // Take a screenshot of whole page
  await page.getByLabel('Homepage', { exact: true }).screenshot({ path: 'screenshots/logo.png' }); // Take a screenshot of one element
});

test('Playwright visual testing', async ({ page }) => {
  await page.goto('https://github.com/');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/homepage.png'); // Compare current page with provided screenshot
});