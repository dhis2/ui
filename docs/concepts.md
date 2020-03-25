# Conceptual design of @dhis2/ui

## Monorepo

UI is a monorepo that contains all the UI-related packages for DHIS2.

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

**@dhis2/ui-constants** provides access to UI-related constants, such as
color, theme, spacer, and elevation values that are used across the UI packages
as well as in applications that need custom components for example.

**@dhis2/ui-core** contains the base components we use. These components
are pure style and structure, and used as building blocks to create the
components ready to be used in user interfaces found in, e.g.
**@dhis2/ui-widgets**.

**@dhis2/ui-forms**
**@dhis2/ui-icons**
**@dhis2/ui-layouts**
**@dhis2/ui-widgets**
