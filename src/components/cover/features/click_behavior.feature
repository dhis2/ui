Feature: The Cover has configurable click behaviour

    Scenario: A blocking Cover
        Given a Cover with a button below it is rendered
        When the user clicks on the button coordinates
        Then the onClick handler of the button is not called

    Scenario: A blocking Cover with an onClick handler
        Given a Cover with a button in it is rendered
        When the user clicks on the Cover
        Then the onClick handler of the Cover is called

    Scenario: Clicks orginating from children are ignored
        Given a Cover with a button in it is rendered
        When the user clicks the button
        Then the onClick handler of the button is called
        But the onClick handler of the Cover is not called
