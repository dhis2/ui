import { useMemo } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { filterItemsArray } from '../utils/filterItemsArray.js'

export const useFilter = ({ apps, commands, shortcuts }) => {
    const { filter, currentView } = useCommandPaletteContext()

    const filteredApps = filterItemsArray(apps, filter)
    const filteredCommands = filterItemsArray(commands, filter)
    const filteredShortcuts = filterItemsArray(shortcuts, filter)

    const currentViewItemsArray = useMemo(() => {
        if (currentView === 'apps') {
            return filteredApps
        } else if (currentView === 'commands') {
            return filteredCommands
        } else if (currentView === 'shortcuts') {
            return filteredShortcuts
        } else {
            return filteredApps.concat(filteredCommands, filteredShortcuts)
        }
    }, [currentView, filteredApps, filteredCommands, filteredShortcuts])

    return {
        filteredApps,
        filteredCommands,
        filteredShortcuts,
        currentViewItemsArray,
    }
}
