import { Button } from '@dhis2-ui/button'
import { Card } from '@dhis2-ui/card'
import { InputField, InputFieldProps } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { useDatePicker } from '@dhis2/multi-calendar-dates'
import cx from 'classnames'
import React, { useCallback, useRef, useState } from 'react'
import { Calendar, CalendarProps } from '../calendar/calendar.js'
import i18n from '../locales/index.js'

const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, 2],
    },
}

export function validateInput(input) {
    return /^\d{4}([/-]?)\d{2}\1\d{2}$/.test(input)
}

function searchCalendarWeekDays(date, calendarWeekDays) {
    for (let i = 0; i < calendarWeekDays.length; ++i) {
        const days = calendarWeekDays[i]
        const temporalDate = days.find(({ calendarDate }) => calendarDate === date)

        if (temporalDate) {
            return temporalDate.zdt
        }
    }

    return null
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
    clearable,
    ...rest
} = {}) => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    const [tempInputValue, _setTempInputValue] = useState(date)

    const setTempInputValue = (nextTempValue) => {
        _setTempInputValue(nextTempValue)
        const isValidInputDate = validateInput(nextTempValue)

        if (isValidInputDate) {
            const [year, month, day] = nextTempValue.split('-')
            const nextDate = Temporal.PlainDate.from({
                calendar,
                year,
                month,
                day,
            })

            onDateSelect({
                calendarDate: nextDate,
                calendarDateString: nextTempValue,
            })
        }
    }

    const calendarProps = React.useMemo(() => {
        const onDateSelectWrapper = (selectedDate) => {
            setOpen(false)
            setTempInputValue(selectedDate.calendarDateString)
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
        timeZone,
        weekDayFormat,
        width,
    ])

    const onFocus = () => {
        setOpen(true)
    }

    return (
        <>
            <div className="calendar-input-wrapper" ref={ref}>
                <InputField
                    label="Pick a date"
                    {...rest}
                    type="text"
                    onFocus={onFocus}
                    value={tempInputValue}
                    onChange={({ value }) => setTempInputValue(value)}
                />
                {clearable && (
                    <div
                        className={cx('calendar-clear-button', {
                            // ToDo: this is a workaround to show the clear button in the correct place when an icon is shown.
                            // Long-term, we should abstract and share the logic multi-select uses for the input-wrapper
                            // https://dhis2.atlassian.net/browse/DHIS2-14848
                            'with-icon':
                                rest.valid ||
                                rest.error ||
                                rest.warning ||
                                rest.loading,
                            'with-dense-wrapper': rest.dense,
                        })}
                    >
                        <Button
                            dataTest="calendar-clear-button"
                            secondary
                            small
                            onClick={() => calendarProps.onDateSelect(null)}
                            type="button"
                        >
                            {i18n.t('Clear')}
                        </Button>
                    </div>
                )}
            </div>
            {open && (
                <Layer
                    onBackdropClick={() => {
                        setOpen(false)
                    }}
                >
                    <Popper
                        reference={ref}
                        placement="bottom-start"
                        modifiers={[offsetModifier]}
                    >
                        <Card>
                            <Calendar {...calendarProps} date={date} />
                        </Card>
                    </Popper>
                </Layer>
            )}

            <style jsx>
                {`
                    .calendar-input-wrapper {
                        position: relative;
                    }
                    .calendar-clear-button {
                        position: absolute;
                        inset-inline-end: 6px;
                        inset-block-start: 27px;
                    }

                    .calendar-clear-button.with-icon {
                        inset-inline-end: 36px;
                    }
                    .calendar-clear-button.with-dense-wrapper {
                        inset-block-start: 23px;
                    }
                `}
            </style>
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
