Feature: The SplitButton renders a DropMenu

    Scenario: The user opens the DropMenu
        Given a SplitButton is rendered
        And the SplitButton menu is closed
        When the SplitButton toggle is clicked
        Then the menu is visible
        And the component is visible

    Scenario: The user closes the DropMenu
        Given a SplitButton is rendered
        And the SplitButton menu is open
        When the SplitButton toggle is clicked
        Then the menu is not visible
        And the component is not visible
