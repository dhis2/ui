import { storiesOf } from '@storybook/react'
import React from 'react'
import { Calendar } from './calendar.js'

storiesOf('Calendar', module).add('with nepali as a type', () => (
    <Calendar type="nepali" />
))
