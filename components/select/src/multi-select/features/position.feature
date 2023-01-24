Feature: Position of MultiSelect menu dropdown

    Scenario: Default rendering
        Given there is enough space below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        Then the top of the menu is aligned with the bottom of the input
        And the left of the Menu is aligned with the left of the Input

    Scenario: Flipped rendering when insufficient space below
        Given there is not enough space below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        Then the bottom of the menu is aligned with the top of the input
        And the left of the Menu is aligned with the left of the Input

    Scenario: Shifting into view when insufficient space below and above
        Given there is not enough space above or below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        Then it is rendered on top of the MultiSelect
        And the left of the Menu is aligned with the left of the Input

    Scenario: Staying in position when the window is scrolled
        Given there is enough space below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        And the window is scrolled down
        Then the top of the menu is aligned with the bottom of the input
        And the left of the Menu is aligned with the left of the Input

    Scenario: Adusting the menu width when the window resizes
        Given there is enough space below the anchor to fit the MultiSelect menu
        When the MultiSelect is clicked
        Then the left of the Menu is aligned with the left of the Input
        And the Menu and the Input have an equal width
        When the window is resized to a greater width
        Then the left of the Menu is aligned with the left of the Input
        And the Menu and the Input have an equal width

    Scenario: Positioning the menu when an option is selected
        Given a MultiSelect is rendered to which options can be added
        And the input is empty
        When the MultiSelect is clicked
        Then the top of the menu is aligned with the bottom of the input
        And the left of the Menu is aligned with the left of the Input
        When an option is clicked
        Then the Input remains the same height
        And the top of the menu is aligned with the bottom of the input
        And the left of the Menu is aligned with the left of the Input

