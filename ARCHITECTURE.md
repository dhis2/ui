# UI Architecture

## Structure

### File system

The file system is laid out as flat as possible. Component packages go
under `components/`, utility packages under `utilities/`, and
collections under `collections/`.

### Monorepo

Be aware that the UI repository is a monorepo based on Yarn Workspaces,
so the setup assumes a working knowledge about how workspaces behave,
and use of Yarn.

> _Note:_ As of **2021-06-21**, we rely on Yarn 1.x and support for Yarn
> 2.x is unverified.

See the `workspaces` key in the root `package.json` to see which
packages are considered part of the workspace.

### Conceptual

There are three conceptual levels in UI which we will go over in turn.

#### Utilities

UI has several utility packages that are helpful when building user
interfaces, for example `@dhis2/ui-icons` exposes icons ready to be used
as React components in an application or library. Using these ensures
that user interfaces look consistent, and that once a user has learned
an icon, that heuristic will be transferable across DHIS2 applications
both for core and custom apps.

Another example is the `@dhis2/ui-constants` package that exports
constants for e.g. DHIS2 colors, sizes, to allow for theme consistency.

If those constants are used, even if they are updated those updates will
be reflected in applications that use the constants.

Using utilities from UI does not require use of UI components, so it can
be useful even if another user interface framework (or custom
components) are used.

#### Components

UI Components are building blocks for constructing DHIS2 user interfaces
that cover the most common use cases out-of-the-box, while allowing for
customization to cover advanced, specialized, and uncommon use cases.

In React fashion we rely on composition to enable the goal of having
"building blocks".

This means that:

-   complex components are constructed by connecting several simple
    components,

-   a consumer must have direct access to the building blocks that make up
    composed components,

-   components need to be isolated from each other with a well defined
    interface and scope,

-   components needs to be reusable across many contexts.

> _Note_: Components are published under the `@dhis2-ui` scope, and will
> eventually be considered part of the external API as things stabilize.
>
> As of **2021-06-21**, `@dhis2-ui/*` components are considered _internal_
> and may have breaking changes without us bumping the major version on
> `@dhis2/ui-*` components.

#### Collections

In UI terms a collection is a set of components, and is considered the
primary entry-point for use in applications. An application will
primarily rely on `@dhis2/ui` and all internal components are available
through that collection.

> _Note:_ `@dhis2/ui-core` and `@dhis2/ui-widgets` are deprecated and
> will be phased out. They will still get updates to _existing_
> components, but no new components will be available from these two
> packages, and they will be removed in a major update in the future.

## Package scopes

UI uses two different scopes on NPM to publish:

-   `@dhis2/ui*`: Collections and utilities.

-   `@dhis2-ui/*`: Component packages are published under this scope.
