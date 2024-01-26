// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only - 0 = if test fails, don't retry; 0 = if test fails, try to re-execute test max 2 times to see if it passes */
  retries: process.env.CI ? 2 : 0,
  /* Number of parallel test workers - 1 for CI; 3 for normal execution */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use (html/line/list/json/dot/blob/json/junit/github/allure/...). See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Ignore HTTP errors when website is not using SSL */
  //ignoreHTTPSErrors: true,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /** If we want to use headless mode or no */
    headless: false,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure', // Retains trace only for failed tests
    screenshot: 'off', // "on" - for screenshots every time; "only-on-failure" - screenshots only on failure, "off" - disabled
    video: 'off' // "on" - record video for all tests; "only-on-failure" - record video on failure, "off" - disabled
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // viewport: { width: 1280, height: 720 }, // Specify size of a browser window, either here or directly for a test or test file
    },

    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    //{
    //  name: 'firefox',
    //  use: { ...devices['Desktop Firefox'] },
    //},

    //{
    //  name: 'webkit',
    //  use: { ...devices['Desktop Safari'] },
    //},
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

