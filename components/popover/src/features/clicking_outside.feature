Feature: Popover clicking outside

    Scenario: Responds to a click outdside the Popover
        Given a default Popover is rendered with an onClickOutside handler
        When the user clicks outside of the Popover
        Then the clickOutside handler is called