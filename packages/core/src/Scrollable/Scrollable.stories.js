/* eslint-disable prettier/prettier, react/prop-types */
import React, { useState } from 'react'
import { Scrollable } from './Scrollable.js'

var sizeLimitDecorator = fn => React.createElement(() => {
    const [area, setArea] = useState('')
    const onAreaEnter = ({ area }) => setArea(area)

    return (
        <div style={{ width: 200, height: 300 }}>
            <p>
                Current area: {` ${area}`}
            </p>

            <hr />

            <div style={{
                border: '1px solid black',
                height: '100%',
                width: '100%',
            }}>
                {fn({ onAreaEnter })}
            </div>
        </div>
    )
})

export default { title: 'Scrollable', decorators: [sizeLimitDecorator] }

export const NoTolerance = ({ onAreaEnter }) => (
    <Scrollable onAreaEnter={onAreaEnter}>
        <Content topTolerance={0} endTolerance={0} />
    </Scrollable>
)

export const WithTolerance = ({ onAreaEnter }) => (
    <Scrollable
        topTolerance={90}
        endTolerance={90}
        onAreaEnter={onAreaEnter}
    >
        <Content topTolerance={90} endTolerance={90} />
    </Scrollable>
)

export const TopEndBothVisible = ({ onAreaEnter }) => (
    <Scrollable
        topTolerance={90}
        endTolerance={90}
        onAreaEnter={onAreaEnter}
    >
        <Content
            topTolerance={90}
            endTolerance={90}
            content={() => (
                <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempor venenatis hendrerit. Donec dictum sed ligula id
                    efficitur. Suspendisse feugiat, elit in dictum imperdiet,
                    mi tellus euismod nibh, vitae hendrerit turpis odio ut
                    mauris.
                </>
            )}
        />
    </Scrollable>
)

export const OverlappingTopEnd = ({ onAreaEnter }) => (
    <Scrollable
        topTolerance={90}
        endTolerance={90}
        onAreaEnter={onAreaEnter}
    >
        <Content
            topTolerance={90}
            endTolerance={90}
            content={() => (
                <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempor venenatis hendrerit.
                </>
            )}
        />
    </Scrollable>
)

var Text = () => (
    <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
        venenatis hendrerit. Donec dictum sed ligula id efficitur. Suspendisse
        feugiat, elit in dictum imperdiet, mi tellus euismod nibh, vitae
        hendrerit turpis odio ut mauris. Vestibulum rhoncus interdum nunc eu
        eleifend. Aenean viverra nibh hendrerit nulla iaculis, vitae tincidunt
        erat ullamcorper. Donec tempus mattis faucibus. Donec nec lacus vitae
        elit aliquet pharetra. Cras vitae odio eu lorem euismod malesuada.
        Nunc eu rhoncus mauris. Nullam vehicula elit id vehicula maximus.
        Phasellus gravida tincidunt mauris, vitae laoreet erat commodo id.
        Nullam vitae erat ante. Proin id ultricies risus, in ultricies mauris.
        Vivamus lectus enim, ultricies vel egestas nec, tempor a magna. Nam sed
        fermentum ipsum, a ullamcorper felis. Aenean finibus erat elit, at
        eleifend nulla rutrum at.
    </>
)

var Content = ({ topTolerance, endTolerance, content: Content = Text }) => (
    <div style={{ position: 'relative', lineHeight: 2 }}>
        <Content />

        <div
            style={{
                height: `${topTolerance}px`,
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: '-1',
                boxSizing: 'border-box',
                borderBottom: '2px solid red',
            }}
        >
            <span style={{
                fontSize: 10,
                lineHeight: 1,
                color: 'red',
                position: 'absolute',
                bottom: '-12px',
                left: 0,
            }}>
                TOLERANCE LINE
            </span>
        </div>

        <div
            style={{
                height: endTolerance,
                width: '100%',
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: '-1',
                boxSizing: 'border-box',
                borderTop: '2px solid red',
            }}
        >
            <span style={{
                fontSize: 10,
                lineHeight: 1,
                color: 'red',
                position: 'absolute',
                top: '-12px',
                left: 0,
            }}>
                TOLERANCE LINE
            </span>
        </div>
    </div>
)
