Feature: Select-able organisation units

  When enabled, users can select organisation units.
  Depending on the configuration, they can either select
  one organisation unit only or as many as they want

  Scenario: All organisation are selectable
    Given selecting all units is enabled
    When an organisation unit tree is rendered
    Then the label will contain a checkbox

  Scenario: Selecting an organisation unit when all select-able
    Given selecting all units is enabled
    When the user selects an organisation unit
    Then the oranisation unit's checkbox is checked

  Scenario: Selecting a descendant organisation unit
    Given selecting all units is enabled
    And an organisation unit has descendants
    When selecting a descendant
    Then the organisation unit is marked as indeterminate

  Scenario: Deselecting an organisation unit
    Given selecting all units is enabled
    And an organisation unit is selected
    When deselecting the organisation unit
    Then the checkbox is unchecked

  Scenario: Deselecting a descendant
    Given selecting all units is enabled
    And an organisation unit has descendants
    And a descendant is selected
    When deselecting the descendant
    Then the checkbox is unchecked
    And the organisation unit is not marked as indeterminate

  Scenario: Selecting an organisation unit when only one is select-able
    Given only one organisation unit can be selected
    When selecting an organisation unit
    Then it is displayed as selected

  Scenario: Deselecting an organisation unit when only one is select-able
    Given only one organisation unit can be selected
    And an organisation unit is selected
    When deselecting an organisation unit
    Then it is not selected

  Scenario: Selecting an organisation unit when only one is select-able while another is selected
    Given only one organisation unit can be selected
    And an organisation unit is selected
    When selecting a different organisation unit
    Then the previously selected organisation unit is not selected
