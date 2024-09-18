const { execSync, spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

const ROOT_FOLDER = path.join(__dirname, '..')
const UI_FOLDER = path.join(ROOT_FOLDER, 'collections/ui')
const UI_PACKAGEJSON = path.join(UI_FOLDER, 'package.json')
const UI_SRC_FOLDER = path.join(UI_FOLDER, 'src')
const UI_SRC_INDEX_JS = path.join(UI_SRC_FOLDER, 'index.js')
const UI_TYPES_FOLDER = path.join(UI_FOLDER, 'types')
const UI_TYPES_INDEX_JS = path.join(UI_TYPES_FOLDER, 'index.d.ts')
const COMPONENTS_OLD_FOLDER = path.join(ROOT_FOLDER, 'components')
const CONSTANTS_OLD_FOLDER = path.join(ROOT_FOLDER, 'constants')
const CONSTANTS_FOLDER = path.join(UI_SRC_FOLDER, 'constants')
const ICONS_OLD_FOLDER = path.join(ROOT_FOLDER, 'icons')
const ICONS_FOLDER = path.join(UI_SRC_FOLDER, 'icons')
const ICONS_INDEX_JS = path.join(ICONS_FOLDER, 'index.js')

async function main() {
    devCleanup()

    // Components
    const componentWorkspacesInfo = await getComponentWorkspacesInfo()
    const todoWorkspaces = Object.entries(componentWorkspacesInfo)

    todoWorkspaces.forEach(([workspaceName, workspaceInfo]) => {
        const workspaceFolderName = workspaceInfo.location.split('/').slice(-1)[0]

        copySrcFolder(workspaceInfo)
        adjustIndexJsEntry(workspaceInfo)
        copyDependencies(workspaceInfo)
        copyTypes(workspaceInfo)
        addIndexDTsEntry(workspaceInfo)
        copyApi(workspaceInfo)
        updateWorkspaceImportStatements(componentWorkspacesInfo, workspaceInfo)
    })

    // // Constants
    // copyConstantsSrc()
    // copyConstantsTypes()

    // // Icons
    // copyIconsSrc()
    // copyIconsTypes()
    // copyIconsScripts()
    // fs.writeFileSync(ICONS_INDEX_JS, "export * from './react/index.js'", { flag: 'w+' })

    // // Package json
    // copyRelevantPackageJsonParts()

    // Cleanup
    // execSync('npm run build:icons', { cwd: ROOT_FOLDER })
}

async function getComponentWorkspacesInfo() {
    const result = await execSync('yarn workspaces info')
    const json = result
        .toString()
        .replace(/^.*\n/, '')
        .split('\n')
        .slice(0, -2)
        .join('\n')
    const parsed = JSON.parse(json)

    return Object.fromEntries(
        Object
            .entries(parsed)
            .filter(([, { location }]) => location.startsWith('components'))
    )
}

function copySrcFolder(workspaceInfo) {
    const workspaceFolderName = workspaceInfo.location.split('/').slice(-1)[0]
    const srcFolder = path.join(__dirname, '..', workspaceInfo.location, 'src')
    const destinationFolder = path.join(UI_SRC_FOLDER, workspaceFolderName)
    fs.cpSync(srcFolder, destinationFolder, { recursive: true })
}

function adjustIndexJsEntry(workspaceInfo) {
    const workspaceFolderName = workspaceInfo.location.split('/').slice(-1)[0]
    const uiSrcIndexJs = fs.readFileSync(UI_SRC_INDEX_JS, { encoding: 'utf8' })
    const adjustedReexport = uiSrcIndexJs.replace(
        `'@dhis2-ui/${workspaceFolderName}'`,
        `'./${workspaceFolderName}/index.js'`
    )

    fs.writeFileSync(UI_SRC_INDEX_JS, adjustedReexport)
}

function copyDependencies(workspaceInfo) {
    const packageJson = JSON.parse(
        fs.readFileSync(UI_PACKAGEJSON, { encoding: 'utf8' })
    )
    const workspacePackageJsonLocation = path.join(workspaceInfo.location, 'package.json')
    const workspacePackageJson = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, '..', workspacePackageJsonLocation),
            { encoding: 'utf8' }
        )
    )


    function updateDeps(depsProp) {
        const dependencies = Object.entries(workspacePackageJson[depsProp] || {}).filter(([name]) => !name.match(/@dhis2([/]ui-|-ui)/))
        dependencies.forEach(([name, version]) => {
            if (packageJson[depsProp][name] && packageJson[depsProp][name] !== version) {
                const existingVersion = packageJson[depsProp][name]
                console.error(`Multiple versions for dependency "${name}" in "${workspacePackageJsonLocation}": "${existingVersion}" and "${version}"`)
            }

            packageJson[depsProp][name] = version
        })
    }

    ['dependencies', 'devDependencies', 'peerDependencies'].forEach(updateDeps)
    fs.writeFileSync(UI_PACKAGEJSON, JSON.stringify(packageJson, null, 4))
}

