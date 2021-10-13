import { mutuallyExclusive } from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Children } from 'react'

const ButtonStrip = ({ className, children, middle, end, dataTest }) => (
    <div
        className={cx(className, { start: !middle && !end, middle, end })}
        data-test={dataTest}
    >
        {Children.map(children, (child) => (
            <div className="box">{child}</div>
        ))}

        <style jsx>{`
            div {
                display: flex;
            }

            div.middle {
                justify-content: center;
            }

            div.end {
                justify-content: flex-end;
            }

            .box {
                margin-left: ${spacers.dp16};
            }

            .box:first-child {
                margin-left: 0;
            }
        `}</style>
    </div>
)

const alignmentPropType = mutuallyExclusive(['middle', 'end'], PropTypes.bool)

ButtonStrip.defaultProps = {
    dataTest: 'dhis2-uicore-buttonstrip',
}

ButtonStrip.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Horizontal alignment for buttons. Mutually exclusive with `middle` prop */
    end: alignmentPropType,
    /** Horizontal alignment. Mutually exclusive with `end` prop */
    middle: alignmentPropType,
}

export { ButtonStrip }
