# Design documentation

## Requirements

The following requirements have been identified in the fields of performance, functionality and extensibility.

### Minimise network traffic

The previous version of the organisation unit tree in `@dhis2/ui` does too many requests to render the nodes it displays. It also doesn't cache the previously requested items. Nor does it pre-fetch the _offline units_, as the original organisation unit tree in struts did. For instances with a large collection of organisation units the combination of these three factors can put so much strain on the server that it crashes.

### Minimise re-renders

For instances with a large collection of organisation units, the organisation unit tree can be very heavy on the browser. Most of the time operations that change the tree only affect a few nodes, but in the previous version of the organisation unit tree in `@dhis2/ui` all nodes re-rendered all the time. There have been reports of browser crashes.

### Enable tree based operations

Some requested features such as searching/filtering, recursive selection, etc. are hard to implement in the architecture of the previous version of the organisation unit tree in `@dhis2/ui`, because this relies pretty much exclusively on recursion. This allows for a pretty clean implementation, but because there isn't a single entity that represents the entire tree it makes implementing these new features difficult.

### Allow extensibility

Because of the recursive structure of a hierarchical tree, our normal composition based approach is not a good fit. Some efforts were made to allow customisation of the label component and this proved very useful, so this approach should be available for all components. But this is mainly related to the UI and what happens within the node label. On top of that it should also be possible to customise and/or extend the behaviour of the tree.

## Design decisions

Based on the requirements the following design decisions have been made.

### Introduce a tree manager

By having a single entity in place that is able to manipulate and query the tree we set the stage for addressing all requirements mentioned above. The tree manager can:

-   _Minimise network traffic_ by storing all the fetched nodes and only reaching out to the server to fetch nodes that are not available yet.
-   _Minimize re-renders_ by computing which nodes are actually affected by a particular change and only updating those.
-   _Enable tree based operations_ and _allow extensibility_ by providing a imperative API to the organisation unit tree.

### Implement subscription-based state updates

State in a React component hierarchy flows downwards, but common node changes in an organisation tree propagate upwards. In particular this applies to selecting and filtering nodes. When a child node is selected all of its ancestors should become partially selected. Similarly, when a node is exposed by some filter condition all its ancestor nodes need to show too. And interestingly, when a sibling node is selected/filtered, since the original node and its sibling share the same ancestors, no changes in the ancestor nodes would actually be required. See the image below for a graphical representation:

![Organisation tree selection update](./tree-update.png 'Organisation tree selection update')

What we see here is that initially item `1.1.2.1` was the only selected item (left). Subsequently `1.1.1.1` was selected as well (right). Since item `1` and item `1.1` are shared ancestors of both selected items, they already have the correct state and they don't need a re-render. Item `1.1.1.1` should become selected and `1.1.1` should switch to an _indeterminate_ selected state, so they _should_ re-render.

The above should illustrate that the organisation tree can benefit greatly from _granular re-renders_ and a subscription based state update mechanism is a good way to accomplish that.

### Separate the node component into a node-label and node-children component

When studying the image above in more detail, we can observe another interesting phenomenon: when item `1.1.1.1` became selected it needed to re-render. As a result, its parent-item `1.1.1` needed to rerender too.

If a node would be a single component containing both the label and the children list, that would mean re-rendering all the children too. However, none of the siblings of item `1.1.1.1` actually have any changes to display so these re-renders are completely useless. Since the items in this example are _leaf nodes_, this doesn't matter a lot, but if they had several levels of descendants showing, this would mean the re-renders would prop\agate all the way down the tree until they finally reached the leaf nodes.

By implementing the node-label and the node-children as separate components and having both subscribe to a separate change in the node manager, it becomes possible to prevent this unnecessary downwards propagation. In the case described above, the label would be notified and it would re-render, but the child list would not receive a notification and it would not re-render. The selected child will also receive a notification that it needs to update itself to a selected state. So two nodes have changed and 2 nodes are re-rendered.

### Comparing old and new state to detect which nodes need an update

_**NOTE 05-04-2023:<br/>I am not sure about this part of the current implementation, since it adds a lot of complexity, and its not clear if there is a positive trade-off between this added complexity and the benefits it brings.**_

