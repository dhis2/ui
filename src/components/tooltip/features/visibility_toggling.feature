Feature: Tooltip visibility toggling

    Scenario: Showing
        Given there is enough space between the reference element top and the body top to fit the Tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        And the Tooltip stays visible

    Scenario: Prevent showing on quick mouseout
        Given there is enough space between the reference element top and the body top to fit the Tooltip
        When the mouse cursor enters the anchor
        When the mouse cursor leaves the anchor
        And the Tooltip is not rendered

    Scenario: Hiding
        Given there is enough space between the reference element top and the body top to fit the Tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        When the mouse cursor leaves the anchor
        Then the Tooltip is not rendered

    Scenario: Prevent hiding on re-enter
        Given there is enough space between the reference element top and the body top to fit the Tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        When the mouse cursor leaves the anchor
        Then there is a short pauze
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        And the Tooltip stays visible

    Scenario: Hiding after re-enter
        Given there is enough space between the reference element top and the body top to fit the Tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        When the mouse cursor leaves the anchor
        And there is a short pauze
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        And the Tooltip stays visible
        When the mouse cursor leaves the anchor
        Then the Tooltip is not rendered

    Scenario: Showing when Tooltip is on top of element
        Given there is not enough space above or below the anchor to fit the Tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered on top of the anchor
        And the Tooltip stays visible

    Scenario: Hiding when Tooltip is on top of element
        Given there is not enough space above or below the anchor to fit the Tooltip
        When the mouse cursor enters the anchor
        And the mouse cursor leaves the anchor
        Then the Tooltip is not rendered
