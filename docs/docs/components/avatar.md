---
title: Avatar
---

import { Demo } from '../../src/components/DemoComponent.jsx'
import { UserAvatar } from '@dhis2/ui'

# Avatar

An avatar is a visual icon that represents a user.

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
    <UserAvatar extrasmall name="Example Person"/>
    <UserAvatar  name="Example Person"/>
    <UserAvatar medium name="Example Person"/>
    <UserAvatar large name="Example Person"/>
    <UserAvatar extralarge name="Example Person"/>
</Demo>

Avatars are available in different sizes. Use the size that works best for the space available and the context.

## Examples in use

==TODO: examples==

## Links

-   [Demo](https://ui.dhis2.nu/demo/?path=/story/utils-user-avatar--default)
-   API reference ==TODO: link==
