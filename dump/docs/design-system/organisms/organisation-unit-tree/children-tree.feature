Feature: Child organisation units are rendered tree-like

  Scenario: Children are displayed in a tree-like fashion
    Given a level is opened
    And is done loading its details
    And has children
    Then an organisation unit tree is rendered for each child

  Scenario: Unit with children is closed
    Given a level is closed
    And is done loading its details
    And has children
    Then no children are rendered
    And an arrow indicates that the level is closed
