Feature: Position of SelectField

    Scenario: Keeps position when parent is hidden initially
        Given a Select is hidden initially
        When someone hovers over it to show it
        And clicks the select
        Then the select dropdown should be in the correct position