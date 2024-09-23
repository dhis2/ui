---
title: Organisation unit tree
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/organisation-unit-tree/API.md'

# Organisation unit tree

> This component is under development. Advanced functionality is planned. Basic functionality, outlined below, is available now.

An organisation unit tree is used to choose organisation units from a hierarchy.

<Demo
    path="organisation-unit-tree--expanded"
    height="250px"
/>

## Usage

### When to use

-   **Choosing organisation units**: Use when one or more organisation units can be chosen.

### Format

-   An organisation unit tree can grow when units are expanded. Make sure the container can handle overflowing content by scrolling.
-   Choosing organisation units can be a complex task when there are a lot to choose from. In complex situations, make sure there is room to look at the tree clearly.

## Options

### Selection mode: Single

<Demo
    path="organisation-unit-tree--single-selection"
    height="250px"
/>

-   In _Single selection mode_ only one organisation unit can be chosen.
-   Use this mode when choosing more than one organisation unit isn't valid.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/organisation-unit-tree--collapsed" target="_blank">Demo</a>
