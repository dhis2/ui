import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './DemoComponent.module.css'

export const Demo = (props) => {
    const [styleLoading, setStyleLoading] = useState(true)
    const [frameLoading, setFrameLoading] = useState(true)
    const [contentRef, setContentRef] = useState(null)
    const [mountNode, setMountNode] = useState(null)

    useEffect(() => {
        const styleTag = document.querySelector('[data-styled-jsx]')

        setMountNode(contentRef?.contentWindow?.document?.body)

        const mountHead = contentRef?.contentWindow?.document?.head

        if (mountHead && styleTag) {
            for (const stylesheet of document.styleSheets) {
                const iframeDoc = contentRef?.contentWindow?.document
                const style = iframeDoc.createElement('style')

                style.appendChild(iframeDoc.createTextNode(''))

                mountHead.appendChild(style)

                if (stylesheet.ownerNode === styleTag) {
                    for (const rule of stylesheet.cssRules) {
                        // Good debugging entry-point for figuring out which
                        // styles are injected into the iframe.
                        // console.log(rule)
                        style.sheet.insertRule(rule.cssText)
                    }
                }
                style.sheet.insertRule(
                    'body { font-family: "Roboto", sans-serif; }'
                )
            }

            mountHead.appendChild(styleTag.cloneNode())
            setStyleLoading(false)
        }
    })

    return (
        <div className={styles.demo}>
            <div className={styles.demoTitle}>Demo</div>
            <iframe
                loading="lazy"
                onLoad={(e) => setFrameLoading(false)}
                className={clsx(
                    styles.demoFrame,
                    styleLoading ? styles.hidden : styles.visible
                )}
                {...props}
                ref={setContentRef}
            >
                {mountNode && createPortal(props.children, mountNode)}
            </iframe>
        </div>
    )
}
