Feature: The Chip has an onClick api

    Scenario: The user clicks on the Chip
        Given a Chip with onClick handler is rendered
        When the Chip is clicked
        Then the onClick handler is called
