import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export const Demo = (props) => {
    const [ contentRef, setContentRef ] = useState(null)

    const mountNode = contentRef?.contentWindow?.document?.body

    const styleTags = document.querySelectorAll('style')

    const mountHead = contentRef?.contentWindow?.document?.head
    if (mountHead) {
        for (const stylesheet of document.styleSheets) {
            const iframeDoc = contentRef?.contentWindow?.document
            const style = iframeDoc.createElement('style')

            style.appendChild(iframeDoc.createTextNode(''))

            mountHead.appendChild(style)

            for (const rule of stylesheet.cssRules) {
                console.log(rule)
                style.sheet.insertRule(rule.cssText)
            }
        }
        for (const styleTag of styleTags) {
            mountHead.appendChild(styleTag.cloneNode())
        }
    }

    return (
        <div className="demo">
            <div className="demo-title">Demo</div>
                <iframe {...props} ref={setContentRef}>
                    {mountNode && createPortal(props.children, mountNode)}
                </iframe>
            <style>
                {`
                    iframe {
                        width: 100%;
                        overflow: clip;
                        padding: 24px 16px;

                    }
                    .demo {
                        border: 1px solid #e5e5e5;
                        margin-bottom: 16px;
                    }
                    .demo-title {
                        width: 100%;
                        background-color: #e5e5e5;
                        font-size: 0.8rem;
                        padding: 2px 4px;
                        font-family: monospace;
                    }
                `}
            </style>
        </div>
    )
}
