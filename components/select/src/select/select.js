import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { debounce } from './debounce/debounce.js'
import { InputWrapper } from './input-wrapper.js'
import { MenuWrapper } from './menu-wrapper.js'

// Keycodes for the keypress event handlers
const ESCAPE_KEY = 27
const SPACE_KEY = 32
const UP_KEY = 38
const DOWN_KEY = 40

export class Select extends Component {
    state = {
        open: false,
        menuWidth: 'auto',
    }

    selectRef = React.createRef()
    inputRef = React.createRef()

    componentDidMount() {
        if (this.props.initialFocus) {
            this.inputRef.current.focus()
        }

        this.setState({ menuWidth: this.getMenuWidth() })
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    /**
     * We're debouncing this so it doesn't fire continually during a resize.
     *
     * Additionally we should use requestPostAnimationFrame to not trigger a forced
     * layout, but that's just a proposal, and the added complexity of solving this
     * in another manner does not seem worth it, considering the minor perf penalty.
     *
     * See: https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web
     */
    onResize = debounce(() => {
        const menuWidth = this.getMenuWidth()

        if (this.state.menuWidth !== menuWidth) {
            this.setState({ menuWidth })
        }
    }, 50)

    getMenuWidth() {
        const { offsetWidth } = this.inputRef.current
        const { menuWidth } = this.state

        if (offsetWidth && `${offsetWidth}px` !== menuWidth) {
            return `${offsetWidth}px`
        }
        return menuWidth
    }

    handleFocusInput = () => {
        this.inputRef.current.focus()
    }

    onFocus = (e) => {
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

    onToggle = (e) => {
        if (this.props.disabled) {
            return
        }

        e.stopPropagation()

        this.state.open ? this.handleClose() : this.handleOpen()
    }

    onOutsideClick = (e) => {
        const { onBlur, disabled, selected } = this.props

        if (disabled) {
            return
        }

        this.handleClose()

        if (onBlur) {
            onBlur({ selected }, e)
        }
    }

    onKeyDown = (e) => {
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
                    tabIndex={disabled ? -1 : tabIndex}
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

Select.defaultProps = {
    dataTest: 'dhis2-uicore-select',
}

Select.propTypes = {
    input: PropTypes.element.isRequired,
    menu: PropTypes.element.isRequired,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    error: sharedPropTypes.statusPropType,
    initialFocus: PropTypes.bool,
    maxHeight: PropTypes.string,
    tabIndex: PropTypes.string,
    valid: sharedPropTypes.statusPropType,
    warning: sharedPropTypes.statusPropType,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
}
