import { layers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Provider } from './layer-context.js'
import { useLayerContext } from './use-layer-context.js'

const createClickHandler = onClick => event => {
    // don't respond to clicks that originated in the children
    if (onClick && event.target === event.currentTarget) {
        onClick({}, event)
    }
}

const Layer = ({
    children,
    className,
    dataTest,
    level,
    onClick,
    position,
    translucent,
}) => {
    const parentLayer = useLayerContext()
    const [layerEl, setLayerEl] = useState(null)
    const nextLayer = {
        node: layerEl,
        level: Math.max(parentLayer.level, level),
    }
    const portalNode =
        level > parentLayer.level ? document.body : parentLayer.node

    return (
        <React.Fragment>
            {createPortal(
                <div
                    ref={setLayerEl}
                    className={cx(
                        'layer',
                        className,
                        position,
                        `level-${level}`,
                        {
                            translucent,
                        }
                    )}
                    data-test={dataTest}
                    onClick={createClickHandler(onClick)}
                >
                    {layerEl && (
                        <Provider value={nextLayer}>{children}</Provider>
                    )}
                    <style jsx>{`
                        div {
                            z-index: ${level};
                        }
                    `}</style>
                    <style jsx>{`
                        div {
                            top: 0;
                            left: 0;
                            min-height: 100vh;
                            min-width: 100vw;
                        }
                        div.fixed {
                            position: fixed;
                            height: 100vh;
                            width: 100vw;
                        }
                        div.absolute {
                            position: absolute;
                            height: 100%;
                            width: 100%;
                        }
                        div.translucent {
                            background-color: rgba(33, 43, 54, 0.4);
                        }
                    `}</style>
                </div>,
                portalNode
            )}
        </React.Fragment>
    )
}

Layer.defaultProps = {
    position: 'fixed',
    dataTest: 'dhis2-uicore-layer',
    level: layers.applicationTop,
}

Layer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Z-index level */
    level: PropTypes.number,
    position: PropTypes.oneOf(['absolute', 'fixed']),
    /** Adds a semi-transparent background */
    translucent: PropTypes.bool,
    /** Click handler */
    onClick: PropTypes.func,
}

export { Layer }
