import {
    useDatePicker,
    useResolvedDirection,
    validateDateString,
} from '@dhis2/multi-calendar-dates'
import type { SupportedCalendar } from '@dhis2/multi-calendar-dates/build/types/types'
import { Button } from '@dhis2-ui/button'
import { InputField } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { CalendarContainer } from '../calendar/calendar-container.tsx'
import i18n from '../locales/index.js'

const offsetModifier = {
    name: 'offset' as const,
    options: {
        offset: [0, 2] as [number, number],
    },
}

interface DateValidation {
    valid?: boolean
    error?: boolean
    warning?: boolean
    validationText?: string
    validationCode?: string
}

interface DateSelectPayload {
    calendarDateString: string | null
    validation: DateValidation
}

export interface CalendarInputProps {
    /** the calendar to use such gregory, ethiopic, nepali - full supported list here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/calendars.ts */
    calendar: string
    /** Called with signature `(null)` \|\| `({ dateCalendarString: string, validation: { error: boolean, warning: boolean, validationText: string} })` with `dateCalendarString` being the stringified date in the specified calendar in the format `yyyy-MM-dd` */
    onDateSelect: (payload: DateSelectPayload) => void
    /** the size of a single cell in the table forming the calendar */
    cellSize?: string
    /** Whether the clear button is displayed */
    clearable?: boolean
    /** 'data-test' attribute of `InputField` component */
    dataTest?: string
    /** the currently selected date using an iso-like format YYYY-MM-DD, in the calendar system provided (not iso8601) */
    date?: string
    /** the direction of the library - internally the library will use rtl for rtl-languages but this can be overridden here for more control */
    dir?: 'ltr' | 'rtl'
    /** The date format to use either `YYYY-MM-DD` or `DD-MM-YYYY` */
    format?: 'YYYY-MM-DD' | 'DD-MM-YYYY'
    /** the width of input field */
    inputWidth?: string
    /** any valid locale - if none provided, the internal library will fallback to the user locale */
    locale?: string
    /** The maximum selectable date */
    maxDate?: string
    /** The minimum selectable date */
    minDate?: string
    /** numbering system to use - full list here https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/numberingSystems.ts */
    numberingSystem?: string
    /** When true, only shows years in the past (current year and earlier) */
    pastOnly?: boolean
    /** Whether to use strict validation by showing errors for out-of-range dates when enabled (default), and warnings when disabled */
    strictValidation?: boolean
    /** the format to display for the week day, i.e. Monday (long), Mon (short), M (narrow) */
    weekDayFormat?: 'narrow' | 'short' | 'long'
    /** the width of the calendar component */
    width?: string
    [key: string]: unknown
}

export const CalendarInput = ({
    onDateSelect: parentOnDateSelect,
    calendar,
    date,
    dir,
    locale,
    numberingSystem,
    weekDayFormat = 'narrow',
    width = '300px',
    cellSize = '32px',
    clearable,
    minDate,
    maxDate,
    format,
    strictValidation,
    inputWidth,
    dataTest = 'dhis2-uiwidgets-calendar-inputfield',
    pastOnly,
    ...rest
}: CalendarInputProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const calendarRef = useRef<HTMLDivElement>(null)
    const popperRef = useRef<HTMLElement | null>(null)
    const [open, setOpen] = useState(false)
    const [partialDate, setPartialDate] = useState(date)

    useEffect(() => setPartialDate(date), [date])

    const useDatePickerOptions = useMemo(
        () => ({
            calendar: calendar as SupportedCalendar,
            locale,
            numberingSystem,
            weekDayFormat,
            pastOnly,
        }),
        [calendar, locale, numberingSystem, weekDayFormat, pastOnly]
    )

    const onChooseDate = (
        date: string | null | undefined,
        validationOptions?: {
            calendar?: SupportedCalendar
            format?: 'YYYY-MM-DD' | 'DD-MM-YYYY'
            minDateString?: string
            maxDateString?: string
            strictValidation?: boolean
        }
    ) => {
        if (!date) {
            parentOnDateSelect?.({
                calendarDateString: null,
                validation: { valid: true },
            })
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
            calendar: calendar as SupportedCalendar,
            format,
            minDateString: minDate,
            maxDateString: maxDate,
            strictValidation,
        }),
        [calendar, format, maxDate, minDate, strictValidation]
    )

    const pickerResults = useDatePicker({
        onDateSelect: (result) => {
            const { calendarDateString } = result as {
                calendarDateString: string
            }
            onChooseDate(calendarDateString, validationOptions)
            setOpen(false)
        },
        date: date as string,
        ...validationOptions,
        options: useDatePickerOptions,
    }) as ReturnType<typeof useDatePicker> & { isValid: boolean }

    const handleChange = (e: { value: string | undefined }) => {
        setOpen(false)
        setPartialDate(e.value)
    }

    const handleBlur = (_: unknown, e: React.FocusEvent<HTMLInputElement>) => {
        if (
            e.relatedTarget &&
            (calendarRef.current?.contains(e.relatedTarget as Node) ||
                popperRef.current === e.relatedTarget)
        ) {
            return
        }

        onChooseDate(partialDate, validationOptions)
        setOpen(false)
    }

    const onFocus = () => {
        setOpen(true)
        const restOnFocus = rest.onFocus as (() => void) | undefined
        restOnFocus?.()
    }

    const languageDirection = useResolvedDirection(dir, locale)

    const calendarProps = useMemo(
        () => ({
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
            navigateToYear: pickerResults.navigateToYear,
            navigateToMonth: pickerResults.navigateToMonth,
            months: pickerResults.months,
            years: pickerResults.years,
            languageDirection,
        }),
        [cellSize, date, pickerResults, width, languageDirection]
    )

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
                            onClick={() => onChooseDate(null)}
                            type="button"
                        >
                            {i18n.t('Clear')}
                        </Button>
                    </div>
                )}
            </div>
            {open && (
                <Layer onBackdropClick={() => setOpen(false)}>
                    <Popper
                        reference={ref}
                        placement="bottom-start"
                        modifiers={[offsetModifier]}
                        onFirstUpdate={(component: {
                            elements?: { popper?: HTMLElement }
                        }) => {
                            popperRef.current =
                                component?.elements?.popper ?? null
                        }}
                    >
                        <CalendarContainer
                            {...calendarProps}
                            calendarRef={calendarRef}
                        />
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
