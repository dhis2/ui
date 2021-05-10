Feature: When provided some paths of the OrganisationUnitTree are expanded initially

    Scenario: No initially expanded paths are provided
        Given a OrganisationUnitTree with children and no paths in the initiallyExpanded prop is rendered
        Then the root unit is closed

    # The given step is really long.. but I don't know how to split it while being able to test/prepare
    # that with cypress
    Scenario: The first unit on the second level is provided as initially expanded path
        Given a OrganisationUnitTree with children and the path of the first unit on the second level in the initiallyExpanded prop is rendered
        Then the root unit is opened
