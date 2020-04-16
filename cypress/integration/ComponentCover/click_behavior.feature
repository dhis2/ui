Feature: The ComponentCover has configurable click behaviour

    Scenario: A non-blocking ComponentCover
        Given a ComponentCover with pointerEvents none and a button below it is rendered
        When the user clicks the button
        Then the onClick handler of the button is called

    Scenario: A blocking ComponentCover
        Given a ComponentCover with a button below it is rendered
        When the user clicks on the button coordinates
        Then the onClick handler of the button is not called

    Scenario: A blocking ComponentCover with an onClick handler
        Given a ComponentCover with a button in it is rendered
        When the user clicks on the ComponentCover
        Then the onClick handler of the ComponentCover is called

    Scenario: Clicks orginating from children are ignored
        Given a ComponentCover with a button in it is rendered
        When the user clicks the button
        Then the onClick handler of the button is called
        But the onClick handler of the ComponentCover is not called
