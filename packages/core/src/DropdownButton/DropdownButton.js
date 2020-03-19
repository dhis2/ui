import propTypes from '@dhis2/prop-types'
import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { resolve } from 'styled-jsx/css'

import { spacers } from '@dhis2/ui-constants'
import { ArrowDown, ArrowUp } from '@dhis2/ui-icons'

import { Backdrop } from '../Backdrop/Backdrop.js'
import { Button } from '../Button/Button.js'
import { Popper } from '../Popper/Popper.js'
import { sharedPropTypes } from '@dhis2/ui-constants'

const arrow = resolve`
    margin-left: ${spacers.dp12};
`

/**
 * @module
 * @param {DropdownButton.PropTypes} props
 * @returns {React.Component}
 * @example import { DropdownButton } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/dropdownbutton-basic--default|Storybook}
 */
class DropdownButton extends Component {
    state = {
        open: false,
    }
    anchorRef = React.createRef()

    onToggle = ({ name, value }, event) => {
        this.setState({ open: !this.state.open }, () => {
            if (this.props.onClick) {
                this.props.onClick(
                    {
                        name,
                        value,
                        open: this.state.open,
                    },
                    event
                )
            }
        })
    }

    render() {
        const { open } = this.state
        const {
            component,
            children,
            className,
            destructive,
            disabled,
            icon,
            large,
            primary,
            secondary,
            small,
            name,
            value,
            tabIndex,
            type,
            initialFocus,
            dataTest,
        } = this.props

        const ArrowIconComponent = open ? ArrowUp : ArrowDown

        return (
            <div ref={this.anchorRef} data-test={dataTest}>
                <Button
                    className={className}
                    destructive={destructive}
                    disabled={disabled}
                    icon={icon}
                    large={large}
                    primary={primary}
                    secondary={secondary}
                    small={small}
                    onClick={this.onToggle}
                    name={name}
                    value={value}
                    tabIndex={tabIndex}
                    type={type}
                    initialFocus={initialFocus}
                >
                    {children}
                    <ArrowIconComponent className={arrow.className} />
                </Button>

                {open &&
                    createPortal(
                        <Backdrop onClick={this.onToggle} transparent>
                            <Popper
                                dataTest={`${dataTest}-popper`}
                                placement="bottom-end"
                                reference={this.anchorRef}
                            >
                                {component}
                            </Popper>
                        </Backdrop>,
                        document.body
                    )}

                {arrow.styles}
                <style jsx>{`
                    div {
                        display: inline-flex;
                        position: relative;
                        color: inherit;
                        white-space: nowrap;
                    }
                `}</style>
            </div>
        )
    }
}

DropdownButton.defaultProps = {
    dataTest: 'dhis2-uicore-dropdownbutton',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Element} [component]
 *
 * @prop {Node} [children] The children to render in the button
 * @prop {function} [onClick] The click handler
 *
 * @prop {string} [className]
 * @prop {string} [name]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 * @prop {string} [type] Type of button: `submit`, `reset`, or
 * `button`
 *
 * @prop {boolean } [primary] - `primary`, `secondary`, and
 * `destructive` are mutually exclusive boolean props
 * @prop {boolean } [secondary]
 * @prop {boolean } [destructive]
 *
 * @prop {boolean} [disabled] Disable the button
 * @prop {Element} [icon]
 *
 * @prop {boolean} [initialFocus] Grants the button the initial focus
 * @prop {string} [dataTest]
 */
DropdownButton.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    component: propTypes.element,
    dataTest: propTypes.string,
    destructive: sharedPropTypes.buttonVariantPropType,
    disabled: propTypes.bool,
    icon: propTypes.element,
    initialFocus: propTypes.bool,
    large: sharedPropTypes.sizePropType,
    name: propTypes.string,
    primary: sharedPropTypes.buttonVariantPropType,
    secondary: sharedPropTypes.buttonVariantPropType,
    small: sharedPropTypes.sizePropType,
    tabIndex: propTypes.string,
    type: propTypes.oneOf(['submit', 'reset', 'button']),
    value: propTypes.string,
    onClick: propTypes.func,
}

export { DropdownButton }
