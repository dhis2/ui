const DURATION = 250
const SCROLL_STEP = 0.5

export function animatedSideScroll(
    scrollBox: HTMLElement,
    callback?: (() => void) | null,
    goBackwards = false
): void {
    const startValue = scrollBox.scrollLeft
    const endValue = getEndValue(scrollBox, startValue, goBackwards)
    const change = endValue - startValue
    const step = createFrameStepper({
        scrollBox,
        callback: callback ?? undefined,
        startValue,
        endValue,
        change,
    })

    window.requestAnimationFrame(step)
}

function getEndValue(
    scrollBox: HTMLElement,
    startValue: number,
    goBackwards: boolean
): number {
    const scrollDistance = scrollBox.clientWidth * SCROLL_STEP
    const inverter = goBackwards ? -1 : 1
    return Math.floor(startValue + scrollDistance * inverter)
}

interface FrameStepperOptions {
    scrollBox: HTMLElement
    callback?: () => void
    startValue: number
    endValue: number
    change: number
}

function createFrameStepper({
    scrollBox,
    callback,
    startValue,
    endValue,
    change,
}: FrameStepperOptions): FrameRequestCallback {
    let startTimestamp: number | undefined
    let elapsedTime: number
    let scrollValue: number

    return function step(timestamp: number) {
        if (!startTimestamp) {
            startTimestamp = timestamp
        }

        elapsedTime = timestamp - startTimestamp
        scrollValue = easeInOutQuad({
            currentTime: elapsedTime,
            DURATION,
            startValue,
            change,
        })

        if (elapsedTime >= DURATION) {
            if (scrollValue !== endValue) {
                scrollBox.scrollLeft = endValue
            }
            callback && callback()
        } else {
            scrollBox.scrollLeft = scrollValue
            window.requestAnimationFrame(step)
        }
    }
}

interface EaseOptions {
    currentTime: number
    DURATION: number
    startValue: number
    change: number
}

function easeInOutQuad({ currentTime, startValue, change }: EaseOptions): number {
    let t = currentTime / (DURATION / 2)
    if (t < 1) {
        return (change / 2) * t * t + startValue
    }
    t -= 1
    return (-change / 2) * (t * (t - 2) - 1) + startValue
}
