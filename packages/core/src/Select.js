import React, { Component } from 'react'
import propTypes from '@dhis2/prop-types'
import {
    statusPropType,
    singleSelectedPropType,
    multiSelectedPropType,
} from './common-prop-types.js'
import { InputWrapper } from './Select/InputWrapper.js'
import { MenuWrapper } from './Select/MenuWrapper.js'

// Keycodes for the keypress event handlers
const ESCAPE_KEY = 27
const SPACE_KEY = 32
const UP_KEY = 38
const DOWN_KEY = 40

export class Select extends Component {
    state = {
        open: false,
        menuTop: 'auto',
        menuLeft: 'auto',
        menuWidth: 'auto',
    }

    // The requestAnimationFrame id for updating the menu position
    menuRequestId = null

    selectRef = React.createRef()
    inputRef = React.createRef()
    menuRef = React.createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }
    }

    componentWillUnmount() {
        this.handleMeasurementStop()
    }

    handleFocusInput = () => {
        this.inputRef.current.focus()
    }

    onFocus = e => {
        const { onFocus, disabled, selected } = this.props

        if (disabled || !onFocus) {
            return
        }

        onFocus({ selected }, e)
    }

    /**
     * Menu related logic
     */
    updateMenuPosition = () => {
        const selectEl = this.selectRef.current

        // Debounce by canceling the previously scheduled measurement
        if (this.menuRequestId) {
            window.cancelAnimationFrame(this.menuRequestId)
        }

        this.menuRequestId = window.requestAnimationFrame(() => {
            const rect = selectEl.getBoundingClientRect()
            const menuTop = rect.bottom
            const menuLeft = rect.left
            const menuWidth = rect.width

            const sizing = {
                menuTop: `${menuTop}px`,
                menuLeft: `${menuLeft}px`,
                menuWidth: `${menuWidth}px`,
            }

            this.setState(sizing)
        })
    }

    handleMeasurementStart = () => {
        this.updateMenuPosition()

        window.addEventListener('resize', this.updateMenuPosition)
        window.addEventListener('scroll', this.updateMenuPosition)
    }

    handleMeasurementStop = () => {
        window.removeEventListener('resize', this.updateMenuPosition)
        window.removeEventListener('scroll', this.updateMenuPosition)

        if (this.menuRequestId) {
            window.cancelAnimationFrame(this.menuRequestId)
        }
    }

    handleOpen = () => {
        this.handleMeasurementStart()
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
        this.handleMeasurementStop()
    }

    onToggle = e => {
        if (this.props.disabled) {
            return
        }

        e.stopPropagation()

        this.state.open ? this.handleClose() : this.handleOpen()
    }

    onOutsideClick = e => {
        const { onBlur, disabled, selected } = this.props

        if (disabled) {
            return
        }

        this.handleClose()

        if (onBlur) {
            onBlur({ selected }, e)
        }
    }

    onKeyDown = e => {
        if (this.props.disabled) {
            return
        }

        e.stopPropagation()

        const { open } = this.state
        const { keyCode } = e
        const shouldOpen =
            !open &&
            (keyCode === SPACE_KEY ||
                keyCode === UP_KEY ||
                keyCode === DOWN_KEY)
        const shouldClose = open && keyCode === ESCAPE_KEY

        if (shouldClose) {
            return this.handleClose()
        }

        if (shouldOpen) {
            return this.handleOpen()
        }
    }

    render() {
        const { open, menuTop, menuLeft, menuWidth } = this.state
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

        // We need to update the menu's position on selection because
        // that can cause the input area to change size
        const handleChange = (data, e) => {
            this.updateMenuPosition()
            onChange(data, e)
        }

        // Create the input
        const inputProps = {
            selected,
            onChange: handleChange,
            options: children,
            disabled,
        }
        const input = React.cloneElement(this.props.input, inputProps)

        // Create the menu
        const menuProps = {
            selected,
            onChange: handleChange,
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
                    tabIndex={tabIndex}
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
                        menuRef={this.menuRef}
                        menuTop={menuTop}
                        menuLeft={menuLeft}
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

Select.defaultProps = {
    dataTest: 'dhis2-uicore-select',
}

Select.propTypes = {
    input: propTypes.element.isRequired,
    menu: propTypes.element.isRequired,
    selected: propTypes.oneOfType([
        singleSelectedPropType,
        multiSelectedPropType,
    ]).isRequired,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: statusPropType,
    initialFocus: propTypes.bool,
    maxHeight: propTypes.string,
    tabIndex: propTypes.string,
    valid: statusPropType,
    warning: statusPropType,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
}
