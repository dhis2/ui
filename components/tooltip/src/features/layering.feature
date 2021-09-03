Feature: Tooltip layering

    Scenario: Tooltip is rendered from a Modal
        Given a Modal contains a tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        And the Tooltip is fully visible
