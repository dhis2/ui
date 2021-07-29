import { storiesOf } from '@storybook/react'
import React from 'react'
import { Tag } from './tag.js'

storiesOf('Tag', module)
    .add('Without icon', () => <Tag>Default</Tag>)
    .add('With icon', () => <Tag icon={<span>Icon</span>}>Default</Tag>)
    .add('With text', () => <Tag>Text content</Tag>)
    .add('With default max width', () => (
        <Tag>
            This is a lot of content that should exceed the default max width of
            the tag component quite significantly so testing is still works when
            the default value of the max width is changed
        </Tag>
    ))
    .add('With custom max width', () => <Tag maxWidth="30px">Text content</Tag>)
