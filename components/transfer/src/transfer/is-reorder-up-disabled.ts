interface IsReorderUpDisabledArgs {
    highlightedPickedOptions: string[]
    selected: string[]
}

export const isReorderUpDisabled = ({
    highlightedPickedOptions,
    selected,
}: IsReorderUpDisabledArgs): boolean =>
    highlightedPickedOptions.length !== 1 ||
    selected.indexOf(highlightedPickedOptions[0]) === 0
