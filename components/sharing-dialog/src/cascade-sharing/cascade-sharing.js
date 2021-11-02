import PropTypes from 'prop-types'
import React from 'react'
import { Controls } from './controls.js'
import { StaticInfo } from './static-info.js'
import { Title } from './title.js'
import { UpdateInfo } from './update-info.js'

export const CascadeSharing = ({ id, entityAmount }) => {
    return (
        <>
            <Title />
            <StaticInfo />
            <UpdateInfo id={id} entityAmount={entityAmount} />
            <Controls id={id} entityAmount={entityAmount} />
        </>
    )
}

CascadeSharing.propTypes = {
    entityAmount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
