Feature: Opening and closing the SingleSelect

    Scenario: The user clicks the SingleSelect input to display the options
        Given a SingleSelect with options is rendered
        And the SingleSelect is closed
        When the SingleSelect input is clicked
        Then the options are displayed

    Scenario: The user presses the down arrowkey to display the options
        Given a SingleSelect with options is rendered
        And the SingleSelect is closed
        And the SingleSelect is focused
        When the down arrowkey is pressed on the focused element
        Then the options are displayed

    Scenario: The user presses the up arrowkey to display the options
        Given a SingleSelect with options is rendered
        And the SingleSelect is closed
        And the SingleSelect is focused
        When the up arrowkey is pressed on the focused element
        Then the options are displayed

    Scenario: The user presses the spacebar to display the options
        Given a SingleSelect with options is rendered
        And the SingleSelect is closed
        And the SingleSelect is focused
        When the spacebar is pressed on the focused element
        Then the options are displayed

    Scenario: The user clicks the backdrop layer to hide the options
        Given a SingleSelect with options is rendered
        And the SingleSelect is open
        When the user clicks the backdrop layer
        Then the options are not rendered

    Scenario: The user presses the escape key to hide the options
        Given a SingleSelect with options is rendered
        And the SingleSelect is open
        And the SingleSelect is focused
        When the escape key is pressed on the focused element
        Then the options are not rendered
