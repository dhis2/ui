import { spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const Selection = ({ icon, label, className }) => (
    <div className={cx(className, 'root')}>
        {icon && <div className="root-icon">{icon}</div>}
        {label}

        <style jsx>{`
            .root {
                display: flex;
                align-items: center;
                user-select: none;
            }

            .root-icon {
                margin-right: ${spacers.dp8};
                width: ${spacers.dp16};
                height: ${spacers.dp16};
                overflow: hidden;
            }
        `}</style>
    </div>
)

Selection.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.node,
}

export { Selection }