Another pattern can be observed, which applies to all "path based operations" (opening, selecting and filtering), but is most noticeable and easiest to explain when considering how we show a filtered tree state. The tree can be instructed to show a filtered tree by providing a `filteredPaths` prop, which is an array or paths where each path represents an organisation unit and its ancestors like so `/rootId/grandparentId/parentId/unitId`. When analysing an array of paths, the IDs in any of the paths closer towards the root node are more likely it to also be found in another path. In fact, in a single-rooted tree all paths will start with the same root node ID. In the proceeding text this phenomenon will be referred to as _path overlap_.

So when dealing with an array of paths, it makes sense to first consolidate then into a single entity where overlapping nodes are deduplicated, and then process changes for each node once. What this "single entity" looks like exactly differs slightly per use-case, but both the selection and filtering implementation are based on the same `AncestorMap` class, which extends the built-in `Map` class, where each key represents an ancestor ID and each value is a `Set` of IDs of either children or descendants.

A loosely related pattern can be observed when considering the transition between an initial filtered tree state to a new one, by providing a different array of paths to the `filteredPaths` prop:

-   Some paths may be present in the initial and the new paths, which should trigger no updates to the tree UI.
-   Others paths may be present in the initial array but not in the new one. These are _deletions_: filtered paths currently displayed in the UI that should become hidden.
-   And inversely, some paths may not be present in the initial array but they are in the new one. These are _additions_: new filtered paths to show in the UI.
-   The effects of _deletions_ can be cancelled out by _additions_. The simplest way to explain this if we consider a transition from a single initial path to a single new path where the nodes are direct siblings. Since these siblings have all the ancestors in common, the ancestor state before and after the state transition is completely identical. The only thing that needs to be updated is the children list of the parent.

Trying to incorporate all of the information above, the nodes that need to be updated are currently identified by the following (complex) process:

1. Compare initial and new paths to compute additions and deletions.
1. Compute new ancestor map by cloning the initial one and applying the additions and deletion.
1. Compare initial ancestor map with the new one and compute the node-IDs of the node-labels and/or node-children that need to be updated and which unit IDs need to be fetched.
1. Fetch unavailable units and add them to the tree.
1. Notify all node relevant nodes to update the UI.

### Wrap the tree in a provider

The organisation unit tree manager needs to live somewhere and in the React ecosystem a provider seems like an appropriate place to keep it. This is convenient for the internal implementation, because it offers for deeply nested components to directly access the manager and avoid passing props down across several layers of components.

Developers who would like to extend or build customised version of the organisation unit tree should also be able to tap into the manager using the provider.

### Introduce an `OrganisationUnitNode` class

The manager should be able to traverse the tree in any direction (upwards, downwards and sideways). Having a notion of a node with parents and children can help with that. It is also convenient to let the node provide the node-level React hooks with the correct state. The choice to implement this is a class is to do with the fact that we can expect many nodes and a class can offer performance benefits because the methods are shared via the prototype.

### Rely on `Set` and `Map` based data structures

Nodes will request their state from the manager. This often includes checking if the node's ID is present in a list of IDs. The `Set` and `Map` data type are much more performant than arrays for finding, adding and deleting items. On top of that, they also offer an ergonomic API for these types of operations.

## Architecture

Combining all the design decisions above we end up with the following moving parts, which are all exposed to allow customisation and extension:

-   The organisation unit tree **manager** encapsulates all the internal state of the tree, and orchestrates which units need to be fetched from the server. This manager is completely framework independent and has an imperative API.
-   The tree hierarchy/nesting is implemented via a set of **nodes** which can be traversed. The manager's state also includes a set of _root nodes_ which are used as starting points for the traversal.
-   A set of **hooks** represent the bindings to React components. They contain very little logic and there are two distinct types:
    -   `MANAGER -> REACT` Hooks that subscribe to events in the tree or in a node and update their internal state based on these changes
    -   `REACT -> MANAGER` Hooks that respond to prop changes and imperatively update the manager based on these changes
