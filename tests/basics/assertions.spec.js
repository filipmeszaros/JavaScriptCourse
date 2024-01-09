// @ts-check
const { test, expect } = require('@playwright/test');


/**
 * Test to show how to use different kind of assertions.
 * Some expect's does not need await - those not related to UI or those which needs some action (simple explanation)
 * Some expect's needs await - those related to UI (simple explanation)
 */
test('Playwright assertions test - generic assertions', async ({ page }) => {
  const value = 42;
  const valueObj = {
    a: 1,
    b: 2,
    c: true,
  };

  // Some expect's does not need await - those not related to UI (simple explanation)
  expect('text').toContain('substring');
  expect(value).toBe(2);                    // Expect value == 2
  expect(value).toBeLessThan(5);            // Expect value < 5
  expect(value).toBeLessThanOrEqual(3);     // Expect value <= 3
  expect(value).toBeGreaterThan(1);         // Expect value > 1
  expect(value).toBeGreaterThanOrEqual(2);  // Expect value >= 2
  expect(value).toBeNaN();                  // Expect value is Not a Number
  expect(value).toBeNull();                 // Expect value is null
  expect(value).toBeUndefined();            // Expect value is undefined
  expect(value).toBeTruthy();               // Expect value is true
  expect(value).toBeFalsy();                // Expect value is false
  expect('Hello, World').toHaveLength(12);     // Expect that array has length 12
  expect(3.141592654).toBeCloseTo(3.14159, 5); // Expects that number will be matching to at least 5 digits in floating point
  expect(value).toMatch(/Is \d+ enough/);      // Expect value to match pattern
  expect(valueObj).toHaveProperty('c', true);  // Expect that value object will have a property 'c' of value true
  expect(valueObj).toMatchObject({ a: 1, c: true }); // Expect that objects will be matching
  expect(myFunction()).toThrow(/something/);         // Expect that function will thrown an error matching regular expression

  expect(valueObj).toEqual({a: 1, b: 2, c: true});            // Compares objects by performing "deep equality" checks
  expect(valueObj).toBe({a: 1, b: 2, c: true});               // Compares objects by performing "reference" checks
  expect([1, 2, 3]).toEqual(expect.arrayContaining([3, 1]));  // Expects that array contains all elements from other array in any order
});



test('Playwright assertions test - locator assertions', async ({ page }) => {
  const locator = page.locator('div.warning');
  const list = page.locator('list > .component');

  // Note: for any of these methods, you can use ".not" to negate the condition of these assertions
  await expect(locator).toHaveText('Submitted');          // Expect element to have text
  await expect(locator).toHaveValue('Submitted');         // Expect element to have value
  await expect(locator).toHaveValues(['R','G','B']);      // Expect list of elements to have values
  await expect(locator).toContainText('Loading');         // Expect element to contain text
  await expect(locator).toHaveAttribute('attr', 'value'); // Expect element to have attribute with given value, e.g. <div attribute="value">
  await expect(locator).toHaveAttribute('att');           // Expect element to have attribute with any value
  await expect(locator).toHaveClass('invisible');         // Expect element to have class="invisible"

  await expect(locator).toBeAttached();   // Expect element to be attached to DOM node
  await expect(locator).toBeChecked();    // Expect element to be checked
  await expect(locator).toBeDisabled();   // Expect element to be disabled
  await expect(locator).toBeEditable();   // Expect element to be editable
  await expect(locator).toBeEmpty();      // Expect element to have no text
  await expect(locator).toBeEnabled();    // Expect element to be enabled
  await expect(locator).toBeFocused();    // Expect element to be focused
  await expect(locator).toBeHidden();     // Expect element to be non-visible
  await expect(locator).toBeVisible();    // Expect element to be visible

  await expect(locator).toBeInViewport();                  // Expect element to be in viewport
  await expect(locator).toHaveClass('invisible');          // Expect element to have class="invisible"
  await expect(list).toHaveCount(3);                       // Expect list of elements to have 3 elements
  await expect(locator).toHaveCSS('display','visible');    // Expect element to have CSS style display with value visible
  await expect(locator).toHaveJSProperty('loaded', true);  // Expect element have given JS property
  await expect(locator).toHaveScreenshot('file.png');      // Expect loaded element screenshot is the same as given file

  // Note: for any methods above, you can negate a test condition by using ".not"
  await expect(locator).not.toContainText('Inverted');     // Inverted expression example
  await expect(list).not.toHaveCount(0);                   // Inverted expression example
});


test('Playwright assertions test - page assertions', async ({ page }) => {
  await expect(page).toHaveURL(/.*\/login/);         // Expect that URL matches given regular expression
  await expect(page).toHaveURL('www.linkedin.com');  // Expect that URL matches given string
  await expect(page).toHaveScreenshot('image.png');  // Expect screenshot of loaded page matches given picture
  await expect(page).toHaveTitle(/.*checkout/);      // Expect that title of page matches given regular expression
  await expect(page).toHaveTitle('Page Title');      // Expect that title of page matches given string
});


test('Playwright assertions test - API response assertions', async ({ page }) => {
  const response = await page.request.get('https://playwright.dev');
  await expect(response).toBeOK();        // Expects that API response code will be within range 200-299
  await expect(response).not.toBeOK();    // Expects that API response code will not be within range 200-299
});


function myFunction() {
  //randon function that does something and throws an error
  throw new Error('error details');
}