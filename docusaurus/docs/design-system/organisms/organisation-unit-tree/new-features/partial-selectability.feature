Feature: Org units can be disabled

  Sometimes the entire tree must be displayed but only certain units are available for selection

  Scenario: Some org units are disabled
    Given some org units are disabled
    Then the user can't select these org units
