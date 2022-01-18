Feature: Multiple root organisation units

  # @TODO: Find a good explanation for this

  Scenario: An organisation unit tree renders one or more root units
    Given the organisation unit tree is provided with <amount> root IDs
    Then there are <amount> root units displayed

    Example:
      | amount |
      |    1   |
      |    5   |
      |   10   |
