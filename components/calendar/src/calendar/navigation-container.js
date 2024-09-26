import { colors, spacers } from '@dhis2/ui-constants'
import { IconChevronLeft16, IconChevronRight16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

const wrapperBorderColor = colors.grey300
const headerBackground = colors.grey050

export const NavigationContainer = ({
    languageDirection,
    currMonth,
    currYear,
    nextMonth,
    nextYear,
    prevMonth,
    prevYear,
    unfocusable,
}) => {
    const PreviousIcon =
        languageDirection === 'ltr' ? IconChevronLeft16 : IconChevronRight16
    const NextIcon =
        languageDirection === 'ltr' ? IconChevronRight16 : IconChevronLeft16

    // Ethiopic years - when localised to English - add the era (i.e. 2015 ERA1), which is redundant in practice (like writing AD for gregorian years)
    // there is an ongoing discussion in JS-Temporal polyfill whether the era should be included or not, but for our case, it's safer to remove it
    const currentYearLabel = currYear.label?.toString().replace(/ERA1/, '')

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
                            tabIndex={unfocusable ? -1 : 0}
                        >
                            <PreviousIcon />
                        </button>
                    </div>
                    <div className="curr">
                        <span className="label">{currMonth.label}</span>
                    </div>
                    <div className="next">
                        <button
                            onClick={nextMonth.navigateTo}
                            data-test="calendar-next-month"
                            name="next-month"
                            aria-label={`${i18n.t(`Go to ${nextMonth.label}`)}`}
                            type="button"
                            tabIndex={unfocusable ? -1 : 0}
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
                            tabIndex={unfocusable ? -1 : 0}
                        >
                            <PreviousIcon />
                        </button>
                    </div>
                    <div className="curr">
                        <span
                            data-test="calendar-current-year"
                            className="label"
                        >
                            {currentYearLabel}
                        </span>
                    </div>
                    <div className="next">
                        <button
                            onClick={nextYear.navigateTo}
                            name="next-year"
                            aria-label={`${i18n.t('Go to next year')}`}
                            type="button"
                            tabIndex={unfocusable ? -1 : 0}
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
                    padding: ${spacers.dp4};
                    border-bottom: 1px solid ${wrapperBorderColor};
                    background-color: ${headerBackground};
                    font-size: 1.08em;
                }
                .month,
                .year {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 50%;
                }
                .prev,
                .next,
                .curr {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .prev,
                .next {
                    width: 24px;
                    flex-shrink: 0;
                }
                .curr {
                    flex: 0 1 auto;
                    overflow: hidden;
                }
                button {
                    background: none;
                    border: 0;
                    padding: ${spacers.dp4};
                    height: 24px;
                    width: 24px;
                    color: ${colors.grey600};
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                button:hover {
                    background-color: ${colors.grey200};
                    color: ${colors.grey900};
                    cursor: pointer;
                }
                button:active {
                    background-color: ${colors.grey300};
                }
                .label {
                    padding: ${spacers.dp4} ${spacers.dp8};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                    max-width: 100%;
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
    }),
    languageDirection: PropTypes.oneOf(['ltr', 'rtl']),
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
    unfocusable: PropTypes.bool,
}

NavigationContainer.propTypes = NavigationContainerProps
