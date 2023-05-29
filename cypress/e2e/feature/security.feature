Feature: Testing security feature

    Scenario: Security functionality testing for cookies
        Given I navigate to Television page
        When I clear all session storage for cookies
        And I refresh the page
        Then I verify cookies should appear on the page

    Scenario: Security functionality testing for cookies
        Given I navigate to Television page
        Then I verify information for Pros is not visible in dom
        Then I verify information for Cons is not visible in dom