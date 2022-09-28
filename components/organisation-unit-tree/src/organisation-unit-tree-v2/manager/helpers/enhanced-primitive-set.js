export class EnhancedPrimitiveSet extends Set {
    reset(iterable) {
        this.clear()
        for (const item of iterable) {
            this.add(item)
        }
    }

    clone() {
        return new EnhancedPrimitiveSet(this)
    }

    find(callback) {
        let foundItem = undefined
        for (const item of this) {
            if (callback(item)) {
                foundItem = item
                break
            }
        }
        return foundItem
    }

    filter(callback) {
        const filteredItems = new EnhancedPrimitiveSet()
        for (const item of this) {
            if (callback(item)) {
                filteredItems.add(item)
            }
        }
        return filteredItems
    }

    diff(next) {
        const deletions = new EnhancedPrimitiveSet(this)
        const additions = new EnhancedPrimitiveSet(next)
        const unChanged = new EnhancedPrimitiveSet()

        for (const item of next) {
            if (this.has(item)) {
                deletions.delete(item)
                additions.delete(item)
                unChanged.add(item)
            }
        }

        const changes = deletions.concat(additions)

        return { deletions, additions, changes, unChanged }
    }

    hasEqualValues(iterable) {
        const len = Array.isArray(iterable) ? iterable.length : iterable.size

        if (this.size !== len) {
            return false
        }

        for (const item of iterable) {
            if (!this.has(item)) {
                return false
            }
        }

        return true
    }

    toggleValue(value) {
        if (this.has(value)) {
            this.delete(value)
        } else {
            this.add(value)
        }
    }

    toArray() {
        return Array.from(this)
    }

    concat(iterable) {
        const result = new EnhancedPrimitiveSet(this)
        for (const item of iterable) {
            result.add(item)
        }
        return result
    }

    assign(iterable) {
        for (const item of iterable) {
            this.add(item)
        }
    }

    toCommaDelimetedStrings(maxItemCount = 145) {
        const arrayOfCommaDelimitedStrings = []
        let currentCount = 0
        let commaDelimitedStrings = []

        for (const item of this) {
            commaDelimitedStrings.push(item)
            currentCount++

            if (currentCount === maxItemCount) {
                arrayOfCommaDelimitedStrings.push(commaDelimitedStrings.join())
                commaDelimitedStrings = []
                currentCount = 0
            }
        }

        if (commaDelimitedStrings.length > 0) {
            arrayOfCommaDelimitedStrings.push(commaDelimitedStrings.join())
        }

        return arrayOfCommaDelimitedStrings
    }

    getFirstValue() {
        return this.keys().next().value
    }

    isEmpty() {
        return this.size === 0
    }

    hasEntries() {
        return this.size > 0
    }

    stringifyItems() {
        return this.toArray().join()
    }
}
