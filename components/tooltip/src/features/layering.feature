Feature: Tooltip layering

    Scenario: Tooltip is rendered from a Modal
        Given a Modal contains a tooltip
        When the mouse cursor enters the anchor
        Then the Tooltip is rendered above the anchor
        And the Tooltip has attached itself to the modal layer root node
        And the Tooltip is fully visible