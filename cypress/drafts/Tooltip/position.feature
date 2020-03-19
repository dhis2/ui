Feature: Tooltip positioning

    Background:
        Given the tooltip has a width of 300px and height of 28px

    Scenario: Spacing between anchor and tooltip
        When the anchor is clicked
        Then there is some space between the anchor and the tooltip

    Scenario: Default positioning
        Given there is enough space between the anchor's top and the body's top to fit the Tooltip
        When the anchor is clicked
        Then the tooltip is rendered above the the anchor
        And the horizontal center of the tooltip is aligned with the horizontal center of the anchor

    Scenario: Flipped vertical
        Given there is not enough space between the anchor's top and the body's top to fit the Tooltip
        And there is enough space between the anchor's bottom and the body's bottom to fit the Tooltip
        When the anchor is clicked
        Then the tooltip is rendered below the anchor
        And the horizontal center of the tooltip is aligned with the horizontal center of the anchor

    Scenario: Adjusted horiztonal position
        Given there is enough space between the anchor's top and the body's top to fit the Tooltip
        And there is enough space between the body's left and the body's right to fit the Tooltip
        And the Tooltip doesn't use more than 50% of the space between the body's sides and the anchor's sides
        When the anchor is clicked
        Then the tooltip is rendered above the anchor
        And the horizontal center of the tooltip is aligned with the horizontal center of the anchor

    Scenario: Adjusted width
        Given there is enough space between the anchor's top and the body's top to fit the Tooltip
        And there is enough space between the body's left and the body's right to fit the Tooltip
        And the Tooltip does use more than 50% of the space between the body's sides and the anchor's sides
        When the anchor is clicked
        Then the tooltip is rendered above the anchor
        And the horizontal center of the tooltip is aligned with the horizontal center of the anchor
        But the tooltip's width is reducesd to only take 50% of the space available next to the anchor
