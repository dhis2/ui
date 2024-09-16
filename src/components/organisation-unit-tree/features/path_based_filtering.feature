Feature: The OrganisationUnitTree can be filtered by paths

    Scenario: The org unit tree is filtered by a three-level-deep path
        Given a unfiltered OrganisationUnitTree with a depth of 3 levels is rendered
        And the second level contains two nodes
        And all parent levels are open
        And a filter containing the first child of the first second level is provided
        Then the root level is visible
        And the first node on the second level is visible
        And the first child node of the first node on the second level is visible
        And all other nodes are not rendered

    Scenario: The org unit tree is filtered by a three-level- and a two-level-deep path
        Given a filtered OrganisationUnitTree with a depth of 3 levels is rendered
        And the second level contains two nodes
        And the second level nodes each have a child node
        And all parent levels are open
        And a filter containing the first child of the second level is provided
        And a filter containing the second child of the first level is provided
        Then the root level is visible
        And the first node on the second level is visible
        And the first child node of the first node on the second level is visible
        And the second node on the first level is visible
        And all other nodes are not rendered
