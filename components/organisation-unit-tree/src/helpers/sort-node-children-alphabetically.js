// sort mutates the original
export const sortNodeChildrenAlphabetically = (children) =>
    [...children].sort((left, right) =>
        left.displayName.localeCompare(right.displayName)
    )
