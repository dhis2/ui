import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from '../constants.js'
import i18n from '../locales/index.js'

const MESSAGE_MAP = {
    [ACCESS_NONE]: i18n.t('No access'),
    [ACCESS_VIEW_ONLY]: i18n.t('Can view'),
    [ACCESS_VIEW_AND_EDIT]: i18n.t('Can view and edit'),
}

export const ListItemContext = ({ access }) => {
    const metadataMessage = i18n.t('Metadata: {{metadataAccessDescription}}', {
        metadataAccessDescription: MESSAGE_MAP[access.metadata],
    })
    const dataMessage = i18n.t('Data: {{dataAccessDescription}}', {
        dataAccessDescription: MESSAGE_MAP[access.data],
    })

    return (
        <>
            <p>{metadataMessage}</p>
            <span>{dataMessage}</span>
            <style jsx>{`
                p {
                    font-size: 14px;
                    color: ${colors.grey700};
                    margin: 6px 0 0 0;
                    padding: 0;
                }
                span {
                    display: block;
                    font-size: 14px;
                    color: ${colors.grey700};
                    padding: 0;
                }
            `}</style>
        </>
    )
}

ListItemContext.propTypes = {
    access: PropTypes.shape({
        data: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
        metadata: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
    }).isRequired,
}
