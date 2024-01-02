#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const { visit } = require('ast-types')
const fg = require('fast-glob')
const reactDocs = require('react-docgen')

const RE_OBJECTOF =
    /(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/

const format_type = (type) => {
    switch (type.name.toLowerCase()) {
        case 'instanceof': {
            return `instanceOf(${type.value})`
        }
        case 'enum': {
            if (type.computed) {
                return type.value
            }
            return type.value
                ? type.value.map((v) => `${v.value}`).join(' │ ')
                : type.raw
        }
        case 'union': {
            return type.value
                ? type.value.map((t) => `${format_type(t)}`).join(' │ ')
                : type.raw
        }
        case 'array': {
            return type.raw
        }
        case 'arrayof': {
            return `arrayOf(${format_type(type.value)})`
        }
        case 'custom': {
            if (
                type.raw.indexOf('function') !== -1 ||
                type.raw.indexOf('=>') !== -1
            ) {
                return 'custom(function)'
            } else if (type.raw.toLowerCase().indexOf('objectof') !== -1) {
                const m = type.raw.match(RE_OBJECTOF)
                if (m && m[1]) {
                    return `objectOf(${m[1]})`
                }
                return 'objectOf'
            }
            return 'custom'
        }
        case 'bool': {
            return 'boolean'
        }
        case 'func': {
            return 'function'
        }
        case 'shape': {
            const shape = type.value
            const rst = {}

            Object.keys(shape).forEach((key) => {
                rst[key] = format_type(shape[key])
            })

            return JSON.stringify(rst, null, 2).replace(/\n/g, '<br/>')
        }
        default: {
            return `${type.name}`
        }
    }
}

const format = ({ ast, pkg }) => {
    let table = ''
    table += `### ${ast.displayName}\n\n`

    if (pkg?.name) {
        table += '#### Usage\n\n'
        table += `To use \`${ast.displayName}\`, you can import the component from the \`@dhis2/ui\` library  \n\n`
        table += `
\`\`\`js
import { ${ast.displayName} } from '@dhis2/ui'
\`\`\`\n\n
`
    }

    if (ast?.props) {
        table += '#### Props\n\n'

        const props = Object.entries(ast.props).map(
            ([name, { type, required, description, defaultValue }]) => ({
                name,
                defaultValue: `${
                    defaultValue ? `\`${defaultValue.value}\`` : ''
                }`,
                required: `${required ? '*' : ''}`,
                description: description.replace(/\n/g, '<br/>'),
                type: `${format_type(type)}`,
            })
        )

        const headers = ['Name', 'Type', 'Default', 'Required', 'Description']
        table += `|${[...headers].join('|')}|\n`
        table += `|${headers.map(() => '---').join('|')}|\n`

        for (const {
            name,
            defaultValue,
            required,
            description,
            type,
        } of props) {
            table += `|${name}|${type}|${defaultValue}|${required}|${description}|\n`
        }
    }

    return table
}

const cwd = path.resolve(__dirname, '..')

const { uiPackages } = require(path.resolve(
    cwd,
    'storybook',
    'src',
    'ui-packages.js'
))

const [components, collections, icons, constants] = uiPackages({
    absolute: true,
})

const ignore = [
    '**/index.js',
    '**/*.styles.js',
    '**/*.test.js',
    '**/*.stories.*',
    '**/features',
    '**/__stories__',
    '**/__e2e__',
    '**/__tests__',
]

const main_api_markdown = []

/**
 * Components
 */

main_api_markdown.push('# Components')
main_api_markdown.push('')

components.map((component) => {
    console.info(
        `Generating API documentation for: ${path.basename(component)}`
    )

    const entries = fg.sync(`${component}/src/**/*.js`, {
        ignore,
    })

    /**
     * Generate AST for all React components with react-docgen
     */
    const asts = entries
        .map((file) => {
            const src = fs.readFileSync(file, 'utf8')

            try {
                const ast = reactDocs.parse(
                    src,
                    reactDocs.resolver.findAllComponentDefinitions,
                    null,
                    {
                        filename: file,
                    }
                )

                return ast.map((a) => ({ file, ast: a }))
            } catch (err) {
                /**
                 * skip files that react-docgen cannot parse as they are probably
                 * not react components in the first place.
                 */

                //console.error('[ERR] ReactDocGen', err)
                return
            }
        })
        .filter((e) => !!e)
        .flat()

    /*
     * Take the src/index.js file and generate an AST for it so we can figure
     * out the public API for the package through the defined exports.
     */
    const index = fs.readFileSync(
        path.join(component, 'src', 'index.js'),
        'utf8'
    )
    const ast = parser.parse(index, { sourceType: 'module' })

    visit(ast, {
        visitExportSpecifier(pth) {
            const node = pth.node
            const name = node.exported.name

            for (const comp of asts) {
                if (comp.ast.displayName === name) {
                    comp.exported = true
                }
            }

            this.traverse(pth)
        },
    })

    const pkg = require(path.join(component, 'package.json'))

    const markdown = asts
        .filter((c) => c.exported)
        .map((c) => {
            try {
                return format({
                    file: c.file,
                    ast: c.ast,
                    pkg,
                })
            } catch (err) {
                /**
                 * There's not much to do to recover from an error here, so no
                 * point in crashing the build.
                 */
                console.error('[ERR]', err)
            }
        })
        .filter((c) => !!c)

    console.info(
        `Writing file: ${path.relative(cwd, path.join(component, 'API.md'))}`
    )
    fs.writeFileSync(path.resolve(component, 'API.md'), markdown.join('\n'))

    main_api_markdown.push(
        `- [${pkg.name}](${path.relative(cwd, component)}/API.md)`
    )
})

main_api_markdown.push('')

/**
 * Icons
 */

main_api_markdown.push('# Icons')
main_api_markdown.push('')

icons.map((icon) => {
    console.info(`Generating API documentation for: ${path.basename(icon)}`)

    const entries = fg.sync(`${icon}/src/**/*.js`, {
        ignore,
    })

    /*
     * Generate AST for all React components with react-docgen
     */
    const asts = entries
        .map((file) => {
            const src = fs.readFileSync(file, 'utf8')

            try {
                const ast = reactDocs.parse(
                    src,
                    reactDocs.resolver.findAllComponentDefinitions,
                    null,
                    {
                        filename: file,
                    }
                )

                return ast.map((a) => ({ file, ast: a }))
            } catch (err) {
                /**
                 * skip files that react-docgen cannot parse as they are probably
                 * not react components in the first place.
                 */

                //console.error('[ERR] ReactDocGen', err)
                return
            }
        })
        .filter((e) => !!e)
        .flat()

    /*
     * Take the src/react/index.js file and generate an AST for it so we can figure
     * out the public API for the icons through the defined exports.
     */
    const index = fs.readFileSync(
        path.join(icon, 'src', 'react', 'index.js'),
        'utf8'
    )
    const ast = parser.parse(index, { sourceType: 'module' })

    visit(ast, {
        visitExportSpecifier(pth) {
            const node = pth.node
            const name = node.exported.name

            for (const comp of asts) {
                /*
                 * The name of the exported icons are different in the
                 * component source and the export index.
                 *
                 * Component exports: SvgWorld24
                 * Index exports: IconWorld24
                 *
                 * We accomodate for that difference here when trying to figure
                 * out if a component should be part of the public API or not.
                 */

                if (comp.ast.displayName.replace('Svg', 'Icon') === name) {
                    comp.exported = true
                }
            }

            this.traverse(pth)
        },
    })

    const pkg = require(path.join(icon, 'package.json'))
    const markdown = asts
        .filter((c) => c.exported)
        .map((c) => {
            try {
                return format({
                    file: c.file,
                    ast: c.ast,
                    pkg,
                })
            } catch (err) {
                /**
                 * There's not much to do to recover from an error here, so no
                 * point in crashing the build.
                 */
                console.error('[ERR]', err)
            }
        })
        .filter((c) => !!c)

    console.info(
        `Writing file: ${path.relative(cwd, path.join(icon, 'API.md'))}`
    )
    fs.writeFileSync(path.resolve(icon, 'API.md'), markdown.join('\n'))

    main_api_markdown.push(
        `- [${pkg.name}](${path.relative(cwd, icon)}/API.md)`
    )
})

main_api_markdown.push('')

/**
 * Collections
 */

main_api_markdown.push('# Collections')
main_api_markdown.push('')

collections.map((collection) => {
    console.info(
        `Generating API documentation for: ${path.basename(collection)}`
    )

    const entries = fg.sync(
        [
            ...components.map((component) => `${component}/src/**/*.js`),
            `${collection}/src/**/*.js`,
        ],
        {
            ignore,
        }
    )

    /**
     * Generate AST for all React components with react-docgen
     */
    const asts = entries
        .map((file) => {
            const src = fs.readFileSync(file, 'utf8')

            try {
                const ast = reactDocs.parse(
                    src,
                    reactDocs.resolver.findAllComponentDefinitions,
                    null,
                    {
                        filename: file,
                    }
                )

                return ast.map((a) => ({ file, ast: a }))
            } catch (err) {
                /**
                 * skip files that react-docgen cannot parse as they are probably
                 * not react components in the first place.
                 */

                //console.error('[ERR] ReactDocGen', err)
                return
            }
        })
        .filter((e) => !!e)
        .flat()

    /*
     * Take the src/index.js file and generate an AST for it so we can figure
     * out the public API for the package through the defined exports.
     */
    const index = fs.readFileSync(
        path.join(collection, 'src', 'index.js'),
        'utf8'
    )
    const ast = parser.parse(index, { sourceType: 'module' })

    visit(ast, {
        visitExportSpecifier(pth) {
            const node = pth.node
            const name = node.exported.name

            for (const comp of asts) {
                if (comp.ast.displayName === name) {
                    comp.exported = true
                }
            }

            this.traverse(pth)
        },
    })

    const pkg = require(path.join(collection, 'package.json'))
    const markdown = asts
        .filter((c) => c.exported)
        .map((c) => {
            try {
                for (const prop in c.ast.props) {
                    const type = c.ast.props[prop].type
                    if (type) {
                        type.raw = type.name === 'custom' ? 'custom' : type.name
                    }
                }

                return format({
                    file: c.file,
                    ast: c.ast,
                    pkg,
                })
            } catch (err) {
                /**
                 * There's not much to do to recover from an error here, so no
                 * point in crashing the build.
                 */
                console.error('[ERR]', err)
            }
        })
        .filter((c) => !!c)

    console.info(
        `Writing file: ${path.relative(cwd, path.join(collection, 'API.md'))}`
    )
    fs.writeFileSync(path.resolve(collection, 'API.md'), markdown.join('\n'))

    main_api_markdown.push(
        `- [${pkg.name}](${path.relative(cwd, collection)}/API.md)`
    )
})

main_api_markdown.push('')

/**
 * Constants
 */

main_api_markdown.push('# Constants')
main_api_markdown.push('')

constants.map((constant) => {
    console.info(`Generating API documentation for: ${path.basename(constant)}`)

    const entries = fg.sync([`${constant}/src/*.js`], { ignore })

    /**
     * Generate AST for constants
     */
    const asts = entries
        .map((file) => {
            const src = fs.readFileSync(file, 'utf8')
            return parser.parse(src, {
                sourceType: 'module',
                sourceFilename: path.basename(file),
            })
        })
        .filter((e) => !!e)
        .flat()

    /*
     * Take the src/index.js file and generate an AST for it so we can figure
     * out the public API for the package through the defined exports.
     */
    const index = fs.readFileSync(
        path.join(constant, 'src', 'index.js'),
        'utf8'
    )
    const index_ast = parser.parse(index, { sourceType: 'module' })

    const exported_files = []
    visit(index_ast, {
        visitExportNamedDeclaration(pth) {
            exported_files.push(path.basename(pth.node.source.value))
            this.traverse(pth)
        },

        visitExportAllDeclaration(pth) {
            exported_files.push(path.basename(pth.node.source.value))
            this.traverse(pth)
        },
    })

    /**
     * Make sure we strip out documenting files that are not exported from the index
     */
    const declarations = asts.filter((ast) =>
        exported_files.includes(ast.loc.filename)
    )

    const pkg = require(path.join(constant, 'package.json'))

    const markdown = ['# Constants']
    declarations.map((ast) => {
        const current_file = ast.loc.filename
        visit(ast, {
            visitExportNamedDeclaration(pth) {
                const node = pth.node

                const declared = node.declaration.declarations
                declared.map((d) =>
                    markdown.push(
                        `- [${d.id.name}](${path.relative(
                            constant,
                            path.join(constant, 'src', current_file)
                        )})`
                    )
                )

                this.traverse(pth)
            },
        })
    })

    console.info(
        `Writing file: ${path.relative(cwd, path.join(constant, 'API.md'))}`
    )
    fs.writeFileSync(path.resolve(constant, 'API.md'), markdown.join('\n'))

    main_api_markdown.push(
        `- [${pkg.name}](${path.relative(cwd, constant)}/API.md)`
    )
})

main_api_markdown.push('')

/**
 * Generate the root API.md for the repo
 */

console.info(`Writing file: ${path.relative(cwd, 'API.md')}`)
fs.writeFileSync(path.resolve(cwd, 'API.md'), main_api_markdown.join('\n'))
