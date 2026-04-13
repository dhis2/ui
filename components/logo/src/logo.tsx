import React from 'react'
import { LogoIconSvg } from './logo-icon-svg.tsx'
import { LogoSvg } from './logo-svg.tsx'

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

export interface LogoIconProps {
    className?: string
    dataTest?: string
}

export const LogoIcon = ({
    className,
    dataTest = 'dhis2-uicore-logoicon',
}: LogoIconProps) => (
    <LogoIconSvg iconColor={blue} className={className} dataTest={dataTest} />
)

export interface LogoIconWhiteProps {
    className?: string
    dataTest?: string
}

export const LogoIconWhite = ({
    className,
    dataTest = 'dhis2-uicore-logoiconwhite',
}: LogoIconWhiteProps) => (
    <LogoIconSvg iconColor={white} className={className} dataTest={dataTest} />
)

export interface LogoProps {
    className?: string
    dataTest?: string
}

export const Logo = ({
    className,
    dataTest = 'dhis2-uicore-logo',
}: LogoProps) => (
    <LogoSvg
        iconColor={blue}
        textColor={dark}
        className={className}
        dataTest={dataTest}
    />
)

export interface LogoWhiteProps {
    className?: string
    dataTest?: string
}

export const LogoWhite = ({
    className,
    dataTest = 'dhis2-uicore-logowhite',
}: LogoWhiteProps) => (
    <LogoSvg
        iconColor={white}
        textColor={white}
        className={className}
        dataTest={dataTest}
    />
)
