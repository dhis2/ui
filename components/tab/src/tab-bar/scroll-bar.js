import propTypes from '@dhis2/prop-types'
import { IconChevronRight16, IconChevronLeft16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import React, { Component, createRef } from 'react'
import { animatedSideScroll } from './animated-side-scroll.js'
import { detectHorizontalScrollbarHeight } from './detect-horizontal-scrollbar-height.js'
import { ScrollButton } from './scroll-button.js'

class ScrollBar extends Component {
    scrollBox = createRef()
    scrollArea = createRef()
    horizontalScrollBarHeight = detectHorizontalScrollbarHeight()
    scrollBoxResizeObserver = null

    constructor(props) {
        super(props)
        this.state = {
            scrolledToStart: true,
            scrolledToEnd: false,
            // used to initially hide the entire content to prevent flickering
            hideScrollButtonsInitialized: false,
            // hide buttons initially to simplify calculations
            hideScrollButtons: false,
        }
        this.scrollBoxResizeObserver = new ResizeObserver(
            this.calculateShouldHideButtons
        )
    }

    componentDidMount() {
        this.scrollSelectedTabIntoView()
        this.attachSideScrollListener()
        this.manageShouldHideButtons()
    }

    componentWillUnmount() {
        this.removeSideScrollListener()
        this.scrollBoxResizeObserver.disconnect()
    }

    manageShouldHideButtons() {
        const { current: scrollBox } = this.scrollBox
        this.scrollBoxResizeObserver.observe(scrollBox)
        this.calculateShouldHideButtons()
    }

    calculateShouldHideButtons = () => {
        this.setState({ hideScrollButtonsInitialized: false })

        const { current: scrollBox } = this.scrollBox
        const { current: scrollArea } = this.scrollArea

        const areaWidth = scrollArea.offsetWidth
        const boxWidth = scrollBox.offsetWidth
        const hideScrollButtons = areaWidth <= boxWidth

        this.setState({ hideScrollButtons })

        if (!hideScrollButtons) {
            if (this.state.scrolledToStart) {
                this.scrollLeft()
            }

            if (this.state.scrolledToEnd) {
                this.scrollRight()
            }
        }

        this.setState({ hideScrollButtonsInitialized: true })
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
        this.updateScrolledToStates()
        this.attachSideScrollListener()
    }

    updateScrolledToStates = () => {
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
            this.updateScrolledToStates
        )
    }

    removeSideScrollListener() {
        this.scrollBox.current.removeEventListener(
            'scroll',
            this.updateScrolledToStates
        )
    }

    render() {
        const {
            scrolledToStart,
            scrolledToEnd,
            hideScrollButtonsInitialized,
            hideScrollButtons: hideScrollButtonsState,
        } = this.state
        const { children, className, dataTest } = this.props
        const hideScrollButtons =
            !hideScrollButtonsInitialized || hideScrollButtonsState

        return (
            <div className={cx('scroll-bar', className)} data-test={dataTest}>
                <ScrollButton
                    disabled={scrolledToStart}
                    onClick={this.scrollLeft}
                    hidden={hideScrollButtons}
                >
                    <IconChevronLeft16 />
                </ScrollButton>

                <div className="scroll-box-clipper">
                    <div className="scroll-box" ref={this.scrollBox}>
                        <div className="scroll-area" ref={this.scrollArea}>
                            {children}
                        </div>
                    </div>
                </div>

                <ScrollButton
                    disabled={scrolledToEnd}
                    onClick={this.scrollRight}
                    hidden={hideScrollButtons}
                >
                    <IconChevronRight16 />
                </ScrollButton>

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

ScrollBar.propTypes = {
    children: propTypes.node.isRequired,
    dataTest: propTypes.string.isRequired,
    className: propTypes.string,
}

export { ScrollBar }
