Feature: Defined paths can be opened from the start

  When initially rendering, all levels will be closed.
  Sometimes it's useful to open some paths right from the beginning.
  The organisation unit should be able to accept a list of paths that 
  will be opened initially 

  Scenario: Displaying an organisation unit tree with no initially opened levels
    Given the organisation unit tree is rendered for the first time
    And no initially opened levels are provided
    Then the root level should be closed

  Scenario: Displaying an organisation unit tree with one initially opened level
    Given the organisation unit tree is rendered for the first time
    And some initially opened levels are provided
    Then all levels and their paths should be opened
