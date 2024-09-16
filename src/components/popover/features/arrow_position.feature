Feature: Popover arrow positions

    Scenario: The Arrow is at the bottom of a Popper with placement top
        Given a Popover is rendered with placement top
        Then the Arrow is at the bottom of the Popper
        And the Arrow is horizontally aligned with the Popper

    Scenario: The Arrow is at the left of a Popper with placement right
        Given a Popover is rendered with placement right
        Then the Arrow is at the left of the Popper
        And the Arrow is vertically aligned with the Popper

    Scenario: The Arrow is at the top of a Popper with placement bottom
        Given a Popover is rendered with placement bottom
        Then the Arrow is at the top of the Popper
        And the Arrow is horizontally aligned with the Popper

    Scenario: The Arrow is at the right of a Popper with placement left
        Given a Popover is rendered with placement left
        Then the Arrow is at the right of the Popper
        And the Arrow is vertically aligned with the Popper

    Scenario: The Arrow is shifted along the Popper to align with the reference element
        Given a Popover with position left is shifted into view
        Then the Arrow is at the right of the Popper
        And the Arrow is at the top half of the Popper
        And the Arrow is vertically aligned with the reference element
