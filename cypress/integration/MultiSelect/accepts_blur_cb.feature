Feature: Calls onBlur cb when blurred

    Scenario: Blurring a MultiSelect through clicking away
        Given a MultiSelect with onBlur handler is rendered
        And the MultiSelect input is clicked
        And the MultiSelect has focus
        When the user clicks the backdrop
        Then the onBlur handler is called
