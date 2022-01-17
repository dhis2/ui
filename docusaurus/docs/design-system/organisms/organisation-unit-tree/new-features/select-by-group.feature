# Generic

Feature: Selection of descendant groups inside an org unit

  Background:
    Given an org unit tree with root org unit 'Sierra Leone'
    And descendants inside 'Sierra Leone' with multiple groups

  Scenario: Selection of a group inside an org unit
    When the user selects a group type from the 'Select by group' option
    Then all org units of that group are selected as a single selection
    And 'Sierra Leone' org unit visually indicates the selection made

  Scenario: Hide non-available groups
    Given the user is making a group selection
    Then only groups that are present in descendants should be available to 'Select by group'
    And only groups that the user is authorized to select should be available to 'Select by group'

  Scenario: Deselection of a group inside an org unit
    Given a group selection has been applied to 'Sierra Leone'
    When the user removes the group selection
    Then the selection should be removed
    And the visual indication should be removed

  Scenario: Define selection logic
    Given multiple group selections have been applied to 'Sierra Leone'
    Then the user can toggle between an 'AND' or 'OR' selection logic

  #UX/Design focused scenario, mostly to remind Joe not to forget it
  Scenario: Toggle the group selection between types AND and OR
    Given the user has made a group selection
    Then a UI control is available to change between selection modes: AND, OR