Feature: When specified only one unit can be selected

    Scenario: The user selects a unit when no other unit is selected
        Given an OrganisationUnitTree with two nodes is rendered
        And no unit is selected
        When the user selects the first unit
        Then the first unit is selected

    Scenario: The user select a unit when another unit is selected
        Given an OrganisationUnitTree with two nodes is rendered
        And the first unit has been selected
        When the user selects the second unit
        Then the first unit is not selected
        Then the second unit is selected

    Scenario: The user deselects a unit
        Given an OrganisationUnitTree with two nodes is rendered
        And the first unit has been selected
        When the user deselects the first unit
        Then no unit is selected
