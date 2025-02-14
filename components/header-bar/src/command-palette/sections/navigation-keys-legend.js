import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import {
    BackNavigationIcon,
    CloseKeyIcon,
    MultiDirectionNavigationIcon,
    SelectKeyIcon,
    VerticalNavigationIcon,
} from '../icons/navigation-icons.js'
import NavigationKey from './navigation-key.js'

const NavigationKeysLegend = ({ showBackspace, verticalOnly }) => {
    return (
        <div data-test={'headerbar-navigation-keys-legend'}>
            <NavigationKey
                label={i18n.t('to navigate')}
                icon={
                    verticalOnly ? (
                        <VerticalNavigationIcon />
                    ) : (
                        <MultiDirectionNavigationIcon />
                    )
                }
            />
            <NavigationKey
                label={i18n.t('to select')}
                icon={<SelectKeyIcon />}
            />
            <NavigationKey label={i18n.t('to close')} icon={<CloseKeyIcon />} />
            {showBackspace && (
                <NavigationKey
                    label={i18n.t('to go back one level')}
                    icon={<BackNavigationIcon />}
                />
            )}
            <style jsx>{`
                div {
                    padding: ${spacers.dp8} ${spacers.dp12};
                    background: ${colors.grey050};
                    border-block-start: 1px solid ${colors.grey300};
                    display: flex;
                    gap: ${spacers.dp24};
                }
            `}</style>
        </div>
    )
}

NavigationKeysLegend.propTypes = {
    showBackspace: PropTypes.bool,
    verticalOnly: PropTypes.bool,
}

export default NavigationKeysLegend
