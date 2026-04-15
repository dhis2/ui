import React from 'react'

export interface TitleProps {
    app?: string
    instance?: string
}

export const Title = ({ app, instance }: TitleProps) => (
    <div data-test="headerbar-title">
        {app ? `${instance} - ${app}` : `${instance}`}

        <style jsx>{`
            div {
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.01em;
                white-space: nowrap;
            }
        `}</style>
    </div>
)
