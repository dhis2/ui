Feature: Calls onHidden cb when hidden

    Scenario: Alertbar will call the onHidden cb when hidden
        Given an Alertbar with onHidden handler is rendered
        When the Alertbar is hidden
        Then the onHidden handler is called
