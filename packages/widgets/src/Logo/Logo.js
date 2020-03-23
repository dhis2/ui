import React from 'react'
import propTypes from '@dhis2/prop-types'

import { LogoSvg } from './LogoSvg'
import { LogoIconSvg } from './LogoIconSvg'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/*
 * This should likely not live in ui-core, but in ui-widgets
 */

/**
 * @module
 * @param {Logo.PropTypes} props
 * @returns {React.Component}
 */

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {string} [dataTest]
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
    className: propTypes.string,
    dataTest: propTypes.string,
}

export const LogoIconWhite = ({ className, dataTest }) => (
    <LogoIconSvg iconColor={white} className={className} dataTest={dataTest} />
)

LogoIconWhite.defaultProps = {
    dataTest: 'dhis2-uicore-logoiconwhite',
}

LogoIconWhite.propTypes = {
    className: propTypes.string,
    dataTest: propTypes.string,
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
    className: propTypes.string,
    dataTest: propTypes.string,
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
    className: propTypes.string,
    dataTest: propTypes.string,
}
