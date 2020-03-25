import cx from 'classnames'
import React, { createContext, useState, useContext } from 'react'
import { createPortal } from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { oneOf } from 'prop-types'

const LayerContext = createContext({
    node: document.body,
    level: 0,
})

const Layer = ({ children, className, level, position }) => {
    const parentLayer = useContext(LayerContext)
    const [layerEl, setLayerEl] = useState(null)
    const nextLayer = {
        node: layerEl,
        level: Math.max(parentLayer.level, level),
    }
    const portalNode =
        level > parentLayer.level ? document.body : parentLayer.node

    return createPortal(
        <div
            ref={setLayerEl}
            className={cx(className, position, `level-${level}`)}
        >
            {layerEl && (
                <LayerContext.Provider value={nextLayer}>
                    {children}
                </LayerContext.Provider>
            )}
            <style jsx>{`
                div {
                    z-index: ${level};
                    height: 100%;
                    width: 100%;
                }
                div.fixed {
                    position: fixed;
                    height: 100vh;
                    width: 100vw;
                }
                div.absolute {
                    position: absolute;
                }
                div.relative {
                    position: relative;
                }
            `}</style>
        </div>,
        portalNode
    )
}

Layer.defaultProps = {
    position: 'fixed',
}

Layer.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    level: propTypes.number,
    position: oneOf(['absolute', 'relative', 'fixed']),
}

export { Layer }
