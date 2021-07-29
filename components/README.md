# UI Components

## Nota bene

Be aware that everything under the `@dhis2-ui` scope is considered
internal, so breaking changes for these components may occur without a
new major version.

We recommend using the stable entrypoint `@dhis2/ui` that follows
semver.

## Future

When this new structure settles, we will consider it stable and start to
follow semver. Currently there is no date in mind.

## Structure

Each package represents one or more component that is logically grouped.
E.g. Button, SplitButton, DropdownButton live under the
`@dhis2-ui/button` package. Table, StackedTable, and their related
subcomponents under `@dhis2-ui/table`.

Some packages expose multiple components, e.g. the `@dhis2-ui/input`
package exposes the Input and InputField components. The
`@dhis2-ui/select` gives you SingleSelect, MultiSelect, their Option
components, and the Field counterparts.

## Breaking down components

It is possible to extract components to smaller packages to avoid e.g.
circular references for when a building block component (e.g. Box)
is needed in separate components, but it is not desirable to make those
components dependent of each other.

## Dependent components

If a new component builds on components from another package, then it
may make sense for the component to live in that package. For example,
the DataTable could live under the `@dhis2-ui/table` package because it
is semantically related, and because it consumes Table subcomponents, so
to make it easier to import for the consumer it is under the
`@dhis2-ui/table` package.

## Package naming

All packages are named in the singular, even if the package contains
multiple components.

E.g. - `@dhis2-ui/tab` instead of `@dhis2-ui/tabs`. - `@dhis2-ui/table` instead of `@dhis2-ui/tables`. - `@dhis2-ui/button` instead of `dhis2-ui/buttons`.

This is "future proofing" in the sense that we may want to move all the
buttons to their own packages, and then we'd have a package that does
nothing floating around (`@dhis2-ui/buttons`).

While technically a breaking change to extract subcomponents, remember
that this is considered internal to UI for now and such changes will not
be released as a major version bump for now, but it will not impact
users of the `@dhis2/ui` package as we will keep that stable.
