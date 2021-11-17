import { colors, theme, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const ButtonBase = React.forwardRef(function ButtonBase(props, ref) {
    const { children, dataTest, ...rest } = props

    return (
        <button ref={ref} data-test={dataTest} {...rest}>
            {children}
            <style jsx>{`
                button {
                    border-radius: 4px;
                    font-weight: 400;
                    letter-spacing: 0.5px;
                    transition: all 0.15s cubic-bezier(0.4, 0, 0.6, 1);
                    color: ${colors.grey900};
                    height: 36px;
                    padding: 0 ${spacers.dp12};
                    font-size: 14px;
                    line-height: 16px;
                    border: 1px solid ${colors.grey500};
                    background-color: #f9fafb;
                }

                button:hover {
                    border-color: ${colors.grey500};
                    background-color: ${colors.grey200};
                }

                button:disabled {
                    cursor: not-allowed;
                    border-color: ${colors.grey400};
                    background-color: #f9fafb;
                    box-shadow: none;
                    color: ${theme.disabled};
                    fill: ${theme.disabled};
                }

                button:focus {
                    background-color: #f9fafb;
                    outline: 3px solid ${theme.focus};
                    outline-offset: 2px;
                    transition: none;
                }

                button:active {
                    border-color: ${colors.grey500};
                    background-color: ${colors.grey200};
                    box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1) inset;
                }
            `}</style>
        </button>
    )
})

ButtonBase.defaultProps = {
    children: null,
    dataTest: '',
}

ButtonBase.propTypes = {
    /** Component to render inside the button */
    children: PropTypes.node,
    /**
     * A string that will be applied as a `data-test` attribute on the button element
     * for identification during testing
     */
    dataTest: PropTypes.string,
}
