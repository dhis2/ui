import { Card } from '@dhis2-ui/card'
import { CenteredContent } from '@dhis2-ui/centered-content'
import { Layer } from '@dhis2-ui/layer'
import {
    layers,
    spacers,
    spacersNum,
    sharedPropTypes,
} from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

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
        background: none;
    }
`

/**
 * @module
 * @param {Modal.PropTypes} props
 * @returns {React.Component}
 *
 * @desc Modal provides a UI to prompt the user to respond to a question
 * or a note to the user.
 *
 * Use Modal with the following Components:
 * ModelTitle (optional)
 * ModelContent (required)
 * ModelActions (optional)
 * @module
 * @param {Modal.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Modal } from @dhis2/ui-core
 * @example
 *  <Modal>
 *      <ModalTitle>Hello</ModalTitle>
 *      <ModalContent>Some content here</ModalContent>
 *      <ModalActions>
 *          <Button primary>My action</Button>
 *      </ModalActions>
 *  </Modal>
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/modal.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/modal--small-title-content-action|Storybook}
 */
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
            level={hide ? -1 : layers.blocking}
            className={hide ? layerStyles.className : ''}
            translucent={!hide}
        >
            <CenteredContent
                position={position}
                className={centeredContent.className}
            >
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
            </CenteredContent>

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

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Node} [children]
 * @prop {string} className
 * @prop {Function} onClose
 * @prop {bool} small
 * @prop {bool} large
 * @prop {string} [dataTest]
 */
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
