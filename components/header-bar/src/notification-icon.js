import { colors, elevations, spacers } from '@dhis2/ui-constants'
import { IconMessages24, IconMail24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import i18n from './locales/index.js'

const BADGE_REVEAL_DURATION_MS = 3000

function icon(kind) {
    if (kind === 'message') {
        return <IconMessages24 color={colors.white} />
    } else {
        return <IconMail24 color={colors.white} />
    }
}

export const NotificationIcon = ({
    count = 0,
    href,
    kind,
    dataTestId,
    title,
    'aria-label': ariaLabel,
}) => {
    const [badgeExpanded, setBadgeExpanded] = useState(count > 0)

    const hadUnreadAtMountRef = useRef(count > 0)
    useEffect(() => {
        if (!hadUnreadAtMountRef.current) {
            return
        }
        const timer = setTimeout(
            () => setBadgeExpanded(false),
            BADGE_REVEAL_DURATION_MS
        )
        return () => clearTimeout(timer)
    }, []) // Only on mount — simulates the post-login reveal

    return (
        <a
            dir="ltr"
            href={href}
            className={kind}
            data-test={dataTestId}
            title={i18n.t(title)}
            aria-label={i18n.t(ariaLabel)}
        >
            {icon(kind)}

            {count > 0 && (
                <span
                    className={badgeExpanded ? 'is-expanded' : undefined}
                    data-test={`${dataTestId}-count`}
                >
                    {count > 99 ? '99+' : count}
                </span>
            )}

            <style jsx>{`
                a {
                    position: relative;
                    margin: 0;
                    cursor: pointer;
                    padding: 0 ${spacers.dp12};
                    height: 100%;
                    display: flex;
                    align-items: center;
                }
                a:focus {
                    outline: 2px solid white;
                    outline-offset: -2px;
                }
                a:focus:not(:focus-visible) {
                    outline: none;
                }
                a:hover {
                    background: #1a557f;
                }
                a:active {
                    background: #104067;
                }
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                    position: absolute;
                    top: 18px;
                    transform: translate(50%, -50%);
                    inset-inline-end: ${spacers.dp16};
                    background-color: ${colors.red300};
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 15px;
                    text-align: center;
                    cursor: inherit;
                    white-space: nowrap;
                    overflow: hidden;

                    /* Dot state (default) */
                    min-width: 8px;
                    max-width: 8px;
                    height: 8px;
                    border-radius: 4px;
                    padding: 0;
                    color: transparent;
                    box-shadow: 0 0 0 2px #2c6693;

                    transition: max-width 150ms ease-in-out,
                        min-width 150ms ease-in-out, height 150ms ease-in-out,
                        border-radius 150ms ease-in-out,
                        padding 150ms ease-in-out, color 150ms ease-in-out,
                        box-shadow 150ms ease-in-out,
                        transform 150ms ease-in-out;
                }

                /* Full counter badge */
                span.is-expanded,
                a:hover span,
                a:focus-visible span {
                    min-width: 18px;
                    max-width: 80px;
                    height: 18px;
                    border-radius: ${spacers.dp12};
                    padding: 0 ${spacers.dp4};
                    color: ${colors.white};
                    box-shadow: ${elevations.e100};
                }
            `}</style>
        </a>
    )
}

NotificationIcon.propTypes = {
    'aria-label': PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    dataTestId: PropTypes.string,
    kind: PropTypes.oneOf(['interpretation', 'message']),
}
