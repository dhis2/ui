Feature: The ScreenCover provides an onClick api

    Scenario: The user clicks on the ScreenCover
        Given a Screencover with onClick handler is rendered
        When the user clicks on the Screencover
        Then the onClick handler will be called
