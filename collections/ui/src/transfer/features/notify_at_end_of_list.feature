Feature: The source and picked option lists notify the consumer when the end has been reached

    Scenario Outline: The list is displayed initially and the end is not visible
        Given the Transfer has enough items to fill the <type> list completely
        Then the callback for reaching the end should not be called

        Examples:
            | type   |
            | source |
            | picked |

    Scenario Outline: The list is displayed initially and the end is visible
        Given the Transfer does not have enough items to fill the <type> list completely
        Then the callback for reaching the end should be called

        Examples:
            | type   |
            | source |
            | picked |

    Scenario Outline: The user scrolls down the list to the end
        Given the Transfer has enough items to fill the <type> list completely
        When the user scroll to the end of the list
        Then the callback for reaching the end should be called

        Examples:
            | type   |
            | source |
            | picked |
