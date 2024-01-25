// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Tests to show how do network interception in Playwright.
 * You can use network intercept to catch some network data and send it's updated version.
 * You can intercept headers, URLs, cookies, etc.
 * You can modify, re-route, abort calls, etc.
 * 
 * For example, if you want to test a message that is shown when you have an empty shopping card, but you already have something in your card.
 * Normally it works like this:
 * Server -> sends data via API to browser -> browser renders UI for customer
 * 
 * And we intercept the API call and fake it like this:
 * Server -> sends data via API to browser -> we catch the data and alter it, and send it to browser -> browser renders UI based on intercepted data
 */


test.beforeEach(async ({ context }) => {
    // This will block any css requests for each test in this file.
    // Every test will be executed without CSS files being loaded, which can speed up test execution if you don't need CSS.
    await context.route(/.css$/, route => route.abort());

    // Block any client calls with pictures
    await context.route('**/*.{jpg,png,jpeg}', route => route.abort());
});

test('Security test for an online shop - intercept order details and try to load an order details for another random user', async ({ page }) => {
    page.on('response', response => console.log(response.url(), response.status()));  // Print all API responses URL with it's status code to console output

    //login and open orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").pressSequentially("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();
    // Intercept API response for fetched orders, but instead load another page with orders for random different user
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",  // Tell Playwright to keep an eye for this URL so that it can intercept it
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }));

    // Try to view order details for another user 
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorized to view this order");
});


test('Intercept an API call and send different API response to client', async ({ page }) => {
    // Set up a network intercept in a way that we will intercept API call with given URL and update its data
    // Instead of original data, we will send data containing message "No Items in cart"
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",  // Intercept API call from this URL
        async route => {
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify({ data: [], message: "No Items in cart" });   // Send updated data instead
            route.fulfill(
                {
                    response,
                    body,
                });
        });

    // After you set up an intercept, let's click on cart
    await page.locator("button[routerlink*='cart']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"); // Wait until intercept will be finished

    // You can continue testing new/fake page after the intercept
    // ... code here ...
});