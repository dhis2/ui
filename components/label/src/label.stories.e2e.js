import { Label } from '@dhis2-ui/label'
import { storiesOf } from '@storybook/react'
import React from 'react'

storiesOf('Label', module)
    .add('With children', () => <Label>I am a child</Label>)
    .add('With required', () => <Label required>Content</Label>)
