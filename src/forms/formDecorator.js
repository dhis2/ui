import { Button } from '@dhis2-ui/button'
import PropTypes from 'prop-types'
import React from 'react'
import { FormSpy, Form } from 'react-final-form'

const formProps = {
    onSubmit: (values) => {
        console.log(
            '++++++++++++++++\n',
            'Form was submitted with values:\n',
            values,
            '\n----------------'
        )
    },
    mutators: {},
}

class FormWithSpyAndSubmit extends React.Component {
    state = {
        cypressProps: {},
    }

    componentDidMount() {
        window.updateCypressProps = this.updateCypressProps
        window.clearCypressProps = this.clearCypressProps
        this.forceUpdate()
    }

    componentWillUnmount() {
        delete window.updateCypressProps
        delete window.clearCypressProps
    }

    updateCypressProps = (updateObj) => {
        const cypressProps = {
            ...this.state.cypressProps,
            ...updateObj,
        }
        this.setState({ cypressProps })
    }

    clearCypressProps = () => {
        this.setState({ cypressProps: {} })
    }

    render() {
        return (
            <Form {...formProps}>
                {(formRenderProps) => (
                    <form onSubmit={formRenderProps.handleSubmit}>
                        {this.props.renderChildren({
                            formRenderProps,
                            cypressProps: this.state.cypressProps,
                        })}

                        <Button primary type="submit">
                            Submit
                        </Button>

                        {/* render after components to ensure capturing "initialValue"s */}
                        <FormSpy>
                            {({ values }) => {
                                window.formValues = values
                                return <span className="form-spy-internal" />
                            }}
                        </FormSpy>
                    </form>
                )}
            </Form>
        )
    }
}

FormWithSpyAndSubmit.propTypes = {
    renderChildren: PropTypes.func.isRequired,
}

export const formDecorator = (fn) => (
    <FormWithSpyAndSubmit renderChildren={fn} />
)
