Feature: The DropdownButton can be disabled

    Scenario: The user clicks a disabled DropdownButton
        Given a disabled DropdownButton with onClick handler is rendered
        When the DropdownButton is clicked
        Then the onClick handler is not called
