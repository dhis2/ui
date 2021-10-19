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
