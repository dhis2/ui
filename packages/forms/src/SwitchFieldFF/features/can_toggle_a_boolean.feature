Feature: The Switch can toggle a value

    Scenario: The user enables the Switch
        Given an unchecked Switch without value is rendered
        When the user clicks on the Switch
        Then the form value that corresponds to the switch will be true

    Scenario: The user disables the Switch
        Given a checked Switch without value is rendered
        When the user clicks on the Switch
        Then the form value that corresponds to the switch will be false
