Feature: The display of the children can be toggled

    Scenario: The children are being opened
        Given the selector bar item is closed
        When the user opens the selector bar item
        Then the children should be displayed

    Scenario: The children are being closed
        Given the selector bar item is open
        When the user closes the selector bar item
        Then the children should not be displayed
