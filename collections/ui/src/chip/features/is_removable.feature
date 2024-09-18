Feature: The Chip has an onRemove api

    Scenario: The user removes the Chip
        Given a Chip with onRemove handler is rendered
        When the remove icon is clicked
        Then the onRemove handler is called
