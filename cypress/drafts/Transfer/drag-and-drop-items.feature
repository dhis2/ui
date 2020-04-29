Feature: Drag and drop selected items

    Background:
        Given reordering is enabled

    # I have excluded any design information from this scenario: opacity, how the items look when dragging etc.
    Scenario: The user clicks, drags and drops a single item
        Given the selected list has two or more items
        When the user clicks and drags a single item
        Then the item should be removed from its original position in the list
        And the item should be placed in the list at the cursor position when the click is released

    Scenario: The user clicks, drags and drops multiple items
        Given the selected list has three or more items
        And the selected list has two or more highlighted items
        When the user clicks and drags one of the highlighted items to a new position
        Then the items should be removed from their original positions
        And the items should be placed in the list at the cursor position when the click is released
        And the items should be ordered based on their previous ordering

    Scenario: The user clicks, drags and drops a single item in a list of one
        Given the selected list has one item
        And the selected list has one highlighted item
        When the user clicks, drags and drops the highlighted item
        Then the highlighted item should remain in position and shouldn't not move


    # an attempt to outline how multiple items reorder on drag and drop
    Scenario Outline: The user clicks and drags multiple items
        Given the selected list has items: <items>
        And the <highlight> items are highlighted
        When the user clicks and drags on one of the highlighted items
        And releases the click after the <drop> position of the list
        Then the new order of the items should be <newOrder>

        Examples:
        | items               | highlight | drop   | newOrder               |
        | 1, 2, 3 , 4, 5      | 2, 4,     | fourth | 1, 3, 2, 4 , 5         |
        | 1, 2, 3, 4, 5, 6, 7 | 1, 8      | third  | 2, 3, 1, 8, 4, 5, 6, 7 |
