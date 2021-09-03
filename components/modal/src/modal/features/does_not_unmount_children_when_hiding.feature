Feature: The Modal does not unmount its children when hide is set to true

    Scenario: A counter gets increased and keeps its value
        Given a modal with a counter component is rendered
        And the counter is 0
        When the user increases the counter once
        Then the counter should be 1
        When the user hides the modal
        Then the modal should not be visible
        When the user shows the modal
        Then the modal should be visible
        And  the counter value should be one
