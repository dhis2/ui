import React from 'react'
import { Layer } from './LayerContext.js'
import { LayerTwo } from './LayerContextTwo.js'

export default { title: 'Component/Widget/Layer', component: Layer }

const FIXED_INDEX = 1000

export const ItWorksOK = () => (
    <Layer zIndex={FIXED_INDEX}>
        {zIndexComputed => (
            <>
                <h1>{zIndexComputed}</h1>
                <Layer zIndex={FIXED_INDEX}>
                    {anotherZIndexComputed => <h1>{anotherZIndexComputed}</h1>}
                </Layer>
            </>
        )}
    </Layer>
)

export const ItFallsApart = () => (
    <Layer zIndex={FIXED_INDEX}>
        {zIndexComputed => (
            <>
                <h1>{zIndexComputed}</h1>
                <LayerTwo zIndex={FIXED_INDEX}>
                    {anotherZIndexComputed => <h1>{anotherZIndexComputed}</h1>}
                </LayerTwo>
            </>
        )}
    </Layer>
)
