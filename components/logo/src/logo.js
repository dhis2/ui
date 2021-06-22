import PropTypes from 'prop-types'
import React from 'react'
import { LogoIconSvg } from './logo-icon-svg'
import { LogoSvg } from './logo-svg'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/*
 * This should likely not live in ui-core, but in ui-widgets
 */

/**
 * @module
 * @param {Logo.PropTypes} props
 * @returns {React.Component}
 */

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

export const LogoIcon = ({ className, dataTest }) => (
    <LogoIconSvg iconColor={blue} className={className} dataTest={dataTest} />
)

LogoIcon.defaultProps = {
    dataTest: 'dhis2-uicore-logoicon',
}

LogoIcon.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export const LogoIconWhite = ({ className, dataTest }) => (
    <LogoIconSvg iconColor={white} className={className} dataTest={dataTest} />
)

LogoIconWhite.defaultProps = {
    dataTest: 'dhis2-uicore-logoiconwhite',
}

LogoIconWhite.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export const Logo = ({ className, dataTest }) => (
    <LogoSvg
        iconColor={blue}
        textColor={dark}
        className={className}
        dataTest={dataTest}
    />
)

Logo.defaultProps = {
    dataTest: 'dhis2-uicore-logo',
}

Logo.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export const LogoWhite = ({ className, dataTest }) => (
    <LogoSvg
        iconColor={white}
        textColor={white}
        className={className}
        dataTest={dataTest}
    />
)

LogoWhite.defaultProps = {
    dataTest: 'dhis2-uicore-logowhite',
}

LogoWhite.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
