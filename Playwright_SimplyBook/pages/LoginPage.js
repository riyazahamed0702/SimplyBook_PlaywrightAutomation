const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        // Locators for elements on the login page
        this.loginButton = page.locator("//button[@aria-label='Log in']").first();
        this.companyLoginField = page.locator('#company-login');
        this.companyLoginBtnLocator = page.locator('#company-login-button'); // Renamed to avoid conflict
        this.userLoginField = page.locator('#login');
        this.passwordField = page.locator('#pass');
        this.submitButton = page.locator("//button[text()='Log in']");
    }

    async navigate() {
        await this.page.goto('https://simplybook.me/en/',{ waitUntil: 'domcontentloaded' });
    }

// Method to visit the login page and perform login
    async login(company, email, password) {
        await this.page.goto('https://simplybook.me/en/'); // Navigate to the site
        const acceptCookiesButton = this.page.locator("//button[text()='Accept all']");
        // Wait for cookies button and click if visible
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
        }
        await this.loginButton.click();
        await this.companyLoginField.waitFor({ state: 'visible' });
        await this.companyLoginField.fill(company); // Fill in the company login
        await this.companyLoginBtnLocator.click(); // Click on login button
        await this.userLoginField.fill(email); // Fill in the user email
        await this.passwordField.fill(password); // Fill in the user password
        await this.submitButton.click(); // Click the login button
        //await this.page.waitForNavigation(); // Wait for the page to load after login
    }

}

module.exports = { LoginPage };