function copyTypes(workspaceInfo) {
    const workspaceFolderName = workspaceInfo.location.split('/').slice(-1)[0]
    const typesFile = path.join(__dirname, '..', workspaceInfo.location, 'types/index.d.ts')
    const destinationFile = path.join(UI_TYPES_FOLDER, `${workspaceFolderName}.d.ts`)
    fs.cpSync(typesFile, destinationFile)
}

function addIndexDTsEntry(workspaceInfo) {
    const uiTypesIndexJs = fs.readFileSync(UI_TYPES_INDEX_JS, { encoding: 'utf8' })
    const workspaceFolderName = workspaceInfo.location.split('/').slice(-1)[0]
    const adjustedReexport = uiTypesIndexJs.replace(
        `'@dhis2-ui/${workspaceFolderName}'`,
        `'./${workspaceFolderName}.d.ts'`
    )

    fs.writeFileSync(UI_TYPES_INDEX_JS, adjustedReexport)
}

function copyApi(workspaceInfo) {
    const workspaceFolderName = workspaceInfo.location.split('/').slice(-1)[0]
    const typesFile = path.join(__dirname, '..', workspaceInfo.location, 'API.md')
    const destinationFile = path.join(UI_SRC_FOLDER, `${workspaceFolderName}/API.md`)
    fs.cpSync(typesFile, destinationFile)
}

function updateWorkspaceImportStatements(workspacesInfo, workspaceInfo) {
    const workspaceFolderName = workspaceInfo.location.split('/').slice(-1)[0]
    const entryFolder = path.join(UI_SRC_FOLDER, workspaceFolderName)
    updateImportStatements(workspacesInfo, entryFolder)
}

