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
        import PropTypes from 'prop-types';
        ${imports}

        function ${componentName}({ color, dataTest, ariaLabel }) {
            return (
                ${jsx}
                // Include title element with icon name as the aria label
                <title>{ariaLabel}</title>
            );
        }

        ${componentName}.propTypes = {
            color: PropTypes.string,
            dataTest: PropTypes.string,
            ariaLabel: PropTypes.string
        };

        // Include aria-labelledby attribute and title element if ariaLabel is provided
        ${componentName}.defaultProps = {
            ariaLabel: "${componentName}",
            ...(ariaLabel ? {
                'aria-labelledby': "${componentName}-title"
            } : {})
        };

        ${exports}
    `
}

module.exports = template
