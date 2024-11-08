---
title: User Avatar
id: avatar
---

import { Demo } from '@site/src/components/DemoComponent.jsx'
import API from '../../../components/user-avatar/API.md'

# User Avatar

A User Avatar is a visual icon that represents a user.

<Demo
    path="user-avatar--default"
    height="110px"
/>

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

<Demo
    path="user-avatar--sizes"
    height="150px"
/>

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
