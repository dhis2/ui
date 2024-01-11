Feature: Calls onBlur cb when blurred

    Scenario: Blurring a SingleSelect through clicking away
        Given a SingleSelect with onBlur handler is rendered
        And the SingleSelect input is clicked
        And the SingleSelect has focus
        When the user clicks the backdrop layer
        Then the onBlur handler is called

    Scenario: Blurring a SingleSelect by interacting selecting an option and interacting with other input
        Given a SingleSelect with onBlur handler is rendered
        And the SingleSelect input is clicked
        And the SingleSelect has focus
        When the user selects the first option
        Then the onBlur handler is called
