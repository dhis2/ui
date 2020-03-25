Feature: Position of MultiSelect menu dropdown

    Scenario: Default rendering
        Given there is enough space below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        Then the top of the menu is aligned with the bottom of the input
        And the left of the MultiSelect is aligned with the left of the anchor

    Scenario: Flipped rendering when insufficient space below
        Given there is not enough space below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        Then the bottom of the menu is aligned with the top of the input
        And the left of the MultiSelect is aligned with the left of the anchor

    Scenario: Shifting into view when insufficient space below and above
        Given there is not enough space above or below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        Then it is rendered on top of the MultiSelect
        And the left of the MultiSelect is aligned with the left of the anchor

    Scenario: Staying in position during when the window is scrolled
        Given there is enough space below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        And the window is scrolled down
        Then the top of the menu is aligned with the bottom of the input
        And the left of the MultiSelect is aligned with the left of the anchor
