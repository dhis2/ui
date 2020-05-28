import propTypes from '@dhis2/prop-types'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module constants/shared-prop-types
 * @desc Shared propType definitions for UI components
 */

/**
 * Status propType
 * @return {PropType} Mutually exclusive status: valid/warning/error
 */
export const statusPropType = propTypes.mutuallyExclusive(
    ['valid', 'warning', 'error'],
    propTypes.bool
)

/**
 * Button variant propType
 * @return {PropType} Mutually exclusive variants:
 * primary/secondary/destructive
 */
export const buttonVariantPropType = propTypes.mutuallyExclusive(
    ['primary', 'secondary', 'destructive'],
    propTypes.bool
)

/**
 * Size variant propType
 * @return {PropType} Mutually exclusive variants:
 * small/large
 */
export const sizePropType = propTypes.mutuallyExclusive(
    ['small', 'large'],
    propTypes.bool
)

/**
 * Inside alignment props
 * @return {PropType} PropType that validates the inside alignment.
 */
export const insideAlignmentPropType = propTypes.oneOf([
    'top',
    'middle',
    'bottom',
])

/**
 * Placement properties against reference element
 * @return {PropType} PropType that validates placements.
 */
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

/**
 * Either a DOM node, React ref or a virtual element
 * @return {PropType} Validate that prop is either a function or an
 * instance of an Element.
 */
export const popperReferencePropType = propTypes.oneOfType([
    // DOM node
    propTypes.instanceOf(Element),
    // React ref - React.useRef() or React.createRef()
    propTypes.shape({ current: propTypes.instanceOf(Element) }),
    // Virtual element
    propTypes.shape({ getBoundingClientRect: propTypes.func }),
])
