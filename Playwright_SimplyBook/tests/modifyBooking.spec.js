// tests/modifyBooking.test.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ModifyBookingPage } = require('../pages/ModifyBookingPage'); // ✅ Correct import
const loginData = require('../testData/loginData.json');

test('Test modify booking after login', async ({ page }) => {
    // Create instances of LoginPage and ModifyBookingPage
    const loginPage = new LoginPage(page);
    const modifyBookingPage = new ModifyBookingPage(page); // ✅ Use the correct class

    // Log in using the company, email, and password
    await loginPage.login(loginData.username, loginData.email, loginData.password);

    // Navigate to booking details page
    await modifyBookingPage.navigateToBookingDetails();
});
