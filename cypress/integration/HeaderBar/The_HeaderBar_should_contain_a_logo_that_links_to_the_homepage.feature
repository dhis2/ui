Feature: The HeaderBar should contain a logo that links to the homepage

    Scenario: HeaderBar contains logo
        Given the HeaderBar loads without an error
        Then the HeaderBar should display the dhis2 logo
        And the logo should link to the homepage
