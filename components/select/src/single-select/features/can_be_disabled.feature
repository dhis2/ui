Feature: Disabled SingleSelect

    Scenario: The disabled singleselect has a selection
        Given a disabled SingleSelect with options and a selection is rendered
        Then the selection is displayed

    Scenario: The user clicks a disabled SingleSelect
        Given a disabled SingleSelect with options is rendered
        And the SingleSelect is closed
        When the SingleSelect input is clicked
        Then the options are not rendered

    Scenario: The user presses the down arrowkey
        Given a disabled SingleSelect with options is rendered
        And the SingleSelect is closed
        And the SingleSelect is focused
        When the down arrowkey is pressed on the focused element
        Then the options are not rendered

    Scenario: The user presses the up arrowkey
        Given a disabled SingleSelect with options is rendered
        And the SingleSelect is closed
        And the SingleSelect is focused
        When the up arrowkey is pressed on the focused element
        Then the options are not rendered

    Scenario: The user presses the spacebar
        Given a disabled SingleSelect with options is rendered
        And the SingleSelect is closed
        And the SingleSelect is focused
        When the spacebar is pressed on the focused element
        Then the options are not rendered
