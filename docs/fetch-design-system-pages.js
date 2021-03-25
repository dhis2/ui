// This is a dependency from storybook - probably best to add to project deps
const fs = require('fs/promises')
const path = require('path')
const { startCase } = require('lodash')
const fetch = require('node-fetch')

// Maybe I also want to load those images from the design system
// Maybe I can just transform all the relative links to github links?
// base url: https://raw.githubusercontent.com/dhis2/design-system/master/  ...images/something.png

const mdxTemplate = basename => `import { Meta, Description } from '@storybook/addon-docs/blocks'
import ${startCase(basename).replaceAll(' ', '')} from './${basename}.md'

<Meta title="Design System Principles/${startCase(basename)}" />

<Description>{${startCase(basename).replaceAll(' ', '')}}</Description>
`

const outputDir = path.join('docs', 'design-system')

const downloadAndProcessFiles = filteredFiles =>
    Promise.all(
        filteredFiles.map(({ name, download_url }) => {
            const basename = path.basename(name, '.md')
            fetch(download_url)
                .then(res => res.text())
                // Make a regular markdown file
                .then(text => fs.writeFile(path.join(outputDir, name), text))
                // Make an MDX stories file that imports regular markdown
                .then(() =>
                    fs.writeFile(
                        path.join(outputDir, `${basename}.stories.mdx`),
                        mdxTemplate(basename)
                    )
                )
        })
    )

// Fetch design system 'principles' directory info from github
// TODO: Also fetch images folder
fetch(
    'https://api.github.com/repos/dhis2/design-system/contents/principles?ref=master'
)
    .then(res => res.json())
    // Filter out non-markdown files
    .then(fileInfo =>
        fileInfo.filter(
            ({ name, type }) => type === 'file' && name.endsWith('.md')
        )
    )
    .then(downloadAndProcessFiles)
    .then(
        console.log('Design system files downloaded & processed for storybook')
    )
    .catch(console.error)

// TODO: Filter 'download url' and 'name' for: type === 'file' and name ends with '.md'
// Process name: remove hyphens, toLocaleUppercase
// Fetch file contents for each of those files
// Write those contents to markdown files in docs/design-system folder
// For each file, make a stories.mdx file that imports and renders the
