Feature: The Layer has configurable click behaviour

    Scenario: A blocking layer
        Given a Layer with a button below it is rendered
        When the user clicks on the button coordinates
        Then the onClick handler of the button is not called

    Scenario: A blocking layer with an onClick handler
        Given a Layer with a button in it is rendered
        When the user clicks on the layer
        Then the onClick handler of the layer is called

    Scenario: Clicks orginating from children are ignored
        Given a Layer with a button in it is rendered
        When the user clicks the button
        Then the onClick handler of the button is called
        But the onClick handler of the layer is not called
