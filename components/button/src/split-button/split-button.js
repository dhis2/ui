import { requiredIf } from '@dhis2/prop-types'
import { spacers, sharedPropTypes } from '@dhis2/ui-constants'
import { IconChevronUp16, IconChevronDown16 } from '@dhis2/ui-icons'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { Button } from '../button/index.js'
import i18n from '../locales/index.js'

const rightButton = css.resolve`
    button {
        padding: 0 ${spacers.dp12};
    }
`

class SplitButton extends Component {
    state = {
        open: false,
    }

    static defaultProps = {
        dataTest: 'dhis2-uicore-splitbutton',
    }

    anchorRef = React.createRef()

    isControlled = () => typeof this.props.open === 'boolean'

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (event) => {
        const open = this.isControlled() ? this.props.open : this.state.open
        if (event.key === 'Escape' && open) {
            event.preventDefault()
            event.stopPropagation()
            if (this.isControlled()) {
                if (this.props.onToggle) {
                    this.props.onToggle(
                        {
                            name: this.props.name,
                            value: this.props.value,
                            open: false,
                        },
                        event
                    )
                }
            } else {
                this.setState({ open: false })
            }
            this.anchorRef.current && this.anchorRef.current.focus()
        }
    }

    handlePrimaryAction = (payload, event) => {
        if (this.props.onClick) {
            this.props.onClick(
                {
                    name: payload.name,
                    value: payload.value,
                    open: this.isControlled()
                        ? this.props.open
                        : this.state.open,
                },
                event
            )
        }
    }

    handleToggle = (payload, event) => {
        if (this.isControlled()) {
            if (this.props.onToggle) {
                this.props.onToggle(
                    {
                        name: payload.name,
                        value: payload.value,
                        open: !this.props.open,
                    },
                    event
                )
            }
        } else {
            this.setState((prevState) => ({ open: !prevState.open }))
        }
    }

    handleBackdropClick = (event) => {
        if (this.isControlled()) {
            if (this.props.onToggle) {
                this.props.onToggle(
                    {
                        name: this.props.name,
                        value: this.props.value,
                        open: false,
                    },
                    event
                )
            }
        } else {
            this.setState({ open: false })
        }
    }

    render() {
        const open = this.isControlled() ? this.props.open : this.state.open
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
            dataTest = 'dhis2-uicore-splitbutton',
            initialFocus,
        } = this.props

        const arrow = open ? <IconChevronUp16 /> : <IconChevronDown16 />

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
                    onClick={this.handlePrimaryAction}
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
                    onClick={this.handleToggle}
                    type={type}
                    tabIndex={tabIndex}
                    className={cx(className, rightButton.className)}
                    dataTest={`${dataTest}-toggle`}
                    title={i18n.t('Toggle dropdown')}
                    aria-label={i18n.t('Toggle dropdown')}
                >
                    {arrow}
                </Button>

                {open && (
                    <Layer
                        onBackdropClick={this.handleBackdropClick}
                        transparent
                    >
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
                        color: inherit;
                        white-space: nowrap;
                        // create a stacking context for the children
                        position: relative;
                        z-index: 0;
                    }

                    div > :global(button:first-child) {
                        border-start-end-radius: 0;
                        border-end-end-radius: 0;
                        border-inline-end: 0;
                    }

                    div > :global(button:last-child) {
                        border-start-start-radius: 0;
                        border-end-start-radius: 0;
                    }
                `}</style>
            </div>
        )
    }
}

SplitButton.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    /** Component to render when the dropdown is opened */
    component: PropTypes.element,
    dataTest: PropTypes.string,
    /**
     * Applies 'destructive' button appearance, implying a dangerous action.
     */
    destructive: PropTypes.bool,
    /** Disables the button and makes it uninteractive */
    disabled: PropTypes.bool,
    /** An icon to add inside the button */
    icon: PropTypes.element,
    /** Grants the button the initial focus */
    initialFocus: PropTypes.bool,
    /** Changes button size. Mutually exclusive with `small` prop */
    large: sharedPropTypes.sizePropType,
    name: PropTypes.string,
    /**
     * Controls popper visibility. When implementing this prop the component becomes a controlled component
     */
    open: PropTypes.bool,
    /**
     * Applies 'primary' button appearance, implying the most important action.
     */
    primary: PropTypes.bool,
    /**
     * Applies 'secondary' button appearance.
     */
    secondary: PropTypes.bool,
    /** Changes button size. Mutually exclusive with `large` prop */
    small: sharedPropTypes.sizePropType,
    tabIndex: PropTypes.string,
    /** Type of button. Applied to html `button` element */
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    /** Value associated with the button. Passed in object to onClick handler */
    value: PropTypes.string,
    /**
     * Callback triggered when the main button is clicked.
     * Called with signature `({ name: string, value: string, open: bool }, event)`
     */
    onClick: PropTypes.func,
    /**
     * Callback triggered when the dropdown is toggled (by clicking the chevron, pressing Escape, or clicking the backdrop).
     * Called with signature `({ name: string, value: string, open: bool }, event)`.
     * Required if `open` prop is used (controlled component).
     */
    onToggle: requiredIf(
        (props) => typeof props.open === 'boolean',
        PropTypes.func
    ),
}

export { SplitButton }
