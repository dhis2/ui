import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { NoticeBoxMessage } from './notice-box-message.js'
import { NoticeBoxTitle } from './notice-box-title.js'

export const NoticeBoxContent = ({
    children,
    dataTest = 'dhis2-uicore-noticebox-content',
    title,
    dense = false,
}) => {
    return (
        <div data-test={dataTest}>
            <NoticeBoxTitle
                title={title}
                dense={dense}
                dataTest={`${dataTest}-title`}
            />
            <NoticeBoxMessage dense={dense} dataTest={`${dataTest}-message`}>
                {children}
            </NoticeBoxMessage>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    gap: ${dense ? '2px' : spacers.dp8};
                    padding-block-start: ${dense ? '0' : '3px'};
                }
            `}</style>
        </div>
    )
}

NoticeBoxContent.propTypes = {
    children: PropTypes.node,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    title: PropTypes.string,
}
