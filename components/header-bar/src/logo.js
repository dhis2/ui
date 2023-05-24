import { useConfig } from '@dhis2/app-runtime'
import React from 'react'
import { LogoImage } from './logo-image.js'

export const Logo = () => {
    const { baseUrl } = useConfig()

    return (
        <div data-test="headerbar-logo">
            <a href={baseUrl}>
                <LogoImage />
            </a>

            <style jsx>{`
                div {
                    box-sizing: border-box;
                    min-width: 49px;
                    max-height: 48px;
                    margin: 0 12px 0 0;
                    border-right: 1px solid rgba(32, 32, 32, 0.15);
                }
                div:hover {
                    background-color: #1a557f;
                }

                a,
                a:hover,
                a:focus,
                a:active,
                a:visited {
                    user-select: none;
                }
                a:focus {
                    outline: 2px solid white;
                    outline-offset: -2px;
                }
                a:focus:not(:focus-visible) {
                    outline: none;
                }
            `}</style>
        </div>
    )
}
