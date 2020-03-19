Feature: Permanently displaying the AlertBar

    Scenario: The AlertBar renders with a permanent flag
        Given an AlertBar with permanent is rendered
        When the default duration has passed
        Then the AlertBar will be visible
