/* eslint-disable prettier/prettier, react/prop-types, react/display-name */
import React, { useState, useRef } from 'react'
import { IntersectionDetector } from './IntersectionDetector.js'

const Text = () => (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras tempor venenatis hendrerit. Donec dictum sed ligula id
        efficitur. Suspendisse feugiat, elit in dictum imperdiet,
        mi tellus euismod nibh, vitae hendrerit turpis odio ut
        mauris. Vestibulum rhoncus interdum nunc eu eleifend.
        Aenean viverra nibh hendrerit nulla iaculis, vitae
        tincidunt erat ullamcorper. Donec tempus mattis faucibus.
        Donec nec lacus vitae elit aliquet pharetra. Cras vitae
        odio eu lorem euismod malesuada.  Nunc eu rhoncus mauris.
        Nullam vehicula elit id vehicula maximus.  Phasellus
        gravida tincidunt mauris, vitae laoreet erat commodo id.
        Nullam vitae erat ante. Proin id ultricies risus, in
        ultricies mauris.  Vivamus lectus enim, ultricies vel
        egestas nec, tempor a magna. Nam sed fermentum ipsum, a
        ullamcorper felis. Aenean finibus erat elit, at eleifend
        nulla rutrum at.

        <style jsx>{`
            p {
                margin: 0;
            }
        `}</style>
    </p>
)

const SizeLimitDecorator = ({ rootRef, isIntersecting, children }) => (
    <div className="container">
        <p>Is intersecting: {` ${isIntersecting}`}</p>

        <div className="scrollContainer" ref={rootRef}>
            <div className="contentContainer">
                {children}
            </div>
        </div>

        <style jsx>{`
            .scrollContainer {
                //border: 1px solid black;
                width: 200px;
                height: 300px;
                overflow: hidden;
                overflow-y: auto;
            }

            .contentContainer {
                position: relative;
            }
        `}</style>
    </div>
)

const sizeLimitDecorator = tolerance => fn => {
    const rootRef = useRef()
    const [isIntersecting, setIsIntersecting] = useState(false)

    return (
        <SizeLimitDecorator tolerance={tolerance} rootRef={rootRef} isIntersecting={isIntersecting}>
            {fn({ setIsIntersecting, rootRef })}
        </SizeLimitDecorator>
    )
}

export default {
    title: 'Helpers/Intersection Observer',
    decorators: [sizeLimitDecorator(100)]
}

export const AbsoluteBottomArea = ({ setIsIntersecting, rootRef }) => (
    <>
        <Text />

        <div style={{
            boxSizing: 'border-box',
            border: '1px solid #f76a8c',
            background: 'rgba(246,172,200,0.4)',
            width: '100%',
            height: '100px',
            position: 'absolute',
            bottom: '0',
            left: '0',
            zIndex: '-1',
        }}>
            <IntersectionDetector
                onChange={({ isIntersecting }) => setIsIntersecting(isIntersecting)}
                rootRef={rootRef}
            />
        </div>
    </>
)

export const AbsoluteTopArea = ({ setIsIntersecting, rootRef }) => (
    <>
        <Text />

        <div style={{
            boxSizing: 'border-box',
            border: '1px solid #f76a8c',
            background: 'rgba(246,172,200,0.4)',
            width: '100%',
            height: '100px',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '-1',
        }}>
            <IntersectionDetector
                onChange={({ isIntersecting }) => setIsIntersecting(isIntersecting)}
                rootRef={rootRef}
            />
        </div>
    </>
)

export const BottomArea = ({ setIsIntersecting, rootRef }) => (
    <>
        <Text />

        <div style={{
            boxSizing: 'border-box',
            border: '1px solid #f76a8c',
            background: 'rgba(246,172,200,0.4)',
        }}>
            <IntersectionDetector
                onChange={({ isIntersecting }) => setIsIntersecting(isIntersecting)}
                rootRef={rootRef}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Cras
                tempor venenatis hendrerit. Donec dictum sed ligula id
                efficitur.
            </IntersectionDetector>

        </div>
    </>
)
