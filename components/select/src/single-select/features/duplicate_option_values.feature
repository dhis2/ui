Feature: Duplicate option values result in a conflict between the input and dropdown UI

    Scenario: The SingleSelect has options with a duplicate value and this value is selected
        Given a SingleSelect with options with a duplicate value and this value is selected
        And the SingleSelect is open
        Then the first option with the selected value is displayed in the input
        But both options are highlighted in the dropdown
