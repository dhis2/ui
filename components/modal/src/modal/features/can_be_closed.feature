Feature: The Modal has an onClose api that triggers when clicking anywhere outside the modal or on the close button

    Scenario: The user clicks on the Screencover above a top-aligned modal
        Given a top-aligned Modal with onClose handler is rendered
        When the Screencover is clicked above the modal
        Then the onClose handler is called

    Scenario: The user clicks on the Screencover below a bottom-aligned modal
        Given a bottom-aligned Modal with onClose handler is rendered
        When the Screencover is clicked below the modal
        Then the onClose handler is called

    Scenario: The user clicks on the close button
        Given a Modal with onClose handler is rendered
        When the close button is clicked
        Then the onClose handler is called
