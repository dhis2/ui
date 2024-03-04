import { InputField, InputFieldProps } from '@dhis2-ui/input'
import React, { useRef, useState } from 'react'
import { CalendarProps } from '../calendar/calendar.js'
import { CalendarWidget } from './calendar-widget.js'
import { InputClearButton } from './input-clear-button.js'

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
    const onFocus = () => setOpen(true)

    return (
        <>
            <div className="calendar-input-wrapper" ref={ref}>
                <InputField
                    label="Pick a date"
                    {...rest}
                    type="text"
                    onFocus={onFocus}
                    value={date}
                />

                {clearable && (
                    <InputClearButton
                        dense={rest.dense}
                        error={rest.error}
                        loading={rest.loading}
                        insetBlockStartButton="27px"
                        insetInlineEndButton="6px"
                        insetInlineEndIcon="36px"
                        valid={rest.valid}
                        warning={rest.warning}
                        onDateSelect={(selectedDate) => {
                            setOpen(false)
                            onDateSelect?.(selectedDate)
                        }}
                    />
                )}
            </div>

            {open && (
                <CalendarWidget
                    onClose={() => setOpen(false)}
                    onDateSelect={(selectedDate) => {
                        setOpen(false)
                        onDateSelect?.(selectedDate)
                    }}
                    calendar={calendar}
                    date={date}
                    dir={dir}
                    locale={locale}
                    numberingSystem={numberingSystem}
                    weekDayFormat={weekDayFormat}
                    timeZone={timeZone}
                    width={width}
                    cellSize={cellSize}
                />
            )}

            <style jsx>{`
                .calendar-input-wrapper {
                    position: relative;
                }
            `}</style>
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
