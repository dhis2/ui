Feature: Tooltip positioning

    Scenario: Default positioning
        Given there is enough space between the reference element top and the body top to fit the Tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        And the horizontal center of the Tooltip is aligned with the horizontal center of the anchor
        And there is some space between the anchor top and the Tooltip bottom

    Scenario: Flipped vertical
        Given there is not enough space between the reference element top and the body top to fit the Tooltip
        But there is enough space between the anchor bottom and the body bottom to fit the Tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered below the anchor
        And the horizontal center of the Tooltip is aligned with the horizontal center of the anchor
        And there is some space between the anchor bottom and the Tooltip top

    Scenario: Adjusted horizontal position
        Given there is limited space available to the left of the anchor
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        And the horizontal center of the Tooltip is to the right of the horizontal center of the anchor
        And there is some space between the anchor top and the Tooltip bottom

    Scenario: Shifting position
        Given there is not enough space above or below the anchor to fit the Tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered on top of the anchor
        And the Tooltip stays visible
