Feature: Setting data sharing is possible when sharing dialog is set to include data sharing



    Scenario Outline: User can add a new <target> entity with specified <datalevel> data and <metadatalevel> metadata sharing
        Given a sharing dialog that allows adding user and group entities with data sharing is visible
        When the user selects a new <target> entity
        And the user chooses <metadatalevel> metadata access
        And the user chooses <datalevel> data access
        And the user clicks Give access button to give target <target> <datalevelstring> data access and <metadatalevelstring> metadata access
        Then the <target> should be added to the access list 
        And the <target> should have <metadatalevelstring> metadata access
        And the <target> should have <datalevelstring> data access
        And the autocomplete input should be cleared

            Scenarios:
            | target | datalevel         | metadatalevel | datalevelstring | metadatalevelstring |
            | user   | view only     | view only | "View only" | "View only" |
            | group   | view only     | view only | "View only" | "View only" |

# Scenario: user can change access type

    Scenario Outline: User can change the data access level from <initial> to <changed> for <target> with <metadata> metadata access
        Given a sharing dialog with <target> item with <initial> data access and <metadata> metadata access
        When the user sets the <target> data access level to <changed>, and leaves metadata as <metadata>
        Then the <target> data access control should be set to <changed>
        And the <target> metadata access control should remain <metadata>

    Scenarios:
        | target   | initial    | changed       | metadata |
        |  all users | "No access"  | "View and edit" | "No access" |
        |  user | "View only"  | "View and edit" | "No access" |
        |  group | "View and edit"  | "View only" | "View only" |


# Scenario: user can remove access from data access select if metadata is No access

    Scenario Outline: User can remove access for a <target> if metadata access is No access and data access is <data-access-level>
        Given a sharing dialog with <target> item with <data-access-level> data access and "No access" metadata access
        When the user clicks to remove the access for the <target> from the "Data" access select
        Then the <target> item should be removed

    Scenarios:
        | target | data-access-level |
        | user   | "View only"          |
        | group   | "View only"          |

# Scenario: user can remove access from metadata access select if data is No access
    Scenario Outline: User can remove access for a <target> if data access is No access and metadata access is <metadata-access-level>
        Given a sharing dialog with <target> item with "No access" data access and <metadata-access-level> metadata access
        When the user clicks to remove the access for the <target> from the "Metadata" access select
        Then the <target> item should be removed

    Scenarios:
        | target | metadata-access-level  |
        | user   | "View only"          |
        | group   | "View and edit"          |

# Scenario: user cannot remove access from Data access level by if <data-access-level> and <metadata-access-level> are both not No access

    Scenario Outline: User cannot remove access for a <target> from Data access when metadata access is set to something other than No access
        Given a sharing dialog with <target> item with <data-access-level> data access and <metadata-access-level> metadata access
        Then the <target> "Data" access level options do not contain Remove access

    Scenarios:
        | target | data-access-level | metadata-access-level  |
        | user   | "View only"          | "View only" |
        | group   | "View and edit"          | "View only" |

# Scenario: user cannot remove access from Data access level for all users

    Scenario Outline: User cannot remove access for all users
        Given a sharing dialog with <target> item with <data-access-level> data access and <metadata-access-level> metadata access
        Then the <target> "Data" access level options do not contain Remove access

    Scenarios:
        | target | data-access-level | metadata-access-level  |
        | all users   | "No access"          | "No access" |

# Scenario: user can remove access from data access level by first setting metadata to No Access

    Scenario Outline: User can remove access for a <target> from data access when metadata access is set to No access
        Given a sharing dialog with <target> item with <data-access-level> data access and <metadata-access-level> metadata access
        When the user sets the <target> metadata access level to No access and leaves data access as <data-access-level>
        And the user clicks to remove the access for the <target> from the <type> access select
        Then the <target> item should be removed

    Scenarios:
        | target | data-access-level | metadata-access-level  | type |
        | user   | "View only"          | "View only" | "Data" |
        | group   | "View only"          | "View and edit" | "Data" |
