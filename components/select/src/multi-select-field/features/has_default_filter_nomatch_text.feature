Feature: Nomatchtext for the MultiSelectField

    Scenario: Rendering a filterable MultiSelectField
        Given a filterable MultiSelectField is rendered
        When the Select is opened
        And a filter that does not match any options is entered
        Then the no match text is visible
