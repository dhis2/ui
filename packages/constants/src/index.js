export const colors = {
    /* colors */

    /*blue*/
    blue900: '#093371',
    blue800: '#0d47a1',
    blue700: '#1565c0',
    blue600: '#147cd7',
    blue500: '#2196f3',
    blue400: '#42a5f5',
    blue300: '#90caf9',
    blue200: '#c5e3fc',
    blue100: '#e3f2fd',
    blue050: '#f5fbff',

    /*teal*/
    teal900: '#00332b',
    teal800: '#004d40',
    teal700: '#00695c',
    teal600: '#00796b',
    teal500: '#00897b',
    teal400: '#009688',
    teal300: '#4db6ac',
    teal200: '#b2dfdb',
    teal100: '#e0f2f1',
    teal050: '#f1f9f9',

    /*red*/
    red900: '#330202',
    red800: '#891515',
    red700: '#b71c1c',
    red600: '#c62828',
    red500: '#d32f2f',
    red400: '#f44336',
    red300: '#e57373',
    red200: '#ffcdd2',
    red100: '#ffe5e8',
    red050: '#fff5f6',

    /*yellow*/
    yellow900: '#6f3205',
    yellow800: '#bb460d',
    yellow700: '#e56408',
    yellow600: '#ff8302',
    yellow500: '#ff9302',
    yellow400: '#ffa902',
    yellow300: '#ffc324',
    yellow200: '#ffe082',
    yellow100: '#ffecb3',
    yellow050: '#fff8e1',

    /*green*/
    green900: '#103713',
    green800: '#1b5e20',
    green700: '#2e7d32',
    green600: '#388e3c',
    green500: '#43a047',
    green400: '#4caf50',
    green300: '#a5d6a7',
    green200: '#c8e6c9',
    green100: '#e8f5e9',
    green050: '#f4fbf4',

    /*grey*/
    grey900: '#212934',
    grey800: '#404b5a',
    grey700: '#4a5768',
    grey600: '#6e7a8a',
    grey500: '#a0adba',
    grey400: '#d5dde5',
    grey300: '#e8edf2',
    grey200: '#f3f5f7',
    grey100: '#f8f9fa',
    grey050: '#fbfcfd',

    white: '#ffffff',
}

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

export const layers = {
    applicationTop: 2000,
    blocking: 3000,
    alert: 9999,
}

export const spacersNum = {
    dp4: 4,
    dp8: 8,
    dp12: 12,
    dp16: 16,
    dp24: 24,
    dp32: 32,
    dp48: 48,
    dp64: 64,
    dp96: 96,
    dp128: 128,
    dp192: 192,
    dp256: 256,
    dp384: 384,
    dp512: 512,
    dp640: 640,
}

export const spacers = {
    dp4: `${spacersNum.dp4}px`,
    dp8: `${spacersNum.dp8}px`,
    dp12: `${spacersNum.dp12}px`,
    dp16: `${spacersNum.dp16}px`,
    dp24: `${spacersNum.dp24}px`,
    dp32: `${spacersNum.dp32}px`,
    dp48: `${spacersNum.dp48}px`,
    dp64: `${spacersNum.dp64}px`,
    dp96: `${spacersNum.dp96}px`,
    dp128: `${spacersNum.dp128}px`,
    dp192: `${spacersNum.dp192}px`,
    dp256: `${spacersNum.dp256}px`,
    dp384: `${spacersNum.dp384}px`,
    dp512: `${spacersNum.dp512}px`,
    dp640: `${spacersNum.dp640}px`,
}

export const elevations = {
    e100: '0 0 1px 0 rgba(64,75,90,0.20), 0 2px 1px 0 rgba(64,75,90,0.28)',
    e200: '0 0 1px 0 rgba(64,75,90,0.29), 0 3px 8px -2px rgba(64,75,90,0.30)',
    e300: '0 0 1px 0 rgba(64,75,90,0.30), 0 8px 18px -4px rgba(64,75,90,0.28)',
    e400: '0 0 1px 0 rgba(64,75,90,0.30), 0 14px 28px -6px rgba(64,75,90,0.30)',
}
