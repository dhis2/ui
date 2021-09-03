Feature: Invalid MultiSelect options

    Scenario: Rendering a MultiSelect with invalid options
        Given a MultiSelect with invalid options is rendered
        And the MultiSelect is open
        Then the invalid options are displayed

    Scenario: Rendering a MultiSelect with invalid filterable options
        Given a MultiSelect with invalid filterable options is rendered
        And the MultiSelect is open
        When the user enters a filter string
        Then the invalid options are not rendered
