Feature: Loading status

    Scenario: The user opens an empty SingleSelect
        Given an empty SingleSelect is rendered
        When the SingleSelect input is clicked
        Then an empty menu is displayed

    Scenario: The user opens an empty SingleSelect with custom empty text
        Given an empty SingleSelect with custom empty text is rendered
        When the SingleSelect input is clicked
        Then the custom empty text is displayed

    Scenario: The user opens an empty SingleSelect with a custom empty component
        Given an empty SingleSelect with custom empty component is rendered
        When the SingleSelect input is clicked
        Then the custom empty component is displayed
