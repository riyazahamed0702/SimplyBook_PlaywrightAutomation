const { expect } = require('@playwright/test');

class SignupPage {
    constructor(page) {
        this.page = page;
        this.signUpLink = page.locator("//a[text()='Sign up']").first(); // Ensure correct locator
        this.companyLoginField = page.locator('#login');
        this.phoneNumberField = page.locator('#phone_visible'); 
        this.businessCategoryDropdown = page.locator('#list-show'); 
        this.businessCategory = page.locator("//input[@data-category='medical']//following::label[1]");
        this.nextButton = page.locator('#to-location-step'); 
    }

    async navigate() {
        await this.page.goto('https://simplybook.me/en/');
    }

    async goToSignup() {
        const acceptCookiesButton = this.page.locator("//button[text()='Accept all']");
        // Wait for cookies button and click if visible
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
        }
    
        // Wait for Sign Up button to be clickable, then click it
        await this.signUpLink.waitFor({ state: 'visible' }); // Ensure the element is visible before clicking
        await this.signUpLink.click();
    }
    

    async fillSignupForm(company, phone) {
        await this.companyLoginField.waitFor();
        await this.companyLoginField.fill(company);

        await this.phoneNumberField.waitFor();
        await this.phoneNumberField.fill(phone);
    }

    async selectBusinessCategory() {
        await this.businessCategoryDropdown.click(); // Open dropdown
        await this.businessCategory.waitFor();
        await this.businessCategory.click(); // Select category
    }

    async proceedToNextStep() {
        await this.nextButton.waitFor({ state: 'visible' }); // Wait for visibility
        await this.nextButton.scrollIntoViewIfNeeded(); // Ensure it's in view
        await this.nextButton.click({ force: true }); // Force click if necessary
    }
    
}

module.exports = { SignupPage };
