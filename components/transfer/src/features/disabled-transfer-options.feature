@component-transfer @disabled-options
Feature: Options can be disabled

    Scenario: The user clicks a disabled option
        Given a source list that contains a disabled option
        When the user clicks a disabled option
        Then the disabled option is not highlighted

    Scenario: The user double clicks a disabled option
        Given a source list that contains a disabled option
        When the user double clicks a disabled option
        Then the disabled option is not transferred to the picked list

    Scenario: The user clicks the 'move all to picked list' button with disabled options in the source list
        Given a source list that contains at least one disabled option and at least one enabled option
        When the user clicks the 'move all to picked list' button
        Then the disabled options are not transferred to the picked list
        And the enabled options are transferred to the picked list

    Scenario Outline: The user CMD/CTRL+clicks a disabled item with other items highlighted
        Given a source list that contains at least one disabled option and at least one enabled highlighted option
        When the user clicks the disabled item with "<type>"
        Then the disabled option is not highlighted
        And the previously highlighted items are still highlighted

        Examples:
            | type |
            | ctrl |
            | cmd  |

    Scenario: The user SHIFT+clicks a disabled item with other items highlighted
        Given a source list that contains at least one disabled option and at least one enabled highlighted option
        When the user SHIFT+clicks the disabled item
        Then the disabled option is not highlighted
        And only the previously highlighted items are highlighted

    Scenario: The user SHIFT+clicks to select a range of options that include a disabled option
        Given a source list that contains at least one disabled option and several enabled options
        When the user clicks an enabled option
        And SHIFT+clicks another enabled option, including a disabled item in the range of options
        Then the enabled options in the range are highlighted
        And the disabled option is not highlighted
