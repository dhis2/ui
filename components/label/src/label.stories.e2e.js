import { Label } from '@dhis2-ui/label'
import React from 'react'

export default { title: 'Label' }
export const WithChildren = () => <Label>I am a child</Label>
export const WithRequired = () => <Label required>Content</Label>
