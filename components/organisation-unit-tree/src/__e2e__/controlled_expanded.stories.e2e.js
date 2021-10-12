import { Button } from '@dhis2-ui/button'
import React, { useState } from 'react'
import { OrganisationUnitTree, getAllExpandedOrgUnitPaths } from '../index.js'
import { createDecoratorCustomDataProvider, namespace } from './common.js'

window.initiallyExpandedPaths = ['/A0000000000/A0000000001']
window.orgUnitPathToExpand = '/A0000000000/A0000000001'

export default {
    title: namespace,
    decorators: [createDecoratorCustomDataProvider()],
}

export const Controlled = () => {
    const initiallyExpanded = getAllExpandedOrgUnitPaths(
        window.initiallyExpandedPaths
    )

    const [expanded, setExpanded] = useState(initiallyExpanded)

    const handleExpand = ({ path }) => {
        if (!expanded.includes(path)) {
            setExpanded([...expanded, path])
        }
    }

    const handleCollapse = ({ path }) => {
        const pathIndex = expanded.indexOf(path)

        if (pathIndex !== -1) {
            const updatedExpanded =
                pathIndex === 0
                    ? expanded.slice(1)
                    : [
                          ...expanded.slice(0, pathIndex),
                          ...expanded.slice(pathIndex + 1),
                      ]

            setExpanded(updatedExpanded)
        }
    }

    const imperativeToggle = () => {
        if (!expanded.includes('/A0000000000/A0000000001')) {
            // Make sure that all required sub paths are included as well
            const nextPaths = getAllExpandedOrgUnitPaths([
                ...expanded,
                window.orgUnitPathToExpand,
            ])

            return setExpanded(nextPaths)
        }

        setExpanded(expanded.filter(v => v !== '/A0000000000/A0000000001'))
    }

    return (
        <>
            <OrganisationUnitTree
                onChange={() => null}
                name="Root org unit"
                roots={['A0000000000']}
                expanded={expanded}
                handleExpand={handleExpand}
                handleCollapse={handleCollapse}
            />

            <br />

            <Button
                dataTest="org-unit-toggle"
                onClick={imperativeToggle}
            >
                Toggle Org Unit 2
            </Button>
        </>
    )
}

export const MissingProps = () => {
    const expanded = []
    const handleExpand = () => null

    return (
        <OrganisationUnitTree
            onChange={() => null}
            name="Root org unit"
            roots={['A0000000000']}
            expanded={expanded}
            handleExpand={handleExpand}
        />
    )
}

