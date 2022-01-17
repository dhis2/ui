Feature: Show search results in hierarchy

  Scenario: Show all already displayed units while search term is empty on focus
    Given the user focuses the search input field
    Given the user has not typed anything yet
    Then all previously visible organisation units are still displayed

  Scenario: Search result is loading
    Given the user has entered a search term
    When the results are being loaded
    Then all organisation units are hidden
    Then the loading spinner is displayed

  Scenario: Some organisation units were found
    Given the user has entered a search term
    When some organisation units were found
    Then the found units are shown
    Then the unit's path is reflected in the tree structure
    Then the unit's parents are displayed but disabled

  Scenario: No organisation units were found
    Given the user has entered a search term
    When no organisation units were found
    Then a text to inform the user is displayed