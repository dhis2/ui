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

export const popperPlacementPropType = propTypes.oneOf([
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

export const popperReferencePropType = propTypes.oneOfType([
    // DOM node
    propTypes.instanceOf(Element),
    // React ref - React.useRef() or React.createRef()
    propTypes.shape({ current: propTypes.instanceOf(Element) }),
    // Virtual element
    propTypes.shape({ getBoundingClientRect: propTypes.func }),
])
