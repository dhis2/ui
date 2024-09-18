Feature: The FileListItem has an onRemove api

    Scenario: The user removes a file
        Given a FileListItem with Onremove handler is rendered
        When the user clicks on the remove text
        Then the onRemove handler is called
