Feature: List of all selections in tree, <list>

  Scenario: Display selected org units in <list>
    Given that the org unit tree has selectable single units
    When a user selects an org unit
    Then the selected org unit is displayed by name in <list>

  Scenario: Display selected groups/levels in <list>
    Given that the org unit tree has selectable groups/levels enabled
    When a user selects an <orgunit>'s <group> or <level>
    Then the selected group is displayed in list, formatted '<group/level> in <org unit>'

  Scenario: Clear selection from <list>
    Given that a selection is made in an org unit tree
    When a user clicks the 'Clear selection' control in <list>
    Then all org units in the tree are deselected
