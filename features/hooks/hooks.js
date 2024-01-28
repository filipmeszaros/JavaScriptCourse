const playwright = require('@playwright/test'); // Import required packages to be able to use Playwright
const { Before, After, BeforeStep, AfterStep } = require('@cucumber/cucumber'); // Import required packages to be able to use Cucumber

// Will be executed before each test scenario automatically 
// Useful for: login, create database connection, etc
Before(async function () {
    console.log('Before() hook executed');
});

// Will be executed after each test scenario automatically
// Useful for: delete data, logout, et
After(async function () {
    console.log('After() hook executed');
});

// Will be executed before each test step automatically
// Useful for: open a homepage, etc.
BeforeStep(async function () {
});

// Will be executed after each test step automatically
// Useful for: for example taking a screenshot of failed test, etc.
AfterStep(async function ({ result }) {
});