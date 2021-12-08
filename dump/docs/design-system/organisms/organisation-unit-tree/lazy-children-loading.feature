Feature: Loading children lazily when opening a level

  Some organisation unit trees can contain thousands of units.
  In order to reduce the network workload, children's details
  will be loaded only once the children's level is opened

  Scenario: Level is closed and has never been opened
    Given a level is closed
    And has never been opened
    Then no children will be rendered

  Scenario: Level is opened for the first time
    Given a level is closed
    And has not been opened yet
    When the level is opened
    Then the data for the children is be loaded
    And an organisation unit tree should be rendered for each child

  # Caching of previously loaded children
  # =====================================

  # Scenario: Level is opened again
  #   Given a level is closed
  #   And was previously opened
  #   When the level is opened
  #   Then no data for the children is loaded
  #   And an organisation unit tree should be rendered for each child

  # Scenario: Level os opened again with force-reload
  #   Given a level is closed
  #   And was previously opened
  #   When the level is opened
  #   And force-reload is set to true
  #   Then the data for the children should be loaded
  #   And an organisation unit tree should be rendered for each child
