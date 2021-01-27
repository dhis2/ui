import { create } from '@storybook/theming/create'
import { colors } from '@dhis2/ui-constants'

const DHIS2_ACCENT = "#43cbcb"

/**
 * See here for an example of these values:
 * https://github.com/storybookjs/storybook/blob/master/lib/theming/src/themes/light.ts
 */
export default create({
    /** Main theme ('light' or 'dark') */
    base: 'light',

    /**
     * Color palette
     */
    /** Not sure where this is applied */
    // colorPrimary: '#FF4785', // Storybook coral

    /**
     * '4-square' icon in sidebar, sidebar highlight color, link color,
     * toolbar icon color (when hovered), focused input highlight
     */
    colorSecondary: DHIS2_ACCENT,

    /**
     * UI
     */
    /** Background of side bar & rest of page: */
    appBg: colors.grey050,

    /** Background of preview & docs ('app') frame: */
    // appContentBg: 'white',

    /** Color for 'glowing' placeholders for loading stories AND lines in app frame: */
    // appBorderColor: 'red',

    /** Border radius of app frame */
    // appBorderRadius: 4,

    /**
     * Typography ---
     */
    /** Affects text in sidebar */
    // fontBase: '"Georgia", serif',
    // fontCode: 'monospace',

    /**
     * Text colors
     */
    /** Color for text in sidebar and addons */
    // textColor: 'blue',

    /** Not sure where this applies */
    // textInverseColor: 'green', // 'rgba(255,255,255,0.9)',

    /** Text in search bar */
    // textMutedColor: 'purple',

    /**
     * Toolbar default and active colors ---
     */
    /** Color of text & icons in toolbars (addons and top bar) when unselected */
    // barTextColor: 'purple',

    /** Text color and underline of selected tab in toolbars (e.g. Canvas, Controls) */
    barSelectedColor: DHIS2_ACCENT,

    /** Background color of toolbars (addons and top bar) */
    // barBg: 'yellow',

    /**
     * Form colors
     */
    /** Mostly self-explanatory */
    // inputBg: "red",

    /** Border while not focused - when focused, uses 'colorSecondary' */
    // inputBorder: 'purple',

    // inputTextColor: 'green',
    // inputBorderRadius: 0,

    /**
     * Brand
     */
    brandTitle: 'DHIS 2 UI',
    // TODO: Better place to send this?
    brandUrl: 'https://www.dhis2.org',
    // TODO: Serve this statically?
    brandImage:
        'https://raw.githubusercontent.com/dhis2/dhis2-identity/master/web/Logo/Default/dhis2-logo-rgb-positive.svg',
})
