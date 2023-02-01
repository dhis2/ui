import { Card } from '@dhis2-ui/card'
import { InputField, InputFieldProps } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { getNowInCalendar } from '@dhis2/multi-calendar-dates'
import React, { useRef, useState } from 'react'
import { CalendarProps } from '../calendar/calendar-prop-types.js'
import { Calendar } from '../calendar/index.js'

const padWithZeroes = (number, count = 2) => String(number).padStart(count, '0')
const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, 2],
    },
}

export const CalendarInput = ({
    onDateSelect,
    calendar,
    date,
    dir,
    locale,
    numberingSystem,
    weekDayFormat,
    timeZone,
    width,
    cellSize,
    ...rest
} = {}) => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    const currentDate = getNowInCalendar(calendar, timeZone)
    const initialDate =
        date ||
        `${currentDate.eraYear || currentDate.year}-${padWithZeroes(
            currentDate.month
        )}-${padWithZeroes(currentDate.day)}`
    const [value, setValue] = useState(initialDate)

    const calendarProps = React.useMemo(() => {
        const onDateSelectWrapper = (selectedDate) => {
            const { calendarDateString } = selectedDate
            setValue(calendarDateString)
            setOpen(false)
            onDateSelect?.(selectedDate)
        }
        return {
            onDateSelect: onDateSelectWrapper,
            calendar,
            date,
            dir,
            locale,
            numberingSystem,
            weekDayFormat,
            timeZone,
            width,
            cellSize,
        }
    }, [
        calendar,
        cellSize,
        date,
        dir,
        locale,
        numberingSystem,
        onDateSelect,
        timeZone,
        weekDayFormat,
        width,
    ])

    const onFocus = () => {
        setOpen(true)
    }

    return (
        <>
            <div ref={ref}>
                <InputField
                    label="Pick a date"
                    {...rest}
                    type="text"
                    onFocus={onFocus}
                    value={value}
                />
            </div>
            {open && (
                <Layer
                    onBackdropClick={(_, evt) => {
                        evt.stopPropagation()
                        setOpen(false)
                    }}
                >
                    <Popper
                        reference={ref}
                        placement="bottom-start"
                        modifiers={[offsetModifier]}
                    >
                        <Card>
                            <Calendar {...calendarProps} date={value} />
                        </Card>
                    </Popper>
                </Layer>
            )}
        </>
    )
}

CalendarInput.defaultProps = {
    dataTest: 'dhis2-uiwidgets-calendar-inputfield',
}
CalendarInput.propTypes = {
    ...CalendarProps,
    ...InputFieldProps,
}
