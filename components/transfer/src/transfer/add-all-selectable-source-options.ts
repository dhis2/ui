import { TransferOptionObject } from '../common/index.ts'

interface AddAllSelectableSourceOptionsArgs {
    sourceOptions: TransferOptionObject[]
    selected: string[]
    onChange: (payload: { selected: string[] }) => void
    setHighlightedSourceOptions: (options: string[]) => void
}

export const addAllSelectableSourceOptions = ({
    sourceOptions,
    onChange,
    selected,
    setHighlightedSourceOptions,
}: AddAllSelectableSourceOptionsArgs): void => {
    const enabledSourceOptions = sourceOptions.filter(
        ({ disabled }) => !disabled
    )

    const newSelected = enabledSourceOptions.reduce(
        (accumulatedSelected, enabledSourceOption) => [
            ...accumulatedSelected,
            enabledSourceOption.value,
        ],
        selected
    )

    setHighlightedSourceOptions([])

    onChange({ selected: newSelected })
}
