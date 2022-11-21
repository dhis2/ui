import { Card } from '@dhis2-ui/card'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { colors, spacers } from '@dhis2/ui-constants'
import { IconChevronUp24, IconChevronDown24 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'

const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, 2],
    },
}

/**
 * The reason this component expects the "open" state and "setOpen" function is
 * because certain actions inside the props.children might have to set "open"
 * to false as well.
 * A good example is selecting a value (which is not a click outside) and this
 * component neither has any control over that component nor does it have a way
 * to "observe" that behavior. Especially for selection bar items that allow
 * "multiple" selections, this would be more or less impossible to predict
 * inside this component
 */
export const SelectorBarItem = ({
    children,
    className,
    dataTest,
    disabled,
    displayOnly,
    label,
    noValueMessage,
    open,
    setOpen,
    value,
    onClearSelectionClick,
}) => {
    const buttonRef = useRef()
    const Icon = open ? IconChevronUp24 : IconChevronDown24

    return (
        <button
            ref={buttonRef}
            className={cx(
                'selector-bar-item',
                className,
                !displayOnly ? 'pointer' : ''
            )}
            disabled={disabled}
            onClick={() => setOpen && setOpen(true)}
            data-test={dataTest}
        >
            <span className="label">{label}</span>

            {!disabled && (
                <>
                    <span className="value">{value || noValueMessage}</span>
                    {value && onClearSelectionClick && (
                        <span
                            className="clear-icon"
                            onClick={(evt) => {
                                evt.stopPropagation()
                                onClearSelectionClick()
                            }}
                            data-test={`${dataTest}-clear-icon`}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L7 5.58579L8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289C10.0976 4.68342 10.0976 5.31658 9.70711 5.70711L8.41421 7L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L7 8.41421L5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289L5.58579 7L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" />
                            </svg>
                        </span>
                    )}
                </>
            )}

            {!displayOnly && (
                <span className="toggle-icon">
                    <Icon />
                </span>
            )}

            {open && (
                <Layer
                    onBackdropClick={(_, evt) => {
                        evt.stopPropagation()
                        setOpen(false)
                    }}
                >
                    <Popper
                        reference={buttonRef}
                        placement="bottom-start"
                        modifiers={[offsetModifier]}
                    >
                        <Card>{children}</Card>
                    </Popper>
                </Layer>
            )}

            <style jsx>{`
                .selector-bar-item {
                    display: flex;
                    background: none;
                    height: 40px;
                    align-items: center;
                    ${
                        /*
                         * The arrow icon has ~4px empty space on the sides,
                         * that's why the padding on the right is only 8px.
                         */ ''
                    }
                    padding: 0 ${spacers.dp8} 0 ${spacers.dp12};
                    font-size: 14px;
                    line-height: 16px;
                    border: none;
                    box-shadow: 0px 0px 0px 1px ${colors.grey400};
                }

                .selector-bar-item.pointer {
                    cursor: pointer;
                }

                .selector-bar-item:disabled {
                    cursor: not-allowed;
                }

                .label {
                    color: ${colors.grey600};
                }

                .value {
                    padding-left: ${spacers.dp8};
                }

                .clear-icon {
                    display: flex;
                    align-items: center;
                    margin-left: ${spacers.dp4};
                    padding: ${spacers.dp4};
                    cursor: pointer;
                }
                .clear-icon svg path {
                    fill: ${colors.grey500};
                }

                .clear-icon:hover svg path {
                    fill: ${colors.grey700};
                }

                .toggle-icon {
                    display: flex;
                    margin-left: ${spacers.dp4};
                    height: 100%;
                    align-items: center;
                }
            `}</style>
        </button>
    )
}

SelectorBarItem.defaultProps = {
    dataTest: 'dhis2-ui-selectorbaritem',
}

SelectorBarItem.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.any,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    displayOnly: PropTypes.bool,
    noValueMessage: PropTypes.string,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    value: PropTypes.string,
    onClearSelectionClick: PropTypes.func,
}
