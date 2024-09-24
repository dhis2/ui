import {
    useDatePicker,
    useResolvedDirection,
    validateDateString
} from '@dhis2/multi-calendar-dates'
import { Button } from '@dhis2-ui/button'
import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { CalendarContainer } from '../calendar/calendar-container.js'
import { CalendarProps } from '../calendar/calendar.js'
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
    minDate,
    maxDate,
    format, // todo: props and types for format and validation
    strictValidation,
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
            timeZone, // todo: we probably shouldn't have had timezone here in the first place
            numberingSystem,
            weekDayFormat,
        }),
        [calendar, locale, numberingSystem, timeZone, weekDayFormat]
    )

    const pickerResults = useDatePicker({
        onDateSelect: (result) => {
            setOpen(false)
            parentOnDateSelect?.(result)
        },
        date,
        minDate: minDate,
        maxDate: maxDate,
        strictValidation: strictValidation,
        format: format,
        options: useDatePickerOptions,
    })

    const handleChange = (e) => {
        setOpen(false)
        setPartialDate(e.value)
    }

    const handleBlur = (_, e) => {
        const validated = validateDateString(partialDate, {
            calendar,
            format,
            minDateString: minDate,
            maxDateString: maxDate,
            strictValidation,
        })
        parentOnDateSelect?.({ calendarDateString: partialDate, ...validated })

        if (
            excludeRef.current &&
            !excludeRef.current.contains(e.relatedTarget)
        ) {
            setOpen(false)
        }
    }

    const onFocus = () => {
        setOpen(true)
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
                    type="text"
                    onFocus={onFocus}
                    value={partialDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                                parentOnDateSelect?.(null)
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
}
