Feature: Loading status

    Scenario: The user opens a loading SingleSelect
        Given a SingleSelect with options and a loading flag is rendered
        When the SingleSelect input is clicked
        Then the loading spinner is displayed
        And the options are displayed

    Scenario: The user opens a loading SingleSelect with a loading text
        Given a SingleSelect with options, a loading flag and a loading text is rendered
        When the SingleSelect input is clicked
        Then the loading spinner is displayed
        And the loading text is displayed
        And the options are displayed
