Feature: Test Minimum and maximum price range filters functionality 

# Show cases of more tests that can be automated on telivision page, but not implemented as per test instructions 
    Scenario: Verify functionality for price range
        Given I navigate to Television page
        When I select Minimum and Maximum price from Price filter section
        Then I verify all the results displayed between Minimum and Maximum price
        And I verify no televisions are displayed less than minimum and more than maximum price
        And I select Panasonic Brand from the Brand filter page
        Then I verify filters are applied for Minimum, Maximum and Brand selected
