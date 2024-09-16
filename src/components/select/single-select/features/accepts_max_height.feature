Feature: Setting a max-height

    Scenario: The SingleSelect does not have an explicit max-height set
        Given a SingleSelect with more than ten options is rendered
        And the SingleSelect is open
        Then has the default max-height

    Scenario: The SingleSelect a max-height of 100px set
        Given a SingleSelect with more than three options and a 100px max-height is rendered
        And the SingleSelect is open
        Then has a max-height of 100px
