import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { DEMO_URL } from '../constants.js'
import styles from './DemoComponent.module.css'

export const Demo = ({ path, args, height }) => {
    const iframeRef = useRef(null)

    const handleReload = () => {
        if (iframeRef.current) {
            iframeRef.current.contentWindow.location.reload()
        }
    }

    const formatPath = (path) => {
        if (!path) {
            return false
        }
        return path.startsWith('/story/') ? path : `/story/${path}`
    }

    const handleShowFullDemo = () => {
        const formattedPath = formatPath(path)
        const fullDemoUrl = `${DEMO_URL}/?path=${encodeURIComponent(
            formattedPath
        )}${
            args
                ? `&args=${encodeURIComponent(args)
                      .replace(/%3A/g, ':')
                      .replace(/%3B/g, ';')}`
                : ''
        }`
        window.open(fullDemoUrl, '_blank', 'noopener,noreferrer')
    }

    const iframeSrc = `${DEMO_URL}/iframe.html?path=${encodeURIComponent(
        formatPath(path)
    )}&full=1&shortcuts=false&singleStory=true${
        args ? `&args=${encodeURIComponent(args)}` : ''
    }`

    return (
        <div className={styles.demo}>
            <div className={styles.demoTitle}>
                Demo
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={handleReload}>
                        Reload
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleShowFullDemo}
                    >
                        Show Full Demo
                    </button>
                </div>
            </div>
            <div className={styles.demoFrame} style={{ height }}>
                <iframe
                    ref={iframeRef}
                    src={iframeSrc}
                    title="Demo Frame"
                    className={styles.iframe}
                    loading="lazy"
                />
            </div>
        </div>
    )
}

Demo.propTypes = {
    path: PropTypes.string.isRequired,
    args: PropTypes.string,
    height: PropTypes.string,
}

Demo.defaultProps = {
    args: '',
    height: '100px',
}
