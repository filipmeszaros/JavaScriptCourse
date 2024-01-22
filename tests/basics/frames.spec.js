// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Tests to show how to handle frames in Playwright
 * An HTML iframe is used to display a web page within a web page.
 */


test('Playwright frames test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  const framePage = page.frameLocator('#courses-iframe');  // Fetch a separate locator for a whole frame
  await framePage.locator('li a[href="lifetime-access"]:visible').click(); // Clicks on a locator within a given iframe
  const retrievedSubtitle = await framePage.locator('.text h2').textContent();
  console.log('Subtitle retrieved from child iframe: ' + retrievedSubtitle);
});