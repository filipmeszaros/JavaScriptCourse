// @ts-check
const { test, expect } = require('@playwright/test');


/**
 * Test to show how to handle dropdowns
 */
test('Dropdowns test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise');
  const dropdown = page.locator('select.form-control');
  await dropdown.selectOption("consult");    // Selects an option from <select> with value="consultant"
});


/**
 * Test to show how to handle checkboxes
 */
test('Checkboxes test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise');

  const checkbox = page.locator(".radiotextsty").last(); 
  await checkbox.click();
  await page.locator("#okayBtn").click();
  await expect(checkbox).toBeChecked();  // Test that checkbox is really checked

  const termsAndConditions = page.locator("#terms");
  // Notice that in these 2 examples, await is once inside of expect and once outside.
  // Await needs to be provided where there is an action that we need to wait for
  await expect(termsAndConditions).not.toBeChecked();       // Test that checkbox is not checked by default
  expect(await termsAndConditions.isChecked()).toBeFalsy(); // Second way to test that checkbox is not checked by default
  await termsAndConditions.click();
  await expect(termsAndConditions).toBeChecked();           // Test that checkbox is checked now

  await page.pause(); // Pause test to see the result
});