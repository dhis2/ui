import { Label } from '../label/index.js'
import React from 'react'

export default { title: 'Label' }
export const WithChildren = () => <Label>I am a child</Label>
export const WithRequired = () => <Label required>Content</Label>
