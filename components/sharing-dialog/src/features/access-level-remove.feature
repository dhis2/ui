Feature: Allows users to remove access for specific entities

    Scenario Outline: User can remove the <initial> access for a <target>
        Given a sharing dialog with <target> item with <initial> is visible
        When the user removes the access for the <target>
        Then the <target> item is removed

    Scenarios:
        | target | initial       |
        | user   | view          |
        | user   | view and edit |
        | group  | view          |
        | group  | view and edit |
