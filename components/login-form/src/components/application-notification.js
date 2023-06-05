import { spacers } from '@dhis2/ui-constants'
import { NoticeBox } from '@dhis2-ui/notice-box'
import React from 'react'
import { useLoginForm } from '../login-form-provider/index.js'

export const ApplicationNotification = () => {
    const { applicationNotification } = useLoginForm()
    return (
        <>
            {applicationNotification && (
                <div className="app-notification">
                    <NoticeBox>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: applicationNotification,
                            }}
                        ></span>
                    </NoticeBox>
                </div>
            )}
            <style>
                {`
            .app-notification {
              margin: 0 auto ${spacers.dp24};
              max-width: 368px;
            }
          `}
            </style>
        </>
    )
}
