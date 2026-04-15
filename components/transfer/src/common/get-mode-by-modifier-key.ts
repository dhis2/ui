import { ADD_MODE, RANGE_MODE, REPLACE_MODE } from './modes.ts'

interface ModifierKeys {
    altKey: boolean
    shiftKey: boolean
    ctrlKey: boolean
    metaKey: boolean
}

export const getModeByModifierKey = ({
    altKey,
    shiftKey,
    ctrlKey,
    metaKey,
}: ModifierKeys): string => {
    const keys = [altKey, shiftKey, ctrlKey, metaKey]
    const amountKeyPressed = keys.filter((v) => v)
    const moreThanOneKeyPressed = amountKeyPressed.length

    if (moreThanOneKeyPressed !== 1) {
        return REPLACE_MODE
    }

    if (altKey || ctrlKey || metaKey) {
        return ADD_MODE
    }

    if (shiftKey) {
        return RANGE_MODE
    }

    // default to replace mode
    return REPLACE_MODE
}
