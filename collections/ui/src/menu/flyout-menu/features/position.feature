Feature: Position of a SubMenu component

    Scenario: Default rendering
        Given there is enough space to the right of the MenuItem to fit the SubMenu
        When the user clicks on the MenuItem
        Then the right of the MenuItem is aligned with the left of the SubMenu
        And the top of the MenuItem is aligned with the top of the SubMenu wrapper

    Scenario: Flipped rendering when insufficient space to the right of
        Given there is not enough space to the right of the MenuItem to fit the SubMenu
        When the user clicks on the MenuItem
        Then the left of the MenuItem is aligned with the right of the SubMenu
        And the top of the MenuItem is aligned with the top of the SubMenu wrapper

    Scenario: Shifting into view when insufficient space to the right of and above
        Given there is not enough space to the right or the left of the MenuItem to fit the SubMenu
        When the user clicks on the MenuItem
        Then the SubMenu is rendered on top of the MenuItem
        And the top of the MenuItem is aligned with the top of the SubMenu wrapper
