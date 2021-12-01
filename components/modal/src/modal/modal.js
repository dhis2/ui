import { Card } from '@dhis2-ui/card'
import { Center } from '@dhis2-ui/center'
import { Layer } from '@dhis2-ui/layer'
import {
    colors,
    spacers,
    spacersNum,
    sharedPropTypes,
    theme,
} from '@dhis2/ui-constants'
import { IconCross16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

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
    return (
        <Layer
            onClick={onClose}
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
                        {onClose && (
                            <button
                                data-test="modal-close-button"
                                onClick={onClose}
                            >
                                <IconCross16 color={colors.grey800} />
                            </button>
                        )}
                        <div>{children}</div>
                    </Card>
                </aside>
                {layerStyles.styles}
            </Center>

            <style jsx>{`
                div {
                    padding: 24px;
                    display: flex;
                    flex-flow: column;
                    max-width: calc(100vw - ${2 * spacersNum.dp64}px);
                    max-height: calc(100vh - ${2 * spacersNum.dp64}px);
                }

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

                button {
                    background-color: transparent;
                    border: none;
                    padding: 4px 4px 0px;
                    outline: none;
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    border-radius: 3px;
                }
                button:hover {
                    background-color: ${colors.grey200};
                }
                button:focus {
                    background-color: ${colors.grey200};
                    outline: 3px solid ${theme.focus};
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
    /** Callback used when screen cover is clicked */
    onClose: PropTypes.func,
}
