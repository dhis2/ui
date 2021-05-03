Feature: The Input can be disabled

    Scenario: The user clicks a disabled Input
        Given a disabled Input is rendered
        When the user clicks the input
        Then the Input is not focused
