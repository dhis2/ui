import { colors, spacers } from '@dhis2/ui-constants'
import { IconChevronLeft16, IconChevronRight16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

const wrapperBorderColor = colors.grey300
const headerBackground = colors.grey100

export const NavigationContainer = ({
    languageDirection,
    currMonth,
    currYear,
    nextMonth,
    nextYear,
    prevMonth,
    prevYear,
    navigateToYear,
    navigateToMonth,
    months,
    years,
}) => {
    const PreviousIcon =
        languageDirection === 'ltr' ? IconChevronLeft16 : IconChevronRight16
    const NextIcon =
        languageDirection === 'ltr' ? IconChevronRight16 : IconChevronLeft16

    const handleYearChange = (e) => {
        const targetYear = parseInt(e.target.value)
        navigateToYear(targetYear)
    }

    const handleMonthChange = (e) => {
        const selectedMonth = months.find(
            (month) => month.label === e.target.value
        )

        if (selectedMonth) {
            navigateToMonth(selectedMonth.value)
        }
    }

    return (
        <>
            <div className="navigation-container">
                <div className="month">
                    <div className="prev">
                        <button
                            onClick={prevMonth.navigateTo}
                            name="previous-month"
                            data-test="calendar-previous-month"
                            aria-label={`${i18n.t(`Go to ${prevMonth.label}`)}`}
                            type="button"
                        >
                            <PreviousIcon />
                        </button>
                    </div>
                    <div className="monthList">
                        <select
                            value={currMonth.label}
                            onChange={handleMonthChange}
                            className="month-select"
                            data-test="calendar-month-select"
                        >
                            {months.map((month) => (
                                <option key={month.value} value={month.label}>
                                    {month.label}
                                </option>
                            ))}
                        </select>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.1465 6.85363L10.8536 6.14652L8.00004 3.29297L5.14648 6.14652L5.85359 6.85363L8.00004 4.70718L10.1465 6.85363ZM5.85367 9.1466L5.14656 9.8537L8.00011 12.7073L10.8537 9.8537L10.1466 9.1466L8.00011 11.293L5.85367 9.1466Z"
                                fill={colors.grey700}
                            />
                        </svg>
                    </div>
                    <div className="next">
                        <button
                            onClick={nextMonth.navigateTo}
                            data-test="calendar-next-month"
                            name="next-month"
                            aria-label={`${i18n.t(`Go to ${nextMonth.label}`)}`}
                            type="button"
                        >
                            <NextIcon />
                        </button>
                    </div>
                </div>
                <div className="year">
                    <div className="prev">
                        <button
                            onClick={prevYear.navigateTo}
                            name="previous-year"
                            aria-label={`${i18n.t('Go to previous year')}`}
                            type="button"
                        >
                            <PreviousIcon />
                        </button>
                    </div>
                    <div className="yearList">
                        <select
                            value={currYear.value}
                            onChange={handleYearChange}
                            className="year-select"
                            data-test="calendar-year-select"
                        >
                            {years.map((year) => (
                                <option key={year.value} value={year.value}>
                                    {year.label}
                                </option>
                            ))}
                        </select>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.1465 6.85363L10.8536 6.14652L8.00004 3.29297L5.14648 6.14652L5.85359 6.85363L8.00004 4.70718L10.1465 6.85363ZM5.85367 9.1466L5.14656 9.8537L8.00011 12.7073L10.8537 9.8537L10.1466 9.1466L8.00011 11.293L5.85367 9.1466Z"
                                fill={colors.grey700}
                            />
                        </svg>
                    </div>
                    <div className="next">
                        <button
                            onClick={nextYear.navigateTo}
                            name="next-year"
                            aria-label={`${i18n.t('Go to next year')}`}
                            type="button"
                        >
                            <NextIcon />
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .navigation-container {
                    display: flex;
                    justify-content: space-between;
                    gap: ${spacers.dp4};
                    padding: ${spacers.dp4};
                    border-bottom: 1px solid ${wrapperBorderColor};
                    background-color: ${headerBackground};
                    font-size: 1em;
                    width: 100%;
                }
                .month,
                .year {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid ${colors.grey300};
                    border-radius: 3px;
                    background: ${colors.white};
                }
                .month {
                    flex-grow: 1;
                }
                .prev {
                    border-inline-end: 1px solid ${colors.grey300};
                }
                .next {
                    border-inline-start: 1px solid ${colors.grey300};
                }
                .prev,
                .next,
                .monthList,
                .yearList {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .prev,
                .next {
                    width: 20px;
                    flex-shrink: 0;
                }
                .monthList,
                .yearList {
                    flex: 0 1 auto;
                    overflow: hidden;
                    position: relative;
                }
                .monthList {
                    flex-grow: 1;
                    width: 100%;
                }
                .monthList svg,
                .yearList svg {
                    position: absolute;
                    inset-inline-end: 0px;
                    pointer-events: none;
                }
                button {
                    background: none;
                    border: 0;
                    padding: ${spacers.dp4} 2px;
                    height: 24px;
                    width: 20px;
                    color: ${colors.grey700};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                button:hover {
                    background-color: ${colors.grey200};
                    color: ${colors.grey900};
                    cursor: pointer;
                }
                .month-select,
                .year-select {
                    padding-inline-start: 4px;
                    padding-inline-end: 16px;
                    height: 24px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-align: start;
                    width: 100%;
                    max-width: 100%;
                    border-radius: 0px;
                    border: 0;
                    color: ${colors.grey800};
                    background: none;
                    appearance: none;
                }
                .month-select:hover,
                .year-select:hover {
                    background: ${colors.grey200};
                    cursor: pointer;
                }
                .month-select:focus,
                .month-select-active,
                .year-select:focus,
                .year-select-active {
                    background: ${colors.grey200};
                    outline-color: ${colors.grey700};
                }
            `}</style>
        </>
    )
}

export const NavigationContainerProps = {
    currMonth: PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    currYear: PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.number,
    }),
    languageDirection: PropTypes.oneOf(['ltr', 'rtl']),
    months: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })
    ),
    navigateToMonth: PropTypes.func,
    navigateToYear: PropTypes.func,
    nextMonth: PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        navigateTo: PropTypes.func,
    }),
    nextYear: PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        navigateTo: PropTypes.func,
    }),
    prevMonth: PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        navigateTo: PropTypes.func,
    }),
    prevYear: PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        navigateTo: PropTypes.func,
    }),
    years: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })
    ),
}

NavigationContainer.propTypes = NavigationContainerProps
