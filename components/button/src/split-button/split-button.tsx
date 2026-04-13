import { spacers } from '@dhis2/ui-constants'
import { IconChevronUp16, IconChevronDown16 } from '@dhis2/ui-icons'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { Button } from '../button/index.ts'
import i18n from '../locales/index.js'

const rightButton = css.resolve`
    button {
        padding: 0 ${spacers.dp12};
    }
`

interface SplitButtonCallbackPayload {
    name?: string
    value?: string
    open: boolean
}

export interface SplitButtonProps {
    children?: string
    className?: string
    /** Component to render when the dropdown is opened */
    component?: React.ReactElement
    dataTest?: string
    /**
     * Applies 'destructive' button appearance, implying a dangerous action.
     */
    destructive?: boolean
    /** Disables the button and makes it uninteractive */
    disabled?: boolean
    /** An icon to add inside the button */
    icon?: React.ReactElement
    /** Grants the button the initial focus */
    initialFocus?: boolean
    /** Changes button size. Mutually exclusive with `small` prop */
    large?: boolean
    name?: string
    /**
     * Controls popper visibility. When implementing this prop the component becomes a controlled component
     */
    open?: boolean
    /**
     * Applies 'primary' button appearance, implying the most important action.
     */
    primary?: boolean
    /**
     * Applies 'secondary' button appearance.
     */
    secondary?: boolean
    /** Changes button size. Mutually exclusive with `large` prop */
    small?: boolean
    tabIndex?: string
    /** Type of button. Applied to html `button` element */
    type?: 'submit' | 'reset' | 'button'
    /** Value associated with the button. Passed in object to onClick handler */
    value?: string
    /**
     * Callback triggered when the main button is clicked.
     * Called with signature `({ name: string, value: string, open: bool }, event)`
     */
    onClick?: (payload: SplitButtonCallbackPayload, event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent) => void
    /**
     * Callback triggered when the dropdown is toggled (by clicking the chevron, pressing Escape, or clicking the backdrop).
     * Called with signature `({ name: string, value: string, open: bool }, event)`.
     * Required if `open` prop is used (controlled component).
     */
    onToggle?: (payload: SplitButtonCallbackPayload, event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent | KeyboardEvent) => void
}

interface SplitButtonState {
    open: boolean
}

class SplitButton extends Component<SplitButtonProps, SplitButtonState> {
    state: SplitButtonState = {
        open: false,
    }

    static defaultProps = {
        dataTest: 'dhis2-uicore-splitbutton',
    }

    anchorRef = React.createRef<HTMLDivElement>()

    isControlled = () => typeof this.props.open === 'boolean'

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (event: KeyboardEvent) => {
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

    handlePrimaryAction = (payload: { name?: string; value?: string }, event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent) => {
        if (this.props.onClick) {
            this.props.onClick(
                {
                    name: payload.name,
                    value: payload.value,
                    open: this.isControlled()
                        ? this.props.open!
                        : this.state.open,
                },
                event
            )
        }
    }

    handleToggle = (payload: { name?: string; value?: string }, event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent) => {
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

    handleBackdropClick = (_payload: Record<string, never>, event: React.MouseEvent<HTMLDivElement>) => {
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

export { SplitButton }
