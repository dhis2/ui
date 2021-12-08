Feature: Search the organisation unit matching the search term

  Scenario: Search with results
    Given the user searches the organisation unit tree
    When the result is not empty
    Then all found units will be shown
    And the found units will highlight the searched term inside the result name

  Scenario: Search without results
    Given the user searches the organisation unit tree
    When the result is empty
    Then no units will be shown
    And the user is notified that no units were found

  Scenario: Search result contains units in sub tree
    Given the user searches the organisation unit tree
    When the result contains a unit in the sub tree
    Then then all units in the path will be shown

  Scenario: Tree contains units not in the result or a result's path
    Given the user searches the organisation unit tree
    When the organisation unit tree contains node not in the result
    And the nodes are not in the path of a result
    Then the node is not shown
