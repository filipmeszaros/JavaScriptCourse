
const { test } = require('@playwright/test');

/**
 * Tests to show how use parametrized testing in Playwright.
 * Parametrized testing is a way of how to feed a test data to a test, so that it can execute it multiple times with different data.
 */

// Convert file to string and then parse this string JSON and convert it to object
const dataSetArray = JSON.parse(JSON.stringify(require('./testData.json')));

// For an array of test data, execute test multiple times based on this data
for (const testData of dataSetArray) {
    test(`Test for user ${testData.username}`, async () => {  // Each test needs to have unique name!
        console.log("Username loaded from config is: " + testData.username);  // Fetch username multiple times for this test
        console.log("URL loaded from config is: " + testData.url);
        console.log("Port loaded from config is: " + testData.port);
    });
}
