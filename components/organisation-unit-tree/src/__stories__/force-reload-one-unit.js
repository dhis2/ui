import React from 'react'

export const ForceReloadOneUnit = () => {
    return (
        <p>
            This is currently not working due to limitations of the data engine
            in the app runtime.
        </p>
    )

    //const [idsThatShouldBeReloaded, setIdsThatShouldBeReloaded] = useState([])

    //useEffect(() => {
    //    setTimeout(() => setIdsThatShouldBeReloaded(['A0000000001']), delay)
    //}, [])

    //return (
    //    <OrganisationUnitTree
    //        onChange={onChange}
    //        idsThatShouldBeReloaded={idsThatShouldBeReloaded}
    //        name="Root org unit"
    //        roots={['A0000000000']}
    //        initiallyExpanded={['/A0000000000', '/A0000000000/A0000000001']}
    //        selected={['/A0000000000/A0000000001/A0000000003']}
    //        onChildrenLoaded={({ path, forced }) =>
    //            console.log(
    //                `Unit with path "${path}" loaded, was forced: ${
    //                    forced ? 'yes' : 'no'
    //                }`
    //            )
    //        }
    //    />
    //)
}
ForceReloadOneUnit.storyName = 'Force reload one unit'
