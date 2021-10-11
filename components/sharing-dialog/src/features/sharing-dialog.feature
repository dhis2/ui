Feature: Sharing dialog

    Scenario: User can change the access level for all users
        Given a sharing dialog is visible
        And the all users section is visible
        And the all users section is labeled no access
        And the access control is set to no access
        When the user sets the access level to view only
        Then the access control is set to view only
        And the all users section is labeled for view only
