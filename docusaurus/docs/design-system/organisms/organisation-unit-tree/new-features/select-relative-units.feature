Feature: Select units relative to the user's org unit, 'relative units'

  Background:
    Given the org unit tree has relative selection enabled

  Scenario: Relative selection(s) is made
    Given the user has opened the relative selection menu
    When the user selects one or more relative units
    Then a visual indication of the selection type is presented
    And the org unit tree is disabled

  Scenario: Non-relative selections previous to relative selection are restored when relative selection is cleared
    Given the user has made several non-relative selections in the org unit tree
    And the user has made a relative selection
    When the user removes/clears the relative selection
    Then the org unit tree is enabled
    And the relative selection is cleared
    And all previous non-relative selections are restored
