Feature: Filtering the MultiSelect options

    Scenario: The user enters a filter string to filter the options
        Given a filterable MultiSelect with options is rendered
        And the MultiSelect is open
        When the user enters a filter string
        Then the matching options are displayed

    Scenario: The user enters a filter string that doesn't match any options
        Given a filterable MultiSelect with options is rendered
        And the MultiSelect is open
        When the user enters a filter string that doesn't match any options
        Then the no match text is displayed
        And the options are not rendered
