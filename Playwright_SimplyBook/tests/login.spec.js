const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage'); // Import the Page Object Model
const loginData = require('../testData/loginData.json');

test.describe('Login Test', () => {
  let page;
  let loginPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page); // Instantiate the LoginPage object
  });

  test('User should be able to log in successfully', async () => {
    // Navigate to the site
    await loginPage.navigate();

    // Log in using the loginPage methods
    await loginPage.login(loginData.username, loginData.email, loginData.password);

    // You can add assertions here, for example:
    await expect(page.locator('text=Welcome')).toBeVisible(); // Modify this based on your actual success message or page state
  });

  test.afterAll(async () => {
    await page.close();
  });
});
