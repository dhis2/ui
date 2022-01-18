# DHIS2 Design System

The DHIS2 Design System is a collection of design principles and a library of UI components for designing applications for the DHIS2 platform. Using this system you can design and build applications that are usable, powerful and consistent with other DHIS2 applications.

The design system consists of two sections:

-   [Principles](#design-principles): These principles are the guidelines that inform how DHIS2 applications should work and look. All designers and developers working on DHIS2 applications should be familiar with these guidelines.
-   [Components](#components): A collection of UI elements that can be, and should be, reused across all DHIS2 applications. The components have been designed with DHIS2 use cases in mind. Using these components means more time spent focusing on building a positive user experience and less time redesigning and rebuilding common components. Each component has its guidelines for use.

---

##### Design System Contents

-   [Principles](#design-principles)
-   [Components](#components)

##### Using the system

-   [Designing DHIS2 applications](#designing-dhis2-applications)
-   [Resources](#resources)
-   [Contributing and Feedback](#contribting-and-feedback)

---

## Design Principles

<!-- - Design for use -->

-   [Content & Communication](design-system/principles/content-communication)
-   [Layout, Spacing, Stacking](design-system/principles/layout.md)
-   [Forms](design-system/principles/forms.md)
-   [Color](design-system/principles/color.md)
-   [Typography](design-system/principles/typography.md)
-   [Icons](design-system/principles/icons.md)

## Components

Each component has guidelines for use, explanations of the different options and types available and examples of how the component is used in real DHIS2 applications. Components are organized by usage.

#### Action

-   [Button](design-system/atoms/button.md)
-   [Chip](design-system/atoms/chip.md)
-   [Menu](design-system/molecules/menu.md)
-   [Segmented Control](design-system/molecules/segmented-control.md)

#### Data display

-   [Avatar](design-system/atoms/avatar.md)
-   [Comment](design-system/molecules/comment.md)
-   [Data table](design-system/organisms/data-table.md)
-   [Notice box](design-system/molecules/notice-box.md)
-   [Popover](design-system/molecules/popover.md)
-   [Table](design-system/organisms/table.md)
-   [Tag](design-system/atoms/tag.md)
-   [Tooltip](design-system/atoms/tooltip.md)

#### Data entry

-   [Checkbox](design-system/atoms/checkbox.md)
-   [Color Picker](design-system/organisms/color-picker.md)
-   [Comment](design-system/molecules/comment.md)
-   [File Input](design-system/atoms/fileinput.md)
-   [Input field](design-system/atoms/inputfield.md)
-   [Organization Unit Tree](design-system/organisms/organisation-unit-tree/org-unit-tree.md)
-   [Radio button](design-system/atoms/radio.md)
-   [Rich Text Editing](design-system/organisms/rich-text.md)
-   [Select](design-system/molecules/select.md)
-   [Switch](design-system/atoms/switch.md)
-   [Transfer](design-system/organisms/transfer.md)

#### Feedback

-   [Alert bar](design-system/molecules/alertbar.md)
-   [Loading indicators](design-system/atoms/loading.md)

#### Layout

-   [Card](design-system/atoms/card.md)
-   [Modal](design-system/molecules/modal.md)

#### Navigation

-   [Pagination](design-system/molecules/pagination.md)
-   [Tabs](design-system/molecules/tab.md)

#### Utilities

-   [Elevation](design-system/atoms/elevation.md)
-   [Header Bar](design-system/organisms/header-bar.md)
    <!-- - spacing -->
    <!-- - typography -->

---

## Designing DHIS2 applications

Want to get started designing and building DHIS2 applications? Follow these steps:

#### 1. Get to know the Design System principles

It is important to be familiar with the [principles](#design-principles) of the design system. These principles cover how applications should work and look. All applications should be built with these principles in mind. When all DHIS2 applications follow the same principles it becomes easier for all users to work across multiple applications without needing to relearn patterns or meanings.

#### 2. Understand the use case

Before starting on the design of a DHIS2 application you must research and understand the use case(s). What will this application enable users to do? Why is this application useful? What will the application **not** do? DHIS2 applications must solve real use cases in a simple, manageable way. The most useful applications are the ones that do a few things very well. Make sure applications are focused on these use cases.

Understanding the use case before starting on the design and building will save time later. It is much easier to make changes to draft ideas than finished applications.

<!-- Find out more by reading the principle: Design for use. -->

#### 3. Design with components

When the use cases are clear and all the requirements are understood it is time to start designing mockups/prototypes of the application. Building prototypes and mockups first means you can test these with potential users, finding out what works and what needs to be revised.

Where possible, always use components available from the design system [component library](#components). These components have been designed and built with DHIS2 in mind. The pages for each component below have guidelines for use and explanations of the options and types available. Reading through the component pages will help to understand which components should be used where, and why.

<!-- Check out the [resources](#resources) section to find the UI component library available for different design tools. -->

---

## Resources

All components included in the design system will soon be available as a Sketch library that can be imported and reused across your designs.

<!-- The Sketch library will be constantly updated, be sure to check back to grab the latest version. -->

<!-- TODO Sketch library image -->
<!-- TODO Sketch library download link -->

`Downloadable library coming soon!`

---

## Contributing and Feedback

### Contributing to the design system

Contributions to the design system are welcome. If there is a component that you have designed and/or built that you think could be useful for others, please send it in! A component can be detailed using the [example template](extras/component-template.md), and a PR can be opened for submission.

The DHIS2 Design System is based upon principles of [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/). Submitted components should follow this system, using existing atoms and molecules to compose new components where possible.

### Feedback and issues

[Open an issue](https://github.com/dhis2/design-system/issues) to contribute feedback regarding a component in the design system. Feedback is always appreciated and helps to make the design system more robust and powerful.

---
