import propTypes from '@dhis2/prop-types'

export const statusPropType = propTypes.mutuallyExclusive(
    ['valid', 'warning', 'error'],
    propTypes.bool
)

export const buttonVariantPropType = propTypes.mutuallyExclusive(
    ['primary', 'secondary', 'destructive'],
    propTypes.bool
)

export const sizePropType = propTypes.mutuallyExclusive(
    ['small', 'large'],
    propTypes.bool
)

export const singleSelectedPropType = propTypes.shape({
    label: propTypes.string,
    value: propTypes.string,
})

export const multiSelectedPropType = propTypes.arrayOf(singleSelectedPropType)

export const insideAlignmentPropType = propTypes.oneOf([
    'top',
    'middle',
    'bottom',
])

export const referencePlacementPropType = propTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom', // will be used as default
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
])

export const elementRefPropType = propTypes.oneOfType([
    propTypes.func,
    propTypes.shape({ current: propTypes.instanceOf(Element) }),
])
