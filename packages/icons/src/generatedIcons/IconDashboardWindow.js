import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDashboardWindow16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 2c.5522847 0 1 .44771525 1 1v10c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1zm0 4h-12v7h12zm-8.5 1c1.38071187 0 2.5 1.11928813 2.5 2.5 0 1.3807119-1.11928813 2.5-2.5 2.5s-2.5-1.1192881-2.5-2.5h1c0 .8284271.67157288 1.5 1.5 1.5s1.5-.6715729 1.5-1.5c0-.82842712-.67157288-1.5-1.5-1.5zm5.5 0v5h-1v-5zm2 2v3h-1v-3zm1-6h-12v2h12z"
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

IconDashboardWindow16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDashboardWindow24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m20 4c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2zm0 6h-16v8h16zm-11 1c1.6568542 0 3 1.3431458 3 3s-1.3431458 3-3 3c-1.65685425 0-3-1.3431458-3-3h1c0 1.1045695.8954305 2 2 2s2-.8954305 2-2-.8954305-2-2-2zm6 0v6h-1v-6zm2 3v3h-1v-3zm3-8h-16v2h16z"
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

IconDashboardWindow24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDashboardWindow = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconDashboardWindow16 className={className} color={color} />

        case 24:
            return <IconDashboardWindow24 className={className} color={color} />

        default:
            return null
    }
}

IconDashboardWindow.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDashboardWindow.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconDashboardWindow }
