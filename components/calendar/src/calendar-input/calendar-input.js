import { Button } from '@dhis2-ui/button'
import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { useDatePicker } from '@dhis2/multi-calendar-dates'
import cx from 'classnames'
import React, { useRef, useState, useEffect } from 'react'
import { Calendar, CalendarProps } from '../calendar/calendar.js'
import i18n from '../locales/index.js'

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
    clearable,
    editable,
    minDate,
    maxDate,
    format,
    validation,
    ...rest
} = {}) => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    const [error, setError] = useState('')
    const [warning, setWarning] = useState('')

    const calendarProps = React.useMemo(() => {
        const onDateSelectWrapper = (selectedDate) => {
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

    const pickerOptions = useDatePicker({
        onDateSelect: (result) => {
            setOpen(false)
            onDateSelect(result)
        },
        date: date,
        minDate: minDate,
        maxDate: maxDate,
        validation: validation,
        format: format,
        options: calendarProps,
    })

    useEffect(() => {
        setError(pickerOptions.errorMessage || '')
        setWarning(pickerOptions.warningMessage || '')
    }, [
        pickerOptions.errorMessage,
        pickerOptions.warningMessage,
        pickerOptions.isValid,
    ])

    const handleChange = (e) => {
        onDateSelect?.({ calendarDateString: e.value })
    }

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
                    value={date}
                    onChange={editable ? handleChange : undefined}
                    validationText={error || warning}
                    error={!!error}
                    warning={!!warning}
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
                            <Calendar
                                {...calendarProps}
                                {...pickerOptions}
                                date={date}
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
