Feature: Recursive selection of org units

  Background:
    Given an org unit tree has recursive selection enabled

  Scenario:
    Given an org unit tree has root and descendant nodes
    When the user selects the root unit
    Then the root unit is selected
    And the descendants of the root unit are indeterminately selected
    And deselection of the descendants is disabled
