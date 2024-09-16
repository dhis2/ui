Feature: Invalid SingleSelect options

    Scenario: Rendering a SingleSelect with invalid options
        Given a SingleSelect with invalid options is rendered
        And the SingleSelect is open
        Then the invalid options are displayed

    Scenario: Rendering a SingleSelect with invalid filterable options
        Given a SingleSelect with invalid filterable options is rendered
        And the SingleSelect is open
        When the user enters a filter string
        Then the invalid options are not rendered
