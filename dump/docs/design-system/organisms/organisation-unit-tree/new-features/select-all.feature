Feature: Select or deselect all available org units

  Scenario: Select all available org units
    Given an org unit tree with multiple selection enabled
    When the user clicks 'Select all' control
    Then all selectable org units are selected

  Scenario: Deselect all available org units
    Given an org unit tree with some selected org units
    When the user clicks 'Deselect all' control
    Then all org units are deselected
