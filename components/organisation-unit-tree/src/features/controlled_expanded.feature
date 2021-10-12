Feature: The expanded paths of the org unit tree can be controlled

    Scenario: The org unit tree does not render because props are missing
        Given the org unit tree is not being provided with all required props for controlled expanded state
        Then the org unit tree should display an error

    Scenario: The org unit tree expands some paths initially
        Given the initial state of the controlled expanded prop has some paths
        Given the org unit tree is being provided with the required props to control the expanded state
        Then the org unit tree should open the provided paths when done loading

    Scenario: The user collapses a path by pressing a button
        Given the initial state of the controlled expanded prop has some paths
        Given the org unit tree is being provided with the required props to control the expanded state
        When the org unit tree should is done loading the provided paths
        When the user clicks on a button to collapse one of the opened paths
        Then the path should close
