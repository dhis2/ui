Feature: Allows users to view and change the access level for specific entities

    Scenario Outline: User can change the access level from <initial> to <changed> for <target>
        Given a sharing dialog with <target> item with <initial> is visible
        When the user sets the <target> access level to <changed>
        Then the <target> access control is set to <changed>
        And the <target> section is labeled for <changed>

    Scenarios:
        | target    | initial   | changed       |
        | all users | no access | view only     |
        | all users | no access | view and edit |
        | user      | view      | view and edit |
