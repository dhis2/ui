import { FormSpy } from 'react-final-form'
import propTypes from '@dhis2/prop-types'

FormSpy.propTypes = {
    children: propTypes.func,
    component: propTypes.func,
    render: propTypes.func,
    subscription: propTypes.object,
    onChange: propTypes.func,
}

export { FormSpy }
