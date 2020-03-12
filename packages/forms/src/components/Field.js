import propTypes from '@dhis2/prop-types'
import { Field } from 'react-final-form'

Field.propTypes = {
    name: propTypes.string.isRequired,

    afterSubmit: propTypes.func,
    allowNull: propTypes.bool,
    beforeSubmit: propTypes.func,
    children: propTypes.node,
    component: propTypes.oneOfType([
        propTypes.func,
        propTypes.oneOf(['input', 'select', 'textarea']),
    ]),
    defaultValue: propTypes.any,
    format: propTypes.func,
    formatOnBlur: propTypes.func,
    initialValue: propTypes.any,
    isEqual: propTypes.func,
    parse: propTypes.func,
    render: propTypes.func,
    subscription: propTypes.object,
    validate: propTypes.func,
    validateFields: propTypes.arrayOf(propTypes.string),
    value: propTypes.any,
}

/**
 * Note about `value` from the RFF docs:
 *
 * This is only used for checkboxes and radio buttons!
 * You must also include a type="radio" or type="checkbox" prop.
 *
 * Radio Buttons
 * The value of the radio button. The radio button will render as checked if and
 * only if the value given here === the value for the field in the form.
 *
 * Checkboxes
 * With value:
 * The checkbox will be checked if the value given in value is contained in the array
 * that is the value for the field for the form. Checking the box will add the value
 * to the array, and unchecking the checkbox will remove  * the value from the array.
 *
 * Without value
 * The checkbox will be checked if the value is truthy. Checking the box will set the
 * value to true, and unchecking the checkbox will set the value to false.
 *
 * Additional info for ui-forms:
 * The above only applies when:
 * 1) built in components are being used directly
 * 2) a custom component renders a built-in component and attaches RFF's `input.onChange`
 *    directly to that built in component
 */

export { Field }
