Feature: Filter placeholder for the SingleSelectField

    Scenario: Rendering a filterable SingleSelectField
        Given a filterable SingleSelectField is rendered
        When the Select is opened
        Then the filter placeholder exists
