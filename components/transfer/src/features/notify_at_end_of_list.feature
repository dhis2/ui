Feature: The source and picked option lists notify the consumer when the end has been reached

    Scenario Outline: The list is displayed initially and the end is not visible
        Given the Transfer has enough items to fill the <type> list completely
        Then the callback for reaching the end should not be called

        Examples:
            | type   |
            | source |
            | picked |

    Scenario Outline: The list is displayed initially and the end is visible
        Given the Transfer does not have enough items to fill the <type> list completely
        Then the callback for reaching the end should be called

        Examples:
            | type   |
            | source |
            | picked |

    Scenario Outline: The user scrolls down the list to the end
        Given the Transfer has enough items to fill the <type> list completely
        When the user scroll to the end of the list
        Then the callback for reaching the end should be called

        Examples:
            | type   |
            | source |
            | picked |

    Scenario: The list is short and items are added within the list container
        Given the Transfer source options list does not fill the list completely
        # Initial state: the list has 7 items and the list ends well above the container bottom
        Then the list end indicator of the source list should be visible
        Then the callback for reaching the end of the source list should be called 1 times
        Then the callback for reaching the end of the picked list should be called 1 times
        # Selected item is not in the options array but is present in the `selectedOptionsLookup`
        Then the selected item is being displayed in the picked list
        When the user adds an item by clicking the button
        # The indicator is still just in view
        Then the list end indicator of the source list should be visible
        Then the callback for reaching the end of the source list should be called 2 times
        When the user adds an item by clicking the button
        # This adds val-9, which is a selected item so it gets added to picked options
        # not source options, but the callback is still called
        Then the list end indicator of the source list should be visible
        Then the callback for reaching the end of the source list should be called 3 times
        # The picked list callback does not get called because the picked item was already present
        Then the callback for reaching the end of the picked list should be called 1 times
        When the user adds an item by clicking the button
        # The indicator is still in view but only just
        Then the list end indicator of the source list should be visible
        Then the callback for reaching the end of the source list should be called 4 times
        When the user adds an item by clicking the button
        # The indicator now is out of view, no more calls
        Then the list end indicator of the source list should not be visible
        Then the callback for reaching the end of the source list should be called 4 times
        # But scrolling down does trigger a call
        When the user scrolls down to the source list end
        Then the list end indicator of the source list should be visible
        Then the callback for reaching the end of the source list should be called 5 times
        # And selecting an item triggers a call in the picked list
        When the user selects option nr. 11
        Then the callback for reaching the end of the picked list should be called 2 times
