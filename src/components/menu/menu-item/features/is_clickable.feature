Feature: The MenuItem has an onClick api

    Scenario: The user clicks on the MenuItem
        Given a MenuItem with onClick handler and value is rendered
        When the MenuItem is clicked
        Then the onClick handler is called with value
