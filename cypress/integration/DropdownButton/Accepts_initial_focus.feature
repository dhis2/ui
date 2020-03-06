Feature: Focusing the DropdownButton on mount

    Scenario: The DropdownButton renders with focus
        Given a DropdownButton with initialFocus is rendered
        Then the DropdownButton is focused
