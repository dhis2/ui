import { colors, spacers } from '@dhis2/ui-constants'
import { IconChevronLeft16, IconChevronRight16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

const chevronColor = colors.grey600
const wrapperBorderColor = colors.grey300
const headerBackground = colors.grey050

export const NavigationContainer = ({ languageDirection, pickerOptions }) => {
    const PreviousIcon =
        languageDirection === 'ltr' ? IconChevronLeft16 : IconChevronRight16
    const NextIcon =
        languageDirection === 'ltr' ? IconChevronRight16 : IconChevronLeft16

    const { currMonth, currYear, nextMonth, nextYear, prevMonth, prevYear } =
        pickerOptions

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
                            <PreviousIcon color={chevronColor} />
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
                        >
                            <NextIcon color={chevronColor} />
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
                            <PreviousIcon color={chevronColor} />
                        </button>
                    </div>
                    <div className="curr">
                        <span className="label">{currYear.label}</span>
                    </div>
                    <div className="next">
                        <button
                            onClick={nextYear.navigateTo}
                            name="next-year"
                            aria-label={`${i18n.t('Go to next year')}`}
                            type="button"
                        >
                            <NextIcon color={chevronColor} />
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                button {
                    background: none;
                    border: 0;
                }
                .month,
                .year {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    cursor: default;
                }

                .month .curr,
                .year .curr {
                    flex: 2;
                    white-space: nowrap;
                }

                .prev,
                .next {
                    flex: 1;
                    text-align: center;
                }

                .prev button,
                .next button {
                    padding: ${spacers.dp4};
                }

                .prev:hover button,
                .next:hover button {
                    background-color: ${colors.grey200};
                    cursor: pointer;
                }

                .label {
                    display: flex;
                    padding: 4px 8px;
                    justify-content: center;
                    min-height: 16px;
                }

                .navigation-container {
                    height: ${spacers.dp36};
                    gap: ${spacers.dp8};
                    padding: ${spacers.dp4};
                    display: flex;
                    flex-direction: row;
                    border-bottom: 1px solid ${wrapperBorderColor};
                    background-color: ${headerBackground};
                    font-size: 1.08em; /*15px*/
                }
            `}</style>
        </>
    )
}

NavigationContainer.propTypes = {
    languageDirection: PropTypes.oneOf(['ltr', 'rtl']),
    pickerOptions: PropTypes.shape({
        currMonth: PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
        currYear: PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
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
    }),
}
