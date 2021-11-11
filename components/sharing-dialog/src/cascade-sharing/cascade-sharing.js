import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import { Title } from '../text/index.js'
import { Controls } from './controls.js'
import { StaticInfo } from './static-info.js'

export const CascadeSharing = ({ id, entityAmount }) => {
    return (
        <>
            <Title>
                {i18n.t('Apply dashboard sharing settings to visualizations')}
            </Title>
            <StaticInfo />
            <Controls id={id} entityAmount={entityAmount} />
        </>
    )
}

CascadeSharing.propTypes = {
    entityAmount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