-   An `OrganisationUnitTree` and `OrganisationUnitTreeProvider` **component** which sit at the core of the implementation. Since these components cannot be overridden they contain no styling and very little logic. To allow extending the organisation unit tree, a small trick has been done:
    -   The `OrganisationUnitTree` wraps itself in the `OrganisationUnitTreeProvider`
    -   The `OrganisationUnitTreeProvider` itself uses to `useOrganisationUnitTreeManager` hook and does the following:
        -   If the hook returns an instance of the manager, this means the provider is itself is already wrapped in a provider 🤯, and it will pass that manager instance to its `value` prop.
        -   If the hook does not return a manager instance, then this means it is not wrapped in provider. In this case, a new manager instance needs to be created and passed to the `value` prop
    -   Since the manager is created by the provider, but props are passed to the component, we ended up with a slightly quirky implementation where the `useOrganisationUnitTree` hook has to call `manager.init()` with the props provided to the `OrganisationUnitTree` to actually initialise the tree correctly.
    -   As a result of the above you can either use the `OrganisationUnitTree` as a regular component, but you can also wrap it plus some additional components in an `OrganisationUnitTreeProvider` to extend it (see examples TODO: add link).
-   Various UI **components** which all represent an isolated part of the UI and contain very little logic, so it should be easy to apply small customisations

## Extending and customising

As mentioned in the preceding text, the organisation unit tree was designed to both be a standard component that can be used as any other, but it can also be used to conveniently build one of the following:

-   A custom organisation unit component
-   A bigger component that contains an organisation unit tree
-   A component that does not even include an organisation unit tree but does rely on the logic provided by the manager

What follows is an in-depth explanation of the various ways the organisation unit component can be extended/customised.

### Customising components

The `OrganisationUnitTreeProvider` accepts the following props:

-   `organisationUnitNodeChildrenComponent`
-   `organisationUnitNodeChildrenErrorComponent`
-   `organisationUnitNodeIconComponent`
-   `organisationUnitNodeLabelComponent`
-   `organisationUnitNodeSelectorComponent`
-   `organisationUnitNodeSiblingsTogglerComponent`
-   `organisationUnitNodeTextComponent`
-   `organisationUnitNodeTogglerComponent`
-   `organisationUnitNodeComponent`
-   `organisationUnitRootContainerComponent`
-   `organisationUnitRootErrorComponent`
-   `organisationUnitRootFetcherComponent`
-   `organisationUnitRootLoaderComponent`
-   `organisationUnitRootNodesComponent`

These props can be used to specify custom components. There is a prop for all the UI components with markup an styling. The only components that cannot be customised are the `OrganisationUnitTree` and `OrganisationUnitTreeProvider` themselves. Note that these props are of type `PropTypes.elementType`, so they should be populated with a _React element type_ (i.e. `MyCustomComponent`) and not with a _React element_ (i.e. `<MyCustomComponent/>`).

If a component needs to be customised in terms of style and/or markup only, then the custom component should simply implement the same hook as the original component does and just render some different JSX.

If a custom component needs some _additional_ behaviour, then the developer can implement some additional logic on top of the hook the original component uses.

If a custom component needs to have _modified_ behaviour, then the developer could possibly still use the same hook as the original component and modify the behaviour in the component. However, if the modified behaviour does not align with the hook used in the original component, then the developer can also create fully custom logic by leveraging one of the low-level hooks:

-   `useOrganisationUnitTreeManager` accepts no arguments and returns a stable reference to the the `manager`. This hook can be used to for tree-level components and it's possible to subscribe to events in the tree.
-   `useOrganisationUnitNode` requires a node ID argument and returns a stable reference to the `node` and the `manager`. This hook can be used to for node-level components and it's possible to subscribe to events in both the node and the tree.

The general idea is that, when a developer wants to build a custom component/hook, he/she first has a look in the source to see how the default component/hook that is being replaced works. Since all of the components simply implement a hook and render some JSX based the hook's state, and the hooks simply hold some state and subscribe to some events in the node/manager, it is not hard code to follow.

### Customising the tree manager

