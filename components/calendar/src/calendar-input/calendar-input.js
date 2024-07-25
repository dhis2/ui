import { Button } from '@dhis2-ui/button'
import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import {
    useDatePicker,
    useResolvedDirection,
} from '@dhis2/multi-calendar-dates'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
// import { debounce } from 'lodash'
import React, { useRef, useState, useMemo, useCallback } from 'react'
import { CalendarTable } from '../calendar/calendar-table.js'
import { CalendarProps } from '../calendar/calendar.js'
import { NavigationContainer } from '../calendar/navigation-container.js'
import i18n from '../locales/index.js'

const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, 2],
    },
}

export const CalendarInput = ({
    onDateSelect: parentOnDateSelect,
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
    editable,
    minDate,
    maxDate,
    format, // todo: props and types for format and validation
    validation,
    ...rest
} = {}) => {
    const ref = useRef()
    const [open, setOpen] = useState(false)

    const useDatePickerOptions = useMemo(
        () => ({
            calendar,
            locale,
            timeZone, // todo: we probably shouldn't have had timezone here in the first place
            numberingSystem,
            weekDayFormat,
        }),
        [calendar, locale, numberingSystem, timeZone, weekDayFormat]
    )

    const onDateSelect = useCallback(
        (result, keepPopperOpen = false) => {
            setOpen(keepPopperOpen)
            parentOnDateSelect?.(result)
        },
        [parentOnDateSelect]
    )

    const pickerResults = useDatePicker({
        onDateSelect,
        date,
        minDate: minDate,
        maxDate: maxDate,
        validation: validation,
        format: format,
        options: useDatePickerOptions,
    })

    const handleChange = (e) => {
        onDateSelect?.({ calendarDateString: e.value })
    }

    const onFocus = () => {
        setOpen(true)
    }

    const calendarProps = useMemo(() => {
        return {
            date,
            dir,
            locale,
            width,
            cellSize,
            minDate,
            maxDate,
            validation, // todo: clarify "validation" type in the hook
            format,
            calendarWeekDays: pickerResults.calendarWeekDays,
            weekDayLabels: pickerResults.weekDayLabels,
            currMonth: pickerResults.currMonth,
            currYear: pickerResults.currYear,
            nextMonth: pickerResults.nextMonth,
            nextYear: pickerResults.nextYear,
            prevMonth: pickerResults.prevMonth,
            prevYear: pickerResults.prevYear,
        }
    }, [
        cellSize,
        date,
        dir,
        format,
        locale,
        maxDate,
        minDate,
        pickerResults,
        validation,
        width,
    ])

    const languageDirection = useResolvedDirection(dir, locale)

    return (
        <>
            <div className="calendar-input-wrapper" ref={ref}>
                <InputField
                    label="Pick a date"
                    {...rest}
                    type="text"
                    onFocus={onFocus}
                    value={date}
                    onChange={editable ? handleChange : undefined}
                    validationText={
                        pickerResults.errorMessage ||
                        pickerResults.warningMessage
                    }
                    error={!!pickerResults.errorMessage}
                    warning={!!pickerResults.warningMessage}
                />
                {clearable && (
                    <div
                        className={cx('calendar-clear-button', {
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
                            onClick={() => {
                                onDateSelect?.(null)
                            }}
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
                            <div
                                className="calendar-wrapper"
                                dir={languageDirection}
                                data-test="calendar"
                            >
                                <NavigationContainer
                                    pickerOptions={calendarProps}
                                    languageDirection={languageDirection}
                                />
                                <CalendarTable
                                    selectedDate={
                                        calendarProps.isValid ? date : null
                                    }
                                    calendarWeekDays={
                                        calendarProps.calendarWeekDays
                                    }
                                    weekDayLabels={calendarProps.weekDayLabels}
                                    cellSize={cellSize}
                                    width={width}
                                />
                            </div>
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
                    .calendar-wrapper {
                        font-family: Roboto, sans-serif;
                        font-weight: 400;
                        font-size: 14px;
                        background-color: none;
                        display: flex;
                        flex-direction: column;
                        border: 1px solid ${colors.grey300};
                        border-radius: 3px;
                        min-width: ${width};
                        width: max-content;
                        box-shadow: 0px 4px 6px -2px #2129340d;
                        box-shadow: 0px 10px 15px -3px #2129341a;
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
}
