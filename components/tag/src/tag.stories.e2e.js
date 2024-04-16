import React from 'react'
import { Tag } from './tag.js'

export default { title: 'Tag' }
export const WithoutIcon = () => <Tag>Default</Tag>
export const WithIcon = () => <Tag icon={<span>Icon</span>}>Default</Tag>
export const WithText = () => <Tag>Text content</Tag>
  export const WithDefaultMaxWidth = () => (
    <Tag>
        This is a lot of content that should exceed the default max width of
        the tag component quite significantly so testing is still works when
        the default value of the max width is changed
    </Tag>
)
export const WithCustomMaxWidth = () => <Tag maxWidth="30px">Text content</Tag>
