Feature: List item parsing

  Scenario: Valid unordered list
    Given there is a string with content
      """
      - one
      - two
      - three
      """
    Then the parsed text will be rendered as "<ul><li>one</li><li>two</li><li>three</li></ul>"

  Scenario: Invalid unordered list
    Given there is a string with content
      """
      -one
      -two
      -three
      """
    Then the parsed text will be rendered as "<p>-one -two -three</p>"

  Scenario: Invalid list item inside unordered list
    Given there is a string with content
      """
      - one
      -two
      - three
      """
    Then the parsed text will be rendered as "<ul><li>one -two</li><li>three</li></ul>"

  Scenario: Valid ordered list
    Given there is a string with content
      """
      1. one
      2. two
      3. three
      """
    Then the parsed text will be rendered as "<ol><li>one</li><li>two</li><li>three</li></ol>"

  Scenario: Ordered list with offset start
    Given there is a string with content
      """
      22. one
      23. two
      24. three
      """
    Then the parsed text will be rendered as "<ol start='22'><li>one</li><li>two</li><li>three</li></ol>"

  Scenario: Invalid ordered list
    Given there is a string with content
      """
      1.one
      2.two
      3.three
      """
    Then the parsed text will be rendered as "<p>1.one 2.two 3.three</p>"

  Scenario: Invalid ordered list item inside ordered list
    Given there is a string with content
      """
      1. one
      2.two
      3. three
      """
    Then the parsed text will be rendered as "<ol><li>one 2.two</li><li>three</li></ol>"

  Scenario: Mixed list item types
    Given there is a string with content
      """
      - one
      2. two
      - three
      """
    Then the parsed text will be rendered as "<ul><li>one</li></ul><ol start='2'><li>two</li></ol><ul><li>three</li></ul>"
