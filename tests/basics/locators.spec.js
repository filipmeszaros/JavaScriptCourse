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
  
  await page.getByRole('button', { name: 'Sign in' }).click(); // For <button name='Sign in'>
  await page.getByRole('button', { name: /submit/i }).click(); // For <button> with name containing RegExp "submit"
  await page.getByLabel('Password').fill('secret');            // For <label>Password</label>
  await page.getByPlaceholder('FILL THIS').fill('playwright@microsoft.com'); // For <input type="email" placeholder="FILL THIS"/>
  await page.getByText('Welcome, John').click();               // For <span>Welcome, John</span>
  await expect(page.getByTitle('Issues count')).toHaveText('25 issues'); // For <span title="Issues count">Something</span>
  await page.getByTestId('directions').click();                // For <div data-testid="directions">
});

test('Special Playwright locators', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');

  // Allows locating input elements by the text of the associated by HTML label
  // 1, <label> tag  
  // 2, "aria-labely" attribute 
  // 3, aria-labelledby element
  await page.getByLabel("Check me out if you Love IceCreams!").click(); 
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");

  // Allows locating input elements by the placeholder text
  // E.g. <input type="password" placeholder="Enter your password here">
  await page.getByPlaceholder("Enter your password here").fill("abc123");

  // Allows locating elements by their role (button/link/heading/listbox/slider/searchbox/window/input... and many many more)
  // 1, [ARIA role](https://www.w3.org/TR/wai-aria-1.2/#roles)
  // 2, [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#aria-attributes)
  // 3, [accessible name](https://w3c.github.io/accname/#dfn-accessible-name)
  await page.getByRole("button", { name: 'Submit' }).click();  // button with name "Submit"
  await page.getByRole("link",{ name : "Shop" }).click();      // clickable link with text "Shop"
  await page.getByRole('heading', { name: /enter/i }).click(); // heading with regex containing "enter"

  // Allows locating elements that contains given text
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
});

test('Playwright locators filtering', async ({ page }) => {
  const allCards = page.locator('app-card'); // locator containing multiple elements

  // Lets filter within all elements and find those that we need and then find a button on this element and click on it
  await allCards.filter({hasText: 'Nokia Edge'}).getByRole("button").click(); // Filter all elements and find those with given text
  await allCards.filter({hasNotText: 'Error'}).getByRole("button").click();   // Filter all elements and find those without given text
});