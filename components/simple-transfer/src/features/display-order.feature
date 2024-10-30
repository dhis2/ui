@component-transfer @display-ordering
Feature: Display order of items in lists

    Scenario: All supplied options are rendered in the options-side
        Given none of the supplied options have been selected
        Then the order of the selectable options should match the order of the supplied options

    Scenario: Some of the supplied options have been selected
        Given some of the supplied options have been selected
        Then the order of the remaining selectable options should match the order of the supplied options

    Scenario: A single selected options is deselected
        Given some of the supplied options have been selected
        When the user deselects one selected option
        Then it should be positioned according to the order of the supplied options

    Scenario: Multiple selected options are deselected
        Given some of the supplied options have been selected
        When the user deselects multiple selected options
        Then all should take the position according to the order of the supplied options

    Scenario: An selectable option gets selected
        Given some selectable options are selectable
        When the user selects one option
        Then it should be added to the end of the selected options list

    Scenario: Multiple selectable options get selected
        Given some selectable options are selectable
        When the user selects multiple options
        Then they should be added to the end of the selected options list in the order they have been highlighted
