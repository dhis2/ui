import React, { useState } from 'react'

import PropTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'

import { Button, InputField } from '../'
import { AccessSelect } from './AccessSelect'
import { shareBlockStyles } from './SharingDialog.styles'

export const ShareBlock = ({ onAdd }) => {
    const [userOrGroup, setUserOrGroup] = useState(undefined)
    const [access, setAccess] = useState(undefined)

    const onSubmit = e => {
        e.preventDefault()
        onAdd({ type: 'user', id: userOrGroup, access })
        setUserOrGroup(undefined)
        setAccess(undefined)
    }

    return (
        <div className="share-block">
            <style jsx>{shareBlockStyles}</style>
            <p>{i18n.t('Share with users and groups')}</p>
            <form onSubmit={onSubmit} className="sharing-inputs">
                <InputField
                    placeholder={i18n.t('Search for user, group or role')}
                    inputWidth="400px"
                    value={userOrGroup}
                    onChange={({ value }) => setUserOrGroup(value)}
                />
                <div className="select-wrap">
                    <AccessSelect access={access} onChange={setAccess} />
                </div>
                <Button type="submit" large disabled={!userOrGroup || !access}>
                    {i18n.t('Share')}
                </Button>
            </form>
        </div>
    )
}

ShareBlock.propTypes = {
    onAdd: PropTypes.func,
}
