Feature: The OrganisationUnitTree offers props for its events

    Scenario: The user selects a node
        Given an OrganisationUnitTree is rendered
        When a node gets selected
        Then the onChange callback gets called
        And the payload includes the path of the selected node
        And the payload includes checked which is set to "true"
        And the payload includes all selected nodes

    Scenario: The user deselects a node
        Given an OrganisationUnitTree is rendered
        And a node has been selected
        When a node gets deselected
        Then the onChange callback gets called
        And the payload includes the path of the selected node
        And the payload includes checked which is set to "false"

    Scenario: The user expands a node with children
        Given a node with children is rendered
        When the node is expanded
        Then the onExpand callback gets called
        And the payload includes the path of the expanded node

    Scenario: The user collapses a node with children
        Given a node with children is rendered
        And the node has been expanded
        When a node is collapsed
        Then the onCollapse callback gets called
        And the payload includes the path of the collapsed node

    Scenario: Children of a node are done being loaded
        Given a node with children is rendered
        But the children haven't been loaded yet
        When the children have been loaded
        Then the onChildrenLoaded callback gets called
        And the payload contains the loaded children's data
