Feature: Test Minimum and maximum price range filters functionality 

# Show cases of more tests that can be automated on telivision page, but not implemented as per test instructions 
    Scenario: Verify functionality for price range
        Given I navigate to Television page
        When I select Minimum "£300" and Maximum "£500" price from Price filter section
        Then I verify in Applied filter section for Minimum "£300" and Maximum "£500" price
        Then I verify all the results displayed between Minimum "300" and Maximum "500" price
        And I select "panasonic" Brand from the Brand filter page
        Then I verify filters are applied for Minimum "£300" and Maximum "£500" price and Brand "Panasonic" selected
