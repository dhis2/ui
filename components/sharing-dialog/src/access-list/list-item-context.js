import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
} from '../constants.js'
import i18n from '../locales/index.js'

const LABELS = {
    [SHARE_TARGET_PUBLIC]: i18n.t('Anyone logged in'),
    [SHARE_TARGET_GROUP]: i18n.t('User group'),
    [SHARE_TARGET_USER]: i18n.t('User'),
}

export const ListItemContext = ({ target, id }) => {
    return (
        <>
            <p>{target === SHARE_TARGET_USER ? id : LABELS[target] ?? ''}</p>
            <style jsx>{`
                p {
                    font-size: 14px;
                    color: ${colors.grey700};
                    margin: 6px 0 0 0;
                    padding: 0;
                }
            `}</style>
        </>
    )
}

ListItemContext.propTypes = {
    target: PropTypes.oneOf([
        SHARE_TARGET_PUBLIC,
        SHARE_TARGET_GROUP,
        SHARE_TARGET_USER,
    ]).isRequired,
    id: PropTypes.string,
}
