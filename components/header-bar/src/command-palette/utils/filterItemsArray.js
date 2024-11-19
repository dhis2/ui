import { escapeRegExpCharacters } from './escapeCharacters.js'

export const filterItemsArray = (items, filter) => {
    return items.filter(({ displayName, name }) => {
        const itemName = displayName || name
        const formattedItemName = itemName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedItemName.match(formattedFilter)
            : true
    })
}
