import { MenuItem } from '@dhis2-ui/menu'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'
import i18n from '../locales/index.js'
import { useInstanceInfo } from './use-instance-info.js'

const InstanceInfo = ({ instanceData }) => {
    const { version, revision } = instanceData

    return (
        <div className="instance-info">
            <span className="version">
                {`${i18n.t('DHIS2 version')} ${version}`}
            </span>

            {', '}

            <span className="build">{`${i18n.t('Build')} ${revision}`}</span>

            <style jsx>{`
                .version,
                .build {
                    white-space: nowrap;
                }
            `}</style>
        </div>
    )
}

InstanceInfo.propTypes = {
    instanceData: PropTypes.shape({
        revision: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
    }).isRequired,
}

const menuItemWithBorderTopStyles = resolve`
    li {
        border-top: 1px solid ${colors.grey400};
        color: ${colors.grey700};
        font-size: 14px;
    }
`

const MenuItemWithBorderTop = ({ children }) => (
    <>
        <MenuItem
            className={menuItemWithBorderTopStyles.className}
            label={children}
        />

        {menuItemWithBorderTopStyles.styles}
    </>
)

MenuItemWithBorderTop.propTypes = {
    children: PropTypes.any.isRequired,
}

export const InstanceAndAppInfo = ({ appName, appVersion }) => {
    const { loading, error, data } = useInstanceInfo()

    // Displays neither the error nor any
    // other instance info when an error occurs
    return (
        <MenuItemWithBorderTop>
            {loading && <div>{i18n.t('Loading instance information..')}</div>}

            {!loading && !error && (
                <InstanceInfo instanceData={data.systemInfo} />
            )}

            {appName && appVersion && (
                <div className="app-info">{`${appName}, ${appVersion}`}</div>
            )}
        </MenuItemWithBorderTop>
    )
}

InstanceAndAppInfo.propTypes = {
    appName: PropTypes.string,
    appVersion: PropTypes.string,
}
