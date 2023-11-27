// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Test to show how to use different hooks in Playwright
 * beforeAll()  - runs before all tests
 * beforeEach() - runs before each tests
 * afterEach()  - runs after each tests
 * afterAll()   - runs after all tests
 * 
 * describe() - describes block of tests
 * .skip()    - skips given tests or a describe blocks
 * .only()    - runs only given tests or describe blocks
 * .fixme()   - tests that won't be executed 
 * .fail()    - tests that will be executed and are expected to fail
 * .slow()    - tests with tripled amount for timeouts
 * .setTimeout(number) - sets a timeout for a test or hooks
 */
const userRole = 'Administrator';


test('Playwright assertions test', async ({ page }) => {
  // Simple Playwright test
  expect(true).toBe(true);
});


test.beforeAll('Setup', async () => {   // Title is optional
  console.log('This is executed before all tests');
  // Useful for logging into the system, creating DB connection, etc.
});

test.beforeEach('Open start URL', async ({ page }, testInfo) => { // Title is optional
  console.log('This is executed before each test');
  console.log(`Running test with title ${testInfo.title}`);
  // Useful for opening an exact URL before each test, cleaning cookies before testing, etc.
});

test.afterEach('Status check', async ({ page }, testInfo) => { // Title is optional
  console.log('This is executed after each test');
  console.log(`Finished test ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);

  // Useful for cleaning cookies, checking status, etc.
});

test.afterAll('Teardown', async () => { // Title is optional
  console.log('This is executed after all tests');
  // Useful for logging out of system, closing DB connection, etc.
});

test.describe('Description for a group of test', () => {
  test('test one', async ({ page }) => {
    // ...
  });

  test.only('test two - only this one will be executed', async ({ page }) => {
    // We can mark tests or describe block with "only" function, and it will execute only these tests
  });
});


test.describe.fixme('Broken test tagged with fixme - will not be executed', () => {
  test('broken test', async ({ page }) => {
    // This test will not be executed
  });

  test.fixme('we can mark test with fixme on a test level as well', async ({ page }) => {
    // This test will not be executed
  });
});

test.describe.skip('Skipped tests - will not be executed', () => {
  test('skipped test', async ({ page }) => {
    // This test will not be executed
  });

  test.skip('we can skip test on a test level as well', async ({ page }) => {
    // This test will not be executed
  });
});


test('This will execute test and expect that it will fail', async ({ page}) => {
  test.fail();
  // Test which is not ready yet, or which is testing broken functionality
});

test('This will execute test and expect that it will fail only for administrators', async ({ page}) => {
  test.fail(userRole === 'Administrator', 'This test is failing for Administratos'); // you can provide a condition to test.fail() 
  // Test which is not ready yet, or which is testing broken functionality
});


test('Test with a timeout', async ({ page }) => {
  /**
   * Sets a timeout for a test to 60 seconds.
   * You can use setTimeout in beforeEach() or afterEach() hooks to set up a timeout for given tests.
   * You can use setTimeout in beforeAll() or afterAll() hooks to set up a timeout for these hooks.
   */
  test.setTimeout(60000);
  // ...
});


test('Slow test with x3 timeouts', async ({ page }) => {
  test.slow(); // You can mark test as slow and it will triple all timeouts for this test
});