Feature: When a unit is loading its children then there is a loading indicator

    Scenario: The first second-level unit is loading its children
        Given a OrganisationUnitTree with two levels is rendered
        And the root level is closed
        When the root level is opened
        Then there is a loading indicator rendered on the first child of the second level
