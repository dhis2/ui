import { storiesOf } from '@storybook/react'
import React from 'react'
import { Label } from '@dhis2/ui-label'

storiesOf('Label', module)
    .add('With children', () => <Label>I am a child</Label>)
    .add('With required', () => <Label required>Content</Label>)
