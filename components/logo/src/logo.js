import PropTypes from 'prop-types'
import React from 'react'
import { LogoIconSvg } from './logo-icon-svg.js'
import { LogoSvg } from './logo-svg.js'

/*
 * These are official colors for dhis2 logos.
 *
 * They are isolated here and not in @dhis2/ui-constants as they should not be
 * shared with any other components.
 *
 * https://github.com/dhis2/dhis2-identity
 *
 */
const blue = '#0080d4'
const white = '#ffffff'
const dark = '#212225'

export const LogoIcon = ({
    className,
    dataTest = 'dhis2-uicore-logowhite',
}) => <LogoIconSvg iconColor={blue} className={className} dataTest={dataTest} />

LogoIcon.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export const LogoIconWhite = ({
    className,
    dataTest = 'dhis2-uicore-logowhite',
}) => (
    <LogoIconSvg iconColor={white} className={className} dataTest={dataTest} />
)

LogoIconWhite.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export const Logo = ({ className, dataTest = 'dhis2-uicore-logowhite' }) => (
    <LogoSvg
        iconColor={blue}
        textColor={dark}
        className={className}
        dataTest={dataTest}
    />
)

Logo.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export const LogoWhite = ({
    className,
    dataTest = 'dhis2-uicore-logowhite',
}) => (
    <LogoSvg
        iconColor={white}
        textColor={white}
        className={className}
        dataTest={dataTest}
    />
)

LogoWhite.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
