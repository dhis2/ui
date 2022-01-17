Feature: Org unit node context menu

  Scenario: The user hovers a not disabled org unit
    Given the user hovers an org unit
    When the org unit is not disabled
    When the user clicks on the context menu icon
    Then a context menu should open
    And the context menu is anchored to the the context menu icon
    And the context menu icon displays in an active state

  Scenario: The context menu icon is hidden by default
    Given the user does not hover an org unit
    Then the context menu icon is hidden
