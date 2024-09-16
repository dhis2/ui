Feature: Displays a displayname if it exists

    Scenario: Default title
        Given a sharing dialog without a displayname is visible
        Then the default title should be visible

    Scenario: Title with displayname
        Given a sharing dialog with a displayname is visible
        Then the custom displayname should be included in the title
