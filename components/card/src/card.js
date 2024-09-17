import { colors, elevations } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const Card = ({ className, children, dataTest }) => (
    <div className={cx(className)} data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                display: inline-block;
                position: relative;

                width: 100%;
                height: 100%;

                border-radius: 3px;
                background: ${colors.white};
                box-shadow: ${elevations.e100};
            }
        `}</style>
    </div>
)

Card.defaultProps = {
    dataTest: 'dhis2-uicore-card',
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export { Card }
