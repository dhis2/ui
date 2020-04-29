Feature: Highlight a range of options

    Scenario: The user highlights an option with the SHIFT modifier key
        Given the option list has one or more items
        And no item is highlighted
        When the user clicks an item with the SHIFT modifier key
        Then the clicked option should be highlighted

    Scenario: The user un-highlights an option with the SHIFT modifier key
        Given the option list has one or more items
        And one item is highlighted
        When the user clicks the highlighted item with the SHIFT modifier key
        Then the option is not highlighted

    Scenario Outline: The user highlights a range of options with the SHIFT modifier key
        Given the <type> list has three or more items
        And one item is highlighted
        And there are at least two options following the highlighted option
        When the user highlightes the second options following the highlighted option with the SHIFT key modifier
        Then the clicked options should be highlighted
        Then all options between the initially highlighted option and the clicked option are highlighted

        Examples:
            | type     |
            | option   |
            | selected |

    Scenario Outline: The user highlights a range of options with the SHIFT modifier key while multiple are highlighted
        Given the <type> list has three or more items
        And several options are highlighted
        And there are at least two options following the last highlighted option
        When the user highlightes the second options following the last highlighted option
        Then the option highlighted most recently without SHIFT should be highlighted
        And the option clicked with SHIFT should be highlighted
        And all options between the option highlighted most recently without SHIFT and the clicked option are highlighted
        And all other previously highlighted options are not highlighted anymore

        Examples:
            | type     |
            | option   |
            | selected |

    Scenario Outline: The user highlights hides the last-without-SHIFT clicked option and selects a range
        Given the option list has many items
        And several options are highlighted
        When the user "<mod>" clicks a highlighted option
        And the user changed the filter to exclude the last clicked option
        And the user SHIFT-clicks a non-highlighted option
        Then the range from the visually first highlighted option to the SHIFT-clicked option is highlighted

        Examples:
            | mod  |
            | ctrl |
            | cmd  |
            | alt  |

    Scenario Outline: The user highlights highlights the first option with SHIFT, then highlights a range with SHIFT
        Given the <type> list has many items
        When the user SHIFT-clicks an option
        And the user SHIFT-clicks another option
        Then the range from the first clicked option to the second clicked option is highlighted

        Examples:
            | type     | mod  |
            | option   | ctrl |
            | option   | cmd  |
            | option   | alt  |
            | selected | ctrl |
            | selected | cmd  |
            | selected | alt  |
