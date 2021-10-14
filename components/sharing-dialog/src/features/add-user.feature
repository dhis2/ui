Feature: Allows users to add entities to the allowed list

    Scenario Outline: User can give <target> <level> access
        Given a sharing dialog that allows adding entities is visible
        When the user gives <target> <level> access
        Then the <target> is added to the access list with <level> access

    Scenarios:
        | target | level         |
        | user   | view only     |
        | user   | view and edit |
        | group  | view only     |
        | group  | view and edit |
