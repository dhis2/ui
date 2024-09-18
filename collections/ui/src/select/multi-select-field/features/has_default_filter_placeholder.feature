Feature: Filter placeholder for the MultiSelectField

    Scenario: Rendering a filterable MultiSelectField
        Given a filterable MultiSelectField is rendered
        When the Select is opened
        Then the filter placeholder exists
