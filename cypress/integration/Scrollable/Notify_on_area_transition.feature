Feature: The Scrollable component notified the subscriber when the area changes

    Scenario: The user scrolls from the top area to the middle area
        Given the top area is visible
        When the user scrolls the top area out of the viewport
        Then the onAreaEnter callback should be called
        And the payload should contain middle as new area

    Scenario: The user scrolls from the middle area to the top area
        Given the top area is not visible
        When the user scrolls the top area into the viewport
        Then the onAreaEnter callback should be called
        And the payload should contain top as new area

    Scenario: The user scrolls from the middle area to the bottom area
        Given the top area is not visible
        And the bottom area is not visible
        When the user scrolls the bottom area into the viewport
        Then the onAreaEnter callback should be called
        And the payload should contain bottom as new area

    Scenario: The user scrolls from the bottom area to the middle area
        Given the bottom area is visible
        When the user scrolls the bottom area out of the viewport
        Then the onAreaEnter callback should be called
        And the payload should contain middle as new area
