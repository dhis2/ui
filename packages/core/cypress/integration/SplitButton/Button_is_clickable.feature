Feature: The SplitButton has an onClick api

    Scenario: The user clicks on the SplitButton
        Given a SplitButton with onClick hander is rendered
        When the SplitButton is clicked
        Then the onClick handler is called
