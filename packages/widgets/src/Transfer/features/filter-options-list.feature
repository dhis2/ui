@component-transfer @filtering
Feature: Filter options list

    Background:
        Given filtering is enabled
        And the options list is being filtered

    Scenario: Filtering with results
        Given the result is not empty
        Then all the matching items should be shown in the options list

    Scenario: Filtering without results
        Given the result is empty
        Then no items should be shown in the options list

    Scenario: Displaying no-result message
        Given the result is empty
        And a no-result message has been provided
        Then information should be displayed that no items matched the filter

    Scenario Outline: Filter shows result regardless of uppercase and lowercase
        Given the options are being search with a "<firstCase>" search term
        And some options are listed
        When the user uses the same search term but "<secondCase>"
        Then the same options should be shown

        Examples:
            | firstCase | secondCase |
            | uppercase | lowercase  |
            | lowercase | uppercase  |

    Scenario: The app defines a custom filtering method
        Given the filter function only returns ANC options
        When searching for "s"
        Then only the results including the word "ANC" are included

    Scenario: The filter value can be controlled by the app
        Given the filter value is controlled by the component's consumer
        When the filter value changes
        Then the onFilterChange callback will be called with the new value
