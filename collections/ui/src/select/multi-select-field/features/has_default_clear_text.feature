Feature: Clear text for the MultiSelectField

    Scenario: Rendering a clearable MultiSelectField
        Given a clearable MultiSelectField with selected option is rendered
        When the clear button is hovered
        Then the clear text is visible
