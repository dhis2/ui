import React from 'react'

interface MessageProps {
    children: string
}

const Message = ({ children }: MessageProps) => (
    <div>
        {children}
        <style jsx>{`
            div {
                flex-grow: 1;
            }
        `}</style>
    </div>
)

export { Message }
