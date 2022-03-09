Feature: Allows users to add entities to the allowed list

    Scenario Outline: User can give <target> <level> access
        Given a sharing dialog that allows adding <target> entities is visible
        When the user gives <target> <level> access
        Then the <target> should be added to the access list with <level> access
        And the autocomplete input should be cleared

            Scenarios:
            | target | level         |
            | user   | view only     |
            | user   | view and edit |
            | group  | view only     |
            | group  | view and edit |
