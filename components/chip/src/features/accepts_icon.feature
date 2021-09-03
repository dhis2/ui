Feature: The Chip accepts an icon prop

    Scenario: Default Chip does not render an icon
        Given a default Chip is rendered
        Then the icon will not be rendered

    Scenario: Chip renders supplied icon
        Given a Chip supplied with an icon is rendered
        Then the icon will be visible
