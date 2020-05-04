import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu } from './Menu.js'

storiesOf('Menu', module).add('With children', () => <Menu>I am a child</Menu>)
