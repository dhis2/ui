import PropTypes from 'prop-types'

export const StyleOptionsProps = {
    backgroundColor: PropTypes.string,
    dayHoverBackgroundColor: PropTypes.string,
    dayNamesColor: PropTypes.string,
    selectedDayBackgroundColor: PropTypes.string,
    wrapperBorderColor: PropTypes.string,
    chevronColor: PropTypes.string,
    headerBackground: PropTypes.string,
    width: PropTypes.string,
    cellSize: PropTypes.string,
}

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
