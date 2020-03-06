Feature: When loading children fails a loading error should be shown

    Due to the asynchronous nature of the tree, loading children
    can fail at any given time. An appropriate error message should
    be displayed when this happens

    The error does not show automatically until a node's
    children should be displayed.
    This behavior can be changed to expand the node immediately
    when the loading process fails.

    Scenario: Loading the children of the root unit fails and error should not be auto expanded
        Given loading errors do not display automatically and loading A0000000001's children will fail
        And the OrganisationUnitTree is closed
        When the A0000000000 path is opened
        Then no error message is shown
        When the A0000000000 -> A0000000001 path is opened
        Then an appropriate error message is shown

    Scenario: Loading the children of the root unit fails and error should be auto expanded
        Given loading errors display automatically and loading A0000000001's children will fail
        And the OrganisationUnitTree is closed
        When the A0000000000 path is opened
        Then an appropriate error message is shown
