Feature: The Node has an onOpen api

    Scenario: The user opens the Node
        Given a closed Node with an onOpen handler is rendered
        When the arrow is clicked
        Then the onOpen handler is called
