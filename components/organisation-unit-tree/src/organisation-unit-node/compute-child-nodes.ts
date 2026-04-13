import { isPathIncluded } from '../helpers/index.ts'
import type { OrgUnitChild } from '../helpers/index.ts'

interface NodeWithChildren {
    path: string
    children?: OrgUnitChild[]
}

export const computeChildNodes = (
    node: NodeWithChildren,
    filter: string[]
): OrgUnitChild[] => {
    if (!node.children) {
        return []
    }

    if (!filter.length) {
        return node.children
    }

    return node.children.filter((child) => {
        return isPathIncluded(filter, `${node.path}/${child.id}`)
    })
}
