# ITPM Playwright Automation Project

This repository contains an end-to-end test automation framework developed using Playwright for the ITPM module.  
The project automates UI and functional test scenarios following industry best practices.

---

## Technologies Used

- Playwright
- Node.js
- JavaScript
- VS Code
- Playwright HTML Reporter

---

## Project Structure
```text
ITPM-Playwright-Project
│
├── tests/ # Test specifications
├── pages/ # Page Object Model files
├── playwright.config.js # Playwright configuration
├── package.json # Dependencies and scripts
├── package-lock.json # Dependency lock file
├── test-results/ # Test execution results
├── playwright-report/ # HTML reports
└── README.md # Project documentation

```
---
## Prerequisites

Make sure the following are installed on your system:

- Node.js (version 16 or later)  
  https://nodejs.org/
- Git
- VS Code (recommended)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/minidumaheesha/ITPM-Playwright-Project.git

```
---

Navigate to the project folder:

    cd ITPM-Playwright-Project

Install project dependencies:
   
    npm install
 
Install Playwright browsers:

    npx playwright install

Running Tests

Run all tests:

    npx playwright test

Run tests in headed mode:

    npx playwright test --headed

Run a specific test file:

    npx playwright test tests/example.spec.js


Run tests using Playwright UI mode:

    npx playwright test --ui


Test Reports

View the Playwright HTML report after execution:

    npx playwright show-report


## Test Design

This project follows a structured and maintainable test design approach:

- **Page Object Model (POM) Architecture**  
  The application pages are separated into individual classes to encapsulate locators and actions, improving readability and maintainability.

- **Positive and Negative Test Cases**  
  Test scenarios include both valid and invalid user inputs to ensure the application behaves correctly under normal and error conditions.

- **UI Validation Scenarios**  
  UI-related validations are implemented to verify element visibility, layout consistency, and user interactions.

- **Reusable and Maintainable Test Code**  
  Common actions and utilities are reused across test cases, reducing code duplication and simplifying future enhancements.























