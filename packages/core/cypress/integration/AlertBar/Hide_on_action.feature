Feature: The AlertBar will hide when the user clicks the Cancel button

    Scenario: The user clicks the "Cancel" button
        Given a permanent AlertBar with actions is rendered
        When the user clicks on the "Cancel" button
        Then the AlertBar will not be visible
