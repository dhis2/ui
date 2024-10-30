@component-transfer @button-states
Feature: Disable transfer buttons when actions are not possible

    Scenario: None of the selectable options are highlighted
        Given the options list has items
        And no option items are highlighted
        Then the 'move to picked list' button should be disabled

    Scenario: Some of the selectable options are highlighted
        Given the options list has items
        And some option items are highlighted
        Then the 'move to picked list' button should be enabled

    Scenario: None of the selected options are highlighted
        Given the selected list has items
        And no selected items are highlighted
        Then the 'move to source list' button should be disabled

    Scenario: Some of the selected options are highlighted
        Given the selected list has items
        And some selected items are highlighted
        Then the 'move to source list' button should be enabled

    Scenario: The transfer does not have any options at all
        Given the transfer does not have any options
        Then the 'move all to picked list' button should be disabled

    Scenario: All options are on the selected side
        Given all options have been selected
        Then the 'move all to picked list' button should be disabled

    Scenario: Some items in options list
        Given the options list has items
        Then the 'move all to picked list' button should be enabled

    Scenario: No items in selected list
        Given the selected list does not have items
        Then the 'move all to source list' button should be disabled

    Scenario: Some items in selected list
        Given the selected list has items
        Then the 'move all to source list' button should be enabled

    Scenario: Only disabled options in source list
        Given a source list that has only disabled options
        Then the 'move all to picked list' button should be disabled
