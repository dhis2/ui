Feature: The IntersectionDetector notifies the consumer when becoming visible

    Scenario: The user scrolls the IntersectionDetector into view
        Given the detector is not intersecting with the root
        When the user scrolls the detector into view
        Then the callback passed to onChange should be called
        And the isIntersecting prop of its payload should be true

    Scenario: The user scrolls the IntersectionDetector out of view
        Given the detector is intersecting with the root
        When the user scrolls the detector out of view
        Then the callback passed to onChange should be called
        And the isIntersecting prop of its payload should be false
