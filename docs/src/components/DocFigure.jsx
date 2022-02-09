// eslint-disable-next-line import/no-unresolved
import useBaseUrl from '@docusaurus/useBaseUrl'
import PropTypes from 'prop-types'
import React from 'react'

export const DocFigure = (props) => {
    return (
        <p>
            <figure>
                <img src={useBaseUrl(props.src)} alt={props.alt} />
                <figcaption>{props.text}</figcaption>
            </figure>
        </p>
    )
}

DocFigure.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    text: PropTypes.string,
}
