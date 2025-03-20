const { expect } = require('@playwright/test');

class ModifyBookingPage {
    constructor(page) {
        this.page = page;
        // Locators using page.locator()
        this.reportsLink = page.locator("//a[@title='Reports']");
        this.bookingDetailsLink = page.locator("//span[text()='Booking details']");
        this.bookingID = page.locator('#generated_id_406');
        this.viewBookingButton = page.locator("//span[text()='View booking']").first();
        this.editButton = page.locator("//button[contains(text(), 'Edit')]");
       
        
    }

    async navigateToBookingDetails() {
        await this.reportsLink.click();
        await this.bookingDetailsLink.click();
    }


}

module.exports = { ModifyBookingPage };
