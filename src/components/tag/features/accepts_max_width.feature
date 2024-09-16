Feature: The Tag's max-width can be overwritten

    Scenario: A Tag has a default max width
        Given a tag with the default max width and enough content to fill it completely is rendered
        Then the width of the tag should be exactly the max width

    Scenario: A Tag has a custom max width
        Given a tag with a max width and enough content to fill it completely is rendered
        Then the width of the tag should be exactly the max width
