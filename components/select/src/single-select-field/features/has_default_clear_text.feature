Feature: Clear text for the SingleSelectField

    Scenario: Rendering a clearable SingleSelectField
        Given a clearable SingleSelectField with selected option is rendered
        When the clear button is hovered
        Then the clear text is visible
