Feature: Show current selections

    Scenario: The singleselect has a selection
        Given a SingleSelect with options and a selection is rendered
        Then the selection is displayed
