import { Card } from '@dhis2-ui/card'
import { Center } from '@dhis2-ui/center'
import { Layer } from '@dhis2-ui/layer'
import { spacers, spacersNum, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { resolve } from 'styled-jsx/css'
import { CloseButton } from './close-button.js'

const resolveLayerStyles = (hide) =>
    resolve`
        div {
            padding: ${spacers.dp64};
            display: ${hide ? 'none' : 'block'};
        }
    `

export const Modal = ({
    children,
    className,
    dataTest,
    hide,
    fluid,
    large,
    onClose,
    position,
    small,
}) => {
    const layerStyles = resolveLayerStyles(hide)

    useEffect(() => {
        if (hide) {
            return
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && onClose) {
                event.preventDefault()
                event.stopPropagation()
                onClose()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [hide, onClose])

    return (
        <Layer
            onBackdropClick={onClose}
            className={layerStyles.className}
            translucent={!hide}
        >
            <Center position={position}>
                <aside
                    role="dialog"
                    aria-modal="true"
                    data-test={dataTest}
                    className={cx(className, { small, large, fluid })}
                >
                    <Card>
                        {onClose && <CloseButton onClick={onClose} />}
                        <div>{children}</div>
                    </Card>
                </aside>
                {layerStyles.styles}
            </Center>

            <style jsx>{`
                aside {
                    height: auto;
                    width: 600px;
                    max-width: calc(100vw - ${2 * spacersNum.dp64}px);
                    max-height: calc(100vh - ${2 * spacersNum.dp64}px);
                }

                aside.small {
                    width: 400px;
                }

                aside.large {
                    width: 800px;
                }

                aside.fluid {
                    width: auto;
                }
                div {
                    padding: 24px;
                    display: flex;
                    flex-flow: column;
                    max-width: calc(100vw - ${2 * spacersNum.dp64}px);
                    max-height: calc(100vh - ${2 * spacersNum.dp64}px);
                }
            `}</style>
        </Layer>
    )
}

Modal.defaultProps = {
    dataTest: 'dhis2-uicore-modal',
    position: 'top',
}

Modal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    fluid: PropTypes.bool,
    hide: PropTypes.bool,
    large: sharedPropTypes.sizePropType,
    position: sharedPropTypes.insideAlignmentPropType,
    small: sharedPropTypes.sizePropType,
    /** Callback used when the Modal closes */
    onClose: PropTypes.func,
}
