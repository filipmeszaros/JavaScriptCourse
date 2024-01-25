const { LoginPage } = require('./LoginPage');
const { HomePage } = require('./HomePage');

/**
 * Page object manager
 * Stores all page objects as a library
 */
class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }
}

// Export module so that we can use it in tests
module.exports = { POManager };