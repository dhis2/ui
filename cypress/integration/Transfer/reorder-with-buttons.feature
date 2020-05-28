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

    Scenario: Disable reorder buttons when no items are highlighted
        Given the selected list has some items
        And no items are highlighted in the list
        Then the 'move up' and 'move down' buttons should be disabled

    Scenario: Disabled reorder buttons when multiple selected items are highlighted
        Given the selected list has some items
        And more than one item is highlighted in the list
        Then the 'move up' and 'move down' buttons should be disabled
