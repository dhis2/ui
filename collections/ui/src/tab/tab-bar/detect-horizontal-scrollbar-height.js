let horizontalScrollbarHeight
const className = '__vertical-scrollbar-height-test__'
const styles = `
    .${className} {
        position: absolute;
        top: -9999px;
        width: 100px;
        height: 100px;
        overflow-x: scroll;
    }
    .${className}::-webkit-scrollbar {
        display: none;
    }
`

export function detectHorizontalScrollbarHeight() {
    if (horizontalScrollbarHeight) {
        return horizontalScrollbarHeight
    }

    const style = document.createElement('style')
    style.innerHTML = styles

    const el = document.createElement('div')
    el.classList.add(className)

    document.body.appendChild(style)
    document.body.appendChild(el)

    horizontalScrollbarHeight = el.offsetHeight - el.clientHeight

    document.body.removeChild(style)
    document.body.removeChild(el)

    return horizontalScrollbarHeight
}
