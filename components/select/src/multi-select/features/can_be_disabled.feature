Feature: Disabled MultiSelect

    Scenario: The disabled singleselect has a selection
        Given a disabled MultiSelect with options and a selection is rendered
        Then the selection is displayed

    Scenario: The user clicks a disabled MultiSelect
        Given a disabled MultiSelect with options is rendered
        And the MultiSelect is closed
        When the MultiSelect input is clicked
        Then the options are not rendered

    Scenario: The user presses the down arrowkey
        Given a disabled MultiSelect with options is rendered
        And the MultiSelect is closed
        And the MultiSelect is focused
        When the down arrowkey is pressed on the focused element
        Then the options are not rendered

    Scenario: The user presses the up arrowkey
        Given a disabled MultiSelect with options is rendered
        And the MultiSelect is closed
        And the MultiSelect is focused
        When the up arrowkey is pressed on the focused element
        Then the options are not rendered

    Scenario: The user presses the spacebar
        Given a disabled MultiSelect with options is rendered
        And the MultiSelect is closed
        And the MultiSelect is focused
        When the spacebar is pressed on the focused element
        Then the options are not rendered
