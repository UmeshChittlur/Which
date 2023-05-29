Feature: Testing filters on Television page

    Scenario: Resolution filters

        Given I navigate to Television page
        When I click on resolution "Full-HD"
        And I verify filters applied for "Full-HD" on filter section
        Then I verify resolution "Full-HD" results are displayed for Television
