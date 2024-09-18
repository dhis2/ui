Feature: The FileListItem accepts cancel text

    Scenario: A FileListItem with cancel text
        Given a loading FileListItem with onCancel handler and cancelText is rendered
        Then the cancelText will be visible
