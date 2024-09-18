Feature: Children of a node are rendered as a child node

    Scenario: A unit has some children
        Given an OrganisationUnitTree with children is rendered
        And the node is open
        Then its children are nodes inside the unit's node
