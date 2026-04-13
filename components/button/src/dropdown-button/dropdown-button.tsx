import { spacers } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import React, { Component } from 'react'
import { Button } from '../button/index.ts'

interface ArrowDownProps {
    className?: string
}

function ArrowDown({ className }: ArrowDownProps) {
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

interface ArrowUpProps {
    className?: string
}

function ArrowUp({ className }: ArrowUpProps) {
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

interface DropdownButtonCallbackPayload {
    name?: string
    value?: string
    open: boolean
}

export interface DropdownButtonProps {
    /** Children to render inside the button */
    children?: React.ReactNode
    className?: string
    /** Component to show/hide when button is clicked */
    component?: React.ReactElement
    dataTest?: string
    /**
     * Applies 'destructive' button appearance, implying a dangerous action.
     */
    destructive?: boolean
    /** Make the button non-interactive */
    disabled?: boolean
    icon?: React.ReactElement
    /** Grants button initial focus on the page */
    initialFocus?: boolean
    /** Button size. Mutually exclusive with `small` prop */
    large?: boolean
    name?: string
    /** Controls popper visibility. When implementing this prop the component becomes a controlled component */
    open?: boolean
    /**
     * Applies 'primary' button appearance, implying the most important action.
     */
    primary?: boolean
    /**
     * Applies 'secondary' button appearance.
     */
    secondary?: boolean
    /** Button size. Mutually exclusive with `large` prop */
    small?: boolean
    tabIndex?: string
    /** Type of button. Can take advantage of different default behavior */
    type?: 'submit' | 'reset' | 'button'
    value?: string
    /**
     * Callback triggered on click.
     * Called with signature `({ name: string, value: string, open: bool }, event)`
     * Is required when using the `open` prop to override the internal state.
     */
    onClick?: (payload: DropdownButtonCallbackPayload, event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent) => void
}

interface DropdownButtonState {
    open: boolean
}

class DropdownButton extends Component<DropdownButtonProps, DropdownButtonState> {
    state: DropdownButtonState = {
        open: false,
    }

    static defaultProps = {
        dataTest: 'dhis2-uicore-dropdownbutton',
    }

    anchorRef = React.createRef<HTMLDivElement>()

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && this.state.open) {
            event.preventDefault()
            event.stopPropagation()
            this.setState({ open: false })
        }
    }

    onClickHandler = ({ name, value }: { name?: string; value?: string }, event: React.MouseEvent<HTMLButtonElement> | React.SyntheticEvent) => {
        const handleClick = (open: boolean) => {
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
        if (typeof this.props.open === 'boolean') {
            handleClick(!this.props.open)
        } else {
            this.setState({ open: !this.state.open }, () => {
                handleClick(this.state.open)
            })
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
            dataTest = 'dhis2-uicore-dropdownbutton',
        } = this.props
        const open =
            typeof this.props.open === 'boolean'
                ? this.props.open
                : this.state.open
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
                    onClick={this.onClickHandler}
                    name={name}
                    value={value}
                    tabIndex={tabIndex}
                    type={type}
                    initialFocus={initialFocus}
                    data-test="dhis2-uicore-dropdownbutton-toggle"
                >
                    {children}
                    <ArrowIconComponent
                        className={`arrow ${small && 'arrow-small'}`}
                    />
                </Button>

                {open && (
                    <Layer onBackdropClick={(_payload, event) => this.onClickHandler({}, event as unknown as React.SyntheticEvent)}>
                        <Popper
                            dataTest={`${dataTest}-popper`}
                            placement="bottom-start"
                            reference={this.anchorRef}
                        >
                            {component}
                        </Popper>
                    </Layer>
                )}

                <style jsx>{`
                    .arrow {
                        margin-inline-start: ${spacers.dp8};
                    }

                    .arrow-small {
                        margin-inline-start: ${spacers.dp4};
                    }

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

export { DropdownButton }
