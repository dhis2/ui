Feature: The source and picked lists can have a loading state

    Scenario Outline: A list is loading
        Given the <type> list is loading
        Then the loading indicator should be shown

        Examples:
            | type   |
            | source |
            | picked |

    Scenario Outline: A list is not loading
        Given the <type> list is not loading
        Then the loading indicator should not be shown

        Examples:
            | type   |
            | source |
            | picked |
