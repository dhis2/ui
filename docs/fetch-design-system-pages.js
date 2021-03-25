// This is a dependency from storybook - probably best to add to project deps
const fs = require('fs/promises')
const path = require('path')
const { startCase } = require('lodash')
const fetch = require('node-fetch')

/**
 * This regex matches relative links in markdown, like '[link](../images/image.png)'
 * There is a negative lookahead assertion to exclude external links that include 'http'
 * The capture groups for the above link would be 1. 'link' and 2. '../images/image.png'
 * Check it out here: https://regex101.com/r/y5o9Tf/1
 *
 * This will be used to transform relative links (and images) in the design system
 * pages into external links to the github repo so these pages don't need to serve
 * images and to enable linking to other design system pages.
 */
const mdLocalLinkRegex = /\[(.*)\]\((?!http)(.*)\)/g
const designSystemGithubUrl =
    'https://raw.githubusercontent.com/dhis2/design-system/master/principles/'

const replaceRelativeLinksWithGithubLinks = text =>
    text.replaceAll(
        mdLocalLinkRegex,
        (_, text, linkPath) =>
            `[${text}](${path.join(designSystemGithubUrl, linkPath)})`
    )

// Template for creating .stories.mdx file for storybook that imports from regular markdown file
const mdxTemplate = basename => `import { Meta, Description } from '@storybook/addon-docs/blocks'
import ${startCase(basename).replaceAll(' ', '')} from './${basename}.md'

<Meta title="Design System Principles/${startCase(basename)}" />

<Description>{${startCase(basename).replaceAll(' ', '')}}</Description>
`

const outputDir = path.join('docs', 'design-system')

const downloadAndProcessFiles = async filteredFiles => {
    // Create output dir if one doesn't exist yet
    await fs.mkdir(outputDir, { recursive: true })
    return Promise.all(
        filteredFiles.map(async ({ name, download_url }) => {
            // Get file contents
            const text = await fetch(download_url).then(res => res.text())
            // Transform relative links (see comments above)
            const processedText = replaceRelativeLinksWithGithubLinks(text)
            // Make a regular markdown file from contents
            await fs.writeFile(path.join(outputDir, name), processedText)
            // Make an MDX stories file that imports regular markdown
            const basename = path.basename(name, '.md')
            await fs.writeFile(
                path.join(outputDir, `${basename}.stories.mdx`),
                mdxTemplate(basename)
            )
        })
    )
}

// Fetch design system 'principles' directory info from github
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
    // Fetch files and create local ones for storybook
    .then(downloadAndProcessFiles)
    .then(
        console.log('Design system files downloaded & processed for storybook')
    )
    .catch(console.error)
