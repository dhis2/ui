import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconMailOpen16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8.49613894 1.28350796 5.99999996 3.42857143c.311575.17804286.5038611.5093863.5038611.86824315v8.41967746c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-8.41967746c0-.35885685.19228606-.69020029.50386106-.86824315l6-3.42857143c.30743267-.17567581.68484521-.17567581.99227788 0zm5.50386106 5.29324315-5.03108664 4.25837549c-.52198419.441679-1.27047503.4711242-1.82266011.0883358l-.11516661-.0883358-5.03108664-4.25837549v7.42324889h12zm-6-4.425-5.78 3.302 5.45702888 4.61798919c.16312006.1380247.39259949.1552778.57230939.0517593l.07363285-.0517593 5.45702888-4.61798919z"
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

IconMailOpen16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconMailOpen24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12.6139406 2.47750937 7.6139406 5.92195381c.4871731.3789124.7721188.96152357.7721188 1.57870443v10.02183239c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-10.02183239c0-.61718086.28494569-1.19979203.77211877-1.57870443l7.61394063-5.92195381c.3611105-.28086371.8667707-.28086371 1.2278812 0zm6.3860594 8.93635223-5.5857864 5.5861384c-.7399408.7399408-1.915425.778885-2.7012124.1168328l-.1272148-.1168328-5.5857864-5.5851384v8.5851384h14zm-7-6.8808616-6.217 4.83586158 6.217 6.21692482 6.216-6.21692482z"
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

IconMailOpen24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconMailOpen = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconMailOpen16 className={className} color={color} />

        case 24:
            return <IconMailOpen24 className={className} color={color} />

        default:
            return null
    }
}

IconMailOpen.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconMailOpen.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconMailOpen }
