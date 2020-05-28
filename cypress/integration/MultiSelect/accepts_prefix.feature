Feature: Placeholder text

    Scenario: A prefix text with no selection
        Given a MultiSelect with a prefix and no selection is rendered
        Then the prefix is shown

    Scenario: A prefix text with a selection
        Given a MultiSelect with a prefix and a selection is rendered
        Then the prefix is shown
        And the selection is shown
