// @ts-check
const { test, expect, request } = require('@playwright/test'); // you need to include "request" object that is used for API methods

const loginCredentials = { 
                            "userEmail": "anshika@gmail.com", 
                            "userPassword" : "Iamking@000"
                         };

let token; // Global variable that we will use to hold session token

/**
 * Tests to show how to handle API testing in Playwright, on an example with session token.
 * Session token is a hash that will be saved to a cookies once you log in, and it allows you to navigate to other subpages without additional logins.
 * Note: it is better to create a class ApiUtils with these API methods, rather than having everything in this file.
 * Note: You can debug API calls with Traces feature of Playwright (@see {@link Playwright.md}) to see all endpoints, data, headers, etc.
 * Note: You can even debug API calls with "debug npx script" option, but you need to specify test in package.json, for example like this:
 * "scripts" : {  
 *    "test": "npx playwright test tests/basics/API.spec.js --headed"
 * }
 * 
 * Scenario: 1, We will use API POST request to submit our login credentials of our page
 *           2, We will save POST response, and parse session token from it
 *           3, We will store session token in local storage of a browser
 *           4, We will open a page behind login and check that it was successfully opened without necessity to log in
 */


/**
 * Instead of logging to the https://www.rahulshettyacademy.com/client/auth/login via UI, let's log in via API call
 */
test.beforeAll('Get session token for login', async () => {  
  const apiContext = await request.newContext();  // Create a new context
  // Use this context to submit a POST request to given URL with given body (data).
  // Mandatory parameter is URL, and all options goes to an object which is second parameter.
  const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', { 
    data: loginCredentials,                       // This is how to set POST data
    headers: {'Content-Type': 'application/json'} // This is how to set request headers
  });

  expect(loginResponse.ok()).toBeTruthy(); // Let's test that POST request returned 2XX status code indicating success
  const responseJson = await loginResponse.json();  // Save response JSON
  expect(responseJson.message).toContain('Login Successful');  // Parse message from response JSON and test it
  token = responseJson.token;              // Save "token" property from JSON to our variable
  console.log('Session token is: ' + token);
});


test('Login to a page with session token', async ({ page }) => {
  page.addInitScript(value => {  // Save cookies when page is loaded
    window.localStorage.setItem('token', value);   // Add key/value pair to local storage
  }, token)
  // await page.pause();
  await page.goto('https://www.rahulshettyacademy.com/client/'); // Let's open a page after login directly
  await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();  // Expect "Sign Out" button to be visible
});