For more exceptional use-cases it's also possible to extend or modify the behaviour of the organisation unit tree manager. This is done in essentially the same way as the manager is created internally. When calling `createOrganisationUnitTreeManager` an object is enhanced with various layers of functionality and it's possible to pass an array of `enhancers` to extend and/or modify this functionality. In a typical scenario, `createOrganisationUnitTreeManager` is not called directly, but by the `OrganisationUnitTreeProvider`. An `enhancers` array can be passed to the `OrganisationUnitTreeProvider` using a prop by that name, or passed directly to `createOrganisationUnitTreeManager` as an option with the same name.

#### Writing enhancers

-   An enhancer is a function which is called when the organisation unit tree manager is created.
-   The function receives two arguments:
    -   `manager` represents the current state of the organisation unit tree manager
    -   `dataEngine` is a reference to the data engine instance which can be used to issue requests to the DHIS2 web api.
-   The function should return an object. Technically speaking it is up to the developer to decide what types of properties this object contains, but it is good practice to ensure that all properties are functions. This is mainly to prevent bugs due to stale object references etc.
-   The object returned by the function is used to extend the current manager object. So effectively this means that:
    -   When the return object contains a method name already present on the manager, this will cause this existing method to be replaced, thus _overriding_ the current behaviour.
    -   When the return object contains new method names, this will simply _enhance_ the manager: new behaviour is added, but the existing behaviour remains untouched.
-   It's possible to add multiple enhancers which are interdependent. When doing so it is advisable to ensure that the `manager` object is not destructured and none of the manager methods are called within the main function scope of the enhancer. This will prevent issues with methods still being `undefined` when being referenced. Within the scope of the inner functions these limitations are no longer present, since we can assume the manager is "complete" once these functions are called.
-   If an _override_ requires access to the original method it is replacing, then a local reference to that method can be stored in the main function scope.

### Customising the node manager

If the tree manager has been extended, and this additional functionality affect the organisation unit nodes, then it is likely that the node manager needs to be updated to handle this additional functionality too. Since all of the node manager's functionality is implemented in the `OrganisationUnitNodeManager` class, the way to customise it is to implement a custom class which extends this. This custom class definition can be passed to the `OrganisationUnitTreeProvider` using the `organisationUnitNodeManagerClass` prop, or passed directly to `createOrganisationUnitTreeManager` as an option with the same name.

### Extending the UI

Apps may require components that consist of an organisational unit tree with some additional UI. To cater for these use cases a developer can wrap both the organisation unit tree and the additional UI in a `OrganisationUnitTreeProvider`. The example below describes an imaginary component that would allow a user to mutate organisation unit properties by selecting them in the tree and then editing the selected component in a form:

```jsx
const OrganisationUnitEditor = () => {
    const treeManager = useOrganisationUnitTreeManager()
    const [disabled, setDisabled] = useState(!treeManager.getIsReady())
    const [selectedId, setSelectedId] = useState('')

    useEffect(
        () =>
            treeManager.onIsReady(() => {
                setDisabled(false)
            }),
        [treeManager]
    )

    return (
        <OrganisationUnitTreeProvider enhancers={[mutationManager]}>
            <EditForm id={selectedId} disabled={disabled}>
            <OrganisationUnitTreeProvider
                onChange={({ id }) => {
                    setSelectedId(id)
                }}
                singleSelection
            >
        </OrganisationUnitTreeProvider>
    )
}
```

Where the `EditForm` component could look a bit like this (pseudo code):

```jsx
const EditForm = ({ id, disabled }) => {
    const node = useOrganisationUnitNode(id)

    return (
        <form disabled={disabled} onSubmit={onSubmit}>
            {/* form fields populated by organisation unit node properties */}
            <button type="submit">Update</button>
        </form>
    )
}
```

Some notes:

-   The tree initialises itself and shouldn't really be relied upon until the initialisation is done. To cater for that, subscribe to the `onIsReady` event.
-   In the example no `selectedIds` prop is passed to the `OrganisationUnitTreeProvider` because it would be equal to the internal state anyway. For cases where a new selected ID needs to be set from the outside it would make sense to set the `selectedIds` prop.

### Building something completely custom

Since all of the behaviour is encapsulated in the tree and node manager it's possible to build all sorts of things that rely on organisation unit tree logic using `createOrganisationUnitTreeManager`. Since the managers are framework independent, it's also possible to use them in other SPA frameworks or vanilla JavaScript.
