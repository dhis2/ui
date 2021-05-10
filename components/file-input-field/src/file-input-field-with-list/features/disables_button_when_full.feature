Feature: The FileInputFieldWithList disables its button when full

    Scenario: The button is disabled when the fileInput is full
        Given a FileInputFieldWithList without multiple is rendered
        And the FileInputFieldWithList holds a file
        Then the button is disabled
