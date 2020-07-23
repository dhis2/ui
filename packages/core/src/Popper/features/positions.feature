Feature: Generic position options

    # the definition of adjacent below: having a common endpoint or border

    Scenario: Top position
        Given the Popper is rendered with placement top
        Then the bottom of the popper is adjacent to the top of the reference element
        And it is horizontally center aligned with the reference element

    Scenario: Top-start position
        Given the Popper is rendered with placement top-start
        Then the bottom of the popper is adjacent to the top of the reference element
        And it is horizontally left aligned with the reference element

    Scenario: Top-end position
        Given the Popper is rendered with placement top-end
        Then the bottom of the popper is adjacent to the top of the reference element
        And it is horizontally right aligned with the reference element

    Scenario: Right position
        Given the Popper is rendered with placement right
        Then the left of the popper is adjacent to the right of the reference element
        And it is vertically center aligned with the reference element

    Scenario: Right-start position
        Given the Popper is rendered with placement right-start
        Then the left of the popper is adjacent to the right of the reference element
        And it is vertically top aligned with the reference element

    Scenario: Right-end position
        Given the Popper is rendered with placement right-end
        Then the left of the popper is adjacent to the right of the reference element
        And it is vertically bottom aligned with the reference element

    Scenario: Bottom position
        Given the Popper is rendered with placement bottom
        Then the top of the popper is adjacent to the bottom of the reference element
        And it is horizontally center aligned with the reference element

    Scenario: Bottom-start position
        Given the Popper is rendered with placement bottom-start
        Then the top of the popper is adjacent to the bottom of the reference element
        And it is horizontally left aligned with the reference element

    Scenario: Bottom-end position
        Given the Popper is rendered with placement bottom-end
        Then the top of the popper is adjacent to the bottom of the reference element
        And it is horizontally right aligned with the reference element

    Scenario: Left position
        Given the Popper is rendered with placement left
        Then the right of the popper is adjacent to the left of the reference element
        And it is vertically center aligned with the reference element

    Scenario: Left-start position
        Given the Popper is rendered with placement left-start
        Then the right of the popper is adjacent to the left of the reference element
        And it is vertically top aligned with the reference element

    Scenario: Left-end position
        Given the Popper is rendered with placement left-end
        Then the right of the popper is adjacent to the left of the reference element
        And it is vertically bottom aligned with the reference element
