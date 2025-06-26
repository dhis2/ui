Feature: Allows users to remove access for specific entities

    Scenario Outline: User can remove the <access-level> access for a <target>
        Given a sharing dialog with <target> item with <access-level> is visible
        When the user removes the access for the <target>
        Then the <target> item should be removed

    Scenarios:
        | target | access-level  |
        | user   | view          |
        | user   | view and edit |
        | group  | view          |
        | group  | view and edit |

    Scenario: User cannot change the access from View and edit to No access for a group if that removes their sharing and preventUsersFromRemovingMetadataWriteAccess=true
        Given a sharing dialog with user group item with View and edit is visible and user has access through group
        When the user attemps to remove the access for the group
        Then the user group access control should remain with View and edit access