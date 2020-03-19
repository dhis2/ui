Feature: CssVariables sets css variables

    Scenario: CssVariables with colors
        Given a CssVariables component with colors flag is rendered
        Then the colors css variables are set

    Scenario: CssVariables with theme
        Given a CssVariables component with theme flag is rendered
        Then the theme css variables are set

    Scenario: CssVariables with layers
        Given a CssVariables component with layers flag is rendered
        Then the layers css variables are set

    Scenario: CssVariables with spacers
        Given a CssVariables component with spacers flag is rendered
        Then the spacers css variables are set

    Scenario: CssVariables with elevations
        Given a CssVariables component with elevations flag is rendered
        Then the elevations css variables are set
