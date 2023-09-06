export type ColorBase = 'blue' | 'teal' | 'red' | 'yellow' | 'green' | 'grey'
export type ColorVariant =
    | '900'
    | '800'
    | '700'
    | '600'
    | '500'
    | '400'
    | '300'
    | '200'
    | '100'
    | '050'
export type ColorProp = `${ColorBase}${ColorVariant}` | 'white'

export const colors: Record<ColorProp, string>

export type ElevantionVariant = 'e100' | 'e200' | 'e300' | 'e400'
export const elevations: Record<ElevantionVariant, string>

export type SpacerVariant =
    | 'dp4'
    | 'dp8'
    | 'dp12'
    | 'dp16'
    | 'dp24'
    | 'dp32'
    | 'dp48'
    | 'dp64'
    | 'dp96'
    | 'dp128'
    | 'dp192'
    | 'dp256'
    | 'dp384'
    | 'dp512'
    | 'dp640'
export const spacersNum: Record<SpacerVariant, number>
export const spacers: Record<SpacerVariant, string>

export type LayerVariant = 'applicationTop' | 'blocking' | 'alert'
export const layer: Record<LayerVariant, number>

export type ThemeBase = 'primary' | 'secondary'
export type ThemeVariant =
    | '900'
    | '800'
    | '700'
    | '600'
    | '500'
    | '400'
    | '300'
    | '200'
    | '100'
    | '050'
export type ThemeProp =
    | `${ThemeBase}${ThemeVariant}`
    | 'default'
    | 'error'
    | 'valid'
    | 'warning'
    | 'disabled'
    | 'focus'
    | 'fonts'
export const theme: Record<ThemeProp, string>
