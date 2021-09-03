Feature: Add/Remove options to/from the highlighted options

    Scenario Outline: Highlight multiple items using CMD/CTRL+click
        Given the <type> list has two or more items
        When the user clicks multiple items with "<metaKey>" which are not highlighted
        Then all of the clicked items should be highlighted

        Examples:
            | type     | metaKey |
            | option   | cmd     |
            | option   | ctrl    |
            | selected | cmd     |
            | selected | ctrl    |

    Scenario Outline: Unhighlight items using CMD/CTRL+click
        Given the <type> list has two or more items
        And some items are highlighted
        When the user clicks on one item with "<metaKey>" which is highlighted
        Then the clicked item should not be highlighted
        And the other previously highlighted items should remain highlighted

        Examples:
            | type     | metaKey |
            | option   | cmd     |
            | option   | ctrl    |
            | selected | cmd     |
            | selected | ctrl    |

    Scenario Outline: A user clicks a highlighted option without a modifier key when multiple options are highlighted
        Given the <type> list has two or more items
        And some items are highlighted
        When the user clicks on one item without a modifier key which is highlighted
        Then the clicked option is highlighted
        And the other previously highlighted items should not be highlighted

        Examples:
            | type     | metaKey |
            | option   | cmd     |
            | option   | ctrl    |
            | selected | cmd     |
            | selected | ctrl    |
