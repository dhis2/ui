Feature: Placeholder text

    Scenario: A placeholder text with no selection
        Given a SingleSelect with a placeholder and no selection is rendered
        Then the placeholder is shown

    Scenario: A placeholder text with a selection
        Given a SingleSelect with a placeholder and a selection is rendered
        Then the placeholder is not rendered
        And the selection is displayed
