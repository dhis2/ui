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
    height,
    hide,
    large,
    maxHeight,
    maxWidth,
    onClose,
    position,
    small,
    width,
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
                    height: ${height || 'auto'};
                    max-height: ${maxHeight ||
                    (height ? 'none' : 'calc(100vh - 128px)')};
                    width: ${width || '600px'};
                    max-width: ${maxWidth ||
                    (width ? 'none' : 'calc(100vw - 128px)')};
                    margin: auto;
                }

                aside.small {
                    width: ${width || '400px'};
                }

                aside.large {
                    width: ${width || '800px'};
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
    height: PropTypes.string,
    hide: PropTypes.bool,
    large: sharedPropTypes.sizePropType,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
    position: sharedPropTypes.insideAlignmentPropType,
    small: sharedPropTypes.sizePropType,
    width: PropTypes.string,
    /** Callback used when screen cover is clicked */
    onClose: PropTypes.func,
}
