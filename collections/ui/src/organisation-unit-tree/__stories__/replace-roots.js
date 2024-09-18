import React from 'react'

export const ReplaceRoots = () => {
    return (
        <p>
            This is currently not working due to limitations of the data engine
            in the app runtime. Normally the root unit would&apos;ve been
            replaced after 1000 milliseconds.
        </p>
    )

    //const [roots, setRoots] = useState(['A0000000000'])

    //useEffect(() => {
    //    setTimeout(() => setRoots(['A0000000001']), delay)
    //}, [])

    //return (
    //    <OrganisationUnitTree
    //        name="Root org unit"
    //        roots={roots}
    //        onChange={console.log.bind(null, 'onChange')}
    //        initiallyExpanded={['/A0000000001']}
    //    />
    //)
}

ReplaceRoots.storyName = 'Replace roots'
