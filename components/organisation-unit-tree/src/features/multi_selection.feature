Feature: When not limited any amount of units can be selected

    Scenario: The user selects a unit when no other unit is selected
        Given an OrganisationUnitTree with two levels is rendered
        And no unit is selected
        When the user selects a unit
        Then a unit is selected

    Scenario: The user selects a unit when a parent unit is not selected
        Given an OrganisationUnitTree with two levels is rendered
        And the root level unit is opened
        When the user selects the first unit on the second level
        Then the unit on the second level is selected
        Then the unit on the first level is marked as selected intermediately

    Scenario: The user selects a unit which is selected intermediately
        Given an OrganisationUnitTree with two levels is rendered
        And the root level unit is opened
        And the first unit on the second level is selected
        When the user selects the root level
        Then the root unit is marked as selected

    Scenario: The user selects a unit when another unit on the same level is selected
        Given an OrganisationUnitTree with two levels is rendered
        And the root level unit is opened
        And the first unit on the second level unit is opened
        And the second level has two units
        And the first unit on the second level is selected
        When the user selects the second unit on the second level
        Then the first unit is selected
        Then the second unit is selected
