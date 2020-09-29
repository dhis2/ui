import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconFileDocument16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9 1 4 4v9c0 .5522847-.4477153 1-1 1h-8c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm-1 1h-4v12h8v-8h-4zm-.5 9c.27614237 0 .5.2238576.5.5s-.22385763.5-.5.5h-2c-.27614237 0-.5-.2238576-.5-.5s.22385763-.5.5-.5zm1-2c.27614237 0 .5.22385763.5.5s-.22385763.5-.5.5h-3c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5zm2-2c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5h-5c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5zm-1.5-4.585v2.585h2.586z"
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

IconFileDocument16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFileDocument24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 2 6 6v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-16c0-1.1045695.8954305-2 2-2zm-2 2h-6v16h12v-10h-4c-1.0543618 0-1.9181651-.81587779-1.9945143-1.85073766l-.0054857-.14926234zm1 12c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm2-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-6c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-1-7.171v3.171h3.171z"
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

IconFileDocument24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFileDocument = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconFileDocument16 className={className} color={color} />

        case 24:
            return <IconFileDocument24 className={className} color={color} />

        default:
            return null
    }
}

IconFileDocument.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconFileDocument.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconFileDocument }
