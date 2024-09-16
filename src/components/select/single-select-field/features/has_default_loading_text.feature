Feature: Filter placeholder for the SingleSelectField

    Scenario: Rendering a filterable SingleSelectField
        Given a loading SingleSelectField is rendered
        When the Select is opened
        Then the loading text is visible
