Feature: Testing clear all filters functionality for Television page

   Scenario: Verify functionality for multiple filters and clear all filters
      Given I navigate to Television page
      When I click on Screen size "55-60"
      And I click on Screen type "OLED"
      And I click on resolution type "4K Ultra-HD"
      Then I verify all filters are applied in Applied filter section
      And I clear all filters
      Then I verify Applied filter section disappears