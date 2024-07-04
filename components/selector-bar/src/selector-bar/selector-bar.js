import { Button } from '@dhis2-ui/button'
import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'
import i18n from '../locales/index.js'

const ClearSelection = ({ disabled, onClick }) => {
    return (
        <div className="clear-selections">
            <Button small secondary disabled={disabled} onClick={onClick}>
                {i18n.t('Clear selections')}
            </Button>

            <style jsx>{`
                .clear-selections {
                    display: flex;
                    align-items: center;
                    height: 40px;
                    padding: 0 ${spacers.dp8};
                }
            `}</style>
        </div>
    )
}

ClearSelection.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export const SelectorBar = ({
    className,
    children,
    onClearSelectionClick,
    dataTest,
    disableClearSelections,
    additionalContent,
    ariaLabel,
}) => {
    const container = useRef(null)

    const [childrenToFocus, setChildrenToFocus] = useState([])

    useEffect(() => {
        if (container.current) {
            const controlsDiv = container.current.querySelector('.controls')
            if (controlsDiv) {
                const childElements = Array.from(controlsDiv.children)
                childElements.forEach((child) => {
                    child.tabIndex = -1
                })
                setChildrenToFocus(childElements)
            }
        }
    }, [children])

    const handleKeyDown = (event) => {
        const currentFocus = document.activeElement

        if (container.current && container.current === currentFocus) {
            if (childrenToFocus.length > 0 && childrenToFocus[0]) {
                childrenToFocus[0].focus()
            }
            return
        }
        if (!childrenToFocus.length) {
            return
        }

        const currentIndex = childrenToFocus.findIndex(
            (element) => element === currentFocus
        )

        if (currentIndex === -1) {
            return
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            const nextIndex = (currentIndex + 1) % childrenToFocus.length
            childrenToFocus[nextIndex].focus()
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            const prevIndex =
                (currentIndex - 1 + childrenToFocus.length) %
                childrenToFocus.length
            childrenToFocus[prevIndex].focus()
        }
    }

    return (
        <>
            <div
                className={cx(
                    'container',
                    { withRHSContents: additionalContent },
                    className
                )}
                data-test={dataTest}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                ref={container}
                role="toolbar"
                aria-label={ariaLabel}
            >
                <div className="controls">
                    {/*                     {React.Children.map(children, (child, index) =>
                        React.cloneElement(child, {
                            ref: childrenRefs[index],
                        })
                    )} */}
                    {children}
                    {onClearSelectionClick && (
                        <ClearSelection
                            disabled={disableClearSelections}
                            onClick={onClearSelectionClick}
                        />
                    )}
                </div>

                {additionalContent && (
                    <div className="additional-contents">
                        {additionalContent}
                    </div>
                )}

                <style jsx>{`
                    .container {
                        background: ${colors.white};
                        box-shadow: inset 0 -1px 0 0 ${colors.grey400};
                        padding-bottom: 1px;
                    }

                    .withRHSContents {
                        display: flex;
                    }

                    .controls {
                        display: flex;
                        flex-wrap: wrap;
                        flex-grow: 1;
                        gap: 1px;
                    }

                    .additional-contents {
                        ${
                            /*
                             * Specs define the space to be 12px.
                             * 8px already come from the clear selection component
                             */ ''
                        }
                        padding-inline-start: 4px;
                    }
                `}</style>
            </div>
        </>
    )
}

SelectorBar.defaultProps = {
    dataTest: 'dhis2-ui-selectorbar',
}

SelectorBar.propTypes = {
    children: PropTypes.any.isRequired,
    additionalContent: PropTypes.any,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disableClearSelections: PropTypes.bool,
    onClearSelectionClick: PropTypes.func,
}
