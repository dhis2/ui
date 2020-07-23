Feature: The Switch field displays an error when invalid

    Scenario: The user submits a form with an unchecked required switch
        Given an unchecked Switch is rendered
        When the user submits the form
        Then an error message is shown
