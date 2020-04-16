Feature: Popover positioning

    Scenario: Spacing
        Given there is sufficient space to place the Popover above the reference element
        Then there is some space between the anchor and the popover
        And the arrow is showing

    Scenario: Default positioning
        Given there is sufficient space to place the Popover above the reference element
        Then the popover is placed above the reference element
        And the horizontal center of the popover is aligned with the horizontal center of the reference element
        And the arrow is showing

    Scenario: Flipped vertical
        Given there is not enough space between the reference element top and the body top to fit the Popover
        And there is sufficient space between the reference element bottom and the body bottom to fit the Popover
        Then the popover is placed below the reference element
        And the horizontal center of the popover is aligned with the horizontal center of the reference element
        And the arrow is showing

    Scenario: On top of the reference element
        Given there is not enough space between the reference element top and the body top to fit the Popover
        And there is not enough space between the reference element bottom and the body bottom to fit the Popover
        But there is sufficient space between the bottom of the reference element and the bottom of the Popover to show the arrow
        Then the popover is placed op top of the reference element
        And the horizontal center of the popover is aligned with the horizontal center of the reference element
        And the arrow is showing

    Scenario: Hiding the arrow
        Given there is very little space between the top of the reference element and the top of the body
        And there is not enough space between the reference element bottom and the body bottom to fit the Popover
        And there is not enough space between the top of the reference element and the top of the Popover to show the arrow
        Then the popover is placed op top of the reference element
        And the horizontal center of the popover is aligned with the horizontal center of the reference element
        And the arrow is hiding
