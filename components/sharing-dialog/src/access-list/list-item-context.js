import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from '../sharing-constants.js'

export const ListItemContext = ({ access }) => {
    let message

    switch (access) {
        case ACCESS_NONE:
            message = i18n.t('No access')
            break
        case ACCESS_VIEW_ONLY:
            message = i18n.t('Can view')
            break
        case ACCESS_VIEW_AND_EDIT:
            message = i18n.t('Can view and edit')
            break
        default:
            message = ''
    }

    return (
        <p>
            {message}
            <style jsx>{`
                p {
                    font-size: 14px;
                    color: ${colors.grey700};
                    margin: 6px 0 0 0;
                    padding: 0;
                }
            `}</style>
        </p>
    )
}

ListItemContext.propTypes = {
    access: PropTypes.string.isRequired,
}
