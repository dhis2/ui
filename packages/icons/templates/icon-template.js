function template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
) {
    const plugins = ['jsx']
    const tpl = template.smart({ plugins })

    return tpl.ast`
        ${imports}
        function ${componentName}(${props}) {
            return ${jsx};
        }
        ${exports}
    `
}

module.exports = template
