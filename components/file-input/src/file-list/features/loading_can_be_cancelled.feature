Feature: The FileListItem has an onCancel api

    Scenario: The user cancels a file
        Given a loading FileListItem with onCancel handler is rendered
        When the user clicks on the cancel text
        Then the onCancel handler is called
