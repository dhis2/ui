@component-transfer @reordering
Feature: Reorder items in the selected list using buttons

    Background:
        Given reordering of items is enabled

    # I created two scenarios for up and down reordering because I wanted to
    # incorporate a check for 'is first' or 'is last' and it seemed overly
    # ambiguous to write this in a single scenario. Or, is it enough that I
    # have included the 'Disable move buttons' scenarios at the bottom of this
    # file, so that doesn't need to be handled in the basic scenarios at the
    # top?

    Scenario Outline: The user clicks the 'move up' button with a highlighted item in the selected list
        Given the selected list has three items
        And the <previous>. item is highlighted
        When the user clicks the 'move up' button
        Then the highlighted item should be moved to the <next>. place

        Examples:
            | previous | next |
            | 1        | 1    |
            | 2        | 1    |
            | 3        | 2    |

    Scenario Outline: The user clicks the 'move down' button with a highlighted item in the selected list
        Given the selected list has three items
        And the <previous>. item is highlighted
        When the user clicks the 'move down' button
        Then the highlighted item should be moved to the <next>. place

        Examples:
            | previous | next |
            | 1        | 2    |
            | 2        | 3    |
            | 3        | 3    |

    Scenario Outline: The user clicks the 'move to top' button with a highlighted item in the selected list
        Given the selected list has three items
        And the <previous>. item is highlighted
        When the user clicks the 'move to top' button
        Then the highlighted item should be moved to the <next>. place

        Examples:
            | previous | next |
            | 1        | 1    |
            | 2        | 1    |
            | 3        | 1    |

    Scenario Outline: The user clicks the 'move to bottom' button with a highlighted item in the selected list
        Given the selected list has three items
        And the <previous>. item is highlighted
        When the user clicks the 'move to bottom' button
        Then the highlighted item should be moved to the <next>. place

        Examples:
            | previous | next |
            | 1        | 3    |
            | 2        | 3    |
            | 3        | 3    |

    Scenario: Disable reorder buttons when no items are highlighted
        Given the selected list has some items
        And no items are highlighted in the list
        Then all four reorder buttons should be disabled

    # --- Multi-select ---
    #
    # All four buttons act on the highlighted picked items as a group,
    # preserving the group's relative order. Non-contiguous selections
    # collapse into a contiguous block before landing at the target edge.

    Scenario: 'move up' shifts a contiguous block of highlighted items up by one slot
        Given the selected list has eight items
        When the user highlights the items at positions 3 and 4
        And the user clicks the 'move up' button
        Then those items should be at positions 2 and 3
        And those items should still be highlighted

    Scenario: 'move up' collapses and shifts a non-contiguous selection in one press
        Given the selected list has eight items
        When the user highlights the items at positions 2 and 4
        And the user clicks the 'move up' button
        Then those items should be at positions 1 and 2

    Scenario: 'move down' shifts a contiguous block of highlighted items down by one slot
        Given the selected list has eight items
        When the user highlights the items at positions 2 and 3
        And the user clicks the 'move down' button
        Then those items should be at positions 3 and 4

    Scenario: 'move down' collapses and shifts a non-contiguous selection in one press
        Given the selected list has eight items
        When the user highlights the items at positions 2 and 4
        And the user clicks the 'move down' button
        Then those items should be at positions 4 and 5

    Scenario: 'move to top' collapses a non-contiguous selection flush to the top
        Given the selected list has eight items
        When the user highlights the items at positions 3 and 5
        And the user clicks the 'move to top' button
        Then those items should be at positions 1 and 2

    Scenario: 'move to bottom' collapses a non-contiguous selection flush to the bottom
        Given the selected list has eight items
        When the user highlights the items at positions 2 and 4
        And the user clicks the 'move to bottom' button
        Then those items should be at positions 7 and 8

    Scenario: The highlighted group stays highlighted after moving, allowing chained presses
        Given the selected list has eight items
        When the user highlights the items at positions 3 and 4
        And the user clicks the 'move up' button
        And the user clicks the 'move up' button
        Then those items should be at positions 1 and 2
        And those items should still be highlighted

    Scenario: Both up-side buttons are disabled when the highlighted block is flush to the top
        Given the selected list has eight items
        When the user highlights the items at positions 1 and 2
        Then the 'move up' and 'move to top' buttons should be disabled
        And the 'move down' and 'move to bottom' buttons should not be disabled

    Scenario: Both down-side buttons are disabled when the highlighted block is flush to the bottom
        Given the selected list has eight items
        When the user highlights the items at positions 7 and 8
        Then the 'move down' and 'move to bottom' buttons should be disabled
        And the 'move up' and 'move to top' buttons should not be disabled

    Scenario: Up-side buttons remain enabled when a non-contiguous selection contains the top item
        Given the selected list has eight items
        When the user highlights the items at positions 1 and 3
        Then the 'move up' and 'move to top' buttons should not be disabled

    Scenario: All four reorder buttons are disabled when every picked item is highlighted
        Given the selected list has eight items
        When the user highlights every item in the selected list
        Then all four reorder buttons should be disabled
