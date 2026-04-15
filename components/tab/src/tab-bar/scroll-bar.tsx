import { IconChevronRight16, IconChevronLeft16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import React, { Component, createRef } from 'react'
import { animatedSideScroll } from './animated-side-scroll.ts'
import { detectHorizontalScrollbarHeight } from './detect-horizontal-scrollbar-height.ts'
import { ScrollButton } from './scroll-button.tsx'

export interface ScrollBarProps {
    children: React.ReactNode
    dataTest: string
    className?: string
}

interface ScrollBarState {
    scrolledToStart: boolean
    scrolledToEnd: boolean
    hideScrollButtonsInitialized: boolean
    hideScrollButtons: boolean
}

class ScrollBar extends Component<ScrollBarProps, ScrollBarState> {
    scrollBox = createRef<HTMLDivElement>()
    scrollArea = createRef<HTMLDivElement>()
    horizontalScrollBarHeight = detectHorizontalScrollbarHeight()
    scrollBoxResizeObserver: ResizeObserver | null = null

    constructor(props: ScrollBarProps) {
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
        this.scrollBoxResizeObserver?.disconnect()
    }

    manageShouldHideButtons() {
        const { current: scrollBox } = this.scrollBox
        if (scrollBox) {
            this.scrollBoxResizeObserver?.observe(scrollBox)
        }
        this.calculateShouldHideButtons()
    }

    calculateShouldHideButtons = () => {
        this.setState({ hideScrollButtonsInitialized: false })

        const { current: scrollBox } = this.scrollBox
        const { current: scrollArea } = this.scrollArea

        if (!scrollBox || !scrollArea) {
            return
        }

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

    scroll(goBackwards?: boolean) {
        this.removeSideScrollListener()

        if (this.scrollBox.current) {
            animatedSideScroll(
                this.scrollBox.current,
                this.animatedScrollCallback,
                goBackwards
            )
        }
    }

    animatedScrollCallback = () => {
        this.updateScrolledToStates()
        this.attachSideScrollListener()
    }

    updateScrolledToStates = () => {
        const scrollBox = this.scrollBox.current
        const scrollArea = this.scrollArea.current

        if (!scrollBox || !scrollArea) {
            return
        }

        const { scrollLeft, offsetWidth } = scrollBox
        const { offsetWidth: areaOffsetWidth } = scrollArea
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

        if (!scrollBoxEl) {
            return
        }

        const tab = scrollBoxEl.querySelector<HTMLElement>('.tab.selected')

        if (tab) {
            const tabEnd = tab.offsetLeft + tab.offsetWidth

            if (tabEnd > scrollBoxEl.offsetWidth) {
                scrollBoxEl.scrollLeft = tabEnd - scrollBoxEl.offsetWidth
            }
        }
    }

    attachSideScrollListener() {
        this.scrollBox.current?.addEventListener(
            'scroll',
            this.updateScrolledToStates
        )
    }

    removeSideScrollListener() {
        this.scrollBox.current?.removeEventListener(
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

export { ScrollBar }
