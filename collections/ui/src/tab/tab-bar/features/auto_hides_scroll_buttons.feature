Feature: The TabBar hides scroll buttons automatically when there is enough space for all tabs

    Scenario: There is enough space for the tabs initially
        Given a tabbar with enough space for all tabs is rendered
        And the tabbar is scrollable
        When the tabs are visible
        Then no scroll buttons should be visible

    Scenario: There is not enough space for the tabs initially
        Given a tabbar with too little space for all tabs is rendered
        And the tabbar is scrollable
        When the tabs are visible
        Then both scroll buttons should be visible

    Scenario: The buttons hide when the the tabbar's width increases
        Given a tabbar with too little space for all tabs is rendered
        And the tabbar is scrollable
        When the tabs are visible
        Then both scroll buttons should be visible
        When the tabbar's width increases
        Then no scroll buttons should be visible

    Scenario: There is enough space for the tabs initially
        Given a tabbar with enough space for all tabs is rendered
        And the tabbar is scrollable
        When the tabs are visible
        Then no scroll buttons should be visible
        When the tabbar's width decreases
        Then both scroll buttons should be visible
