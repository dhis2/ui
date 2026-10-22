import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

// Screen readers don't announce a role="status" region that has text on
// mount, so the text is added after a delay. role="alert" is announced on
// insertion and needs no delay. The visible copy is rendered separately so
// the delay doesn't shift the layout.
const ANNOUNCE_DELAY = 100

const Message = ({ children, critical, dataTest }) => {
    const [announceable, setAnnounceable] = useState(false)

    useEffect(() => {
        if (critical) {
            return
        }

        const timeout = setTimeout(() => setAnnounceable(true), ANNOUNCE_DELAY)

        return () => clearTimeout(timeout)
    }, [critical])

    return (
        <div data-test={dataTest}>
            <span aria-hidden="true">{children}</span>
            <span role={critical ? 'alert' : 'status'} className="live-region">
                {critical || announceable ? children : null}
            </span>
            <style jsx>{`
                div {
                    flex-grow: 1;
                }

                .live-region {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    margin: -1px;
                    padding: 0;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border: 0;
                }
            `}</style>
        </div>
    )
}

Message.propTypes = {
    children: PropTypes.string.isRequired,
    dataTest: PropTypes.string.isRequired,
    critical: PropTypes.bool,
}

export { Message }
