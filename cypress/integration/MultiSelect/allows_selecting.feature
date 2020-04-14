Feature: Selecting options

    Scenario: The user clicks an option to select it
        Given a MultiSelect with options and onChange handler is rendered
        And the MultiSelect is open
        When an option is clicked
        Then the clicked option is selected

    Scenario: The user clicks a custom option to select it
        Given a MultiSelect with custom options and onChange handler is rendered
        And the MultiSelect is open
        When an option is clicked
        Then the clicked option is selected

    Scenario: The user clicks another option to select it
        Given a MultiSelect with options, a selection and onChange handler is rendered
        And the MultiSelect is open
        When another option is clicked
        Then the clicked option is selected as well

    Scenario: The user clicks an option to deselect it
        Given a MultiSelect with options, a selection and onChange handler is rendered
        And the MultiSelect is open
        When the selected option is clicked
        Then the selected option is deselected

    Scenario: The user clicks a chip's X to deselect it
        Given a MultiSelect with options, a selection and onChange handler is rendered
        When the chip's X is clicked
        Then the selected option is deselected

    Scenario: The user clicks a disabled option
        Given a MultiSelect with a disabled option and onChange handler is rendered
        And the MultiSelect is open
        When the disabled option is clicked
        Then the onchange handler is not called

    Scenario: The user clicks an option twice to select and deselect it
        Given a MultiSelect is rendered to which options can be added
        And the MultiSelect is open
        When an option is clicked
        Then the clicked option is selected
        When the selected option is clicked again
        Then the previously selected option is deselected
