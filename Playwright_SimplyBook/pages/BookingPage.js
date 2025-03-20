
class BookingPage {
    constructor(page) {
        this.page = page;
        this.myBookingChannel = page.locator('#dropdownMenuChannel');
        this.myBookingWebSite = page.locator("//a[text()='My Booking Website']");
        this.bookNowButton = page.locator('a[title="Book Now"]');
        this.selectService = page.locator("//a[text()='Select']").first();
        this.selectDateButton = page.locator('link', { name: '19' });
        this.selectTimeButton = page.locator('link', { name: '12:' });
        this.nameField = page.locator('textbox[name="Name: *"]');
        this.emailField = page.locator('textbox[name="Email: *"]');
        this.phoneField = page.locator('textbox[name="56789"]');
        this.agreeCheckbox = page.locator('checkbox[name="I agree with SimplyBook.me"]');
        this.subscribeCheckbox = page.locator('checkbox[name="Subscribe to be one of first"]');
        this.confirmBookingButton = page.locator('button', { name: 'Confirm booking' });
        this.successMessage = page.locator('text=You\'ve successfully reserved');
    }

    async selectDate(dateText) {
        const selectDateButton = this.page.locator('a', { hasText: dateText }); // Locating link with specific text
        await selectDateButton.click(); // Click the link to select the date
    }

    async selectTime(timeText) {
        const selectTimeButton = this.page.locator('a', { hasText: timeText }); // Locating link with specific time text
        await selectTimeButton.click(); // Click the link to select the time
    }

    async navigateToBookingPage() {
        await this.myBookingChannel.click();
        const [newTab] = await Promise.all([
            this.page.waitForEvent('popup'), // Wait for the new tab to open
            this.myBookingWebSite.click() // Trigger the click that opens the new tab
        ]);

        // Return the new tab to interact with it
        return newTab;
    }
        

    

    async bookService() {
        await this.bookNowButton.click();
        await this.selectDateButton.click();
        await this.selectTimeButton.click();
        await this.nameField.fill(bookingData.name);
        await this.emailField.fill(bookingData.email);
        await this.phoneField.fill(bookingData.phone);
        await this.agreeCheckbox.check();
        await this.subscribeCheckbox.check();
        await this.confirmBookingButton.click();
    }

    async confirmBooking() {
        await this.confirmBookingButton.click();
    }

    async verifyBookingSuccess() {
        await this.successMessage.waitFor();
    }
}

module.exports = { BookingPage };
