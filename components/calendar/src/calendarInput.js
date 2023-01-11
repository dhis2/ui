import { InputField, InputFieldProps } from '@dhis2-ui/input'
import { getNowInCalendar } from '@dhis2/multi-calendar-dates'
import cx from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { Calendar, CalendarProps } from './calendar.js'

const padWithZeroes = (number, count = 2) => String(number).padStart(count, '0')

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
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible,
    } = useComponentVisible(false)
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
            setIsComponentVisible(false)
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
        setIsComponentVisible,
        timeZone,
        weekDayFormat,
        width,
    ])

    const onFocus = () => {
        setIsComponentVisible(true)
    }

    return (
        <div ref={ref}>
            <InputField
                label="Pick a date"
                {...rest}
                type="text"
                onFocus={onFocus}
                value={value}
            />
            <div
                className={cx('calendarWrapper', {
                    hidden: !isComponentVisible,
                })}
            >
                <Calendar {...calendarProps} date={initialDate} />
            </div>
            <style jsx>
                {`
                    .calendarWrapper {
                        position: absolute;
                        display: inline-block;
                        margin-top: 5px;
                        z-index: 100;
                        background-color: white;
                    }
                    .hidden {
                        display: none;
                    }
                    .visible {
                        display: flex;
                    }
                `}
            </style>
        </div>
    )
}

const useComponentVisible = (initialIsVisible) => {
    const [isComponentVisible, setIsComponentVisible] = useState(
        initialIsVisible
    )
    const ref = useRef(null)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    return { ref, isComponentVisible, setIsComponentVisible }
}

CalendarInput.defaultProps = {
    dataTest: 'dhis2-uiwidgets-calendar-inputfield',
}
CalendarInput.propTypes = {
    ...CalendarProps,
    ...InputFieldProps,
}
