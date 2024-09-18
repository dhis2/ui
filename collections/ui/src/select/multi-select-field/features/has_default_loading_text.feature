Feature: Filter placeholder for the MultiSelectField

    Scenario: Rendering a filterable MultiSelectField
        Given a loading MultiSelectField is rendered
        When the Select is opened
        Then the loading text is visible
