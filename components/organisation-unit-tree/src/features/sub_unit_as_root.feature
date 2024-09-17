Feature: Sub-org units can be a root org unit

    Main org unit : is an actual root org unit in the configured hierarchy
    Sub org unit  : is an org unit which is inside the tree of a "main org unit"
    Root org unit : refers to an org unit which is a root node in the component
    ---
    Org unit components can have multiple selections in all of the scenarios

    Scenario: The user selects the root sub org unit
        Given a sub org unit is a root org unit
        When the user selects the root sub org unit
        Then the root sub org unit should be selected

    Scenario: The user selects the root sub org unit which is included in the tree of a root main org unit
        Given both a sub org unit and a main org unit are root org units
        And the root sub org unit is a child of the root main org unit
        When the user selects the root sub org unit
        Then the root main org unit should be marked as indeterminate

    Scenario: The user selects the a child in the root main org unit which is also a root sub org unit
        Given both a sub org unit and a main org unit are root org units
        And the root sub org unit is a child of the root main org unit
        When the user selects sub org unit in the main org unit tree
        Then the root sub org unit should be selected

    Scenario: The user filtered the tree by a root sub unit path
        Given multiple sub org units is a root org unit
        And the user provided one root sub org unit to the filter
        Then all root sub org units but the filtered sub org unit should be hidden

    Scenario: The user filtered the tree by a non-root sub unit path in the root main org unit
        Given multiple sub org units is a root org unit
        And the user provided one non-root sub org unit to the filter
        Then only the root main org units should be visible
