import { Button } from '@dhis2-ui/button'
import { Card } from '@dhis2-ui/card'
import { InputField, InputFieldProps } from '@dhis2-ui/input'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { useDatePicker, validateDateString } from '@dhis2/multi-calendar-dates'
import { IconCheckmark24 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useRef, useState } from 'react'
import { Calendar, CalendarProps } from '../calendar/calendar.js'
import i18n from '../locales/index.js'

const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, 2],
    },
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
                    <div
                        className={cx('calendar-clear-button', {
                            // ToDo: this is a workaround to show the clear button in the correct place when an icon is shown.
                            // Long-term, we should abstract and share the logic multi-select uses for the input-wrapper
                            // https://dhis2.atlassian.net/browse/DHIS2-14848
                            'with-icon':
                                rest.valid ||
                                error ||
                                warning ||
                                rest.loading,
                            'with-dense-wrapper': rest.dense,
                        })}
                    >
                        <Button
                            dataTest="calendar-clear-button"
                            secondary
                            small
                            onClick={() => {
                                onDateSelectWrapper(null)
                            }}
                            type="button"
                        >
                            {i18n.t('Clear')}
                        </Button>
                    </div>
                )}

                <div className="open-calendar-widget">
                    <Button
                        icon={<IconCheckmark24 color="#000000" />}
                        onClick={() => setOpen(true)}
                    />
                </div>
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
                        </Card>
                    </Popper>
                </Layer>
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

                    .calendar-clear-button {
                        position: absolute;
                        inset-inline-end: 51px;
                        inset-block-start: 27px;
                    }

                    .calendar-clear-button.with-icon {
                        inset-inline-end: 81px;
                    }

                    .calendar-clear-button.with-dense-wrapper {
                        inset-block-start: 23px;
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

CalendarInput.defaultProps = {
    dataTest: 'dhis2-uiwidgets-calendar-inputfield',
}

CalendarInput.propTypes = {
    ...CalendarProps,
    ...InputFieldProps,
    onError: PropTypes.func,
}
