Feature: Nomatchtext for the SingleSelectField

    Scenario: Rendering a filterable SingleSelectField
        Given a filterable SingleSelectField is rendered
        When the Select is opened
        And a filter that does not match any options is entered
        Then the no match text is visible
