import { layers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const createClickHandler = (onClick) => (event) => {
    // don't respond to clicks that originated in the children
    if (onClick && event.target === event.currentTarget) {
        onClick({}, event)
    }
}

const Cover = ({ children, className, dataTest, onClick, translucent }) => (
    <div
        className={cx(className, { translucent })}
        onClick={createClickHandler(onClick)}
        data-test={dataTest}
    >
        {children}
        <style jsx>{`
            div {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: ${layers.applicationTop};
            }
            div.translucent {
                background: rgba(33, 43, 54, 0.4);
            }
        `}</style>
    </div>
)

Cover.defaultProps = {
    dataTest: 'dhis2-uicore-componentcover',
}

Cover.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Adds a semi-transparent background to the cover */
    translucent: PropTypes.bool,
    onClick: PropTypes.func,
}

export { Cover }
