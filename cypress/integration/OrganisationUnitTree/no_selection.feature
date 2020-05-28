Feature: Selection can be disabled entirely in the OrganisationUnitTree

    Scenario: The user clicks on a level of the disabled OrganisationUnitTree with the second level collapsed
        Given a disabled, collapsed OrganisationUnitTree with two levels is rendered
        When the root node is clicked
        Then the root node remains unselected
        But the second level is expanded

    Scenario: The user clicks on a level of the disabled OrganisationUnitTree with the second level expanded
        Given a disabled OrganisationUnitTree with two levels is rendered with the second level is expanded
        When the root node is clicked
        Then the root node remains unselected
        But the second level is collapsed
