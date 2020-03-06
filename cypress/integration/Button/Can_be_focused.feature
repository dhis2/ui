Feature: The Button has an onFocus api

    Scenario: The user focuses the Button
        Given a Button with onFocus handler is rendered
        When the Button is focused
        Then the onFocus handler is called
