Feature: The Tag accepts an icon prop

    Scenario: Tag has no icon by default
        Given a default Tag is rendered
        Then the icon will not be rendered

    Scenario: Tag with icon
        Given a Tag with an icon is rendered
        Then the icon will be visible
