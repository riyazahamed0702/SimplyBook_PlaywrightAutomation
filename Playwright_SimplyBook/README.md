# SimplyBook UI Automation Project

This project automates UI testing for [SimplyBook](https://simplybook.me/en/) using **Playwright**.

## Project Structure

/SimplyBook_Automation
│── /tests
│   ├── register.spec.js                 # Test cases for user registration
│   ├── login.spec.js                    # Test cases for user login
│   ├── bookservice.spec.js              # Test cases for booking services
    ├── modifybookservice.spec.js        # Test cases for modifybooking services
│
│── /pages
│   ├── SignUpPage.js                       # Page Object Model (POM) for registration page
│   ├── LoginPage.js                        # POM for login page
│   ├── BookingPage.js                      # POM for booking page
    ├── ModifyBookingPage.js                # POM for booking page
│
│── /testData
│   ├── bookingData.json        # Test data for booking scenarios
│   ├── loginData.json          # Test data for login scenarios
│   ├── userData.json           # Test data for user registration
│
│── /utils                      # Utility functions (if any)
│── package.json                # Dependencies and project metadata
│── playwright.config.js         # Playwright configuration
│── README.md                   # Project documentation



### Prerequisites

Install Node.js

### Install dependencies:

npm install

### Install Playwright browsers:

npx playwright install

### Running Tests

## Execute all tests:

npx playwright test

### Run a specific test file:

npx playwright test tests/register.spec.js

### Playwright Configuration

Config file: playwright.config.js

Modifies settings like browser type, timeouts, and test retries.

### Page Object Model (POM) Approach

Each page (SignUp, Login, Booking) is represented as a separate class in the /pages folder, improving test maintainability and reusability.

### Test Data Management

Test data is stored in JSON files (/testData) to separate test logic from static input values.

### Reporting

Playwright generates reports automatically: