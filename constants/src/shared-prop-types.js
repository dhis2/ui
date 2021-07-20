import propTypes from '@dhis2/prop-types'

/**
 * Status propType
 * @return {PropType} Mutually exclusive status: valid/warning/error
 */
export const statusPropType = propTypes.mutuallyExclusive(
    ['valid', 'warning', 'error'],
    propTypes.bool
)
// Exported for storybook
export const statusArgType = {
    table: {
        type: {
            summary: 'bool',
            detail:
                "'valid', 'warning', and 'error' are mutually exclusive props",
        },
    },
    control: { type: 'boolean' },
}

/**
 * Button variant propType
 * @return {PropType} Mutually exclusive variants:
 * primary/secondary/destructive
 */
export const buttonVariantPropType = propTypes.mutuallyExclusive(
    ['primary', 'secondary', 'destructive'],
    propTypes.bool
)
export const buttonVariantArgType = {
    // No description because it should be set for the component description
    table: {
        type: {
            summary: 'bool',
            detail:
                "'primary', 'secondary', and 'destructive' are mutually exclusive props",
        },
    },
    control: {
        type: 'boolean',
    },
}

/**
 * Size variant propType
 * @return {PropType} Mutually exclusive variants:
 * small/large
 */
export const sizePropType = propTypes.mutuallyExclusive(
    ['small', 'large', 'extrasmall'],
    propTypes.bool
)
export const sizeArgType = {
    // No description because it should be set in the component description
    table: {
        type: {
            summary: 'bool',
            detail: 'size props are mutually exclusive',
        },
    },
    control: {
        type: 'boolean',
    },
}

/**
 * Inside alignment props
 * @return {PropType} PropType that validates the inside alignment.
 */
export const insideAlignmentPropType = propTypes.oneOf([
    'top',
    'middle',
    'bottom',
])
export const insideAlignmentArgType = {
    description: 'Inside alignment of the component',
    table: {
        type: {
            summary: "'top' | 'middle' | 'bottom'",
        },
    },
    control: {
        type: 'select',
        options: ['top', 'middle', 'bottom'],
    },
}

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
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
])
export const popperPlacementArgType = {
    description: 'Placement properties relative to reference element',
    table: {
        type: {
            summary: 'string (one of several)',
            detail: 'see options in menu',
        },
    },
    control: {
        type: 'select',
        options: [
            'auto',
            'auto-start',
            'auto-end',
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'right',
            'right-start',
            'right-end',
            'left',
            'left-start',
            'left-end',
        ],
    },
}

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
export const popperReferenceArgType = {
    description:
        'A reference to the element to position against: either a DOM node, React ref, \
        or an instance of an element',
    table: {
        type: { summary: 'DOM node | React ref | Virtual element' },
    },
    control: { type: null },
}
