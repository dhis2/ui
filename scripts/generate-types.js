#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const { visit } = require('ast-types')
const fg = require('fast-glob')
const reactDocs = require('react-docgen')
const react2dts = require('react-to-typescript-definitions')

const RE_OBJECTOF = /(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/

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

components
    .filter(
        (c) =>
            // path.basename(c) === 'popper' ||
            !fs.existsSync(path.resolve(c, 'index.d.ts'))
    )
    .map((component) => {
        console.info(`Generating Types for: ${path.basename(component)}`)

        const files = fg.sync(`${component}/src/**/*.js`, {
            ignore,
        })

        // const typesPath = path.resolve(component, 'types')
        const declPath = path.resolve(component, 'index.d.ts')
        // clear file, since we're appending
        fs.writeFileSync(declPath, 'import * as React from "react";', {
            flag: 'w',
        })
        files
            .filter((f) => !!f)
            .forEach((filePath) => {
                console.log({ file: filePath })
                console.log(typeof filePath)
                // const fileContent = fs.readFileSync(filePath, 'utf8')
                // const ast = parser.parse(fileContent)

                const typesOutput = react2dts
                    .generateFromFile(null, filePath)
                    .replace(`import * as React from 'react';`, '')
                // console.log({ typesPath })
                // fs.mkdirSync(typesPath, { recursive: true })
                fs.writeFileSync(declPath, typesOutput, { flag: 'a' })
            })
    })

