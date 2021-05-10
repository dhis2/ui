Feature: Empty text for the SingleSelectField

    Scenario: Rendering an empty SingleSelectField
        Given an empty SingleSelectField is rendered
        When the Select is opened
        Then the empty text is visible
