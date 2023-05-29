Feature: Testing Sort by on Television page

    Scenario: Verify Sort by dropdown functionality

        Given I navigate to Television page
        When I click on Sort by dropdown "Price (high to low)"
        Then I verify results displayed are high to low
