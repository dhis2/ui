// This is a dependency from storybook - probably best to add to project deps
const fs = require('fs').promises
const path = require('path')
const { startCase } = require('lodash')
const fetch = require('node-fetch')

/**
 * This regex matches relative links in markdown, like '![link](../images/image.png)'
 *
 * This will be used to transform relative links (and images) in the design system
 * pages into external links to the github repo so these pages don't need to serve
 * images and to enable linking to other design system pages.
 *
 * There is a negative lookahead assertion to exclude external links that include 'http'
 * or same-page links that start with '#'
 *
 * It also checks if the link is for an image or not, because they need different handling
 * The capture groups for the above link would be 1. '!' 2. 'link' and 3. '../images/image.png'
 *
 * Check it out here: https://regex101.com/r/y5o9Tf/6
 *
 */
const mdRelativeLinkRegex = /(!)?\[(.*)\]\((?!http|#)(.*)\)/g
const rawGithubUrl =
    'https://raw.githubusercontent.com/dhis2/design-system/master/principles/'
const regularGithubUrl =
    'https://github.com/dhis2/design-system/tree/master/principles'

// eslint-disable-next-line max-params
const linkReplacer = (_, imageBang, text, linkPath) => {
    // Different links for images or markdown pages
    const githubUrl = imageBang ? rawGithubUrl : regularGithubUrl
    const prefix = imageBang || '' // '!' or ''
    const url = path.join(githubUrl, linkPath)
    return `${prefix}[${text}](${url})`
}

const replaceRelativeLinksWithGithubLinks = text =>
    text.replace(mdRelativeLinkRegex, linkReplacer)

// Template for creating .stories.mdx file for storybook that imports from regular markdown file
const mdxTemplate = basename => `import { Meta, Description } from '@storybook/addon-docs/blocks'
import ${startCase(basename).replace(/ /g, '')} from './${basename}.md'

<Meta title="Design System Principles/${startCase(basename)}" />

<Description>{${startCase(basename).replace(/ /g, '')}}</Description>
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
    .then(() =>
        console.log('Design system files downloaded & processed for storybook')
    )
    .catch(console.error)
