import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { colors, elevations } from '@dhis2/ui-constants'
import { IconChevronDown16 } from '@dhis2/ui-icons';
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import css from 'styled-jsx/css'

const { className, styles } = css.resolve`
  display: none;
`

// Check whether an option is valid
export const checkIfValidOption = (option) =>
    typeof option.props?.value !== 'undefined' &&
    typeof option.props?.label !== 'undefined'

const modifyOptions = (children, callback) => {
    return React.Children.map(children, (child) => {
        const isValidOption = checkIfValidOption(child)
        const hasChildren = !!child.props?.children

        if (!isValidOption && !hasChildren) {
            return child
        }

        if (isValidOption && !hasChildren) {
            return callback(child)
        }

        const modifiedChildren = modifyOptions(child.props.children, callback)

        if (!isValidOption && hasChildren) {
            React.cloneElement(child, {
                ...child.props,
                children: modifiedChildren,
            })
        }

        return callback(
            React.cloneElement(child, {
                ...child.props,
                children: modifiedChildren,
            })
        )
    })
}

export default function AccessibleSelect({
    name,
    selected,
    helpText,
    children: _children,
    onBlur: externalOnBlur,
    onChange: externalOnChange,
    onFocus,
}) {
    const buttonRef = useRef()
    const [open, setOpen] = useState(false)
    const [width, setWidth] = useState(-1)
    const optionsContainerId = `${name}-options`

    useEffect(() => {
        function handler() {
            const { offsetWidth } = buttonRef.current
            if (width !== offsetWidth) {
                setWidth(offsetWidth)
            }
        }

        handler()
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    }, [width])

    const onChange = (event) => {
        setOpen(false)

        if (externalOnChange) {
            externalOnChange(event)
        }
    }

    const onBlur = (event) => {
        if (externalOnBlur) {
            externalOnBlur(event)
        }
    }

    const children = modifyOptions(_children, (option) => {
        return React.cloneElement(option, {
            ...option.props,
            name,
            checked: option.props.value === selected,
            onChange,
            onBlur,
            onFocus,
        })
    })

    return (
        <div>
            <button
                name={`${name}-trigger`}
                ref={buttonRef}
                type="button"
                aria-expanded={open}
                aria-controls={optionsContainerId}
                onClick={() => setOpen(true)}
            >
                <span className="buttonContents">
                    <span className="selectedValue">
                        {selected}
                    </span>
                    <span className="icon">
                        <IconChevronDown16 />
                    </span>
                </span>
            </button>

            <Layer
                transparent
                className={open ? undefined : className}
                onBackdropClick={() => setOpen(false)}
            >
                <Popper
                    reference={buttonRef}
                    placement="bottom-start"
                    observeReferenceResize
                >
                    <fieldset
                        id={optionsContainerId}
                        className="optionsContainer"
                        style={{ width }}
                    >
                        <legend>
                            {helpText}
                        </legend>

                        {children}
                    </fieldset>
                </Popper>
            </Layer>

            {styles}

            <style jsx>{`
                .inputContainer {
                    display: flex;
                    gap: 8px;
                }

                button {
                    display: block;
                    box-sizing: border-box;
                    display: block;
                    width: 100%;
                    height: 40px;

                    font-size: 14px;
                    line-height: 16px;
                    user-select: text;

                    color: ${colors.grey900};
                    background-color: white;
                    padding: 0;

                    max-height: 40px;

                    outline: 0;
                    border: 1px solid ${colors.grey500};
                    border-radius: 3px;
                    box-shadow: inset 0 0 1px 0 rgba(48, 54, 60, 0.1);
                    text-overflow: ellipsis;

                    cursor: pointer;
                }

                button:hover {
                    border-color: ${colors.grey500};
                    background-color: ${colors.grey200};
                }

                .buttonContents {
                    display: flex;
                }

                .selectedValue {
                    display: block;
                    height: 100%;
                    flex-grow: 1;
                    padding: 11px 12px;
                    text-align: left;
                }

                .icon {
                    height: 38px;
                    width: 38px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .optionsContainer {
                    display: block;
                    padding: 0;
                    margin: 0;
                    border: 1px solid ${colors.grey200};
                    border-top: 0;
                    background: white;
                    border-radius: 0 0 3px 3px;
                    box-shadow: ${elevations.e300};
                    position: relative;
                }

                legend {
                    opacity: 0;
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            `}</style>
        </div>
    )
}

AccessibleSelect.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    helpText: PropTypes.string,
    selected: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
}
