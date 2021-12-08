Feature: Show amount of selected children

  It'd be difficult to know how many children of a unit 
  are selected while it's collapsed. And while the version
  with checkboxes at least displays the "indeterminate" state,
  the version in which only one unit can be selected at a time,
  it's impossible to know whether a unit has selected descendants
  or not. That's why each unit should indicate the amount of
  selected children

  Scenario: There are no descendants for a unit
    Given the unit has no selected descendants
    Then there is no indication at all

  Scenario: There are descendants for a unit
    Given the unit has <amount> selected descendants
    Then the indicator shows the number <amount>

    Examples:
      | amount |
      |    1   |
      |    5   |
      |   10   |
