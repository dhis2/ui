import { useContext } from 'react'
import { LayerContext } from './layer-context.js'

export const useLayerContext = () => useContext(LayerContext)
