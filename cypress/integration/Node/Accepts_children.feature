Feature: The Node renders children

    Scenario: A closed Node with children
        Given a closed Node with children is rendered
        Then the children are not visible

    Scenario: An open Node with children
        Given an open Node with children is rendered
        Then the children are visible
