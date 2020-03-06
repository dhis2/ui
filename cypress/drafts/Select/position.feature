Feature: Position of select menu dropdown

    Background:
        Given the select menu dropdown has a height of 368px
        And the select menu dropdown has a width of 280px

    Scenario: Default rendering
        Given there is enough space between the anchor's bottom and the body's bottom to fit the Select's menu
        When the menu is opened
        Then it is rendered below the select
        And the left of the select is aligned with the left of the anchor

    Scenario: Flipped rendering when insufficient space below
        Given there is not enough space between the anchor's bottom and the body's bottom to fit the Select's menu
        And there is enough space between the anchor's top and the body's top to fit the Select's menu
        When the menu is opened
        Then it is rendered above the select
        And the left of the select is aligned with the left of the anchor

    Scenario: A select with less than 368px available space below and above
        Given there is not enough space between the anchor's bottom and the body's bottom to fit the Select's menu
        And there is not enough space between the anchor's top and the body's top to fit the Select's menu
        When the menu is opened
        Then it is rendered below the select
        And the height of the select dropdown menu is reduced to fit within the <body> element
