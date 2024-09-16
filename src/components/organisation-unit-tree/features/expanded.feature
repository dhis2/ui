Feature: Nodes can be expanded

    Scenario: No initially expanded paths are provided
        Given a OrganisationUnitTree with children and no paths in the initiallyExpanded prop is rendered
        Then the root unit is closed

    # The given step is really long.. but I don't know how to split it while
    # being able to test/prepare that with cypress
    Scenario: The first unit on the second level is provided as initially expanded path
        Given a OrganisationUnitTree with children and the path of the first unit on the second level in the initiallyExpanded prop is rendered
        Then the root unit is opened

    # For info what a "sub", "main" and "root" unit is, see
    # "sub_unit_as_root.feature"
    Scenario: A sub org unit gets expanded within the main org unit tree
        Given both a sub org unit with children and a main org unit are root org units
        And the root main org unit is expanded
        When the user expands the sub org unit within the main org unit tree
        Then the root sub org unit should not expand

    # For info what a "sub", "main" and "root" unit is, see
    # "sub_unit_as_root.feature"
    Scenario: A root sub org unit gets expanded which is also in the main org unit tree
        Given both a sub org unit with children and a main org unit are root org units
        And the root main org unit is expanded
        When the user expands the root sub org unit
        Then the sub org unit within the main org unit tree should not expand
