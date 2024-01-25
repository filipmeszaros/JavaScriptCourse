/**
 * Login page for demonstration purposes
 */
class LoginPage {

    /**
     * Constructor can contain all locators/selectors required for login page
     */
    constructor(page) {
        this.page = page;
        this.signInbutton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginText = page.getByRole('heading', { name: 'Log in' });
    }

    /**
     * Method to access URL of login page
     */
    async accessPage() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    /**
     * Method for logging in to the system with login credentials
     * @param username username/e-mail required for login
     * @param password password required for login
     */
    async doLogin(username, password) {
        await this.userName.type(username);
        await this.password.type(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Method for logging in to the system with valid login credentails used for all tests
     */
    async loginToSystem() {
        await this.accessPage();
        await this.userName.type("anshika@gmail.com");
        await this.password.type("Iamking@000");
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

// Export the page object so that we can use it in tests
module.exports = { LoginPage };