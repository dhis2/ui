Feature: Nodes can be expanded

    Scenario: No initially expanded paths are provided
        Given a OrganisationUnitTree with children and no paths in the initiallyExpanded prop is rendered
        Then the root unit is closed

    # The given step is really long.. but I don't know how to split it while
    # being able to test/prepare that with cypress
    Scenario: The first unit on the second level is provided as initially expanded path
        Given a OrganisationUnitTree with children and the path of the first unit on the second level in the initiallyExpanded prop is rendered
        Then the root unit is opened

    Scenario: A sub org unit and its parents are both root org units
        Given both a sub org unit and its parent are root org units
        Then only the parent unit is first rendered
        When the root main org unit is expanded
        Then the sub org unit is rendered
