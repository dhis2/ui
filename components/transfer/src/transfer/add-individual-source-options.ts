import { TransferOptionObject } from '../common/index.ts'

interface AddIndividualSourceOptionsArgs {
    filterable?: boolean
    sourceOptions: TransferOptionObject[]
    highlightedSourceOptions: string[]
    maxSelections: number
    onChange: (payload: { selected: string[] }) => void
    selected: string[]
    setHighlightedSourceOptions: (options: string[]) => void
}

export const addIndividualSourceOptions = ({
    filterable,
    sourceOptions,
    highlightedSourceOptions,
    maxSelections,
    onChange,
    selected,
    setHighlightedSourceOptions,
}: AddIndividualSourceOptionsArgs): void => {
    const filteredHighlightedSourceOptions = filterable
        ? highlightedSourceOptions.filter((value) =>
              sourceOptions.find(
                  (filteredOption) => filteredOption.value === value
              )
          )
        : highlightedSourceOptions

    const newSelected = filteredHighlightedSourceOptions.reduce(
        (accumulatedSelected, value) => [
            ...accumulatedSelected,
            filteredHighlightedSourceOptions.find(
                (filteredHighlightedSourceOption) =>
                    filteredHighlightedSourceOption === value
            ),
        ],
        selected as (string | undefined)[]
    )

    setHighlightedSourceOptions([])

    onChange({
        selected: (newSelected as string[]).slice(-1 * maxSelections),
    })
}
