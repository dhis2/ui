import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { Popper } from './popper.js'

const PopperPlacement = ({ placement }) => {
    const ref = useRef()

    return (
        <div className="box">
            <div className="reference-element" ref={ref}>
                Reference element
            </div>
            <Popper reference={ref} placement={placement}>
                <div className="popper-content">Popper</div>
            </Popper>
            <style jsx>{`
                .box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 400px;
                    height: 400px;
                    margin-bottom: 1000px;
                    background-color: aliceblue;
                }

                .reference-element {
                    width: 100px;
                    height: 50px;
                    background-color: cadetblue;
                    text-align: center;
                    padding: 6px;
                }

                .popper-content {
                    width: 80px;
                    height: 30px;
                    background-color: lightblue;
                    text-align: center;
                    padding: 6px;
                }
            `}</style>
        </div>
    )
}

PopperPlacement.propTypes = {
    placement: PropTypes.string,
}

export default {
    title: 'Popper',
    component: Popper,
}

export const Top = () => <PopperPlacement placement="top" />

export const TopStart = () => <PopperPlacement placement="top-start" />

export const TopEnd = () => <PopperPlacement placement="top-end" />

export const Bottom = () => <PopperPlacement placement="bottom" />

export const BottomStart = () => <PopperPlacement placement="bottom-start" />

export const BottomEnd = () => <PopperPlacement placement="bottom-end" />

export const Right = () => <PopperPlacement placement="right" />

export const RightStart = () => <PopperPlacement placement="right-start" />

export const RightEnd = () => <PopperPlacement placement="right-end" />

export const Left = () => <PopperPlacement placement="left" />

export const LeftStart = () => <PopperPlacement placement="left-start" />

export const LeftEnd = () => <PopperPlacement placement="left-end" />

export const ReactRefAsReference = () => {
    const ref = useRef()

    return (
        <>
            <button ref={ref}>Reference</button>
            <Popper placement="bottom-start" reference={ref}>
                Popper
            </Popper>
        </>
    )
}

export const DOMNodeAsReference = () => {
    const [node, setNode] = useState(null)

    return (
        <>
            <button ref={setNode}>Reference</button>
            <Popper placement="bottom-start" reference={node}>
                Popper
            </Popper>
        </>
    )
}

export const VirtualElementAsReference = () => {
    const virtualElement = {
        getBoundingClientRect: () => ({
            top: 200,
            left: 200,
            bottom: 'auto',
            right: 'auto',
            width: 0,
            height: 0,
        }),
    }

    return (
        <Popper placement="bottom-start" reference={virtualElement}>
            Popper
        </Popper>
    )
}
