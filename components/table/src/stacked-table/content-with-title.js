import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

export const ContentWithTitle = ({ title, children }) => (
    <Fragment>
        {title && <span className="title">{title}</span>}
        <span className="content">{children}</span>

        <style jsx>{`
            .title {
                display: block;
                white-space: normal;
                min-height: 24px;
                font-size: 13px;
                line-height: 16px;
                padding: 8px 0 4px;
                font-weight: normal;
                color: ${colors.grey700};
            }

            .content {
                display: block;
                padding: 0 0 8px 0;
                font-size: 14px;
                line-height: 18px;
            }

            .content:first-child {
                padding-top: 8px;
                padding-bottom: 8px;
            }
        `}</style>
    </Fragment>
)

ContentWithTitle.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}
