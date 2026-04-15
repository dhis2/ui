interface IsReorderDownDisabledArgs {
    highlightedPickedOptions: string[]
    selected: string[]
}

export const isReorderDownDisabled = ({
    highlightedPickedOptions,
    selected,
}: IsReorderDownDisabledArgs): boolean =>
    highlightedPickedOptions.length !== 1 ||
    selected.indexOf(highlightedPickedOptions[0]) === selected.length - 1
