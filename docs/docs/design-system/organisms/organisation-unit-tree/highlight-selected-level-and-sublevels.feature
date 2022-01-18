Feature: Highlight selected level and sublevels

  To be able to differentiate a unit and its descendants,
  the user should be able to select a unit which will
  then be highlighted visually

  Scenario: The user highlights the whole subtree of an org unit
    Given the user clicks on the org unit name
    When the org unit hasn't been highlighted yet
    Then the org unit and its whole subtree is highlighted

  Scenario: The user clicks on the label of a deselected, highlighted org unit
    Given the user clicks on the org unit name
    And the org unit hasn't been selected
    When the org unit has been highlighted yet
    Then the org unit is selected

  Scenario: The user clicks on the label of a selected, highlighted org unit
    Given the user clicks on the org unit name
    And the org unit has been selected
    When the org unit has been highlighted yet
    Then the org unit is deselected

  Scenario: The user clicks on the checkbox of an org unit in the sub tree
    Given an org unit has been highlighted
    When the user clicks on the checkbox of an org unit in the sub tree
    Then the already highlighted org unit stays highlighted

  Scenario: The user clicks on the label of an org unit in the sub tree
    Given an org unit has been highlighted
    When the user clicks on the label of an org unit in the sub tree
    Then the previously highlighted org unit is not highlighted
    And the clicked org unit and its sub tree is highlighted
