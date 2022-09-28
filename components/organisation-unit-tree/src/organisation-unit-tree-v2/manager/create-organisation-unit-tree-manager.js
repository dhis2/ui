import {
    filterManager,
    openedManager,
    requestManager,
    selectionManager,
    treeManager,
    disabledManager,
    loadingManager,
    onChangeManager,
    rootNodeManager,
    pathManager,
    initializer,
} from './enhancers/index.js'

const enhance = (obj) => ({
    with: (cb, ...args) => enhance(Object.assign(obj, cb(obj, ...args))),
    result: () => obj,
})

export const createOrganisationUnitTreeManager = ({
    dataEngine,
    components,
    hooks = {},
    enhancers = [],
} = {}) => {
    const manager = enhance({ components, hooks })
        .with(requestManager, dataEngine)
        .with(loadingManager)
        .with(pathManager)
        .with(treeManager)
        .with(rootNodeManager)
        .with(disabledManager)
        .with(onChangeManager)
        .with(selectionManager)
        .with(openedManager)
        .with(filterManager)
        .with(initializer)

    for (const enhancer of enhancers) {
        manager.with(enhancer, dataEngine)
    }

    return manager.result()
}
