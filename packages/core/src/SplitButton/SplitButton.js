import { spacers, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { Button } from '../Button/Button.js'
import { ArrowDown, ArrowUp } from '../Icons/index.js'
import { Layer } from '../Layer/Layer.js'
import { Popper } from '../Popper/Popper.js'

const rightButton = css.resolve`
    button {
        padding: 0 ${spacers.dp12};
    }
`

/**
 * @module
 *
 * @param {SplitButton.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { SplitButton } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/button.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/splitbutton-basic--default|Storybook}
 */
class SplitButton extends Component {
    state = {
        open: false,
    }
    anchorRef = React.createRef()

    onClick = (payload, event) => {
        if (this.props.onClick) {
            this.props.onClick(
                {
                    name: payload.name,
                    value: payload.value,
                    open: this.state.open,
                },
                event
            )
        }
    }

    onToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state
        const {
            component,
            children,
            className,
            name,
            value,
            icon,
            small,
            large,
            primary,
            secondary,
            destructive,
            disabled,
            type,
            tabIndex,
            dataTest,
            initialFocus,
        } = this.props

        const arrow = open ? <ArrowUp /> : <ArrowDown />

        return (
            <div ref={this.anchorRef} data-test={dataTest}>
                <Button
                    name={name}
                    value={value}
                    icon={icon}
                    small={small}
                    large={large}
                    primary={primary}
                    secondary={secondary}
                    destructive={destructive}
                    disabled={disabled}
                    onClick={this.onClick}
                    type={type}
                    tabIndex={tabIndex}
                    className={cx(className)}
                    initialFocus={initialFocus}
                    dataTest={`${dataTest}-button`}
                >
                    {children}
                </Button>

                <Button
                    name={name}
                    value={value}
                    small={small}
                    large={large}
                    primary={primary}
                    secondary={secondary}
                    destructive={destructive}
                    disabled={disabled}
                    onClick={this.onToggle}
                    type={type}
                    tabIndex={tabIndex}
                    className={cx(className, rightButton.className)}
                    dataTest={`${dataTest}-toggle`}
                >
                    {arrow}
                </Button>

                {open && (
                    <Layer onClick={this.onToggle} transparent>
                        <Popper
                            dataTest={`${dataTest}-menu`}
                            placement="bottom-end"
                            reference={this.anchorRef}
                        >
                            {component}
                        </Popper>
                    </Layer>
                )}

                {rightButton.styles}
                <style jsx>{`
                    div {
                        display: inline-flex;
                        position: relative;
                        color: inherit;
                        white-space: nowrap;
                    }

                    div > :global(button:first-child) {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                        border-right: 0;
                    }

                    div > :global(button:last-child) {
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }
                `}</style>
            </div>
        )
    }
}

SplitButton.defaultProps = {
    dataTest: 'dhis2-uicore-splitbutton',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Element} [component]
 * @prop {string} [children]
 * @prop {string} [className]
 * @prop {string} [name]
 * @prop {string} [value]
 * @prop {string} [tabIndex]
 * @prop {function} [onClick]
 * @prop {Element} [icon]
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 * @prop {string} [type] Type of button: `submit`, `reset`, or
 * `button`
 * @prop {boolean } [primary] - `primary`, `secondary`, and
 * `destructive` are mutually exclusive boolean props
 * @prop {boolean } [secondary]
 * @prop {boolean } [destructive]
 * @prop {boolean } [disabled]
 * @prop {boolean} [initialFocus] Grants the button the initial focus
 * @prop {string} [dataTest]
 */
SplitButton.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    /** Component to render when the dropdown is opened */
    component: PropTypes.element,
    dataTest: PropTypes.string,
    /** Applies 'destructive' appearance to indicate purpose. Mutually exclusive with `primary` and `secondary` props */
    destructive: sharedPropTypes.buttonVariantPropType,
    /** Disables the button and makes it uninteractive */
    disabled: PropTypes.bool,
    /** An icon to add inside the button */
    icon: PropTypes.element,
    /** Grants the button the initial focus */
    initialFocus: PropTypes.bool,
    /** Changes button size. Mutually exclusive with `small` prop */
    large: sharedPropTypes.sizePropType,
    name: PropTypes.string,
    /** Applies 'primary' appearance to indicate purpose. Mutually exclusive with `destructive` and `secondary` props */
    primary: sharedPropTypes.buttonVariantPropType,
    /** Applies 'secondary' appearance to indicate purpose. Mutually exclusive with `primary` and `destructive` props */
    secondary: sharedPropTypes.buttonVariantPropType,
    /** Changes button size. Mutually exclusive with `large` prop */
    small: sharedPropTypes.sizePropType,
    tabIndex: PropTypes.string,
    /** Type of button. Applied to html `button` element */
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    /** Value associated with the button. Passed in object to onClick handler */
    value: PropTypes.string,
    onClick: PropTypes.func,
}

export { SplitButton }
