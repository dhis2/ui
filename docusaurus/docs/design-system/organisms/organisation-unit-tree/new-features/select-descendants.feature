Feature: Explicitly select individual descendant org units inside another org unit

Background:
  Given an org unit tree with root org unit 'Sierra Leone'
  And descendants inside 'Sierra Leone' with multiple groups and levels

  Scenario: Selecting all org units of a certain group or level inside another org unit
    When the user selects a group or level inside the root org unit
    Then all org units of the chosen group or level inside 'Sierra Leone' are selected individually
    And a visual indication of the number of selections made is temporarily displayed

  Scenario: Hide non-available groups and levels
    Given the user is making a selection
    Then only groups and levels that are present in the org unit tree should be available to select
    And only groups and levels that the user is authorized to select should be available to select
