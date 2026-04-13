export interface OrgUnitChild {
    id: string
    path: string
    displayName: string
    children?: OrgUnitChild[]
}

// sort mutates the original
export const sortNodeChildrenAlphabetically = (
    children: OrgUnitChild[]
): OrgUnitChild[] =>
    [...children].sort((left, right) =>
        left.displayName.localeCompare(right.displayName)
    )
