Feature: The whole organisation unit tree can be reloaded

    Scenario: The whole tree is reloaded while being opened
        Given a OrganisationUnitTree with three levels is rendered
        And the two parent levels are opened
        When the tree is being force reloaded and the loading process has finished
        Then all three levels are visible again
