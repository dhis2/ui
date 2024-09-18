Feature: The Node has an onClose api

    Scenario: The user closes the Node
        Given an open Node with an onClose handler is rendered
        When the arrow is clicked
        Then the onClose handler is called
