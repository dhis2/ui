---
title: Loader
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { CircularLoader, LinearLoader } from '@dhis2/ui'

import API from '../../../components/loader/API.md'

# Loader

Loaders are used to show that something is in progress. They keep users informed about the what's going on.

<Demo>
    <CircularLoader />
</Demo>

## Usage

### When to use

-   **Wait times longer than a second**. If the potential waiting time could be longer than a second, show a loader.

### When not to use

-   **Wait times are expected to be instant.** Don't show a loader if the expected wait time is effectively zero, like when loading a small, cached resource. Flashing loaders can be distracting and make an interface look broken.
-   **Ongoing processes**. Don't show a loader for processes that are ongoing and that don't have an end. For example, don't use a loader to show that an app is running.

### Variants

#### Quick reference

| Variant  | Usage                                                         |
| -------- | ------------------------------------------------------------- |
| circular | Processes that can't say how much they're complete.           |
| linear   | Processes that can say how complete they are, from 0 to 100%. |

#### Circular

<Demo>
    <CircularLoader />
</Demo>

```jsx
<CircularLoader />
```

-   Use a circular loader when the loading time is uncertain.

#### Linear

<Demo>
    <LinearLoader amount="25"/>
</Demo>

```jsx
<LinearLoader amount="25" />
```

-   Use a linear loader when the progress can be shown as a percentage of 100%.

### Format

#### Size

<Demo>
    <div className='stacked-examples-vertical'>
        <CircularLoader extrasmall />
        <CircularLoader small/>
        <CircularLoader />
        <CircularLoader large />
    </div>
</Demo>

```jsx
<CircularLoader extrasmall />
<CircularLoader small/>
<CircularLoader />
<CircularLoader large />
```

-   Circular loaders are available in four sizes.
-   Use the size that matches the size of the component being loaded.

## Options

### Inverted

<Demo>
    <div style={{
        backgroundColor: '#999',
        padding: '8px',
    }}>
        <CircularLoader invert />
        <LinearLoader amount="25" invert />
    </div>
</Demo>

-   Inverted loaders can be used on dark backgrounds, like a blocking backdrop layer.

## API Reference

<API />

## Links

-   <a href="/demo/?path=/story/circular-loader--default" target="_blank">Demo</a>
