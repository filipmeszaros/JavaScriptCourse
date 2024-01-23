// @ts-check
const { test, expect } = require('@playwright/test'); 

/**
 * You can have a web application that can use multiple cookies or session tokens used for storing a session.
 * You can leverage session storage in a way that you log in via UI and save all session details to a json file.
 * Then for other tests, you can use this json file with your session to bypass logging in to application again.
 * Similar concept can be found in file {@link API.spec.js}, where we are storing session token to bypass login authentication.
 * 
 * Note: this file contains only a pseudocode in some parts
 */

let webContext;

test.beforeAll('Login and store session to a file', async ({browser}) => {  
  const context = await browser.newContext();
  const page = await context.newPage();

  // login to app via UI
  // ... code is missing ...

  // Store a state of a session to a given file
  await context.storageState({path : 'files/state.json'}); 
  
  // Load a state of a session from already saved file and create a new context
  webContext = await browser.newContext({storageState: 'files/statej.json'});
});

test('Test with invoked session data from json file', async () => {
  const page = await webContext.newPage();


  // continue testing and you are logged in
  await page.goto('https://my-webpage.com/authorized');
  // ... code is missing ... 
});
