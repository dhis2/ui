Feature: Opening and closing the MultiSelect

    Scenario: The user clicks the MultiSelect input to display the options
        Given a MultiSelect with options is rendered
        And the MultiSelect is closed
        When the MultiSelect input is clicked
        Then the options are displayed

    Scenario: The user presses the down arrowkey to display the options
        Given a MultiSelect with options is rendered
        And the MultiSelect is closed
        And the MultiSelect is focused
        When the down arrowkey is pressed on the focused element
        Then the options are displayed

    Scenario: The user presses the up arrowkey to display the options
        Given a MultiSelect with options is rendered
        And the MultiSelect is closed
        And the MultiSelect is focused
        When the up arrowkey is pressed on the focused element
        Then the options are displayed

    Scenario: The user presses the spacebar to display the options
        Given a MultiSelect with options is rendered
        And the MultiSelect is closed
        And the MultiSelect is focused
        When the spacebar is pressed on the focused element
        Then the options are displayed

    Scenario: The user clicks the backdrop layer to hide the options
        Given a MultiSelect with options is rendered
        And the MultiSelect is open
        When the user clicks the backdrop layer
        Then the options are not rendered

    Scenario: The user presses the escape key to hide the options
        Given a MultiSelect with options is rendered
        And the MultiSelect is open
        And the MultiSelect is focused
        When the escape key is pressed on the focused element
        Then the options are not rendered
