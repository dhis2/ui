@component-transfer @transferring
Feature: Transferring items between lists

    Scenario: The user selects multiple items
        Given some options are selectable
        And some items in the options list are highlighted
        When the user clicks the 'move to selected list' button
        Then the highlighted items should be removed from the options list
        And the highlighted items should be visible in the selected list
        And the highlighted items should be appended to the selected list in the order they were highlighted

    Scenario: The user deselects multiple items
        Given some options are selected
        And some items in the selected list are highlighted
        When the user clicks the 'move to options list' button
        Then the highlighted items should be removed from the selected list
        And the highlighted items should be visible in the options list
        And the highlighted items should be in the original options list ordering

    Scenario: The user selects all items
        Given some options are selected
        When the user clicks the 'move all to selected list' button
        Then all items should be removed from the options list
        And all items removed from options list should be visible in the selected list
        And the transferred items should be appended to the selected list in the order they were displayed in the options list

    Scenario: The user deselects all items
        Given some options are selected
        When the user clicks the 'move all to options list' button
        Then all items should be removed from the selected list
        And all items removed from selected list should be visible in the options list
        And the options list items should be ordered in the original order

    Scenario: The user double clicks an item in the options list
        Given some options are selectable
        When the user double clicks an item in the options list
        Then the item should be removed from its options list
        And the item should be visible at the bottom of the selected list

    Scenario: The user double clicks an item in the selected list
        Given some options are selected
        When the user double clicks an item in the selected list
        Then the item should be removed from the selected list
        And the options list items should be ordered in the original order
