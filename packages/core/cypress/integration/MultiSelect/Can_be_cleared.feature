Feature: Clearing the MultiSelect

    Scenario: The user clicks the clear button to clear the MultiSelect
        Given a clearable MultiSelect with a selection and onchange handler is rendered
        When the clear button is clicked
        Then the MultiSelect is cleared
