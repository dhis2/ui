# Conceptual design of @dhis2/ui

## :warning: UNDER CONSTRUCTION :warning:

The alpha version is still under construction, these are the steps we need to
turn go get this version into a stable one:

-   [x] Move components from `ui-core` & `ui-widget` to the `ui` monorepo
-   [ ] Add breaking changes
-   [ ] Re-organize library

## Monorepo

UI is a monorepo that contains all the UI-related packages for DHIS2.

### Why a monorepo instead of one repository

The design-system, ui-core, and ui-widgets are separate by design, and the
boundaries between them is a valuable trait of the system that pays off in the
long term.

Those three libraries are kept separate because they are three distinct things.
On a technical level we work with all off them, and sometimes it feels like we
need to work on all of them at once, so the best thing to do is to combine them
into one thing.

This is a fallacy of perception, we need to "zoom out" to understand the scope
of each individual library and how they fit into the global DHIS2 developer
ecosystem.

We have 15 core developers, but there are hundreds to thousands of external
developers building DHIS2 apps.

### Reasons for having switched from several repositories to a monorepo

#### Problem: Developer convenience

We can move components from core to widgets and maintain a proper split between
all the UI libraries, and the drawback is when developing a molecule that needs
new atoms in core, then they first have be merged to core or the developer has
to link the libraries locally. Matters are made worse if the dev is working on
a form component that needs something in widgets and that triggers work in
core.

In a monorepo we can have all the code organized properly in a single PR, and
the developer is not "held back" by either local development tricks like links
nor waiting for a PR.

#### Problem: How can I find the component I need?

> (Ideally I think we would have a way of organising our components that is
> clear to us and our users. So that neither groups have to do too much
> thinking about what belongs/can be found where.)

The **@dhis2/ui** meta-package re-exports all of our `ui-*` libraries under a
single namespace, so a user can either install e.g. @dhis2/ui-core
specifically, but more likely, the user will install @dhis2/ui and then use it:

#### Problem: Version consistency

Right now, consolidating the UI-core versions across Apps, App Shell, ui-forms,
ui-widgets, etc. can be tricky. We do some tricks to make ui-core external and
use it as a peer dependency, but if someone has it as a straight dep there is a
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

### Core

The **@dhis2/ui-core** library is the reference implementation of the building
blocks in the design system. These components are pure style and structure and
should be usable by any application that satisfies the requirements (React
16.3), no matter if it is a DHIS2 App or something entirely different.
Furthermore they are used as building blocks to create the components ready to
be used in user interfaces found in, e.g. **@dhis2/ui-widgets**.

### Icons

The **@dhis2/ui-icons** library does not force development practices on
developers, they can be used pretty much anywhere. This is the "have it your
way" libraries.

### Layouts

The **@dhis2/ui-layouts** library does not force development practices on
developers, they can be used pretty much anywhere. This is the "have it your
way" libraries.

### Widgets

The **@dhis2/ui-widgets** library is built on our core components and adds
DHIS2 specific business logic into the mix. This might be tight coupling to the
DHIS2 API, or that the composed component should behave in a DHIS2 specific way
which doesn't make sense for other applications.

This is subtle and important. There needs to be some friction here to flush out
what can be general for any application and what is special for a DHIS2
application.

A "widget" can also be a component which requires specific external
dependencies to function, where-as our core components should never require
additional dependencies to function.

At the "widget" level we are forcing our development practices on developers,
so if they want to use our complex components, they need to be on-board with
that (e.g. the DataProvider pattern, React Hooks).

If they do not want that, they can drop down to ui-core, where we do not force
our way of building applications much more than a HTML component forces it.

### Forms

**@dhis2/ui-forms**

## Development

### What package should new components be added to

The distinction between what a core component is and a non-core component is
lies at the center of many things, not least what goes where.

The scopes of ui-core and ui-widgets are inverted. The bar to add components to
ui-core should be high, and the bar to add components to ui-widgets should be
low. We behave the other way around.

The **@dhis2/ui-core** library consists solely of atoms -- no molecules and no
organisms. The molecules would be formed in apps or in **@dhis2/ui-widgets**.
This keeps the core components very small, simple, and standalone.

Molecules and Organisms have the definitions:

> [...] Molecules are relatively simple groups of UI elements functioning
> together as a unit.
> [...] Organisms are relatively complex UI components composed of groups of
> molecules and/or atoms and/or other organisms.

Relatively simple vs. relatively complex is hard to define. The idea is to move
them all to widgets and removing the "relatively" from the mix and make it
clear that if it's not an atom, it's a widget.

Apply atomic design principles. For example, translations never belong in an
Atom, and the best way to enforce this is to provide a boundary as we have done
here.

## Future

### Unambiguous names

> I think it'd be good to give the icons unique names, they don't need to be
> easily "human" readable, as long as they're unique (e. g. D2ICON1, D2ICON2,
> etc) . . . This way people don't interpret too much, but rather look at the
> styleguide for when to use which icon (i. e. when looking for an arrow
> pointing right and there are several available but the styleguide has rules
> for them as they should only be used in a certain context)
> (By @Mohammer5; [Source](https://github.com/dhis2/ui/pull/2#issuecomment-598169399))

> we have "cryptic naming schemes" for spacers (dp4, dp24, ...) and colors
> (blue900, gray050, ...) so that the style guide references, so keeping icons
> inline with that seems like a good option to keep it unambiguous.
> (By @varl; [Source](https://github.com/dhis2/ui/pull/2#issuecomment-598177570))
