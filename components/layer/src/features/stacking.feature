Feature: Layers are stacked on top of each other

    Scenario: Equal sibling layers
        Given two equal sibling Layers are rendered
        Then the second layer is on top of the first layer

    Scenario: Inequal sibling layers
        Given an alert, blocking, and applicatioTop Layer are rendered as siblings
        Then the alert layer is on top

    # use zIndex stacking context
    Scenario: Nesting Layer elements with lower levels
        Given a blocking layer is rendered as the child of an alert layer
        Then the blocking layer is on top
        And the blocking layer is a child of the alert layer

    # avoid stacking context upper bound issue
    Scenario: Appending nested Layers with higher levels to the body
        Given an alert layer is rendered as the child of a blocking layer
        Then the alert layer is on top
        And the alert layer is a sibling of the blocking layer

    # verify that bug from previous implementation is not there
    # that bug was as follows:
    # nested layers top element zIndex = 1000 + 1 + 1 = 1002
    # sibling layer element zIndex = 1001
    # so layer level 1001 would be below the nested layer with level 1000
    Scenario: Levels are respected when nesting layers
        Given a layer with level 1001 is a sibling of 3 nested layers with level 1000
        Then the layer with level 1001 is on top

    Scenario: Nested higher levels still end up on top
        Given an applicatioTop layer with a nested alert layer with a blocking sibling
        Then the alert layer is on top
