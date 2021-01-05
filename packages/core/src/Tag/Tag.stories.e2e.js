import { storiesOf } from '@storybook/react'
import React from 'react'
import { Tag } from './Tag.js'

storiesOf('Tag', module)
    .add('Without icon', () => <Tag>Default</Tag>)
    .add('With icon', () => <Tag icon={<span>Icon</span>}>Default</Tag>)
    .add('With text', () => <Tag>Text content</Tag>)
