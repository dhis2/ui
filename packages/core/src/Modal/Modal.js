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
import { Card } from '../Card/Card.js'
import { CenteredContent } from '../CenteredContent/CenteredContent.js'
import { Layer } from '../Layer/Layer.js'
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
    onClose,
    small,
    large,
    className,
    position,
    dataTest,
}) => (
    <Layer onClick={onClose} level={layers.blocking} translucent>
        <CenteredContent
            position={position}
            className={centeredContent.className}
        >
            <aside
                data-test={dataTest}
                className={cx(className, { small, large })}
            >
                <Card className={scrollBoxCard.className}>{children}</Card>
            </aside>
            {scrollBoxCard.styles}
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
    large: sharedPropTypes.sizePropType,
    position: sharedPropTypes.insideAlignmentPropType,
    small: sharedPropTypes.sizePropType,
    /** Callback used when screen cover is clicked */
    onClose: PropTypes.func,
}
