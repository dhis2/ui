import {
    useDatePicker,
    useResolvedDirection,
    validateDateString,
} from '@dhis2/multi-calendar-dates'
import { Button } from '@dhis2-ui/button'
import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { CalendarContainer } from '../calendar/calendar-container.js'
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
    width,
    cellSize,
    clearable,
    minDate,
    maxDate,
    format,
    strictValidation,
    inputWidth,
    dataTest = 'dhis2-uiwidgets-calendar-inputfield',
    ...rest
} = {}) => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    const [partialDate, setPartialDate] = useState(date)

    const excludeRef = useRef(null)

    useEffect(() => setPartialDate(date), [date])

    const useDatePickerOptions = useMemo(
        () => ({
            calendar,
            locale,
            numberingSystem,
            weekDayFormat,
        }),
        [calendar, locale, numberingSystem, weekDayFormat]
    )

    const onChooseDate = (date, validationOptions) => {
        // Handling clearing (with clicking the Clear button, or deleting input)
        if (clearable && (date === null || date === '')) {
            parentOnDateSelect?.({
                calendarDateString: null,
                validation: { valid: true },
            })
            return
        }

        // ToDo: This is now a workaround for handling choosing from the date picker
        // where the blur event gets triggered causing a call with undefined first
        if (date === undefined) {
            return
        }

        const validation = validateDateString(date, validationOptions)
        parentOnDateSelect?.({
            calendarDateString: date,
            validation,
        })
    }

    const validationOptions = useMemo(
        () => ({
            calendar,
            format,
            minDateString: minDate,
            maxDateString: maxDate,
            strictValidation,
        }),
        [calendar, format, maxDate, minDate, strictValidation]
    )

    const pickerResults = useDatePicker({
        onDateSelect: (result) => {
            onChooseDate(result.calendarDateString, validationOptions)
            setOpen(false)
        },
        date,
        ...validationOptions,
        options: useDatePickerOptions,
    })

    const handleChange = (e) => {
        setOpen(false)
        setPartialDate(e.value)
    }

    const handleBlur = (_, e) => {
        onChooseDate(partialDate, validationOptions)
        if (
            excludeRef.current &&
            !excludeRef.current.contains(e.relatedTarget)
        ) {
            setOpen(false)
        }
    }

    const onFocus = () => {
        setOpen(true)
        rest?.onFocus?.()
    }

    const languageDirection = useResolvedDirection(dir, locale)

    const calendarProps = useMemo(() => {
        return {
            date,
            width,
            cellSize,
            isValid: pickerResults.isValid,
            calendarWeekDays: pickerResults.calendarWeekDays,
            weekDayLabels: pickerResults.weekDayLabels,
            currMonth: pickerResults.currMonth,
            currYear: pickerResults.currYear,
            nextMonth: pickerResults.nextMonth,
            nextYear: pickerResults.nextYear,
            prevMonth: pickerResults.prevMonth,
            prevYear: pickerResults.prevYear,
            languageDirection,
        }
    }, [cellSize, date, pickerResults, width, languageDirection])

    return (
        <>
            <div className="calendar-input-wrapper" ref={ref}>
                <InputField
                    label={i18n.t('Pick a date')}
                    {...rest}
                    dataTest={dataTest}
                    type="text"
                    onFocus={onFocus}
                    value={partialDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputWidth={inputWidth}
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
                                onChooseDate(null)
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
                            <CalendarContainer
                                {...calendarProps}
                                excludedRef={excludeRef}
                                unfocusable
                            />
                        </Card>
                    </Popper>
                </Layer>
            )}

            <style jsx>
                {`
                    .calendar-input-wrapper {
                        position: relative;
                        width: ${inputWidth};
                    }
                    .calendar-clear-button {
                        position: absolute;
                        inset-inline-end: ${rest.error || rest.warning
                            ? '36px'
                            : '6px'};
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
    cellSize: '32px',
    width: '300px',
    weekDayFormat: 'narrow',
}

CalendarInput.propTypes = {
    /** the calendar to use such gregory, ethiopic, nepali - full supported list here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/calendars.ts  */
    calendar: PropTypes.any.isRequired,
    /** Called with signature `(null)` \|\| `({ dateCalendarString: string, validation: { error: boolean, warning: boolean, validationText: string} })` with `dateCalendarString` being the stringified date in the specified calendar in the format `yyyy-MM-dd` */
    onDateSelect: PropTypes.func.isRequired,
    /** the size of a single cell in the table forming the calendar */
    cellSize: PropTypes.string,
    /** Whether the clear button is displayed */
    clearable: PropTypes.bool,
    /** 'data-test' attribute of `InputField` component */
    dataTest: PropTypes.string,
    /** the currently selected date using an iso-like format YYYY-MM-DD, in the calendar system provided (not iso8601) */
    date: PropTypes.string,
    /** the direction of the library - internally the library will use rtl for rtl-languages but this can be overridden here for more control */
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    /** The date format to use either `YYYY-MM-DD` or `DD-MM-YYYY` */
    format: PropTypes.oneOf(['YYYY-MM-DD', 'DD-MM-YYYY']),
    /** the width of input field */
    inputWidth: PropTypes.string,
    /** any valid locale -  if none provided, the internal library will fallback to the user locale (more info here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/hooks/internal/useResolvedLocaleOptions.ts#L15) */
    locale: PropTypes.string,
    /** The maximum selectable date */
    maxDate: PropTypes.string,
    /** The minimum selectable date */
    minDate: PropTypes.string,
    /** numbering system to use - full list here https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/numberingSystems.ts */
    numberingSystem: PropTypes.string,
    /** Whether to use strict validation by showing errors for out-of-range dates when enabled (default), and warnings when disabled */
    strictValidation: PropTypes.bool,
    /** the format to display for the week day, i.e. Monday (long), Mon (short), M (narrow) */
    weekDayFormat: PropTypes.oneOf(['narrow', 'short', 'long']),
    /** the width of the calendar component */
    width: PropTypes.string,
}
