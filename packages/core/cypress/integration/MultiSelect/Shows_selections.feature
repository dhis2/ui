Feature: Show current selections

    Scenario: The multiselect has a single selection
        Given a MultiSelect with options and a selection is rendered
        Then the selection is displayed

    Scenario: The multiselect has multiple selections
        Given a MultiSelect with options and multiple selections is rendered
        Then the selections are displayed
