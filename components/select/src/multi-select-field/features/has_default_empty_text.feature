Feature: Empty text for the MultiSelectField

    Scenario: Rendering an empty MultiSelectField
        Given an empty MultiSelectField is rendered
        When the Select is opened
        Then the empty text is visible
