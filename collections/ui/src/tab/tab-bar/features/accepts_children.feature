Feature: The TabBar renders children

    Scenario: A TabBar with children
        Given a TabBar with children is rendered
        Then the children are visible

    Scenario: A scrollable TabBar with children
        Given a scrollable TabBar with children is rendered
        Then the children are visible
