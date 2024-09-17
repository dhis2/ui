const fs = require('fs')
const path = require('path')

const SRC_FOLDER = path.join(__dirname, '../src')
const COMPONENTS_FOLDER = path.join(SRC_FOLDER, 'components')
const CONSTANTS_FOLDER = path.join(SRC_FOLDER, 'constants')
const ICONS_FOLDER = path.join(SRC_FOLDER, 'icons')
const TYPES_FOLDER = path.join(__dirname, '../types')
const TYPES_INDEX_JS = path.join(TYPES_FOLDER, 'index.d.ts')

const typesIndexJs = fs.readFileSync(TYPES_INDEX_JS, { encoding: 'utf8' })
const lines = typesIndexJs.split('\n').slice(0, -2)

let updatedTypesIndexJs = typeIndexJs
lines.forEach(line => {
    const [name] = line.match(/(?<=\.\/)[^\/]+(?=\.d\.ts)/)
    const filePath = path.join(TYPES_FOLDER, `${name}.d.ts`)
    const targetPath = path.join(
        name === 'constants' ? CONSTANTS_FOLDER : name === 'icons' ? ICONS_FOLDER : COMPONENTS_FOLDER,
        name === 'constants' || name === 'icons' ? '' : name,
        'index.d.ts'
    )

    updatedTypesIndexJs = updatedTypesIndexJs.replace(line, `export * from '../src/${'`)

    fs.cpSync(filePath, targetPath)
})
