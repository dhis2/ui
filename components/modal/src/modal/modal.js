import { Card } from '@dhis2-ui/card'
import { Center } from '@dhis2-ui/center'
import { Layer } from '@dhis2-ui/layer'
import { spacers, spacersNum, sharedPropTypes } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

const scrollBoxCard = resolve`
    div {
        display: flex;
        flex-direction: column;
        max-height: calc(100vh - ${2 * spacersNum.dp64}px);
        max-width: calc(100vw - ${2 * spacersNum.dp64}px);
    }
`

const centeredContent = resolve`
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
    large,
    onClose,
    position,
    small,
}) => {
    return (
        <Layer
            onClick={onClose}
            className={hide ? layerStyles.className : ''}
            translucent={!hide}
        >
            <Center position={position} className={centeredContent.className}>
                <aside
                    role="dialog"
                    aria-modal="true"
                    data-test={dataTest}
                    className={cx(className, { small, large })}
                >
                    <Card className={scrollBoxCard.className}>{children}</Card>
                </aside>
                {scrollBoxCard.styles}
                {layerStyles.styles}
                {centeredContent.styles}
            </Center>

            <style jsx>{`
                aside {
                    overflow-y: hidden;
                    height: auto;
                    max-height: calc(100vh - ${2 * spacersNum.dp64}px);
                    max-width: calc(100vw - ${2 * spacersNum.dp64}px);
                    width: 600px;
                }

                aside.small {
                    width: 400px;
                }

                aside.large {
                    width: 800px;
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
    hide: PropTypes.bool,
    large: sharedPropTypes.sizePropType,
    position: sharedPropTypes.insideAlignmentPropType,
    small: sharedPropTypes.sizePropType,
    /** Callback used when screen cover is clicked */
    onClose: PropTypes.func,
}
