Feature: Loading status

    Scenario: The user opens an empty MultiSelect
        Given an empty MultiSelect is rendered
        When the MultiSelect input is clicked
        Then an empty menu is displayed

    Scenario: The user opens an empty MultiSelect with custom empty text
        Given an empty MultiSelect with custom empty text is rendered
        When the MultiSelect input is clicked
        Then the custom empty text is displayed

    Scenario: The user opens an empty MultiSelect with a custom empty component
        Given an empty MultiSelect with custom empty component is rendered
        When the MultiSelect input is clicked
        Then the custom empty component is displayed
