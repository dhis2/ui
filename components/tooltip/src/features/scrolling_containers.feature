Feature: Managing visibility with flipping and hiding in scrolling containers

    Scenario: Default behavior
        Given a reference element in a scrolling container with enough space between the top of the reference element and the container top to fit the Tooltip, and there is enough space above the container for a tooltip
        When the mouse cursor enters the anchor without scrolling
        Then the Tooltip is rendered above the anchor

    Scenario: The tooltip flips position to maintain visibility when scrolling while the reference element is still visible
        Given a reference element in a scrolling container with enough space between the top of the reference element and the container top to fit the Tooltip, and there is enough space above the container for a tooltip
        When the container is scrolled such that the reference element is still visible but tooltip in its default position would leave the container boundaries
        When the mouse cursor enters the bottom of the anchor without scrolling
        Then the Tooltip is rendered below the anchor

    Scenario: Hiding the tooltip when the reference element is not visible in a scrolling container
        Given this test uses timers
        Given a reference element in a scrolling container with enough space between the top of the reference element and the container top to fit the Tooltip, and there is enough space above the container for a tooltip
        When the mouse cursor enters the anchor without scrolling
        And there is a pause to allow the tooltip to open
        Then the Tooltip is rendered above the anchor
        When the container is scrolled such that the reference element is not visible
        When the mouse cursor leaves the anchor without scrolling
        Then the Tooltip still exists but is hidden
        When enough time passes for the CLOSE_DELAY to complete
        Then the Tooltip is not rendered
