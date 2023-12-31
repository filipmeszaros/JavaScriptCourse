// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Test to show how to use different Playwright methods
 */


test('Playwright methods test - inputs', async ({ page }) => {
  const element = page.locator('#username');

  await element.clear();                         // Clears input
  await element.fill('');                        // Also clears input, by filling an empty string
  await element.fill('Username CSS locator');    // Fills the input with given keys - faster
  await element.pressSequentially('Sequential'); // Fills the input with given keys by pressing sequentially - slower
  await element.click();                         // Clicks on element
  const errorText = await page.locator('div[style*="none"]').textContent(); // Returns text of the element
});


test('Playwright methods test - elements', async ({ page }) => {
  const element = page.locator('#username');

  const text = await element.textContent(); // Returns text of the element
  const innerText = await element.innerText(); // Returns inner text of the element
  const innerHTML = await element.innerHTML(); // Returns inner HTML of the element

  const titlesArray = await element.allTextContents(); // Returns an array of text of all elements matched by locator
});
