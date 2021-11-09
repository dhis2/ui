import { colors } from '@dhis2/ui-constants'
import React from 'react'
import i18n from '../locales/index.js'

export const Title = () => {
    return (
        <>
            <h2>
                {i18n.t('Apply dashboard sharing settings to visualizations')}
            </h2>
            <style jsx>{`
                h2 {
                    font-size: 16px;
                    color: ${colors.grey900};
                }
            `}</style>
        </>
    )
}
