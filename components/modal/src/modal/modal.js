import { Card } from '@dhis2-ui/card'
import { Center } from '@dhis2-ui/center'
import { Layer } from '@dhis2-ui/layer'
import { spacers, spacersNum, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

const getScrollBoxCardStyles = () => {
    return resolve`
        div {
            display: flex;
            flex-direction: column;
            max-height: calc(100vh - ${2 * spacersNum.dp64}px);
            max-width: calc(100vw - ${2 * spacersNum.dp64}px);
        }
    `
}

const centeredContentStyles = resolve`
    .top {
        padding-top: ${spacers.dp64};
    }
    .bottom {
        padding-bottom: ${spacers.dp64};
    }
`

const layerStyles = resolve`
    div {
		display: none;
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
    const scrollBoxCardStyles = getScrollBoxCardStyles()

    return (
        <Layer
            onClick={onClose}
            className={hide ? layerStyles.className : ''}
            translucent={!hide}
        >
            <Center
                position={position}
                className={cx(centeredContentStyles.className)}
            >
                <aside
                    role="dialog"
                    aria-modal="true"
                    data-test={dataTest}
                    className={cx(className, { small, large, fluid })}
                >
                    <Card className={scrollBoxCardStyles.className}>
                        {children}
                    </Card>
                </aside>
                {scrollBoxCardStyles.styles}
                {layerStyles.styles}
                {centeredContentStyles.styles}
            </Center>

            <style jsx>{`
                aside {
                    overflow-y: hidden;
                    height: auto;
                    width: 600px;
                    max-height: calc(100vh - 128px);
                    max-width: calc(100vw - 128px);
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
