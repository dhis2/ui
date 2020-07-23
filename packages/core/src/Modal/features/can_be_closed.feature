Feature: The Modal has an onClose api

    Scenario: The user clicks on the Screencover
        Given a Modal with onClose handler is rendered
        When the Screencover is clicked
        Then the onClose handler is called
