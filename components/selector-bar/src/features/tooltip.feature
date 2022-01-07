Feature: Selector bar items can display a tooltip when hovered

    Scenario: A selector bar item shows a tooltip when hovered
        Given a selector bar item with tooltip content is rendered
        When the user hovers that item
        Then a tooltip should be displayed

    Scenario: A selector bar item's tooltip hides when not hovering anymore
        Given a selector bar item with tooltip content is rendered
        And the user hovers that item
        When the user stops hovering that item
        Then a tooltip should be disappear

    Scenario: No tooltip is shown
        Given a selector bar item with no tooltip content is rendered
        When the user hovers that item
        Then no tooltip should be displayed
