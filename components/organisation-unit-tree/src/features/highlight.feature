Feature: Units can be highlighted

    Scenario: The root unit is highlighted
        Given a OrganisationUnitTree with a highlighted root unit is rendered
        Then root unit has the highlighted styles
