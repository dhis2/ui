Feature: The button has an onClick api

    Scenario: The user clicks on the Button
        Given a Button with onClick handler is rendered
        When the Button is clicked
        Then the onClick handler is called
