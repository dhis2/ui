Feature: Loading status

    Scenario: The user opens a loading MultiSelect
        Given a MultiSelect with options and a loading flag is rendered
        When the MultiSelect input is clicked
        Then the loading spinner is displayed
        And the options are displayed

    Scenario: The user opens a loading MultiSelect with a loading text
        Given a MultiSelect with options, a loading flag and a loading text is rendered
        When the MultiSelect input is clicked
        Then the loading spinner is displayed
        And the loading text is displayed
        And the options are displayed
