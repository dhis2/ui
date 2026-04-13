import React, { Component } from 'react'
import { debounce } from './debounce/debounce.ts'
import { InputWrapper } from './input-wrapper.tsx'
import { MenuWrapper } from './menu-wrapper.tsx'

// Keycodes for the keypress event handlers
const ESCAPE_KEY = 27
const SPACE_KEY = 32
const UP_KEY = 38
const DOWN_KEY = 40

export interface SelectProps {
    input: React.ReactElement
    menu: React.ReactElement
    selected: string | string[]
    children?: React.ReactNode
    className?: string
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    error?: boolean
    initialFocus?: boolean
    maxHeight?: string
    tabIndex?: string
    valid?: boolean
    warning?: boolean
    onBlur?: (
        payload: { selected: string | string[] },
        e: React.SyntheticEvent
    ) => void
    onChange?: (
        data: { selected: string | string[] },
        e: React.SyntheticEvent
    ) => void
    onFocus?: (
        payload: { selected: string | string[] },
        e: React.FocusEvent
    ) => void
    onKeyDown?: (
        payload: { selected: string | string[] },
        e: React.KeyboardEvent
    ) => void
}

interface SelectState {
    open: boolean
    menuWidth: string
}

export class Select extends Component<SelectProps, SelectState> {
    state: SelectState = {
        open: false,
        menuWidth: 'auto',
    }

    static defaultProps = {
        dataTest: 'dhis2-uicore-select',
    }

    selectRef = React.createRef<HTMLDivElement>()
    inputRef = React.createRef<HTMLDivElement>()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current?.focus()
        }

        this.setState({ menuWidth: this.getMenuWidth() })
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    /**
     * We're debouncing this so it doesn't fire continually during a resize.
     */
    onResize = debounce(() => {
        const menuWidth = this.getMenuWidth()

        if (this.state.menuWidth !== menuWidth) {
            this.setState({ menuWidth })
        }
    }, 50)

    getMenuWidth() {
        const offsetWidth = this.inputRef.current?.offsetWidth
        const { menuWidth } = this.state

        if (offsetWidth && `${offsetWidth}px` !== menuWidth) {
            return `${offsetWidth}px`
        }
        return menuWidth
    }

    handleFocusInput = () => {
        this.inputRef.current?.focus()
    }

    onFocus = (e: React.FocusEvent) => {
        const { onFocus, disabled, selected } = this.props

        if (disabled || !onFocus) {
            return
        }

        onFocus({ selected }, e)
    }

    handleOpen = () => {
        this.setState({
            open: true,
            menuWidth: this.getMenuWidth(),
        })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    onToggle = (e: React.MouseEvent<HTMLDivElement>) => {
        if (this.props.disabled) {
            return
        }

        e.stopPropagation()

        this.state.open ? this.handleClose() : this.handleOpen()
    }

    onOutsideClick = (...args: unknown[]) => {
        const { onBlur, disabled, selected } = this.props

        if (disabled) {
            return
        }

        this.handleClose()

        if (onBlur) {
            onBlur({ selected }, args[0] as React.SyntheticEvent)
        }
    }

    onKeyDown = (e: React.KeyboardEvent) => {
        const { onKeyDown, disabled, selected } = this.props

        if (disabled) {
            return
        }

        if (onKeyDown) {
            onKeyDown({ selected }, e)
        }

        if (e.defaultPrevented) {
            return
        }

        const { open } = this.state
        const { keyCode } = e
        const shouldOpen =
            !open &&
            (keyCode === SPACE_KEY ||
                keyCode === UP_KEY ||
                keyCode === DOWN_KEY)
        const shouldClose = open && keyCode === ESCAPE_KEY

        /* Do not block event propagation when the Select is closed unless
         * the key to open it is pressed, so that other components like
         * the Modal can still respond to keypresses (i.e. ESC to close) */
        if (open || shouldOpen) {
            e.stopPropagation()
        }

        if (shouldClose) {
            return this.handleClose()
        }

        if (shouldOpen) {
            return this.handleOpen()
        }
    }

    render() {
        const { open, menuWidth } = this.state
        const {
            children,
            className,
            selected,
            onChange,
            tabIndex,
            maxHeight,
            error,
            warning,
            valid,
            disabled,
            dense,
            dataTest,
        } = this.props

        // Create the input
        const inputProps = {
            selected,
            onChange,
            options: children,
            disabled,
        }
        const input = React.cloneElement(this.props.input, inputProps)

        // Create the menu
        const menuProps = {
            selected,
            onChange,
            options: children,
            handleClose: this.handleClose,
            handleFocusInput: this.handleFocusInput,
        }
        const menu = React.cloneElement(this.props.menu, menuProps)

        return (
            <div
                className={className}
                ref={this.selectRef}
                onFocus={this.onFocus}
                onKeyDown={this.onKeyDown}
                data-test={dataTest}
            >
                <InputWrapper
                    onToggle={this.onToggle}
                    inputRef={this.inputRef}
                    tabIndex={disabled ? '-1' : tabIndex}
                    error={error}
                    warning={warning}
                    valid={valid}
                    disabled={disabled}
                    dense={dense}
                    dataTest={`${dataTest}-input`}
                >
                    {input}
                </InputWrapper>
                {open && (
                    <MenuWrapper
                        onClick={this.onOutsideClick}
                        maxHeight={maxHeight}
                        selectRef={this.selectRef}
                        menuWidth={menuWidth}
                        dataTest={`${dataTest}-menu`}
                    >
                        {menu}
                    </MenuWrapper>
                )}
            </div>
        )
    }
}
