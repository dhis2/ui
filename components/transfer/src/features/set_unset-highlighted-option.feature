@component-transfer @highlighting
Feature: Set&unset the highlighted option

    Scenario Outline: The user clicks an item that is not already highlighted
        Given the <type> list has one or more items
        And one item is highlighted
        When the user clicks an item in the list that is not highlighted
        Then the clicked item should be highlighted
        And the previously highlighted item should no longer be highlighted

        Examples:
            | type     |
            | option   |
            | selected |

    Scenario Outline: The user clicks a highlighted item
        Given the <type> list has one or more items
        And one item is highlighted
        When the user clicks an item in the list that is highlighted
        Then the previously highlighted item should no longer be highlighted

        Examples:
            | type     |
            | option   |
            | selected |

    Scenario: The user highlights an option, changes the filter to exclude that option & then changes the filter back
        Given the option list has one or more items
        And one item is highlighted
        But the highlighted item is not visible due to a set filter
        When the users changes the filter to include the hidden option
        Then the option is visible
        And the option is highlighted

    Scenario: The user highlights an option, changes the filter to exclude that option, selects the highlighted options & then changes the filter back
        Given the option list has one or more items
        And one item is highlighted
        But the highlighted item is not visible due to a set filter
        When the user selects the visible, highlighted options
        And the users changes the filter to include the hidden option
        Then the option is visible
        And the option is not highlighted
