import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconImage16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13 2c.5522847 0 1 .44771525 1 1v10c0 .5522847-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1zm-8 6.707-2 1.999v2.294h10v-.293l-3-3-2 2.0001068zm8-5.707h-10v6.292l2-1.99910678 3 3.00010678 2-2.00010678 3 3.00010678zm-2.5 1c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5zm0 1c-.2761424 0-.5.22385763-.5.5s.2238576.5.5.5.5-.22385763.5-.5-.2238576-.5-.5-.5z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconImage16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconImage24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 3c1.1045695 0 2 .8954305 2 2v14c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-14c0-1.1045695.8954305-2 2-2zm-11 9.415-3 2.999v3.586h14v-1.585l-3-3-3 2.9992136zm11-7.415h-14v7.584l3-2.99821356 5 4.99921356 3-2.9992136 3 2.9992136zm-5 2c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconImage24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconImage = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconImage16 className={className} color={color} />

        case 24:
            return <IconImage24 className={className} color={color} />

        default:
            return null
    }
}

IconImage.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconImage.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconImage }
