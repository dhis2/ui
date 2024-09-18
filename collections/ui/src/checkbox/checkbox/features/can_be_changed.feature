Feature: The Checkbox has an onChange api

    Scenario: The user clicks the Checkbox
        Given a Checkbox with onChange handler is rendered
        When the Checkbox is clicked
        Then the onChange handler is called
