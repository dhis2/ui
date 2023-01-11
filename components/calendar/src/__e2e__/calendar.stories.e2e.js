import { storiesOf } from '@storybook/react'
import React from 'react'
import { Calendar } from '../calendar.js'

storiesOf('A calendar', module).add('for the Nepali calendar', () => (
    <Calendar
        calendar="nepali"
        dir="ltr"
        locale="ne-NP"
        onDateSelect={(date) => {
            console.log(date)
        }}
        timeZone="Africa/Khartoum"
        weekDayFormat="short"
    />
))

storiesOf('A Calendar', module).add('for the Ethiopic calendar', () => (
    <Calendar
        calendar="ethiopic"
        dir="ltr"
        locale="am-ET"
        onDateSelect={(date) => {
            console.log(date)
        }}
        timeZone="Africa/Khartoum"
        weekDayFormat="short"
    />
))

storiesOf('A Calendar', module).add('for the Islamic calendar', () => (
    <Calendar
        calendar="islamic-civil"
        dir="rtl"
        locale="ar-EG"
        onDateSelect={(date) => {
            console.log(date)
        }}
        timeZone="Africa/Khartoum"
        weekDayFormat="short"
    />
))
