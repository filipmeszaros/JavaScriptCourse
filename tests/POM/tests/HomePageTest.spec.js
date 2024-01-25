// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');

test('Verify we are logged in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginToSystem();
    const homePage = new HomePage(page);
    await expect(homePage.logoutButton).toBeVisible();
});

test('Test adding product to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.searchProductAddCart("Zara Coat 4");
});