import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import propTypes from '@dhis2/prop-types'

import { layers } from '@dhis2/ui-constants'
import { Layer } from './LayerContext.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @private
 * @param {DropMenu.PropTypes} props
 * @returns {React.Component}
 * @example import { DropMenu } from @dhis2/ui-core
 */
class DropMenu extends Component {
    state = {
        top: 'auto',
        left: 'auto',
    }

    requestId = null
    elContainer = React.createRef()

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
        window.addEventListener('resize', this.updatePosition)
        this.updatePosition()
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
        window.removeEventListener('resize', this.updatePosition)

        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId)
        }
    }

    updatePosition = () => {
        const anchorEl = this.props.anchorEl

        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId)
        }

        this.requestId = window.requestAnimationFrame(() => {
            const rect = anchorEl.getBoundingClientRect()
            const top = rect.bottom + window.scrollY
            const left = rect.left + window.scrollX

            const sizing = {
                top: `${top}px`,
                left: `${left}px`,
            }

            this.setState(sizing)
        })
    }

    onDocClick = evt => {
        if (
            this.elContainer.current &&
            !this.elContainer.current.contains(evt.target) &&
            !this.props.stayOpen
        ) {
            this.props.onClose({}, evt)
        }
    }

    render() {
        const { className, component, zIndex, dataTest } = this.props
        const { top, left } = this.state

        return ReactDOM.createPortal(
            <Layer zIndex={zIndex}>
                {zIndexComputed => (
                    <div
                        className={className}
                        ref={this.elContainer}
                        data-test={dataTest}
                    >
                        {component}

                        <style jsx>{`
                            div {
                                z-index: ${zIndexComputed};
                                position: absolute;
                                top: ${top};
                                left: ${left};
                            }
                        `}</style>
                    </div>
                )}
            </Layer>,
            document.body
        )
    }
}

DropMenu.defaultProps = {
    zIndex: layers.appliationTop,
    dataTest: 'dhis2-uicore-dropmenu',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Element} [component] - The element to show as the dropdown
 * @prop {function} [onClose] - Function to trigger when click happens outside of the DOM element
 * @prop {boolean} [stayOpen] - Decides if the menu should call the onClose function or not
 * @prop {Object} anchorEl - DOM node to position itself against,
 * needs to have the `getBoundingClientRect` function on its
 * `prototype`.
 * @prop {string} [dataTest]
 */
DropMenu.propTypes = {
    anchorEl: propTypes.shape({
        getBoundingClientRect: propTypes.func.isRequired,
    }).isRequired,
    className: propTypes.string,
    component: propTypes.element,
    dataTest: propTypes.string,
    stayOpen: propTypes.bool,
    zIndex: propTypes.number,
    onClose: propTypes.func,
}

export { DropMenu }
