const { Given, When, Then } = require('@cucumber/cucumber'); // Import required packages to be able to use Cucumber
const { expect } = require('@playwright/test'); // Import required packages to be able to use Playwright
const playwright = require('@playwright/test'); // Import required packages to be able to use Playwright


// Each Cucumber method has 5000ms timeout, so we can increase it to something more useful if we need to wait
Given('I am on the login page', { timeout: 30000 }, async function () {
    // Create page directly as we don't have "page" Playwright fixture in Cucumber
    // If you save some variable with "this." prefix, it will be saved to "World constructor" variable, which means
    // that a variable will be shared across all test steps, not just within this one.
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage(); // This variable is saved via "World constructor" and then it can be used in other steps

    // Write code here that turns the phrase above into concrete actions
    await this.page.goto("https://rahulshettyacademy.com/client");
});

When('I enter credentials with username {string} and password {string}', { timeout: 30000 }, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.locator("#userEmail").type(username);
    await this.page.locator("#userPassword").type(password);
});

When('I click on the login button', { timeout: 30000 }, async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.page.locator("[value='Login']").click();
    await this.page.waitForLoadState('networkidle');
});

Then('I should be logged in to my account and homepage should be visible', { timeout: 30000 }, async function () {
    // Write code here that turns the phrase above into concrete actions
    await expect(this.page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
    await expect(this.page.locator("[routerlink*='cart']")).toBeVisible();
});

Then('I should see a login error message', { timeout: 30000 }, async function () {
    // Write code here that turns the phrase above into concrete actions
    await expect(this.page.locator('div[role="alert"]')).toBeVisible();
    await expect(this.page.locator('div[role="alert"]')).toContainText("Incorrect email or password");
});