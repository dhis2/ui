#!/usr/bin/env node

/**
 * NOTA BENE
 *
 * The setup script should be run at least once after cloning the UI
 * repo, to ensure that all our generated source files exist before
 * attempting to run Storybook.
 *
 * Long-term goal is to remove the need for this script.
 */

const fs = require('node:fs')
const path = require('path')
const concurrently = require('concurrently')

/* We want to use the same way to find our packages in Storybook and our
 * scripts to make sure that we get a consistent result, which is why we
 * make an exception and reach into the storybook/src folder here.
 */
const { uiPackages } = require(
    path.resolve(__dirname, '..', 'storybook', 'src', 'ui-packages.js')
)

/*
 * Only grab the components and generate the i18n for those since we are
 * doing this to allow Storybook to start cleanly without building
 * everything upfront.
 */
const [components] = uiPackages({ absolute: true })

/*
 * Right now, we use the @dhis2/d2-i18n runtime to do i18n so we check
 * if a component depends on it to know where to extract i18n strings
 * from.
 *
 * The reason we have to identify all the components that do i18n is
 * because the "d2-app-script i18n generate" command exits with code 1
 * (error) if it doesn't find any i18n strings. If it was a noop with
 * exit code 0 we wouldn't need to find the components that do i18n and
 * could run it on all of them.
 *
 * This may change when we revamp the i18n system:
 *
 * https://github.com/dhis2/notes/discussions/154
 *
 */
const hasDep = (deps) => (deps ? deps['@dhis2/d2-i18n'] : false)

const commands = components
    .map((p) => {
        const pkg = require(path.join(p, 'package.json'))

        if (hasDep(pkg.dependencies) || hasDep(pkg.peerDependencies)) {
            return {
                name: path.basename(p),
                command: `yarn workspace ${pkg.name} d2-app-scripts i18n generate`,
            }
        }

        return
    })
    .filter((p) => p)

/*
 * Generate .tx/config with a Transifex resource for every package that
 * has an i18n/en.pot. This goes by the .pot file rather than by the
 * @dhis2/d2-i18n dependency used above, because not every package that
 * does i18n declares it (e.g. button, modal and forms).
 *
 * CI fails if the committed .tx/config differs from the generated one, so
 * a new translatable package can't be left out of Transifex by accident.
 */
// Resource slugs that predate this generator. Changing a slug would orphan
// the existing translations on Transifex.
const TX_SLUG_OVERRIDES = { 'collections/forms': 'ui-forms' }

const root = path.resolve(__dirname, '..')
const [, collections] = uiPackages({ absolute: true })
const txResources = [...components, ...collections]
    .map((p) => path.relative(root, p))
    .filter((p) => fs.existsSync(path.join(root, p, 'i18n', 'en.pot')))
    .map((p) => ({ dir: p, slug: TX_SLUG_OVERRIDES[p] || path.basename(p) }))
    .sort((a, b) => a.slug.localeCompare(b.slug))

const txConfig = [
    `[main]
host     = https://www.transifex.com
lang_map = fa_AF: prs, uz@Cyrl: uz_UZ_Cyrl, uz@Latn: uz_UZ_Latn
`,
    ...txResources.map(
        ({ dir, slug }) => `[o:hisp-uio:p:app-component-ui:r:${slug}]
file_filter  = ${dir}/i18n/<lang>.po
source_file  = ${dir}/i18n/en.pot
source_lang  = en
type         = PO
minimum_perc = 0
`
    ),
].join('\n')

fs.writeFileSync(path.join(root, '.tx', 'config'), txConfig)

concurrently(
    [
        ...commands,
        { name: 'icons', command: 'yarn workspace @dhis2/ui-icons build' },
        {
            name: 'constants',
            command: 'yarn workspace @dhis2/ui-constants build',
        },
        { name: 'css', command: 'yarn workspace @dhis2-ui/css build' },
        {
            name: 'forms',
            command:
                'yarn workspace @dhis2/ui-forms d2-app-scripts i18n generate',
        },
    ],
    {
        prefix: 'name',
        killOthers: ['failure'],
        restartTries: 1,
        cwd: path.resolve(__dirname, '..'),
    }
).then(
    () => {
        console.log('UI setup complete')
        process.exit(0)
    },
    (failure) => {
        console.log('UI setup failed')
        console.dir(failure, { depth: null })
        process.exit(1)
    }
)
