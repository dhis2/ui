Feature: Access will be disabled if the server response disables it

    Scenario: Access level control is disabled when allowPublicAccess is false
        Given a sharing dialog without public access is visible
        Then the access control for all users should be disabled
