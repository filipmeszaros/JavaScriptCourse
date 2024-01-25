// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');


test('Invalid login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const username = "anshika@gmail.com";
    const password = "InvalidPassword"
    await loginPage.accessPage();
    await loginPage.doLogin(username, password);
    await expect(loginPage.loginText).toBeVisible(); // After invalid login, we should still be on login page
});

test('Valid login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const username = "anshika@gmail.com";
    const password = "Iamking@000"
    await loginPage.accessPage();
    await loginPage.doLogin(username, password);
    await expect(loginPage.loginText).toBeHidden(); // After valid login, we are no longer on login page
});


