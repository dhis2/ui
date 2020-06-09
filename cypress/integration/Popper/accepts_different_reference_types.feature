Feature: Accept different reference types

    Scenario: Accepts a React Ref
        Given a Popper with placement bottom-start has a React Ref as its reference
        Then the top of the popper is adjacent to the bottom of the reference element
        And the left of the popper is aligned with the left of the reference element

    Scenario: Accepts a DOM node
        Given a Popper with placement bottom-start has a DOM node as its reference
        Then the top of the popper is adjacent to the bottom of the reference element
        And the left of the popper is aligned with the left of the reference element

    Scenario: Accepts a virtual element
        Given a Popper with placement bottom-start has a virtual element as its reference
        Then the top and left of the popper correspond with the virtualElement

