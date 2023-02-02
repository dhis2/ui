import PropTypes from 'prop-types'

export const CalendarProps = {
    calendar: PropTypes.any.isRequired,
    cellSize: PropTypes.string,
    date: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    locale: PropTypes.string,
    numberingSystem: PropTypes.string,
    timeZone: PropTypes.string,
    weekDayFormat: PropTypes.string,
    width: PropTypes.string,
    onDateSelect: PropTypes.func,
}
