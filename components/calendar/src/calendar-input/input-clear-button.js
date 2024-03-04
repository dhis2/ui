import { Button } from '@dhis2-ui/button'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

export function InputClearButton({
    dense,
    error,
    insetBlockStartButton,
    insetInlineEndButton,
    insetInlineEndIcon,
    loading,
    valid,
    warning,
    onDateSelect,
}) {
    return (
        <div
            className={cx('calendar-clear-button', {
                // ToDo: this is a workaround to show the clear button in the correct place when an icon is shown.
                // Long-term, we should abstract and share the logic multi-select uses for the input-wrapper
                // https://dhis2.atlassian.net/browse/DHIS2-14848
                'with-icon':
                    valid ||
                    error ||
                    warning ||
                    loading,
                'with-dense-wrapper': dense,
            })}
        >
            <Button
                dataTest="calendar-clear-button"
                secondary
                small
                onClick={() => onDateSelect(null)}
                type="button"
            >
                {i18n.t('Clear')}
            </Button>

            <style jsx>{`
                .calendar-clear-button {
                    position: absolute;
                    inset-inline-end: ${insetInlineEndButton};
                    inset-block-start: ${insetBlockStartButton};
                }

                .calendar-clear-button.with-icon {
                    inset-inline-end: ${insetInlineEndIcon};
                }

                .calendar-clear-button.with-dense-wrapper {
                    inset-block-start: 23px;
                }
            `}</style>
        </div>
    )
}

InputClearButton.propTypes = {
    insetBlockStartButton: PropTypes.string.isRequired,
    insetInlineEndButton: PropTypes.string.isRequired,
    insetInlineEndIcon: PropTypes.string.isRequired,
    onDateSelect: PropTypes.func.isRequired,
    dense: PropTypes.bool,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
}
