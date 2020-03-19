Feature: Layers

    Scenario: Base layer z-index calculation
        Given a Layer component wraps a component
        And the prop zIndexBase is "0"
        Then the Layer renders with a z-index of "0"

    Scenario: Application top layer z-index calculation
        Given a Layer component wraps a component
        And the prop zIndexBase is "2000"
        Then the Layer renders with a z-index of "2000"

    Scenario: Blocking layer z-index calculation
        Given a Layer component wraps a component
        And the prop zIndexBase is "3000"
        Then the Layer renders with a z-index of "3000"

    Scenario: Alert layer z-index calculation
        Given a Layer component wraps a component
        And the prop zIndexBase is "9999"
        Then the Layer renders with a z-index of "9999"

    Scenario: Nested layer z-index calculation
        Given a Layer component is nested inside of another Layer component
        And the outer Layer component has a higher "<zIndexOuter>"
        And the inner Layer component has a lower "<zIndexInner>"
        Then the inner Layer renders with "<zIndexResult>"

        Example: Nested z-indexes
            | zIndexOuter | zIndexInner | zIndexResult |
            | 0 | 2000 | 2000 |
            | 2000 | 0 | 2001 |
            | 3000 | 2000 | 3001 |
            | 3001 | 2000 | 3002 |
            | 3002 | 3000 | 3003 |
