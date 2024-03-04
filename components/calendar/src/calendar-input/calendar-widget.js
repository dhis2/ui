import { Card } from '@dhis2-ui/card'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { Calendar } from '../calendar/calendar.js'

const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, 2],
    },
}

export const CalendarWidget = forwardRef(function CalendarWidget({
    onClose,
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
}, ref) {
    return (
        <Layer onBackdropClick={() => onClose}>
            <Popper
                reference={ref}
                placement="bottom-start"
                modifiers={[offsetModifier]}
            >
                <Card>
                    <Calendar
                        onDateSelect={onDateSelect}
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
    )
})

CalendarWidget.propTypes = {
    calendar: PropTypes.any.isRequired,
    onClose: PropTypes.func.isRequired,
    onDateSelect: PropTypes.func.isRequired,
    cellSize: PropTypes.string,
    date: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    locale: PropTypes.string,
    numberingSystem: PropTypes.string,
    timeZone: PropTypes.string,
    weekDayFormat: PropTypes.oneOf(['narrow', 'short', 'long']),
    width: PropTypes.string,
}
