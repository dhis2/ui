import React from 'react'
import { storiesOf } from '@storybook/react'
import { MenuList } from '../index.js'

storiesOf('MenuList', module).add('With children', () => (
    <MenuList>I am a child</MenuList>
))
