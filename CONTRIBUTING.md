# Conceptual design of @dhis2/ui

## Monorepo

UI is a monorepo that contains all the UI-related packages for DHIS 2.

### Why a monorepo instead of one repository

The design-system, ui-core, and ui-widgets are separate by design, and the
boundaries between them is a valuable trait of the system that pays off in the
long term.

Those three libraries are kept separate because they are three distinct things.
On a technical level we work with all off them, and sometimes it feels like we
need to work on all of them at once, so the best thing to do is to combine them
into one thing.

This is a fallacy of perception, we need to "zoom out" to understand the scope
of each individual library and how they fit into the global DHIS 2 developer
ecosystem.

We have 15 core developers, but there are hundreds to thousands of external
developers building DHIS 2 apps.

### Reasons for having switched from several repositories to a monorepo

#### Problem: Developer convenience

We can move components from core to widgets and maintain a proper split between
all the UI libraries, and the drawback is when developing a molecule that needs
new atoms in core, then they first have be merged to core or the developer has
to link the libraries locally. Matters are made worse if the developer is working on
a form component that needs something in widgets and that triggers work in
core.

In a monorepo we can have all the code organized properly in a single PR, and
the developer is not "held back" by either local development tricks like links
nor waiting for a PR.

#### Problem: How can I find the component I need?

> (Ideally I think we would have a way of organizing our components that is
> clear to us and our users. So that neither groups have to do too much
> thinking about what belongs/can be found where.)

The **@dhis2/ui** meta-package re-exports all of our `ui-*` libraries under a
single namespace, so a user can either install e.g. @dhis2/ui-core
specifically, but more likely, the user will install @dhis2/ui and then use it:

#### Problem: Version consistency

Right now, consolidating the UI-core versions across apps, the app shell, ui-forms,
ui-widgets, etc. can be tricky. We do some tricks to make ui-core external and
use it as a peer dependency, but if someone has it as a straight dependency there is a
possibility that ui-core becomes out of sync between app and ui-widgets, and
can result in unpredictable behavior. If we at least lock the versions together
in a monorepo, then it becomes easier to debug and resolve those errors.

## Main package

**@dhis2/ui** is the main package, and is a meta-package that wraps and
re-exports relevant packages in the UI suite.

This is the main entrypoint that an application should import and use.

```
import {
    Button,
    OrgUnitTree,
    HeaderBar,
} from '@dhis2/ui'
```

## Sub-packages

### Constants

**@dhis2/ui-constants** provides access to UI-related constants, such as
color, theme, spacer, and elevation values that are used across the UI packages
as well as in applications that need custom components for example.

### PropTypes

The @dhis2/prop-types library does not force development practices on
developers, they can be used pretty much anywhere. This is the "have it your
way" libraries.

### Icons

The **@dhis2/ui-icons** library does not force development practices on
developers, they can be used pretty much anywhere. This is the "have it your
way" libraries.

### Core

The **@dhis2/ui-core** library is the reference implementation of the
**building blocks** in the design system. These components are pure style and
structure and should be usable by any application that satisfies the
requirements, no matter if it is a DHIS 2 App or something entirely different.

### Widgets

Currently the @dhis2/ui-widgets does not have a specific purpose, but combines
everything that does not fit into either one of the above or one of the more
specialized libraries down below. The following list contains thematic
concepts that can be found in the widgets sub-package. **This will likely be
subject to change in the near future. There's no clear idea of how to divide
these components or what sub-packages we want to have. But regardless of what
conclusion we'll arrive at, they'll always be exported from the `@dhis2/ui`
library**.

It's also noteworthy that many components in `widgets` combine several of the
following thematic concepts, which complicates refactoring these into several
libraries.

#### Built-in DHIS 2-Api

Some components, like the `HeaderBar`, request specific DHIS 2 endpoints.
This limits the use case to DHIS 2 apps and therefore needs to be separated
from the libraries listed above.

#### DHIS 2 data structure

Just like components using DHIS 2 endpoints can be used in DHIS 2 apps only,
some components, albeit not requesting any data, operate on data that's
specific to DHIS 2 application.

#### Translations

We consider translations to be very similar to DHIS 2 data. As translations
always convey a specific meaning.

#### Complex components

Some of our components are quite complex (`Transfer`, `*Field`).
These are not really building blocks anymore and have a very opinionated
structure built into them, so we keep them separate from our more composable
components in `core`.

#### External dependencies

A "widget" can also be a component which requires specific external
dependencies to function, where-as our core components should never require
additional dependencies to function.

#### DHIS 2 development practices

At the "widget" level we are forcing our development practices on developers,
so if they want to use our complex components, they need to be on-board with
that (e.g. the DataProvider pattern, React Hooks).
If they do not want that, they can drop down to ui-core, where we do not force
our way of building applications much more than a HTML component forces it.

### Forms

The **@dhis2/ui-forms** library has two purposes:

#### Bridge between our components and React Final Form

All our `*Field` components can be found in this repository as well.
Functional-wise they're the same as the other components but the api has been
adjusted to work with React Final Form, so you can just provided them via the
`component={*Field}` prop and everything else (expect the `type` prop) will be
taken care of.

#### Form validators

We also offer a (so far) limited set of validator functions that work with
React Final Form as well, but they could be used in other contexts as well.

## Development

### What package should new components be added to

The distinction between what a core component is and a non-core component is
lies at the center of many things, not least what goes where.

The scopes of ui-core and ui-widgets are inverted. The bar to add components to
ui-core should be high, and the bar to add components to ui-widgets should be
low.

## Future

We just moved to a monorepo and we're expecting some breaking changes in the
near future. There are some issues we have with the current organization of our
libraries but we don't want to start over again and again.

The monorepo will allow us to change the internal organization of the code
while not introducing a breaking change in the `ui` repository.

Our main goal is to change the `widgets` package as it does not have a clear
purpose but rather is a collection of components that don't fit anywhere else.
