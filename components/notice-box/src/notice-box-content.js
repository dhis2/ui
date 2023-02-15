import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { NoticeBoxMessage } from './notice-box-message.js'
import { NoticeBoxTitle } from './notice-box-title.js'

export const NoticeBoxContent = ({ children, dataTest, title }) => {
    return (
        <div data-test={dataTest}>
            <NoticeBoxTitle title={title} dataTest={`${dataTest}-title`} />
            <NoticeBoxMessage dataTest={`${dataTest}-message`}>
                {children}
            </NoticeBoxMessage>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    gap: ${spacers.dp8};
                    padding-top: 3px;
                }
            `}</style>
        </div>
    )
}

NoticeBoxContent.defaultProps = {
    dataTest: 'dhis2-uicore-noticebox-content',
}

NoticeBoxContent.propTypes = {
    children: PropTypes.node,
    dataTest: PropTypes.string,
    title: PropTypes.string,
}
