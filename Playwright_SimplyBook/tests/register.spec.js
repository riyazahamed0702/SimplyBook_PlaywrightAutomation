const { test } = require('@playwright/test');
const { SignupPage } = require('../pages/SignupPage');
const userData  = require('../testData/userData.json'); // Import the data from JSON file

test('User should be able to sign up', async ({ page }) => {
    const signupPage = new SignupPage(page);

    await signupPage.navigate();
    await signupPage.goToSignup();  

    await signupPage.fillSignupForm(userData.username, userData.phoneNumber);
    await signupPage.selectBusinessCategory(); // Uses predefined category
    await signupPage.proceedToNextStep();
});
