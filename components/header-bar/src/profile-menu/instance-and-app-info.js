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
        <>
            <span className="version">
                {i18n.t('DHIS2 {{version}}', { version })}
            </span>

            {', '}

            <span className="build">{`${i18n.t('Build')} ${revision}`}</span>

            <style jsx>{`
                .version,
                .build {
                    white-space: nowrap;
                }
            `}</style>
        </>
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
        line-height: 17px;
        user-select: auto;
    }

    li:hover {
        background-color: ${colors.white};
        cursor: default;
    }
`

const MenuItemWithBorderTop = ({ children }) => (
    <>
        <MenuItem
            className={menuItemWithBorderTopStyles.className}
            label={children}
            dataTest="dhis2-ui-headerbar-instanceandappinfo"
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
            <div
                className="instance-infos"
                data-test="dhis2-ui-headerbar-instanceinfo"
            >
                {loading && <div>{i18n.t('Checking DHIS2 version...')}</div>}

                {error && (
                    <div>
                        {i18n.t('There was a problem getting DHIS2 version.')}
                    </div>
                )}

                {!loading && !error && (
                    <InstanceInfo instanceData={data.systemInfo} />
                )}
            </div>

            {appName && appVersion && (
                <div
                    className="app-info"
                    data-test="dhis2-ui-headerbar-appinfo"
                >
                    {`${appName} ${appVersion}`}
                </div>
            )}

            <style jsx>{`
                .instance-infos {
                    margin-bottom: 6px;
                }
            `}</style>
        </MenuItemWithBorderTop>
    )
}

InstanceAndAppInfo.propTypes = {
    appName: PropTypes.string,
    appVersion: PropTypes.string,
}
