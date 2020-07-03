import React, { useEffect, useRef, useState } from 'react'
import propTypes from '@dhis2/prop-types'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

const TOP = 'top'
const MIDDLE = 'middle'
const END = 'end'

const onScrollFactory = ({
    currentPosition,
    endTolerance,
    onAreaEnter,
    prevScrollTop,
    setCurrentPosition,
    setPrevScrollTop,
    topTolerance,
}) => scrollableElement => {
    // WIll contain the next area IF it changes
    let nextArea

    // scrollHeight = Height of the scrollable area in px
    // scrollTop = How many pixels the scrollable area has been scrolled
    // clientHeight = Height of the actual scrollable box
    const { scrollHeight, scrollTop, clientHeight } = scrollableElement

    // Initial call
    // This way `scrolledUp` and `scrolledDown` will be true
    // during the initial call so they won't matter
    const initialCall = prevScrollTop === -1

    // Scroll up if previously was scrolled down more
    const scrolledUp = initialCall || scrollTop < prevScrollTop
    // Is at top when scroll top is less than the tolerance
    const isAtTop = scrollTop <= topTolerance

    // Scroll up if previously was scrolled down less
    const scrolledDown = initialCall || scrollTop > prevScrollTop
    // "scrollHeight - scrollTop" will never be more than the client height
    const isAtBottom = scrollHeight - scrollTop <= clientHeight + endTolerance

    setPrevScrollTop(scrollTop)

    if (scrolledDown && isAtBottom && currentPosition !== END) {
        nextArea = END
    } else if (scrolledUp && isAtTop && currentPosition !== TOP) {
        nextArea = TOP
    } else if (!isAtBottom && !isAtTop && currentPosition !== MIDDLE) {
        nextArea = MIDDLE
    }

    if (nextArea) {
        setCurrentPosition(nextArea)
        onAreaEnter && onAreaEnter({ area: nextArea }, event)
    }
}

/**
 * @module
 *
 * @param {Scrollable.PropTypes} props
 * @returns {React.Component}
 *
 * @example
 * import { Scrollable } from '@dhis2/ui-core'
 * (
 *     <Scrollable
 *         onAreaEnter={Put your callback here}
 *         endTolerance={100} // in pixels
 *         topTolerance={100} // in pixels
 *     />
 * )
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/select.md|Design system}
 */
export const Scrollable = ({
    children,
    className,
    endTolerance,
    topTolerance,
    onAreaEnter,
}) => {
    const ref = useRef(null)

    // ensures that callback is not fired again when
    // scrolling down inside the tolerance zone
    // Can not set initial position here as the "end" section
    // might already be in the visible area
    const [currentPosition, setCurrentPosition] = useState('')

    // Used to check whether the user scrolled down or up.
    // This value is -1 so the initial value of "currentPosition"
    // will be evaluated to "end" if "end" if the end section is
    // already in the visible area
    const [prevScrollTop, setPrevScrollTop] = useState(-1)

    const onScroll = onScrollFactory({
        currentPosition,
        endTolerance,
        onAreaEnter,
        prevScrollTop,
        setCurrentPosition,
        setPrevScrollTop,
        topTolerance,
    })

    // Use the onScroll logic to determine the initial position.
    // Additionally this will notify the consumer about the initial position
    useEffect(() => {
        if (ref.current && !currentPosition) {
            onScroll(ref.current)
        }
    }, [ref.current, currentPosition])

    return (
        <div
            className={className}
            onScroll={event => onScroll(event.target)}
            ref={ref}
        >
            {children}

            <style jsx>{`
                div {
                    max-height: 100%;
                    max-width: 100%;
                    overflow: hidden;
                    overflow-y: auto;
                }
            `}</style>
        </div>
    )
}

Scrollable.defaultProps = {
    endTolerance: 0,
    topTolerance: 0,
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {any} [children]
 * @prop {string} [className]
 * @prop {number} [endTolerance]
 * @prop {number} [topTolerance]
 * @prop {Function} [onAreaEnter]
 * Will be called with the following payload:
 * { area: 'top' or 'middle' or 'end' }
 */
Scrollable.propTypes = {
    children: propTypes.any,
    className: propTypes.string,
    endTolerance: propTypes.number,
    topTolerance: propTypes.number,
    onAreaEnter: propTypes.func,
}
