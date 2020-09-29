const formatJsString = require('../utils/formatJsString')

const STYLED_JSX =
    '<style jsx>{`svg { fill: ${color}; pointer-events: none;}`}</style>'

const injectClassNameAndStyleIntoSvg = svgStr =>
    svgStr
        .replace('<svg', '<svg className={className}')
        .replace('</svg>', `${STYLED_JSX}</svg>`)

const createVariantSwitchCaseStr = ({ size, name }) => `
    case ${size}:
        return <${name} className={className} color={color} />
`

const createVariantComponentStr = ({ name, svgStr }) => `
    const ${name} = ({ className, color }) => (
        ${injectClassNameAndStyleIntoSvg(svgStr)}
    )

    ${name}.propTypes = {
        color: propTypes.string.isRequired,
        className: propTypes.string,
    }
`

const createComponentStr = (name, variants) => `
import React from 'react'
import propTypes from '@dhis2/prop-types'

${variants.map(createVariantComponentStr).join('\n')}

const ${name} = ({ className, color, size }) => {
    switch (size) {
        ${variants.map(createVariantSwitchCaseStr).join('\n')}
        default:
            return null
    }
}

${name}.defaultProps = {
    size: ${variants[0].size},
    color: 'inherit',
}

${name}.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([${variants.map(({ size }) => size).join()}]),
}

export { ${name} }
`

module.exports = function(name, variants) {
    const availableVariants = variants.filter(({ svgStr }) => !!svgStr)
    const componentStr = createComponentStr(name, availableVariants)

    return formatJsString(componentStr)
}
