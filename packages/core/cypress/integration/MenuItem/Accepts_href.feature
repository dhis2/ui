Feature: The MenuItem accepts a href prop

    Scenario: A MenuItem with href
        Given a MenuItem with href is rendered
        Then a link is rendered with the href
