import React from 'react'
import { CalendarInput as component } from '../index.js'
import { CalendarWithClearButton } from '../stories/calendar-input.stories.js'
export default { title: 'CalendarInputTesting', component }

export {
    EthiopicWithAmharic,
    EthiopicWithEnglish,
    NepaliWithEnglish,
    NepaliWithNepali,
    GregorianWithArabic,
    GregorianWithEnglish,
    IslamicWithArabic,
} from '../stories/calendar-input.stories.js'

export const TestCalendarWithClearButton = () => {
    const params = new URLSearchParams(location.search)
    const calendar = params.get('calendar') ?? 'gregory'
    const initialDate = params.get('initialDate') ?? null

    return <CalendarWithClearButton calendar={calendar} date={initialDate} />
}
