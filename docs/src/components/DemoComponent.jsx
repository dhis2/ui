import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import styles from './DemoComponent.module.css'

export const Demo = (props) => {
    const [contentRef, setContentRef] = useState(null)

    const mountNode = contentRef?.contentWindow?.document?.body

    const styleTag = document.querySelector('[data-styled-jsx]')

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
        }

        mountHead.appendChild(styleTag.cloneNode())
    }

    return (
        <div className={styles.demo}>
            <div className={styles.demoTitle}>Demo</div>
            <iframe loading="lazy" className={styles.demoFrame} {...props} ref={setContentRef}>
                {mountNode && createPortal(props.children, mountNode)}
            </iframe>
        </div>
    )
}
