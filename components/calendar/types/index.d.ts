import * as React from 'react'
import { useDatePicker } from '@dhis2/multi-calendar-dates'
import { InputFieldProps } from '@dhis2-ui/input'

export type CalendarDir = 'ltr' | 'rtl'

type CalendarPickerParam = Parameters<typeof useDatePicker>[0]
type CalendarPickerOptions = CalendarPickerParam['options']

export interface CalendarProps {
    /**
     * the calendar to use such gregory, ethiopic, nepali - full supported list here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/calendars.ts
     */
    calendar: CalendarPickerOptions['calendar']
    /**
     * Called with signature `(null)` \|\| `({ dateCalendarString: string, dateCalendar: Temporal.ZonedDateTime })` with `dateCalendarString` being the stringified date in the specified calendar in the format `yyyy-MM-dd`
     */
    onDateSelect: CalendarPickerParam['onDateSelect']
    /**
     * the size of a single cell in the table forming the calendar
     */
    cellSize?: string
    /**
     * the currently selected date using an iso-like format YYYY-MM-DD, in the calendar system provided (not iso8601)
     */
    date?: string
    /**
     * the direction of the library - internally the library will use rtl for rtl-languages but this can be overridden here for more control
     */
    dir?: CalendarDir
    /**
     * any valid locale -  if none provided, the internal library will fallback to the user locale (more info here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/hooks/internal/useResolvedLocaleOptions.ts#L15)
     */
    locale?: string
    /**
     * numbering system to use - full list here https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/numberingSystems.ts
     */
    numberingSystem?: CalendarPickerOptions['numberingSystem']
    /**
     * the timeZone to use
     */
    timeZone?: CalendarPickerOptions['timeZone']
    /**
     * the format to display for the week day, i.e. Monday (long), Mon (short), M (narrow)
     */
    weekDayFormat?: CalendarPickerOptions['weekDayFormat']
    /**
     * the width of the calendar component
     */
    width?: string
}

export const Calendar: React.FC<CalendarProps>

export type CalendarInputProps = Omit<
    InputFieldProps,
    'label' | 'type' | 'value'
> &
    CalendarProps

export const CalendarInput: React.FC<CalendarInputProps>
