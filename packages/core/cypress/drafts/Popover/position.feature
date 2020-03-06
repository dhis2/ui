Feature: Popover positioning

    Background:
        Given the popover has a width of 360px and height of 200px

    Scenario: Spacing between anchor and popover
        When the anchor is clicked
        Then there is some space between the anchor and the popover

    Scenario: Default positioning
        Given there is enough space between the anchor's top and the body's top to fit the Popover
        When the anchor is clicked
        Then the popover is rendered above the the anchor
        And the horizontal center of the popover is aligned with the horizontal center of the anchor

    Scenario: Flipped vertical
        Given there is not enough space between the anchor's top and the body's top to fit the Popover
        And there is enough space between the anchor's bottom and the body's bottom to fit the Popover
        When the anchor is clicked
        Then the popover is rendered below the anchor
        And the horizontal center of the popover is aligned with the horizontal center of the anchor

    Scenario: Adjusted width
        Given there is not enough space between the anchor's top and the body's top to fit the Popover
        And there is not enough space between the anchor's bottom and the body's bottom to fit the Popover
        When the anchor is clicked
        Then the popover is rendered above the anchor
        And the horizontal center of the popover is aligned with the horizontal center of the anchor
        And the popover width is reduced to fit in the available space

        #!!Note: this is a exact copy of tooltip positioning
