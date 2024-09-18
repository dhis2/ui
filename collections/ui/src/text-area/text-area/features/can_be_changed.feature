Feature: The TextArea has an onChange api

    Scenario: The user types a character into the TextArea
        Given a TextArea with onChange handler is rendered
        When the TextArea is filled with a character
        Then the onChange handler is called