// export default {
//     title: 'AAAAAA',
//     decorators: [createDecoratorCustomDataProvider()],
// }
//
// export const Controlled = () => {
//     const initiallyExpanded = getAllExpandedOrgUnitPaths(
//         window.initiallyExpandedPaths
//     )
//
//     const [expanded, setExpanded] = useState(initiallyExpanded)
//
//     const handleExpand = ({ path }) => {
//         if (!expanded.includes(path)) {
//             setExpanded([...expanded, path])
//         }
//     }
//
//     const handleCollapse = ({ path }) => {
//         const pathIndex = expanded.indexOf(path)
//
//         if (pathIndex !== -1) {
//             const updatedExpanded =
//                 pathIndex === 0
//                     ? expanded.slice(1)
//                     : [
//                           ...expanded.slice(0, pathIndex),
//                           ...expanded.slice(pathIndex + 1),
//                       ]
//
//             setExpanded(updatedExpanded)
//         }
//     }
//
//     const imperativeToggle = () => {
//         if (!expanded.includes('/A0000000000/A0000000001')) {
//             // Make sure that all required sub paths are included as well
//             const nextPaths = getAllExpandedOrgUnitPaths([
//                 ...expanded,
//                 window.orgUnitPathToExpand,
//             ])
//
//             return setExpanded(nextPaths)
//         }
//
//         setExpanded(expanded.filter(v => v !== '/A0000000000/A0000000001'))
//     }
//
//     return (
//         <>
//             <OrganisationUnitTree
//                 onChange={() => null}
//                 name="Root org unit"
//                 roots={['A0000000000']}
//                 expanded={expanded}
//                 handleExpand={handleExpand}
//                 handleCollapse={handleCollapse}
//             />
//             <br />
//             <Button onClick={imperativeToggle}>Toggle Org Unit 2</Button>
//         </>
//     )
// }
//
// // Do we need this story?
// // export const CustomExpandedKeepUserExpanded = () => {
// //     /**
// //      * @param {string} path
// //      * @returns {string[]}
// //      */
// //     const extractAllPathsFromPath = path => {
// //         // remove leading slash and split by path delimiter/slashes
// //         const segments = path.replace(/^\//, '').split('/')
// //
// //         const withSubPaths = segments.map((segment, index) => {
// //             // take all segments from 0 to index and join them with the delimiter
// //             return `/${segments.slice(0, index + 1).join('/')}`
// //         })
// //
// //         return withSubPaths
// //     }
// //
// //     /**
// //      * @param {string[]} initiallyExpanded
// //      * @returns {string[]}
// //      */
// //     const getInitiallyExpandedPaths = paths =>
// //         paths.reduce((all, curPath) => {
// //             const allPathsInCurPath = extractAllPathsFromPath(curPath)
// //             return [...all, ...allPathsInCurPath]
// //         }, [])
// //
// //     const [useOriginal, setUseOriginal] = useState(true)
// //     const initiallyExpanded = getInitiallyExpandedPaths(
// //         ['/A0000000000/A0000000001']
// //     )
// //     const alternativeInitiallyExpanded = getInitiallyExpandedPaths(
// //         ['/A0000000000']
// //     )
// //
// //     const [expandedConfig, setExpandedConfig] = useState(
// //         () => initiallyExpanded.map(path => ({
// //             userExpanded: false,
// //             path,
// //         }))
// //     )
// //
// //     const expanded = useMemo(
// //         () => expandedConfig.map(({ path }) => path),
// //         [expandedConfig]
// //     )
// //
// //     const switchAutomaticallyExpended = () => {
// //         // Necessary due to the nature of the async state setter of the hook
// //         const nextUseOriginal = !useOriginal
// //         const allUserExpandedPaths = getInitiallyExpandedPaths(
// //             expandedConfig
// //                 .filter(({ userExpanded }) => userExpanded)
// //                 .map(({ path }) => path)
// //         )
// //
// //         const allUserExpanded = allUserExpandedPaths.map(path => ({
// //             userExpanded: true,
// //             path,
// //         }))
// //
// //         const actualInitiallyExpended = nextUseOriginal ? initiallyExpanded : alternativeInitiallyExpanded
// //         const missingInitiallyExpanded = actualInitiallyExpended.filter(path => {
// //             return !allUserExpandedPaths.find(curPath => curPath.includes(path))
// //         })
// //
// //         const nextExpandedConfig = [
// //             ...allUserExpanded,
// //             ...missingInitiallyExpanded.map(path => ({
// //                 userExpanded: false,
// //                 path,
// //             }))
// //         ]
// //
// //         setExpandedConfig(nextExpandedConfig)
// //         setUseOriginal(nextUseOriginal)
// //     }
// //
// //     const handleExpand = ({ path }) => {
// //         if (!expandedConfig.find(config => config.path === path)) {
// //             setExpandedConfig([...expandedConfig, { userExpanded: true, path }])
// //         }
// //     }
// //
// //     const handleCollapse = ({ path }) => {
// //         const pathIndex = expandedConfig.findIndex(config => config.path === path)
// //
// //         if (pathIndex !== -1) {
// //             const updatedExpandedConfig =
// //                 pathIndex === 0
// //                     ? expandedConfig.slice(1)
// //                     : [
// //                           ...expandedConfig.slice(0, pathIndex),
// //                           ...expandedConfig.slice(pathIndex + 1),
// //                       ]
// //
// //             setExpandedConfig(updatedExpandedConfig)
// //         }
// //     }
// //
// //     return (
// //         <>
// //             <OrganisationUnitTree
// //                 onChange={onChange}
// //                 name="Root org unit"
// //                 roots={['A0000000000']}
// //                 expanded={expanded}
// //                 handleExpand={handleExpand}
// //                 handleCollapse={handleCollapse}
// //             />
// //             <br />
// //             <Button onClick={switchAutomaticallyExpended}>
// //                 Switch automatically expanded
// //             </Button>
// //         </>
// //     )
// // }
