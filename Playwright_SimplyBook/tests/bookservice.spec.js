// tests/serviceBooking.test.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { BookingPage } = require('../pages/BookingPage');
const loginData = require('../testData/loginData.json');

test('Test service booking after login', async ({ page }) => {
    // Create instances of LoginPage and BookingPage
    const loginPage = new LoginPage(page);
    const bookingPage = new BookingPage(page);

    // Log in using the company, email, and password
    await loginPage.login(loginData.username, loginData.email, loginData.password);

    // Navigate to the booking website in a new window (popup)
    await bookingPage.navigateToBookingPage();

   // await newTab.locator('text=Book Now').click(); 

    // Perform booking actions
    await bookingPage.bookService();

    // Confirm booking
    await bookingPage.confirmBooking();

    // Verify booking success
    await bookingPage.verifyBookingSuccess();
});
