import { Button } from '@dhis2-ui/button'
import { InputField, InputFieldProps } from '@dhis2-ui/input'
import { useDatePicker, validateDateString } from '@dhis2/multi-calendar-dates'
import { IconCheckmark24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useCallback, useRef, useState } from 'react'
import { CalendarProps } from '../calendar/calendar.js'
import { CalendarWidget } from './calendar-widget.js'
import { InputClearButton } from './input-clear-button.js'

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

export const CalendarInputEditable = ({
    onDateSelect,
    calendar,
    cellSize,
    clearable,
    date,
    dir,
    locale,
    numberingSystem,
    weekDayFormat,
    timeZone,
    width,
    onError,
    ...rest
} = {}) => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    const [invalidMessage, _setInvalidMessage] = useState('')
    const setInvalidMessage = useCallback((nextInvalidMessage) => {
        _setInvalidMessage((prevInvalidMessage) => {
            const isUpdate = prevInvalidMessage !== nextInvalidMessage

            if (isUpdate) {
                onError?.(nextInvalidMessage)
            }

            return nextInvalidMessage
        })
    }, [onError])

    const [tempInputValue, _setTempInputValue] = useState(date)
    const currentValidDate = validateDateString(tempInputValue)
        ? tempInputValue
        : date
    const { calendarWeekDays } = useDatePicker({
        date: currentValidDate,
        options: { calendar },
    })

    const setTempInputValue = useCallback((nextTempValue) => {
        _setTempInputValue(nextTempValue)
      let nextInvalidMessage

      try {
          nextInvalidMessage = validateDateString(nextTempValue)
      } catch (e) {
        console.error(e)
      }

      if (!nextTempValue) {
          onDateSelect({
              calendarDate: null,
              calendarDateString: '',
          })
      } else if (!nextInvalidMessage) {
          setInvalidMessage('')
          const calendarDate = searchCalendarWeekDays(nextTempValue, calendarWeekDays)
          onDateSelect({
              calendarDate,
              calendarDateString: nextTempValue,
          })
      } else {
          setInvalidMessage(nextInvalidMessage)
      }
    }, [onDateSelect, calendarWeekDays, setInvalidMessage])

    const onDateSelectWrapper = useCallback((selectedDate) => {
        setOpen(false)
        setTempInputValue(selectedDate?.calendarDateString || '')
    }, [setTempInputValue])

    const showInvalidMessage = !!tempInputValue && !!invalidMessage
    const warning = rest.warning || (!rest.required && showInvalidMessage)
    const error = rest.error || (rest.required && !!showInvalidMessage)

    return (
        <>
            <div className="calendar-input-wrapper" ref={ref}>
                <div className="input">
                    <InputField
                        label="Pick a date"
                        {...rest}
                        type="text"
                        value={tempInputValue}
                        onChange={({ value }) => setTempInputValue(value)}
                        warning={warning || (!rest.required && showInvalidMessage)}
                        error={error || (rest.required && !!showInvalidMessage)}
                        helpText={rest.helpText || (tempInputValue && invalidMessage)}
                    />
                </div>

                {clearable && (
                    <InputClearButton
                        dense={rest.dense}
                        error={error}
                        loading={rest.loading}
                        insetBlockStartButton="27px"
                        insetInlineEndButton="51px"
                        insetInlineEndIcon="81px"
                        valid={rest.valid}
                        warning={warning}
                        onDateSelect={(selectedDate) => {
                            setOpen(false)
                            onDateSelect?.(selectedDate)
                        }}
                    />
                )}

                <div className="open-calendar-widget">
                    <Button
                        icon={<IconCheckmark24 color="#000000" />}
                        onClick={() => setOpen(true)}
                    />
                </div>
            </div>

            {open && (
                <CalendarWidget
                    onClose={() => setOpen(false)}
                    onDateSelect={onDateSelectWrapper}
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

            <style jsx>
                {`
                    .calendar-input-wrapper {
                        position: relative;
                        display: flex;
                        gap: 8px;
                    }

                    .input {
                        flex-grow: 1;
                    }

                    .open-calendar-widget {
                        padding-top: 22px;
                        flex-shrink: 1;
                    }
                `}
            </style>
        </>
    )
}

CalendarInputEditable.defaultProps = {
    dataTest: 'dhis2-uiwidgets-calendar-inputfield',
}

CalendarInputEditable.propTypes = {
    ...CalendarProps,
    ...InputFieldProps,
    onError: PropTypes.func,
}
