Feature: The DropdownButton has an onClick api

    Scenario: The user clicks on the DropdownButton
        Given a DropdownButton with onClick handler is rendered
        When the DropdownButton is clicked
        Then the onClick handler is called
