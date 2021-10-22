Feature: The HeaderBar should display the title provided by the backend and the app

    Scenario: The HeaderBar displays the custom title
        Given the custom title is "Barbaz" and the app title is "Example!"
        Then the displayed title should be "Barbaz - Example!"
