Feature: Allows users to view and change the access level for specific entities

    Scenario Outline: User can change the access level from <initial> to <changed> for <target>
        Given a sharing dialog with <target> item with <initial> is visible
        When the user sets the <target> access level to <changed>
        Then the <target> access control should be set to <changed>
        And the <target> section should be labeled for <changed>

    Scenarios:
        | initial   | target    | changed       |
        | no access | all users | view only     |
        | no access | all users | view and edit |
        | view      | user      | view and edit |
        | view      | group     | view and edit |
