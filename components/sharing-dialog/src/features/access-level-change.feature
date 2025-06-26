Feature: Allows users to view and change the access level for specific entities

    Scenario Outline: User can change the access level from <initial> to <changed> for <target>
        Given a sharing dialog with <target> item with <initial> is visible
        When the user sets the <target> access level to <changed>
        Then the <target> access control should be set to <changed>
        And the <target> section should be labeled for <target>

    Scenarios:
        | initial   | target    | changed       |
        | no access | all users | view only     |
        | no access | all users | view and edit |
        | view      | user      | view and edit |
        | view      | group     | view and edit |

    Scenario: User cannot change the access from View and edit to No access for a group if that removes their sharing and preventUsersFromRemovingMetadataWriteAccess=true
        Given a sharing dialog with user group item with View and edit is visible and user has access through group and preventUsersFromRemovingMetadataWriteAccess=true
        When the user sets the user group access level to view only
        Then the user group access control should remain as View and edit

    Scenario: User can change the access from View and edit to No access for a group if that removes their sharing (default)
        Given a sharing dialog with user group item with View and edit is visible and user has access through group
        When the user sets the user group access level to view only
        Then the user group access control should be set to View only

    Scenario: User can change the access from View and edit to No access for a group if that does not remove their sharing with preventUsersFromRemovingMetadataWriteAccess=true
        Given a sharing dialog with user group item with View and edit is visible and user has all authority
        When the user sets the user group access level to view only
        Then the user group access control should be set to View only