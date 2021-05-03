import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { Component, createRef } from 'react'
import { animatedSideScroll } from './animated-side-scroll.js'
import { detectHorizontalScrollbarHeight } from './detect-horizontal-scrollbar-height.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

// TODO: ui-icons
function ChevronRight({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}
ChevronRight.propTypes = {
    className: propTypes.string,
}

function ChevronLeft({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}
ChevronLeft.propTypes = {
    className: propTypes.string,
}
/**
 * @module
 * @private
 * @param {ScrollBar.PropTypes} props
 * @returns {React.Component}
 */
class ScrollBar extends Component {
    scrollBox = createRef()
    scrollArea = createRef()
    state = {
        scrolledToStart: false,
        scrolledToEnd: false,
    }
    horizontalScrollBarHeight = detectHorizontalScrollbarHeight()

    componentDidMount() {
        this.scrollSelectedTabIntoView()
        this.attachSideScrollListener()
    }

    componentWillUnmount() {
        this.removeSideScrollListener()
    }

    scrollRight = () => this.scroll()

    scrollLeft = () => this.scroll(true)

    scroll(goBackwards) {
        this.removeSideScrollListener()

        animatedSideScroll(
            this.scrollBox.current,
            this.animatedScrollCallback,
            goBackwards
        )
    }

    animatedScrollCallback = () => {
        this.toggleScrollButtonVisibility()
        this.attachSideScrollListener()
    }

    toggleScrollButtonVisibility = () => {
        const { scrollLeft, offsetWidth } = this.scrollBox.current
        const { offsetWidth: areaOffsetWidth } = this.scrollArea.current
        const scrolledToStart = scrollLeft <= 0
        const scrolledToEnd = scrollLeft + offsetWidth >= areaOffsetWidth

        if (
            this.state.scrolledToStart !== scrolledToStart ||
            this.state.scrolledToEnd !== scrolledToEnd
        ) {
            this.setState({
                scrolledToStart,
                scrolledToEnd,
            })
        }
    }

    scrollSelectedTabIntoView() {
        const scrollBoxEl = this.scrollBox.current
        const tab = scrollBoxEl.querySelector('.tab.selected')

        if (tab) {
            const tabEnd = tab.offsetLeft + tab.offsetWidth

            if (tabEnd > scrollBoxEl.offsetWidth) {
                scrollBoxEl.scrollLeft = tabEnd - scrollBoxEl.offsetWidth
            }
        }
    }

    attachSideScrollListener() {
        this.scrollBox.current.addEventListener(
            'scroll',
            this.toggleScrollButtonVisibility
        )
    }

    removeSideScrollListener() {
        this.scrollBox.current.removeEventListener(
            'scroll',
            this.toggleScrollButtonVisibility
        )
    }

    render() {
        const { scrolledToStart, scrolledToEnd } = this.state
        const { children, className, dataTest } = this.props

        return (
            <div className={cx('scroll-bar', className)} data-test={dataTest}>
                <button
                    onClick={scrolledToStart ? undefined : this.scrollLeft}
                    className={cx('scroll-button', {
                        disabled: scrolledToStart,
                    })}
                >
                    <ChevronLeft />
                </button>
                <div className="scroll-box-clipper">
                    <div className="scroll-box" ref={this.scrollBox}>
                        <div className="scroll-area" ref={this.scrollArea}>
                            {children}
                        </div>
                    </div>
                </div>
                <button
                    onClick={scrolledToEnd ? undefined : this.scrollRight}
                    className={cx('scroll-button', {
                        disabled: scrolledToEnd,
                    })}
                >
                    <ChevronRight />
                </button>

                <style jsx>{`
                    .scroll-box {
                        margin-bottom: ${-this.horizontalScrollBarHeight}px;
                    }
                `}</style>

                <style jsx>{`
                    .scroll-bar {
                        display: flex;
                        flex-wrap: nowrap;
                    }
                    .scroll-button {
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;

                        color: inherit;
                        background-color: ${colors.white};
                        border: none;
                        border-bottom: 1px solid ${colors.grey400};
                        outline: none;
                        padding: 16px 16px 11px 16px;

                        cursor: pointer;
                    }

                    .scroll-button :global(svg) {
                        width: 20px;
                        height: 20px;
                        fill: ${colors.grey600};
                        transition: opacity 150ms ease-in-out;
                        opacity: 1;
                    }

                    .scroll-button:hover {
                        background-color: ${colors.grey100};
                    }

                    .scroll-button:active {
                        /* Briefly highlight clicked button */
                        background-color: ${colors.grey200};
                    }

                    .scroll-button.disabled {
                        cursor: not-allowed;
                    }

                    .scroll-button.disabled:hover {
                        background-color: transparent;
                    }

                    .scroll-button.disabled :global(svg) {
                        fill: ${colors.grey500};
                    }

                    .scroll-box-clipper {
                        overflow-y: hidden;
                        flex-grow: 1;
                    }

                    .scroll-box {
                        flex-grow: 1;
                        overflow-x: scroll;
                        -webkit-overflow-scrolling: touch;
                        display: -ms-flexbox;
                        display: flex;
                    }

                    .scroll-box::-webkit-scrollbar {
                        display: none;
                    }

                    .scroll-area {
                        position: relative;
                        display: flex;
                        flex: 1 0 auto;
                        overflow-x: hidden;
                    }
                `}</style>
            </div>
        )
    }
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} children
 * @prop {string} [className]
 */
ScrollBar.propTypes = {
    children: propTypes.node.isRequired,
    dataTest: propTypes.string.isRequired,
    className: propTypes.string,
}

export { ScrollBar }
