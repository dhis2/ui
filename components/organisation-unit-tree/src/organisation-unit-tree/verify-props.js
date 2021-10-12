const controlledProps = ({ expanded, handleExpand, handleCollapse }) => {
    const hasAll = expanded && handleExpand && handleCollapse
    const hasNone = !expanded && !handleExpand && !handleCollapse
    return !hasAll && !hasNone
}

export const verifyProps = props => {
    if (controlledProps(props)) {
        return 'A controlled <Transfer> component requires all of the following props: expandedControlled, handleExpandControlled, handleCollapseControlled'
    }
}
