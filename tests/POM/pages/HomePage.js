/**
 * Class representing home page of demo UI application available after login
 */
class HomePage {

    /**
     * Constructor can contain all locators/selectors
     */
    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.alert = page.locator('div[role="alert"]');
        this.logoutButton = page.getByRole('button', { name: 'Sign Out' });
    }

    /**
     * Add product to cart
     * @param productName name of a product you want to add to a cart 
     */
    async searchProductAddCart(productName) {
        const titles = await this.productsText.allTextContents();
        const count = await this.products.count();
        // Go through all products
        for (let i = 0; i < count; ++i) {
            // Find our product
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                // Add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
            // Else skip other products
        }
    }

    /**
     * Access orders
     */
    async accessOrders() {
        await this.orders.click();
    }

    /**
     * Access cart
     */
    async accessCart() {
        await this.logoutButton.click();
    }
}

// Export module so that we can use it in tests
module.exports = { HomePage };