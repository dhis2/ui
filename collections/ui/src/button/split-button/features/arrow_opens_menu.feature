Feature: The SplitButton renders a Popper

    Scenario: The user opens the Popper
        Given a SplitButton is rendered
        And the SplitButton menu is closed
        When the SplitButton toggle is clicked
        Then the menu is visible
        And the component is visible

    Scenario: The user closes the Popper
        Given a SplitButton is rendered
        And the SplitButton menu is open
        When the user clicks the backdrop Layer
        Then the menu is not visible
        And the component is not visible
