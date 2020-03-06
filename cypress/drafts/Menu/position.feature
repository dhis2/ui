Feature: Position of a menu component

    # default max width: 380px; default max height: 380px
    Background:
        Given the menu component has a height and width of its default maximum

    Scenario: Default rendering
        Given there is enough space between the anchor's bottom and the body's bottom to fit the default maximum
        When the menu is opened
        Then the menu is below the anchor
        And the left of the menu is aligned with the left of the anchor

    Scenario: Flipped vertically
        Given there is not enough space between the anchor's bottom and the body's bottom to fit the default maximum
        And there is not enough space between the anchor's top and the body's top to fit the default maximum
        When the menu is opened
        Then the menu is above the anchor
        And the left of the menu is aligned with the left of the anchor

    Scenario: Less than 368px and more than 50px available space below and above anchor
        Given there is not enough space between the anchor's bottom and the body's bottom to fit the default maximum
        And there is not enough space between the anchor's top and the body's top to fit the default maximum
        But there is more than 50px of available space between the anchor's bottom and the body's bottom
        When the menu is opened
        Then the menu is below the anchor
        And the height of the menu is reduced to fit

    # ¯\_(ツ)_/¯
    # This will cause the menu always to be off screen, but that's the apps fault
    Scenario: Less than 50px available space below and above anchor
        Given there is not enough space between the anchor's top and the body's top to fit the default maximum
        And there is not enough space between the anchor's bottom and the body's bottom to fit the default maximum
        When the menu is opened
        Then the menu is below the anchor
        And the heght of the menu is not reduced below 50px

    Scenario: Flipped horizontally
        Given the space between the anchor's right and the body's right is less than the horizontal minimum space
        And the space between the anchor's left and the body's left is at least the horizontal minimum space
        When the menu is opened
        Then the right of the menu is aligned with the right of the anchor
        And the menu is below the anchor

    # ¯\_(ツ)_/¯
    # This will cause the menu always to be off screen, but that's the apps fault
    Scenario: Forced body overflow
        Given the space between the anchor's right and the body's right is less than the horizontal minimum space
        And the space between the anchor's left and the body's left is less than the horizontal minimum space
        When the menu is opened
        Then the left of the menu is aligned with the left of the anchor
        And the menu is rendered below the anchor
