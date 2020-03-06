Feature: The FileInputFieldWithList deduplicates the file list

    Scenario: The file list is deduplicated
        Given a FileInputFieldWithList with multiple files is rendered
        And the list contains the file duplicate.md
        When the file duplicate.md is selected
        Then the onChange handler is called
        Then the onChange handler's payload contains a single entry for file.md