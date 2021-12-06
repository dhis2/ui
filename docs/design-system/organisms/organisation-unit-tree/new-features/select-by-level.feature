Feature: Selection of descendant levels inside an org unit

  Background:
    Given an org unit tree with root org unit 'Sierra Leone'
    And descendants inside 'Sierra Leone' with multiple levels

  Scenario: Selection of a level inside an org unit
    When the user selects a level type from the 'Select by level' option
    Then all org units of that level are selected as a single selection
    And 'Sierra Leone' org unit visually indicates the selection made

  Scenario: Hide non-available levels
    Given the user is making a level selection
    Then only levels that are present in descendants should be available to 'Select by level'
    And only levels that the user is authorized to select should be available to 'Select by level'

  Scenario: Deselection of a level inside an org unit
    Given a level selection has been applied to 'Sierra Leone'
    When the user removes the level selection
    Then the selection should be removed
    And the visual indication should be removed

  Scenario: Define selection logic
    Given multiple level selections have been applied to 'Sierra Leone'
    Then the user can toggle between an 'AND' or 'OR' selection logic

  #UX/Design focused scenario, mostly to remind Joe not to forget it
  Scenario: Toggle the level selection between types AND and OR
    Given the user has made a level selection
    Then a UI control is available to change between selection modes: AND, OR
