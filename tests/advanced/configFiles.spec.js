
const { test } = require('@playwright/test');

/**
 * Tests to show how to load data from a config file in Playwright.
 * Useful when you are storing some testing data in config files.
 */


// Convert file to string and then parse this string JSON and convert it to object
const dataSet = JSON.parse(JSON.stringify(require('./testData.json')));

test('Playwright config file loading test', async () => {
    console.log("Username loaded from config is: " + dataSet[0].username);
    console.log("URL loaded from config is: " + dataSet[0].url);
    console.log("Port loaded from config is: " + dataSet[0].port);
});