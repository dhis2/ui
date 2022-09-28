# Design documentation

## Managers etc...

## Recursive Structure:

-   `OrganisationUnitTree` maps over (root) `Node`s
    -   `OrganisationUnitNode`
        -   `OrganisationUnitNodeLabel`
            -   `OrganisationUnitNodeToggler`
            -   `OrganisationUnitNodeSelector`
            -   `OrganisationUnitNodeIcon`
            -   `OrganisationUnitNodeText`
        -   `OrganisationUnitNodeChildren` maps over child nodes (recursion)

## Components

-   `OrganisationUnitTree`
    -   Renders the root nodes in a `ul` element
    -   Accepts the following props from the outside
        -   `onChange`
        -   `rootIds`
        -   `filteredString`
        -   `openedPaths`
        -   `filteredPaths`
        -   `selectedIds`
        -   `singleSelection`
    -   And the following should be returned from the hook:
        -   `error`
        -   `isLoading`
        -   `isFetching`
-   `OrganisationUnitNode`
    -   Just a simple container, a `li` element
-   `OrganisationUnitNodeLabel`
    -   Has an `id` prop to find the correct node in the manager.
    -   Gets all other state via the `useOrganisationUnitNode` hook.
    -   Passes these props down to its children.
-   `OrganisationUnitNodeToggler`
    -   Has an `isLeafNode` prop to show an empty space
    -   Has an `isOpen` prop to show opened VS closed.
    -   Has a `isLoading` prop to show spinner instead of chevron icon.
-   `OrganisationUnitNodeSelector`
    -   Has a `disabled` prop to disable the input
    -   Has a `hasSelectedDescendant` to indicate if any of the node's descendants are selected. If this is the case an _indeterminate_ selected state is displayed.
    -   Has a `isSelected` prop to indicate if the node is selected. Both `selected` and `hasSelectedDescendant` can simultaneously be `true` (if the node itself is selected and it also has selected descendants). If this happens, the `selected` state should be displayed.
    -   Has a `singleSelection` prop to switch from multi-selection (default) to single selection. Both selection modes correspond with their own `input` element, i.e. `checkbox` and `radio`.
    -   Note that there are effectively 3 selection _states_ (unselected, indeterminate, selected) and 2 selection _modes_ (single, multi), and each permutation has a unique UI, so this component has 6 distinct states
-   `OrganisationUnitNodeIcon`
    -   Has an `isLeafNode` prop to indicate the node does not have children and should show a dot.
    -   Has an `isOpen` prop to indicate if the component should show the opened or closed icon.
-   `OrganisationUnitNodeText`
    -   Has a `disabled` prop to grey out the text
    -   Has a `displayName` prop with the name of the org-unit
    -   Has an `isFilterMatch` prop for highlighting the entire string
    -   Has a `filteredString` prop for substring highlighting (on top of highlighting the whole text)
-   `OrganisationUnitNodeChildren`
    -   Has a `visibleChildrenIds` prop to display the correct children
    -   Has a `shouldShowLoadMore` prop to determine if an element should be displayed to fetch the siblings. This should only have a value of `true` if `childrenCount < this._children.size && !isLoading`
    -   Has an `error` prop to display load errors

## Hooks

-   `useOrganisationUnitTreeManager`, requires no arguments and returns the manager
-   `useOrganisationUnitTree`, requires all arguments from the component and returns:
    -   `error`
    -   `isLoading`
    -   `isFetching`
    -   `organisationUnitTreeManager`
-   `useOrganisationUnitNode`, requires an `id` and returns:
    -   `displayName`
    -   `hasSelectedDescendant`
    -   `isFilterMatch`
    -   `isLeafNode`
    -   `isLoading`
    -   `isOpen`
    -   `isSelected`
    -   `filteredString`
    -   `singleSelection`
    -   `toggleOpen`
    -   `toggleSelected`
-   `useOrganisationUnitChildren`, requires an `id` and returns:
    -   `visibleChildrenIds`
    -   `shouldShowLoadMore`
    -   `error`

## Random todo's:

-   See if we can memoize some of the outer components
-   Pass more components and classes to the provider/manager so that more things can be customised
