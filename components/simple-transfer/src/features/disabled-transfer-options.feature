@component-simple-transfer @disabled-options
Feature: Options can be disabled


    Scenario: The user clicks the 'move all to picked list' button with disabled options in the source list
        Given a source list that contains at least one disabled option and at least one enabled option
        When the user clicks the 'move all to picked list' button
        Then the disabled options are not transferred to the picked list
        And the enabled options are transferred to the picked list

