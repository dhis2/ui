import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'

import { createPopper } from './Popper/createPopper.js'
import { elementRefPropType } from './common-prop-types.js'

class Popper extends Component {
    popperInstance = null
    popperRef = createRef()

    componentDidMount() {
        const { reference, options } = this.props

        this.popperInstance = createPopper(
            reference.current,
            this.popperRef.current,
            options
        )
    }

    componentWillUnmount() {
        this.popperInstance.destroy()
        this.popperInstance = null
    }

    render() {
        const { children, dataTest, className } = this.props

        return (
            <div
                className={className}
                data-test={dataTest}
                ref={this.popperRef}
            >
                {children}
            </div>
        )
    }
}

Popper.defaultProps = {
    dataTest: 'dhis2-uicore-popper',
}

// Prop names follow the names here: https://popper.js.org/docs/v2/constructors/
Popper.propTypes = {
    children: propTypes.node.isRequired,
    reference: elementRefPropType.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
    options: propTypes.shape({
        modifiers: propTypes.arrayOf(
            propTypes.shape({
                enabled: propTypes.bool,
                name: propTypes.string,
                options: propTypes.object,
            })
        ),
        placement: propTypes.oneOf([
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
        ]),
        strategy: propTypes.oneOf(['absolute', 'fixed']), // defaults to 'absolute'
        onFirstUpdate: propTypes.func,
    }),
}

export { Popper }
