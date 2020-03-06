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

export const elementRefPropType = propTypes.oneOfType([
    propTypes.func,
    propTypes.shape({ current: propTypes.instanceOf(Element) }),
])
