Feature: Allows users to view and change the access level for specific entities

    Scenario Outline: User can change the access level from <initial> to <changed> for <user>
        Given a sharing dialog with an <target> item is visible
        And the <target> section is labeled <initial>
        And the access control is set to <initial>
        When the user sets the access level to <changed>
        Then the access control is set to <changed>
        And the <target> section is labeled for <changed>

    Scenarios:
        | target    | initial   | changed       |
        | all users | no access | view only     |
        | all users | no access | view and edit |
