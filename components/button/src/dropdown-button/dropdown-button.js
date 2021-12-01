import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { spacers, sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { resolve } from 'styled-jsx/css'
import { Button } from '../index.js'

function ArrowDown({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            className={className}
        >
            <path d="m5.29289 8.7071c.39053.3905 1.02369.3905 1.41422 0l2.99999-2.99999c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-2.2929 2.2929-2.29289-2.2929c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 12px;
                    width: 12px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}
ArrowDown.propTypes = {
    className: PropTypes.string,
}

function ArrowUp({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            className={className}
        >
            <path
                d="m5.29289 8.7071c.39053.3905 1.02369.3905 1.41422 0l2.99999-2.99999c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-2.2929 2.2929-2.29289-2.2929c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422z"
                transform="matrix(1 0 0 -1 0 12.999974)"
            />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 12px;
                    width: 12px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}
ArrowUp.propTypes = {
    className: PropTypes.string,
}

const arrow = resolve`
    margin-left: ${spacers.dp12};
`

class DropdownButton extends Component {
    state = {
        open: false,
    }
    anchorRef = React.createRef()

    isControlled = typeof this.props.open === 'boolean'

    onClickHandler = ({ name, value }, event) => {
        const handleClick = (open) => {
            if (this.props.onClick) {
                this.props.onClick(
                    {
                        name,
                        value,
                        open,
                    },
                    event
                )
            }
        }

        if (this.isControlled) {
            handleClick(!this.props.open)
        } else {
            this.setState({ open: !this.state.open }, () =>
                handleClick(this.state.open)
            )
        }
    }

    render() {
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
        const open = this.isControlled ? this.props.open : this.state.open
        const onClick = this.onClickHandler
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
                    onClick={onClick}
                    name={name}
                    value={value}
                    tabIndex={tabIndex}
                    type={type}
                    initialFocus={initialFocus}
                >
                    {children}
                    <ArrowIconComponent className={arrow.className} />
                </Button>

                {open && (
                    <Layer onClick={onClick} transparent>
                        <Popper
                            dataTest={`${dataTest}-popper`}
                            placement="bottom-start"
                            reference={this.anchorRef}
                        >
                            {component}
                        </Popper>
                    </Layer>
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

DropdownButton.propTypes = {
    /** Children to render inside the buton */
    children: PropTypes.node,
    className: PropTypes.string,
    /** Component to show/hide when button is clicked */
    component: PropTypes.element,
    dataTest: PropTypes.string,
    /** Button variant. Mutually exclusive with `primary` and `secondary` props */
    destructive: sharedPropTypes.buttonVariantPropType,
    /** Make the button non-interactive */
    disabled: PropTypes.bool,
    icon: PropTypes.element,
    /** Grants button initial focus on the page */
    initialFocus: PropTypes.bool,
    /** Button size. Mutually exclusive with `small` prop */
    large: sharedPropTypes.sizePropType,
    name: PropTypes.string,
    /** Controls popper visibility. When implementing this prop the component becomes a controlled component */
    open: PropTypes.bool,
    /** Button variant. Mutually exclusive with `destructive` and `secondary` props */
    primary: sharedPropTypes.buttonVariantPropType,
    /** Button variant. Mutually exclusive with `primary` and `destructive` props */
    secondary: sharedPropTypes.buttonVariantPropType,
    /** Button size. Mutually exclusive with `large` prop */
    small: sharedPropTypes.sizePropType,
    tabIndex: PropTypes.string,
    /** Type of button. Can take advantage of different default behavior */
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    value: PropTypes.string,
    /**
     * Callback triggered on click.
     * Called with signature `({ name: string, value: string, open: bool }, event)`
     * Is required when using this component in controlled mode, i.e. when
     */
    onClick: PropTypes.func,
}

export { DropdownButton }
