---
title: User Avatar
id: avatar
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import { DocFigure } from '@site/src/components/DocFigure.jsx'
import { UserAvatar } from '@dhis2/ui'

import API from '../../../components/user-avatar/API.md'

# User Avatar

A User Avatar is a visual icon that represents a user.

<Demo>
    <UserAvatar name="Karimbe Olefeme"/>
</Demo>

## Usage

### When to use

-   **In a list of user generated items**. An avatar can help to identify different users and give context to user generated content, alongside the user name.

### When not to use

-   **Decoration**. Don't use an avatar for decoration only. It should serve a purpose and help give context to some information.

### Format

#### Content

-   By default, avatars show two initials from the user's name.
-   An avatar can also show a user's profile photo, if they have one.
-   An avatar should usually be used alongside a user name, unless it's the current user's own avatar.

#### Size

<Demo>
    <div className='stacked-examples-horizontal'>
        <UserAvatar extrasmall name="Example Person"/>
        <UserAvatar small name="Example Person"/>
        <UserAvatar medium name="Example Person"/>
        <UserAvatar large name="Example Person"/>
        <UserAvatar extralarge name="Example Person"/>
    </div>
</Demo>

Avatars are available in different sizes. Use the size that works best for the space available and the context.

The Demo above lists the different sizes available. The related JSX is:

```jsx
<UserAvatar extrasmall name="Example Person"/>
<UserAvatar small name="Example Person"/>
<UserAvatar medium name="Example Person"/>
<UserAvatar large name="Example Person"/>
<UserAvatar extralarge name="Example Person"/>
```

## API Reference

<API />

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/utils-user-avatar--default)
