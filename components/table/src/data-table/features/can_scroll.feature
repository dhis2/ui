Feature: Scrolling a DataTable

    Scenario: The user vertically scrolls the DataTable
        Given a scrolling datatable is rendered
        When the user scrolls down
        Then the header row is visible
        And the first two datatable columns are visible
        And the bottom left scrolling datatable cell is visible
        But the bottom right scrolling datatable cell is not visible
        And the top left scrolling datatable cell is not visible
        And the top right scrolling datatable cell is not visible

    Scenario: The user horizontally scrolls the DataTable
        Given a scrolling datatable is rendered
        When the user scrolls right
        Then the header row is visible
        And the first two datatable columns are visible
        And the top right scrolling datatable cell is visible
        But the bottom right scrolling datatable cell is not visible
        And the top left scrolling datatable cell is not visible
        And the bottom left scrolling datatable cell is not visible

    Scenario: The user vertically and horizontally scrolls the DataTable
        Given a scrolling datatable is rendered
        When the user scrolls down and right
        Then the header row is visible
        And the first two datatable columns are visible
        And the bottom right scrolling datatable cell is visible
        But the top left scrolling datatable cell is not visible
        And the bottom left scrolling datatable cell is not visible
        And the top right scrolling datatable cell is not visible
