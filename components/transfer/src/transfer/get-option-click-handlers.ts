import { getModeByModifierKey, TransferOptionObject } from '../common/index.ts'

export const getOptionClickHandlers = (
    option: TransferOptionObject,
    selectionHandler: ((payload: { value: string }) => void) | undefined,
    toggleHighlightedOption: (args: { option: TransferOptionObject; mode: string }) => void
) => ({
    onClick: (_: unknown, event: React.MouseEvent) => {
        const mode = getModeByModifierKey(event)
        toggleHighlightedOption({ option, mode })
    },
    onDoubleClick: selectionHandler,
})
