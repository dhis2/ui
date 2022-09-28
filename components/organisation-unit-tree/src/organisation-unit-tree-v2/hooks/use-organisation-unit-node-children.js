import { useState, useEffect } from 'react'
import { useOrganisationUnitNode } from './use-organisation-unit-node.js'

export const useOrganisationUnitNodeChildren = (id) => {
    const node = useOrganisationUnitNode(id)
    const [state, setState] = useState(node.getChildrenState())

    useEffect(
        () =>
            node.subscribers.children.subscribe((state) => {
                setState(state)
            }),
        [node]
    )

    return state
}
