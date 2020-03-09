import React, { useRef } from 'react'
import { Popover } from '../Popover.js'
import { elevations } from '../theme.js'

const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: 400,
    paddingTop: 280,
    backgroundColor: 'aliceblue',
}

const referenceElementStyle = {
    width: 100,
    height: 50,
    backgroundColor: 'cadetblue',
    textAlign: 'center',
    padding: 6,
}

export default { title: 'Popover', component: Popover }

export const Default = () => {
    const ref = useRef(null)

    return (
        <div style={boxStyle}>
            <div style={referenceElementStyle} ref={ref}>
                Reference element
            </div>
            <Popover reference={ref}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur purus ut faucibus pulvinar elementum.
                    Dignissim diam quis enim lobortis scelerisque fermentum dui
                    faucibus. Rhoncus aenean vel elit scelerisque mauris
                    pellentesque. Non sodales neque sodales ut etiam sit amet.
                    Volutpat sed cras ornare arcu dui. Quis imperdiet massa
                    tincidunt nunc pulvinar sapien et ligula. Convallis posuere
                    morbi leo urna molestie at. Mauris cursus mattis molestie a
                    iaculis at.
                </div>
            </Popover>
        </div>
    )
}

export const NoArrow = () => {
    const ref = useRef(null)

    return (
        <div style={boxStyle}>
            <div style={referenceElementStyle} ref={ref}>
                Reference element
            </div>
            <Popover reference={ref} arrow={false}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur purus ut faucibus pulvinar elementum.
                    Dignissim diam quis enim lobortis scelerisque fermentum dui
                    faucibus. Rhoncus aenean vel elit scelerisque mauris
                    pellentesque. Non sodales neque sodales ut etiam sit amet.
                    Volutpat sed cras ornare arcu dui. Quis imperdiet massa
                    tincidunt nunc pulvinar sapien et ligula. Convallis posuere
                    morbi leo urna molestie at. Mauris cursus mattis molestie a
                    iaculis at.
                </div>
            </Popover>
        </div>
    )
}

export const Customization = () => {
    const ref = useRef(null)

    return (
        <div style={boxStyle}>
            <div style={referenceElementStyle} ref={ref}>
                Reference element
            </div>
            <Popover
                reference={ref}
                arrow={true}
                className="custom-classname"
                dataTest="custom-data-test-id"
                elevation={elevations.e200}
                maxWidth={400}
                placement="bottom-start"
                onBackdropClick={() => {
                    console.log('backdrop was closed....')
                }}
            >
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur purus ut faucibus pulvinar elementum.
                    Dignissim diam quis enim lobortis scelerisque fermentum dui
                    faucibus. Rhoncus aenean vel elit scelerisque mauris
                    pellentesque. Non sodales neque sodales ut etiam sit amet.
                    Volutpat sed cras ornare arcu dui. Quis imperdiet massa
                    tincidunt nunc pulvinar sapien et ligula. Convallis posuere
                    morbi leo urna molestie at. Mauris cursus mattis molestie a
                    iaculis at.
                </div>
            </Popover>
        </div>
    )
}
