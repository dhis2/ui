import {
    ALL_APPS_VIEW,
    ALL_COMMANDS_VIEW,
    ALL_SHORTCUTS_VIEW,
    FILTERABLE_ACTION,
} from './constants.js'

/**
 * Copied from here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
 */
function escapeRegExpCharacters(text) {
    return text.replace(/[/.*+?^${}()|[\]\\]/g, '\\$&')
}

function removePunctuation(text) {
    return text.replace(/[.,!;:`"'?\-_\s]/g, '')
}

function removeAccentMarks(str) {
    /**
     * normalisation reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
     */
    return str.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
}

export function processString(text) {
    const str = removePunctuation(text)
    return removeAccentMarks(str)
}

export const filterItemsArray = (items, filter) => {
    if (!filter.length) {
        return items
    }
    return items.filter(({ displayName, name }) => {
        const itemName = displayName || name
        const formattedItemName = itemName.toLowerCase()
        const formattedFilter = filter.toLowerCase()

        const escapedFilter = escapeRegExpCharacters(formattedFilter)
        if (formattedItemName.match(escapedFilter)) {
            return true
        }

        const normalisedItemName = processString(formattedItemName)
        const normalisedFilter = processString(formattedFilter)
        if (normalisedFilter.length) {
            return normalisedItemName.includes(normalisedFilter)
        }
        return false
    })
}

export const filterItemsPerView = ({
    apps,
    commands,
    shortcuts,
    actions,
    filter,
    currentView,
}) => {
    const searchableActions = actions.filter(
        (action) => action.type === FILTERABLE_ACTION
    )

    const filteredApps = filterItemsArray(apps, filter)
    const filteredCommands = filterItemsArray(commands, filter)
    const filteredShortcuts = filterItemsArray(shortcuts, filter)
    const filteredActions = filterItemsArray(searchableActions, filter)

    if (currentView === ALL_APPS_VIEW) {
        return filteredApps
    }
    if (currentView === ALL_COMMANDS_VIEW) {
        return filteredCommands
    }
    if (currentView === ALL_SHORTCUTS_VIEW) {
        return filteredShortcuts
    }

    return [
        ...filteredApps,
        ...filteredCommands,
        ...filteredShortcuts,
        ...filteredActions,
    ]
}
