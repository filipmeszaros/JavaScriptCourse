// @ts-check
const { test, expect } = require('@playwright/test');


/**
 * Test to show how to use different kind of auto-waiting mechanisms.
 * Playwright methods come with auto-waiting mechanisms, but not all of them!
 * See: https://playwright.dev/docs/actionability
 * 
 * For example method .textContent() waits until element is loaded, but method .allTextContents() does not.
 * If method does not have an auto wait, we need to wait for that element manually for example by
 * await dropdown.waitFor();
 */
test('Playwright auto-waiting mechanisms', async ({ page }) => {
  // Open 9gag.com and try to get titles of all pictures shown
  const pictureTitlesLocator = page.locator('div#container article h2');
  await page.goto('https://www.9gag.com');

  // Problem: allTextContents() does not have auto-wait implemented (see url above), which means you can get 0 results!!!
  //const pictureTitles = await pictureTitlesLocator.allTextContents();
  
  // Solution 1: use something with auto-wait, e.g. textContent() like this: "await pictureTitlesLocactor.first().textContent()"
  console.log('First title: ' + await pictureTitlesLocator.first().textContent());

  // Solution 2: use some manual auto-wait and then get all text contents with allTextContents() method
  await page.waitForLoadState('load');             // Waits for page "load" event to be fired
  await page.waitForLoadState('domcontentloaded'); // Waits for page "DOMContentLoaded" event to be fired
  await page.waitForLoadState('networkidle');      // DISCOURAGED: Waits until there are no network connections for at least `500` ms
  await pictureTitlesLocator.waitFor();            // Waits until locator will be visible by default
  await pictureTitlesLocator.waitFor({state: 'hidden'});  // Waits until locator will be hidden
});