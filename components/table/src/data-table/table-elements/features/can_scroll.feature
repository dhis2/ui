Feature: Scrolling a Table

    Scenario: The user vertically scrolls the Table
        Given a scrolling table is rendered
        When the user scrolls down
        Then the header row is visible
        And the first two table columns are visible
        And the bottom left scrolling table cell is visible
        But the bottom right scrolling table cell is not visible
        And the top left scrolling table cell is not visible
        And the top right scrolling table cell is not visible

    Scenario: The user horizontally scrolls the Table
        Given a scrolling table is rendered
        When the user scrolls right
        Then the header row is visible
        And the first two table columns are visible
        And the top right scrolling table cell is visible
        But the bottom right scrolling table cell is not visible
        And the top left scrolling table cell is not visible
        And the bottom left scrolling table cell is not visible

    Scenario: The user vertically and horizontally scrolls the Table
        Given a scrolling table is rendered
        When the user scrolls down and right
        Then the header row is visible
        And the first two table columns are visible
        And the bottom right scrolling table cell is visible
        But the top left scrolling table cell is not visible
        And the bottom left scrolling table cell is not visible
        And the top right scrolling table cell is not visible
