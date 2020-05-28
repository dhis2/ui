import React from 'react'
import css from 'styled-jsx/css'

import { useDataQuery } from '@dhis2/app-runtime'
import { LogoIconWhite } from '@dhis2/ui-core'

const logoStyles = css.resolve`
    svg {
        height: 25px;
        width: 27px;
    }

    img {
        max-height: 100%;
        min-height: auto;
        width: auto;
    }
`

const query = {
    customLogo: {
        resource: 'staticContent/logo_banner',
    },
}

const pathExists = data =>
    data &&
    data.customLogo &&
    data.customLogo.images &&
    data.customLogo.images.png

export const LogoImage = () => {
    const { loading, error, data } = useDataQuery(query)

    if (loading) return null

    let Logo
    if (!error && pathExists(data)) {
        Logo = (
            <img
                alt="Headerbar Logo"
                src={data.customLogo.images.png}
                className={logoStyles.className}
            />
        )
    } else {
        Logo = <LogoIconWhite className={logoStyles.className} />
    }

    return (
        <div>
            {Logo}

            {logoStyles.styles}
            <style jsx>{`
                div {
                    padding: 4px;
                    min-width: 48px;
                    max-width: 250px;
                    height: 48px;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
}
