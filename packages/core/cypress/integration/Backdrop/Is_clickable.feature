Feature: The Backdrop has an onClick api

    Scenario: The user clicks on the Backdrop
        Given a Backdrop with onClick handler is rendered
        When the user clicks on the Backdrop
        Then the onClick handler will be called
