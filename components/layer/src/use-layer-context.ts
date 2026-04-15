import { useContext } from 'react'
import { LayerContext } from './layer-context.ts'

export const useLayerContext = () => useContext(LayerContext)
