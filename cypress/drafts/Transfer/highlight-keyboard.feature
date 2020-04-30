Feature: Highlight options with keyboard controls

    ##
    #
    # Keyboard interaction
    #
    # NOTE: For now we won't support keyboard functionality until we have a
    # proper keyboard system in place
    #
    ##

    Scenario Outline: The user presses enter on a focused item that is not already highlighted
        Given the <type> list has one or more items
        And an item that has keyboard focus
        When the user presses the enter or space key
        Then the focused item should be highlighted
        And any other highlighted items should no longer be highlighted

        Examples:
            | type     |
            | option   |
            | selected |

    Scenario Outline: The user presses enter on a focused highlighted item
        Given the <type> list has one or more items
        And an item that has keyboard focus
        When the user presses the enter or space key on  an item in the list that is highlighted
        Then the item is not highlighted

        Examples:
            | type     |
            | option   |
            | selected |
