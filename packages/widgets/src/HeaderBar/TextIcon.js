import React from 'react'
import propTypes from '@dhis2/prop-types'

export const TextIcon = ({ name, onClick, dataTestId }) => {
    let title = name[0]

    if (name.indexOf(' ') > 0) {
        title += name.split(' ')[1][0]
    }

    return (
        <div onClick={onClick} data-test={dataTestId}>
            <p>{title}</p>

            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    overflow: hidden;
                    border-radius: 50%;
                    background-color: rgba(0, 0, 0, 0.3);
                    color: #fff;
                    cursor: pointer;
                }

                p {
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    text-align: center;
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    )
}

TextIcon.defaultProps = {
    onClick: undefined,
}

TextIcon.propTypes = {
    name: propTypes.string.isRequired,
    dataTestId: propTypes.string,
    onClick: propTypes.func,
}
