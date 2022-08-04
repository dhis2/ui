# Constants

There are are a number of constants that can be imported from the UI library that are useful for applying the [DHIS2 design system](https://github.com/dhis2/design-system) to your application.

```js
import { colors, theme, spacers, layers, elevation } from '@dhis2/ui'
```

If you need access to these variables in CSS (not recommended), see the `<CssVariables>` component documentation for making these variables accessible in CSS.

## Colors

The `colors` object provides hex code color values in the DHIS2 color palette in a range of values from light to dark. Make sure to see [Design System: Color](https://github.com/dhis2/design-system/blob/master/principles/color.md) for color usage guidelines.

### Example

```js
import { colors } from '@dhis2/ui'

const mediumBlue = colors.blue500 // '#2196f3'
```

### Reference

See [the Design System for a reference](https://github.com/dhis2/design-system/blob/master/principles/color.md#color-scale-reference) of the available colors.

## Theme

The `theme` object provides useful values for DHIS2 font and color themes. All the colors can also be found in the `colors` object described above, but the properties in `theme` have more semantic names as they relate to validation statuses or the general theme. Consult [Design System: Color](https://github.com/dhis2/design-system/blob/master/principles/color.md) for color usage guidelines and a [visual reference](https://github.com/dhis2/design-system/blob/master/principles/color.md#color-scale-reference) to the avialable colors.

### Example

```js
import { theme } from '@dhis2/ui'

const errorColor = theme.error // = '#d32f2f' = colors.red500
const primaryButtonColor = theme.primary600 // = '#147cd7' = colors.blue600
```

### Reference

| `theme` key    | Value                  | `colors` equivalent |
| -------------- | ---------------------- | ------------------- |
| `fonts`        | `'Roboto, sans-serif'` | n/a                 |
| `default`      | `'#404b5a'`            | `colors.grey700`    |
| `error`        | `'#d32f2f'`            | `colors.red500`     |
| `valid`        | `'#147cd7'`            | `colors.blue600`    |
| `warning`      | `'#ff9302'`            | `colors.yellow500`  |
| `disabled`     | `'#6C7787'`            | `colors.grey600`    |
| `primary900`   | `'#093371'`            | `colors.blue900`    |
| `primary800`   | `'#0d47a1'`            | `colors.blue800`    |
| `primary700`   | `'#1565c0'`            | `colors.blue700`    |
| `primary600`   | `'#147cd7'`            | `colors.blue600`    |
| `primary500`   | `'#2196f3'`            | `colors.blue500`    |
| `primary400`   | `'#42a5f5'`            | `colors.blue400`    |
| `primary300`   | `'#90caf9'`            | `colors.blue300`    |
| `primary200`   | `'#c5e3fc'`            | `colors.blue200`    |
| `primary100`   | `'#e3f2fd'`            | `colors.blue100`    |
| `primary050`   | `'#f5fbff'`            | `colors.blue050`    |
| `secondary900` | `'#00332b'`            | `colors.teal900`    |
| `secondary800` | `'#004d40'`            | `colors.teal800`    |
| `secondary700` | `'#00695c'`            | `colors.teal700`    |
| `secondary600` | `'#00796b'`            | `colors.teal600`    |
| `secondary500` | `'#00897b'`            | `colors.teal500`    |
| `secondary400` | `'#009688'`            | `colors.teal400`    |
| `secondary300` | `'#4db6ac'`            | `colors.teal300`    |
| `secondary200` | `'#b2dfdb'`            | `colors.teal200`    |
| `secondary100` | `'#e0f2f1'`            | `colors.teal100`    |
| `secondary050` | `'#f1f9f9'`            | `colors.teal050`    |

## Spacers

The `spacers` object provides typical spacing values, in `px`. The `spacersNum` object contains the same values, but without the `px` suffix (i.e. just the numbers). These values are chosen based on an 8-pt scale. Make sure to see [Design System: Spacing](https://github.com/dhis2/design-system/blob/master/principles/layout.md#spacing) for guidelines about using spacing in an app.

### Example

```js
import { spacers, spacersNum } from '@dhis2/ui'

const smallSpace = spacers.dp8 // '8px'
const mediumSpaceWithoutPx = spacersNum.dp24 // 24
```

### Reference

| Key     | `spacers` value | `spacersNum` value |
| ------- | --------------- | ------------------ |
| `dp4`   | `'4px'`         | `4`                |
| `dp8`   | `'8px'`         | `8`                |
| `dp12`  | `'12px'`        | `12`               |
| `dp16`  | `'16px'`        | `16`               |
| `dp24`  | `'24px'`        | `24`               |
| `dp32`  | `'32px'`        | `32`               |
| `dp48`  | `'48px'`        | `48`               |
| `dp64`  | `'64px'`        | `64`               |
| `dp96`  | `'96px'`        | `96`               |
| `dp128` | `'128px'`       | `128`              |
| `dp192` | `'192px'`       | `192`              |
| `dp256` | `'256px'`       | `256`              |
| `dp384` | `'384px'`       | `384`              |
| `dp512` | `'512px'`       | `512`              |
| `dp640` | `'640px'`       | `640`              |

## Layers

The `layers` object provides z-index values for application layers. See [Design system: Stacking](https://github.com/dhis2/design-system/blob/master/principles/layout.md#stacking) for guidelines on how to stack content in an app.

### Example

```js
import { layers } from '@dhis2/ui'

const screenCoverZIndex = layers.applicationTop // 2000
```

### Reference

| `layers` key     | Value  |
| ---------------- | ------ |
| `applicationTop` | `2000` |
| `blocking`       | `3000` |
| `alert`          | `9999` |

## Elevations

The `elevations` object provides CSS box-shadow values that can be used to give objects the appearance of elevation off the page. See [Design System: Elevation](https://github.com/dhis2/design-system/blob/master/atoms/elevation.md) for guidelines on using elevations and a visual reference of the different elevation values. Some components in this library, like the `Popover`, accept an `elevation` prop that determines the component's appearance. See the `Popover` documentation to learn more about it.

### Example

```js
import { elevations } from '@dhis2/ui'

const PopoverWithCustomElevation = <Popover elevation={elevations.e300} />
const boxShadow = elevations.e200
```

### Reference

| `elevations` key | Value                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `e100`           | `'0px 1px 2px rgba(33,41,52,0.06), 0px 1px 3px rgba(33,41,52,0.1)'`                                           |
| `e200`           | `'0px 0px 1px rgba(33,41,52,0.1), 0px 4px 6px -1px rgba(33,41,52,0.1), 0px 2px 4px -1px rgba(33,41,52,0.06)'` |
| `e300`           | `'0px 10px 15px -3px rgba(33,41,52,0.1), 0px 4px 6px -2px rgba(33,41,52,0.05)'`                               |
| `e400`           | `'0px 25px 50px -12px rgba(33, 41, 52, 0.25)'`                                                                |
