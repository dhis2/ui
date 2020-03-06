import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { spacers } from '../theme.js'

export const Content = ({ children, overflow }) => (
    <span className={cx({ overflow })}>
        {children}

        <style jsx>{`
            span {
                margin: 0 ${spacers.dp12};
                color: inherit;
                white-space: nowrap;
            }

            .overflow {
                max-width: 150px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `}</style>
    </span>
)

Content.propTypes = {
    children: propTypes.oneOfType([propTypes.string, propTypes.number]),
    overflow: propTypes.bool,
}
