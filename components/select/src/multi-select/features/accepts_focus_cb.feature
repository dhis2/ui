Feature: Calls onFocus cb when focused

    Scenario: Focusing a MultiSelect through clicking
        Given a MultiSelect with onFocus handler is rendered
        When the MultiSelect input is clicked
        Then the onFocus handler is called
