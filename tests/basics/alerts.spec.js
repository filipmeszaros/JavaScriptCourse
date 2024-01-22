// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Tests to show how to handle alerts or pop-ups with Playwright
 * Note: The alert box takes the focus away from the current window, and forces the user to read the message.
 */


test('Playwright alerts (pop-ups) test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.pause();
  await page.locator('#alertbtn').click();
  page.on('dialog', dialog => dialog.accept());   // Playwright will wait until dialog event will happen (opening an alert) and then accept it
  await page.locator('#confirmbtn').click();
  page.on('dialog', dialog => dialog.message());  // Playwright will wait until dialog event will happen (opening an alert) and then cancel it
});