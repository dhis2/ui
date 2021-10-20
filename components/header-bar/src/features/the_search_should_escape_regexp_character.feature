Feature: The search should escape regexp characters

    Scenario Outline: The user searches for an app with a regex character
        Given some app names contain a <char>
        And the search contains a <char>
        Then only apps with <char> in their name should be shown

        Examples:
            | char |
            | /    |
            | (    |
            | )    |
            | [    |
            | ]    |
            | {    |
            | }    |
            | *    |
            | +    |
            | ?    |
            | .    |
            | ^    |
            | $    |
            | \|   |
            | \\   |

    Scenario Outline: The modules do not contain items with special chars
        Given the HeaderBar loads without an error
        And the search contains a <char>
        And no app name contains a <char>
        Then no results should be shown

        Examples:
            | char |
            | /    |
            | (    |
            | )    |
            | [    |
            | ]    |
            | {    |
            | }    |
            | *    |
            | +    |
            | ?    |
            | .    |
            | ^    |
            | $    |
            | \|   |
            | \\   |
