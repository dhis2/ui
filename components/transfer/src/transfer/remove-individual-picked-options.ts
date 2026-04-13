import { TransferOptionObject } from '../common/index.ts'

interface RemoveIndividualPickedOptionsArgs {
    filterablePicked?: boolean
    pickedOptions: TransferOptionObject[]
    highlightedPickedOptions: string[]
    onChange: (payload: { selected: string[] }) => void
    selected: string[]
    setHighlightedPickedOptions: (options: string[]) => void
}

export const removeIndividualPickedOptions = ({
    filterablePicked,
    pickedOptions,
    highlightedPickedOptions,
    onChange,
    selected,
    setHighlightedPickedOptions,
}: RemoveIndividualPickedOptionsArgs): void => {
    const filteredHighlightedPickedOptions = filterablePicked
        ? highlightedPickedOptions.filter((value) =>
              pickedOptions.find(
                  (filteredOption) => filteredOption.value === value
              )
          )
        : highlightedPickedOptions

    const newSelected = selected.filter(
        (selectedOption) =>
            !filteredHighlightedPickedOptions.includes(selectedOption)
    )

    setHighlightedPickedOptions([])

    onChange({ selected: newSelected })
}
