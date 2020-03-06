import React, { useContext } from 'react'
import propTypes from '@dhis2/prop-types'
import { layers } from '@dhis2/ui-constants'

const LayerContext = React.createContext(0)

const getStackedLayer = (zIndex, context) => {
    // Keep alert layer constant
    if (zIndex === layers.alert) {
        return layers.alert
    }

    // Differentiate between a stacked blocking and applicationTop layer
    const layerIncrement = zIndex === layers.blocking ? 2 : 1
    const layer = context + layerIncrement

    // stay within stack layer boundaries defined by the design system
    // https://github.com/dhis2/design-system/blob/master/principles/spacing-alignment.md#stacking
    if (layer >= layers.alert) {
        return layers.alert - 1
    }

    return layer
}

const useLayer = zIndex => {
    const context = useContext(LayerContext)

    if (context) return getStackedLayer(zIndex, context)

    return zIndex
}

/**
 * @module
 * @private
 * @param {Layer.PropTypes} props
 * @returns {React.Component}
 */
const Layer = ({ children, zIndex }) => {
    const newLayer = useLayer(zIndex)

    return (
        <LayerContext.Provider value={newLayer}>
            {children(newLayer)}
        </LayerContext.Provider>
    )
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} children
 * @prop {number} zIndex
 */
Layer.propTypes = {
    children: propTypes.func.isRequired,
    zIndex: propTypes.number,
}

export { Layer, useLayer }
