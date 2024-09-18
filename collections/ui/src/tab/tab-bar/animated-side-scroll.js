const DURATION = 250
const SCROLL_STEP = 0.5

export function animatedSideScroll(scrollBox, callback, goBackwards = false) {
    const startValue = scrollBox.scrollLeft
    const endValue = getEndValue(scrollBox, startValue, goBackwards)
    const change = endValue - startValue
    const step = createFrameStepper({
        scrollBox,
        callback,
        startValue,
        endValue,
        change,
    })

    window.requestAnimationFrame(step)
}

function getEndValue(scrollBox, startValue, goBackwards) {
    const scrollDistance = scrollBox.clientWidth * SCROLL_STEP
    const inverter = goBackwards ? -1 : 1
    return Math.floor(startValue + scrollDistance * inverter)
}

function createFrameStepper({
    scrollBox,
    callback,
    startValue,
    endValue,
    change,
}) {
    let startTimestamp, elapsedTime, scrollValue

    return function step(timestamp) {
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

function easeInOutQuad({ currentTime, startValue, change }) {
    return (currentTime /= DURATION / 2) < 1
        ? (change / 2) * currentTime * currentTime + startValue
        : (-change / 2) * (--currentTime * (currentTime - 2) - 1) + startValue
}
