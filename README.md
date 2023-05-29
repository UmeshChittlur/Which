# Technical Tests:
This project contains all tests related to UI scenarios for Television page

## Tools:
* Cypress
* npm
* JavaScript
* VS Code
* Cucumber

## Concepts included:
* Commonly used Cypress commands
* Common web page interaction method
* Commonly used test utility class
* Features wirtten in Gherkin language
* Step definitions and Page Object Model

## Requirements:
To utilize this project, you need to have the following installed locally:
* node.js
* VS Code

## Usage:
* Open the WHICH project in VS Code
* In terminal run the command to install Cypress: npm install cypress --save-dev

## Test execution:
* To run the test, navigate to WHICH directory and run the script: npm run test
* After the test execution it will execute Mochawesome html Report which can be accessed via link generated
* Alternatively you can run tests in cypress user friendly runner with command: node_modules/.bin/cypress open
* You can select individual test feature in the runner to execute
* Currently tests are configured to run in CHROME browser, we can always confiure to different browsers
