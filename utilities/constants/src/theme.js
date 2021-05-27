import { colors } from './colors.js'

/**
 * @module constants/theme
 * @desc DHIS2 theme colors
 */
export const theme = {
    /* theme */
    fonts: 'Roboto, sans-serif',

    /*primary*/
    primary900: colors.blue900,
    primary800: colors.blue800,
    primary700: colors.blue700,
    primary600: colors.blue600,
    primary500: colors.blue500,
    primary400: colors.blue400,
    primary300: colors.blue300,
    primary200: colors.blue200,
    primary100: colors.blue100,
    primary050: colors.blue050,

    /*secondary*/
    secondary900: colors.teal900,
    secondary800: colors.teal800,
    secondary700: colors.teal700,
    secondary600: colors.teal600,
    secondary500: colors.teal500,
    secondary400: colors.teal400,
    secondary300: colors.teal300,
    secondary200: colors.teal200,
    secondary100: colors.teal100,
    secondary050: colors.teal050,

    /*status*/
    default: colors.grey700,
    error: colors.red500,
    valid: colors.blue600,
    warning: colors.yellow500,
    disabled: colors.grey600,
}
