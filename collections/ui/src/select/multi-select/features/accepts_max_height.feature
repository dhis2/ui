Feature: Setting a max-height

    Scenario: The MultiSelect does not have an explicit max-height set
        Given a MultiSelect with more than ten options is rendered
        And the MultiSelect is open
        Then has the default max-height

    Scenario: The MultiSelect a max-height of 100px set
        Given a MultiSelect with more than three options and a 100px max-height is rendered
        And the MultiSelect is open
        Then has a max-height of 100px
