Feature: Popover conditional arrow

    Scenario: With arrow
        Given a default Popper is rendered with arrow set to true
        Then there is an arrow element in the Popover

    Scenario: Without arrow
        Given a Popover is rendered with the arrow prop set to false
        Then there is no arrow element in the Popover