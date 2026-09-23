import * as React from 'react'
import { useDatePicker, validateDateString } from '@dhis2/multi-calendar-dates'
import { InputFieldProps } from '@dhis2-ui/input'

export type CalendarDir = 'ltr' | 'rtl'

type CalendarPickerParam = Parameters<typeof useDatePicker>[0]
type CalendarPickerOptions = CalendarPickerParam['options']

/**
 * The `validation` object CalendarInput attaches to its `onDateSelect`
 * payload. Not produced by the bare `Calendar` widget - CalendarInput
 * computes it itself via `validateDateString` (whose `error`/`warning`/
 * `valid` combination depends on the `strictValidation` prop), except
 * when the date is cleared, in which case it's just `{ valid: true }`.
 */
export type CalendarInputValidation = ReturnType<typeof validateDateString>

export type CalendarInputOnDateSelectPayload =
    | {
          calendarDateString: string
          validation: CalendarInputValidation
      }
    | {
          calendarDateString: null
          validation: { valid: true }
      }

export interface CalendarProps {
    /**
     * the calendar to use such gregory, ethiopic, nepali - full supported list here: https://github.com/dhis2/multi-calendar-dates/blob/main/src/constants/calendars.ts
     */
    calendar: CalendarPickerOptions['calendar']
    /**
     * Called with signature `(null)` \|\| `({ dateCalendarString: string })` with `dateCalendarString` being the stringified date in the specified calendar in the format `yyyy-MM-dd`
     */
    onDateSelect: CalendarPickerParam['onDateSelect']
    /**
     * the size of a single cell in the table forming the calendar
     */
    cellSize?: string

    /**
     * Add a "clear" button to delete the selected date
     */
    clearable?: boolean
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
     * When true, only shows years in the past (current year and earlier)
     */
    pastOnly?: boolean
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

export type CalendarInputProps = Omit<InputFieldProps, 'type' | 'value'> &
    Omit<CalendarProps, 'onDateSelect'> & {
        /**
         * Called with `{ calendarDateString: null, validation: { valid: true } }`
         * when the date is cleared, otherwise with `{ calendarDateString: string, validation }`
         * where `validation` reflects the result of validating against `minDate`/`maxDate`/
         * `format` (see `CalendarInputValidation`), influenced by `strictValidation`.
         */
        onDateSelect: (payload: CalendarInputOnDateSelectPayload) => void
        /**
         * Optional format for the date. Determines how the date is displayed
         * or processed. If not provided it supports both formats
         */
        format?: 'YYYY-MM-DD' | 'DD-MM-YYYY'
        /**
         * The maximum selectable date
         */
        maxDate?: string
        /**
         * The minimum selectable date
         */
        minDate?: string
        /**
         * Whether to use strict validation by showing errors for out-of-range dates when enabled (default), and warnings when disabled
         */
        strictValidation?: boolean
    }

export const CalendarInput: React.FC<CalendarInputProps>
