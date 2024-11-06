import { colors, spacers, theme } from '@dhis2/ui-constants'
import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React from 'react'

export function MenuLoading({ message }) {
    return (
        <div className="container">
            <div>
                <CircularLoader small />
            </div>

            {message}

            <style jsx>{`
                .container {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    gap: ${spacers.dp16};
                    align-items: center;
                    justify-content: center;
                    color: ${colors.grey700};
                    font-family: ${theme.fonts};
                    font-size: 13px;
                    padding-block: ${spacers.dp8};
                    padding-inline: ${spacers.dp24};
                    background: rgba(255, 255, 255, 0.8);
                }
            `}</style>
        </div>
    )
}

MenuLoading.propTypes = {
    message: PropTypes.string,
}
