import { EnhancedPrimitiveSet } from './enhanced-primitive-set.js'

export class AncestorMap extends Map {
    addEntry(ancestorId, descendantId) {
        if (!this.has(ancestorId)) {
            this.set(ancestorId, new EnhancedPrimitiveSet())
        }

        this.get(ancestorId).add(descendantId)
    }

    deleteEntry(ancestorId, descendantId) {
        const ancestor = this.get(ancestorId)

        if (!ancestor) {
            return
        }

        ancestor.delete(descendantId)

        if (ancestor.isEmpty()) {
            this.delete(ancestorId)
        }
    }

    createInstance() {
        throw new Error(
            'Method `create` needs to be implemented by the extending class defenition'
        )
    }

    clone() {
        const clone = this.createInstance()
        this.forEach((descendantSet, ancestorId) => {
            clone.set(ancestorId, descendantSet.clone())
        })
        return clone
    }
}

export class SelectedAncestorsMap extends AncestorMap {
    constructor(manager) {
        super()
        this.manager = manager
    }

    createInstance() {
        return new SelectedAncestorsMap(this.manager)
    }

    toggleEntry(ancestorId, descendantId) {
        const shouldDelete =
            this.has(ancestorId) && this.get(ancestorId).has(descendantId)

        if (shouldDelete) {
            this.deleteEntry(ancestorId, descendantId)
        } else {
            this.addEntry(ancestorId, descendantId)
        }
    }

    togglePathEntries(path) {
        const { unitId, ancestorIds } = this.manager.parsePath(path)

        for (const ancestorId of ancestorIds) {
            this.toggleEntry(ancestorId, unitId)
        }
    }

    compare(next) {
        const currAncestorIds = new EnhancedPrimitiveSet(this.keys())
        const nextAncestorIds = new EnhancedPrimitiveSet(next.keys())
        const { changes } = currAncestorIds.diff(nextAncestorIds)

        return changes
    }
}

export class FilteredParentsMap extends AncestorMap {
    createInstance() {
        return new FilteredParentsMap()
    }

    compare(next) {
        const deletions = new EnhancedPrimitiveSet(this.keys())
        const additions = new EnhancedPrimitiveSet(next.keys())

        next.forEach((nextSet, ancestorId) => {
            if (this.get(ancestorId)?.hasEqualValues(nextSet)) {
                deletions.delete(ancestorId)
                additions.delete(ancestorId)
            }
        })
        const changes = deletions.concat(additions)
        return changes
    }

    reset(nextParentsMap) {
        this.clear()
        nextParentsMap.forEach((childIdsSet, parentId) => {
            this.set(parentId, childIdsSet)
        })
    }
}
