Feature: The display of the children can be toggled

    Scenario: The children are being opened
        Given the context selector is closed
        When the user opens the context selector
        Then the children should be displayed

    Scenario: The children are being closed
        Given the context selector is open
        When the user closes the context selector
        Then the children should not be displayed
