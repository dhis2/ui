Feature: The Input has an onChange api

    Scenario: The user types a character into the Input
        Given a Input with onChange handler is rendered
        When the Input is filled with a character
        Then the onChange handler is called
