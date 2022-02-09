// eslint-disable-next-line import/no-unresolved
import useBaseUrl from '@docusaurus/useBaseUrl'
import PropTypes from 'prop-types'
import React from 'react'

export const DocFigure = (props) => {
    return (
        <p>
            <figure>
                <img src={useBaseUrl(props.src)} />
                <figcaption>{props.text}</figcaption>
            </figure>
        </p>
    )
}

DocFigure.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string,
}