function updateImportStatements(workspacesInfo, entryFolder) {
    const contents = fs.readdirSync(entryFolder)
    const folders = contents.filter(fileName => fs.lstatSync(path.join(entryFolder, fileName)).isDirectory()).map(fileName => path.join(entryFolder, fileName))
    const jsFiles = contents.filter(fileName => fileName.match(/\.js$/)).map(fileName => path.join(entryFolder, fileName))

    jsFiles.forEach(jsFile => {
        const jsFileContent = fs.readFileSync(jsFile, { encoding: 'utf8' })
        const componentImports = unique(jsFileContent.match(/'@dhis2-ui\/[^']+'/g))
            // Remove surrounding string delimiters
            .map(str => str.slice(1, -1))

        const localesImports = unique(jsFileContent.match(/'(\.\.\/){1,}locales\/index\.js'/g))
            // Remove surrounding string delimiters
            .map(str => str.slice(1, -1))

        const otherImports = unique(jsFileContent.match(/'@dhis2\/ui-[^']+'/g))
            // Remove surrounding string delimiters
            .map(str => str.slice(1, -1))

        if (!componentImports.length && !otherImports.length) {
            return
        }

        const pathRelativeToComponents = jsFile.replace(`${UI_SRC_FOLDER}/`, '')
        const pathUpCount = pathRelativeToComponents.match(/\//g).length

        const updatedComponentImports = componentImports.reduce(
            (curContent, workspaceName) => {
                const importFolderName = getFolderNameByWorkspaceName(workspacesInfo, workspaceName)
                const upPath = Array.from(Array(pathUpCount)).map(() => '..').join('/')
                const importPath = `${upPath}/${importFolderName}/index.js`
                const nextContent = curContent.replace(new RegExp(workspaceName.replace('/', '\/')), importPath)
                return nextContent
            },
            jsFileContent
        )

        const updatedLocalesImports = localesImports.reduce(
            (curContent, localesPath) => {
                const upPath = Array.from(Array(pathUpCount)).map(() => '..').join('/')
                const importPath = `${upPath}/locales/index.js`
                const nextContent = curContent.replace(new RegExp(localesPath.replace('/', '\/')), importPath)
                return nextContent
            },
            updatedComponentImports
        )

        const updatedFileContents = otherImports.reduce(
            (curContent, workspaceName) => {
                const importFolderName = workspaceName.replace('@dhis2/ui-', '')
                const upPath = Array.from(Array(pathUpCount)).map(() => '..').join('/')
                const importPath = `${upPath}/${importFolderName}/index.js`
                const nextContent = curContent.replace(new RegExp(workspaceName.replace('/', '\/')), importPath)
                return nextContent
            },
            updatedLocalesImports
        )

        fs.writeFileSync(jsFile, updatedFileContents)
    })

    folders.forEach(folder => updateImportStatements(workspacesInfo, folder))
}

function copyConstantsSrc() {
    fs.cpSync(path.join(CONSTANTS_OLD_FOLDER, 'src'), CONSTANTS_FOLDER, { recursive: true })
}

function copyConstantsTypes() {
    fs.cpSync(
        path.join(CONSTANTS_OLD_FOLDER, 'types/index.d.ts'),
        path.join(TYPES_FOLDER, `constants.d.ts`),
    )

    const exportStatement = `export * from './constants.d.ts'\n`
    fs.writeFileSync(TYPES_INDEX_TS, exportStatement, { flag: 'a' })
}

function copyIconsSrc() {
    fs.cpSync(
        path.join(ICONS_OLD_FOLDER, 'src'),
        ICONS_FOLDER,
        { recursive: true }
    )

    fs.cpSync(
        path.join(ICONS_OLD_FOLDER, 'templates'),
        path.join(ICONS_FOLDER, 'templates'),
        { recursive: true }
    )

    fs.cpSync(
        path.join(ICONS_OLD_FOLDER, '.eslintrc.js'),
        path.join(ICONS_FOLDER, '.eslintrc.js'),
    )

    fs.cpSync(
        path.join(ICONS_OLD_FOLDER, 'svgr.config.js'),
        path.join(ROOT_FOLDER, 'svgr.config.js'),
    )

    const svgrConfigJs = fs.readFileSync(
        path.join(ROOT_FOLDER, 'svgr.config.js'),
        { encoding: 'utf8' }
    )
    const svgrConfigJsUpdated = svgrConfigJs.replace(/'\.\/templates/g, '\'./src/icons/templates')
    fs.writeFileSync(
        path.join(ROOT_FOLDER, 'svgr.config.js'),
        svgrConfigJsUpdated
    )
}

function copyIconsTypes() {
    fs.cpSync(
        path.join(ICONS_OLD_FOLDER, 'types/index.d.ts'),
        path.join(TYPES_FOLDER, `icons.d.ts`),
    )

    const exportStatement = `export * from './icons.d.ts'\n`
    fs.writeFileSync(TYPES_INDEX_TS, exportStatement, { flag: 'a' })
}

function copyIconsScripts() {
    const packageJson = JSON.parse(
        fs.readFileSync(PACKAGE_JSON, { encoding: 'utf8' })
    )

    const scripts = {
        'build:icons': 'svgr -d src/icons/react src/icons/svg',
        'clean:icons': 'rimraf ./src/icons/react'
    }

    fs.writeFileSync(PACKAGE_JSON, JSON.stringify({
        ...packageJson,
        scripts: { ...packageJson.scripts, ...scripts },
    }, null, 2))
}

function copyStorybookDependencies() {
    const packageJson = JSON.parse(
        fs.readFileSync(PACKAGE_JSON, { encoding: 'utf8' })
    )
    const storybookPackageJsonPath = path.join(STORYBOOK_FOLDER, 'package.json')
    const storybookPackageJson = JSON.parse(
        fs.readFileSync(storybookPackageJsonPath, { encoding: 'utf8' })
    )

    const dependencies = {
        ...packageJson.dependencies,
        ...storybookPackageJson.dependencies,
    }

    const devDependencies = {
        ...packageJson.devDependencies,
        ...storybookPackageJson.devDependencies,
    }

    const peerDependencies = {
        ...packageJson.peerDependencies,
        ...storybookPackageJson.peerDependencies,
    }

    fs.writeFileSync(PACKAGE_JSON, JSON.stringify({
        ...packageJson,
        dependencies,
        devDependencies,
        peerDependencies,
    }, null, 2))
}

function copyStorybookScripts() {
    const packageJson = JSON.parse(
        fs.readFileSync(PACKAGE_JSON, { encoding: 'utf8' })
    )
    const storybookPackageJsonPath = path.join(STORYBOOK_FOLDER, 'package.json')
    const storybookPackageJson = JSON.parse(
        fs.readFileSync(storybookPackageJsonPath, { encoding: 'utf8' })
    )

    const scripts = {
        ...packageJson.scripts,
        start: 'EXTEND_ESLINT=true storybook dev -c config --port 5000 --ci',
        'build:storybook': 'EXTEND_ESLINT=true storybook build -c config -o ./dist/demo'
    }

    fs.writeFileSync(PACKAGE_JSON, JSON.stringify({
        ...packageJson,
        scripts,
    }, null, 2))
}

function copyRelevantPackageJsonParts() {
    const oldPackageJson = JSON.parse(
        fs.readFileSync(PACKAGE_JSON_OLD, { encoding: 'utf8' })
    )
    const curPackageJson = JSON.parse(
        fs.readFileSync(PACKAGE_JSON, { encoding: 'utf8' })
    )

    const newPackageJson = {
        name: oldPackageJson.name,
        version: oldPackageJson.version,
        repository: oldPackageJson.repository,
        author: oldPackageJson.author,
        contributors: oldPackageJson.contributors,
        license: oldPackageJson.license,
        scripts: {
            ...oldPackageJson.scripts,
            ...curPackageJson.scripts,
        },
        dependencies: sortPropsAlphabetically({
            ...oldPackageJson.dependencies,
            ...curPackageJson.dependencies,
        }),
        devDependencies: sortPropsAlphabetically({
            ...oldPackageJson.devDependencies,
            ...curPackageJson.devDependencies,
        }),
        peerDependencies: sortPropsAlphabetically({
            ...oldPackageJson.peerDependencies,
            ...curPackageJson.peerDependencies,
        }),
    }

    fs.writeFileSync(PACKAGE_JSON_OLD, JSON.stringify(newPackageJson, null, 4))
    fs.rmSync(PACKAGE_JSON)
}

function removeWorkspaces() {
    fs.rmSync(COMPONENTS_OLD_FOLDER, { recursive: true, force: true })
    fs.rmSync(CONSTANTS_OLD_FOLDER, { recursive: true, force: true })
    fs.rmSync(ICONS_OLD_FOLDER, { recursive: true, force: true })
    fs.rmSync(ICONS_OLD_FOLDER, { recursive: true, force: true })
    fs.rmSync(path.join(STORYBOOK_FOLDER, 'package.json'))
}

function getFolderNameByWorkspaceName(workspacesInfo, workspaceName) {
    const workspaceInfo = workspacesInfo[workspaceName]
    return workspaceInfo.location.split('/').slice(-1)[0]
}

function unique(arr) {
    return Array.from(new Set(arr))
}

function sortPropsAlphabetically(obj) {
    return Object.fromEntries(
        Object
            .entries(obj)
            .sort(([left], [right]) => left.localeCompare(right))
    )
}

function devCleanup() {
    execSync('git add scripts/de-workspace.js', { cwd: ROOT_FOLDER })
    execSync('git checkout -- .', { cwd: ROOT_FOLDER })
    execSync('git clean -df', { cwd: ROOT_FOLDER })
    execSync('git restore --staged scripts/de-workspace.js', { cwd: ROOT_FOLDER })
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
})
