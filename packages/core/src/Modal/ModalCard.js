import { resolve } from 'styled-jsx/css'
import React from 'react'
import cx from 'classnames'
import propTypes from '@dhis2/prop-types'

import { Card } from '../Card/Card.js'
import { insideAlignmentPropType } from '../common-prop-types.js'
import { sizePropType } from '../common-prop-types.js'
import { spacersNum } from '@dhis2/ui-constants'

const cardBoxStyle = resolve`
    .modal-card {
        display: flex;
        flex-direction: column;
        height: auto;
        left: 50%;
        max-height: calc(100vh - ${2 * spacersNum.dp64}px);
        max-width: calc(100vw - ${2 * spacersNum.dp64}px);
        position: absolute;
        width: 600px;
    }

    .top {
        top: 0;
        transform: translate(-50%, 0);
    }

    .middle {
        transform: translate(-50%, -50%);
    }

    .bottom {
        bottom: 0;
        transform: translate(-50%, 0);
    }

    .small { width: 400px; }
    .large { width: 800px; }
`

/**
 * @module
 * @private
 *
 * @param {ModalCard.PropTypes} props
 * @returns {React.Component}
 */
export const ModalCard = ({ children, small, large, position }) => (
    <Card
        className={cx(cardBoxStyle.className, 'modal-card', position, {
            small,
            large,
        })}
    >
        {children}
        {cardBoxStyle.styles}
    </Card>
)

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Element} children - Can be Modal.Title; Must be Modal.Content and Modal.Actions
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive
 * @prop {boolean} [large]
 */
ModalCard.propTypes = {
    children: propTypes.node.isRequired,
    position: insideAlignmentPropType.isRequired,
    large: sizePropType,
    small: sizePropType,
}
