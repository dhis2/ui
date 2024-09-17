import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const flipMargin = (margin) => {
    const splitMargin = margin.split(/\s+/)
    if (splitMargin?.length === 4) {
        return [
            splitMargin[0],
            splitMargin[3],
            splitMargin[2],
            splitMargin[1],
        ].join(' ')
    }
    return margin
}

const Divider = ({ className, dataTest, dense, margin }) => {
    return (
        <div className={className} data-test={dataTest} role="separator">
            <style jsx>{`
                div {
                    display: inline-block;
                    width: 100%;
                    height: 1px;
                    background-color: ${colors.grey300};
                }
            `}</style>
            <style jsx>{`
                div {
                    margin: ${dense ? `${spacers.dp4} 0` : margin};
                }
                :dir(rtl) {
                    margin: ${dense ? `${spacers.dp4} 0` : flipMargin(margin)};
                }
            `}</style>
        </div>
    )
}

Divider.defaultProps = {
    dataTest: 'dhis2-uicore-divider',
    margin: `${spacers.dp8} 0`,
}

Divider.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    margin: PropTypes.string,
}

export { Divider }
