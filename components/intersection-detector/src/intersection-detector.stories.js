import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import { IntersectionDetector } from './intersection-detector.js'

const description = `
A tool to performantly detect when two components intersect, which is often better to use than scroll listeners. A common use case is to detect when a child component is in view inside a scrolling parent. Uses an [\`IntersectionObserver\`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) object internally.

See the code examples below for examples on how to implement it.

\`\`\`js
import { IntersectionDetector } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Intersection Observer',
    component: IntersectionDetector,
    parameters: {
        docs: {
            description: { component: description },
            source: { type: 'code' },
        },
    },
    // Hide 'container styles' from Template in args table
    argTypes: { containerStyles: { table: { disable: true } } },
}

const Text = () => (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor
        venenatis hendrerit. Donec dictum sed ligula id efficitur. Suspendisse
        feugiat, elit in dictum imperdiet, mi tellus euismod nibh, vitae
        hendrerit turpis odio ut mauris. Vestibulum rhoncus interdum nunc eu
        eleifend. Aenean viverra nibh hendrerit nulla iaculis, vitae tincidunt
        erat ullamcorper. Donec tempus mattis faucibus. Donec nec lacus vitae
        elit aliquet pharetra. Cras vitae odio eu lorem euismod malesuada. Nunc
        eu rhoncus mauris. Nullam vehicula elit id vehicula maximus. Phasellus
        gravida tincidunt mauris, vitae laoreet erat commodo id. Nullam vitae
        erat ante. Proin id ultricies risus, in ultricies mauris. Vivamus lectus
        enim, ultricies vel egestas nec, tempor a magna. Nam sed fermentum
        ipsum, a ullamcorper felis. Aenean finibus erat elit, at eleifend nulla
        rutrum at.
        <style jsx>{`
            p {
                margin: 0;
            }
        `}</style>
    </p>
)

const Template = ({ containerStyles, ...args }) => {
    const rootRef = useRef()
    const [isIntersecting, setIsIntersecting] = useState(false)

    return (
        <div className="container">
            <p>Is intersecting: {` ${isIntersecting}`}</p>

            <div className="scrollContainer" ref={rootRef}>
                <div className="contentContainer">
                    <Text />

                    <div style={containerStyles}>
                        <IntersectionDetector
                            {...args}
                            onChange={({ isIntersecting }) =>
                                setIsIntersecting(isIntersecting)
                            }
                            rootRef={rootRef}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollContainer {
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
}
Template.propTypes = { containerStyles: PropTypes.shape({}) }

const boxStyles = {
    boxSizing: 'border-box',
    border: '1px solid #f76a8c',
    background: 'rgba(246,172,200,0.4)',
    width: '100%',
    height: '100px',
}

export const AbsoluteBottomArea = Template.bind({})
AbsoluteBottomArea.args = {
    containerStyles: {
        ...boxStyles,
        position: 'absolute',
        bottom: '0',
        left: '0',
    },
}

export const AbsoluteTopArea = Template.bind({})
AbsoluteTopArea.args = {
    containerStyles: {
        ...boxStyles,
        position: 'absolute',
        top: '0',
        left: '0',
    },
}

export const BottomArea = Template.bind({})
BottomArea.args = { containerStyles: { ...boxStyles } }
