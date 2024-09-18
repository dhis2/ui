Feature: The expanded paths of the org unit tree can be controlled

    Scenario: The org unit tree expands some paths initially
        Given the initial state of the controlled expanded prop has some paths
        Then the org unit tree should open the provided paths when done loading

    Scenario: The user collapses a path by pressing a button
        Given the initial state of the controlled expanded prop has some paths
        When the org unit tree should is done loading the provided paths
        When the user clicks on a button to collapse one of the opened paths
        Then the path should close
