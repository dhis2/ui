/**
 * https://react-svgr.com/docs/custom-templates
 * https://babeljs.io/docs/en/babel-template#ast-1
 */

function template(
    { template },
    opts,
    { imports, componentName, jsx, exports }
) {
    const plugins = ['jsx']
    const tpl = template.smart({ plugins })

    return tpl.ast`
        ${imports}
        import PropTypes from 'prop-types'

        function ${componentName}({ color }) {
            return ${jsx};
        }

        ${componentName}.propTypes = {
            color: PropTypes.string,
        }

        ${exports}
    `
}

module.exports = template
