#!/usr/bin/env node

/**
 * post-build-rename.js
 *
 * After d2-app-scripts builds a TypeScript component, the output files
 * retain their .ts/.tsx extensions despite being compiled to plain JS.
 * This script renames them to .js/.jsx and updates internal import paths.
 *
 * Usage: node post-build-rename.js [buildDir]
 *   buildDir defaults to ./build
 */

const fs = require('fs')
const path = require('path')

const buildDir = process.argv[2] || path.join(process.cwd(), 'build')

function walk(dir) {
    const results = []
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            results.push(...walk(fullPath))
        } else {
            results.push(fullPath)
        }
    }
    return results
}

function renameExtension(filePath) {
    if (filePath.endsWith('.tsx')) {
        return filePath.replace(/\.tsx$/, '.js')
    }
    if (filePath.endsWith('.ts') && !filePath.endsWith('.d.ts')) {
        return filePath.replace(/\.ts$/, '.js')
    }
    return filePath
}

function updateImportPaths(content) {
    // Update import/export paths: './foo.tsx' -> './foo.js', './foo.ts' -> './foo.js'
    return content
        .replace(/(from\s+['"])([^'"]*?)\.tsx(['"])/g, '$1$2.js$3')
        .replace(/(from\s+['"])([^'"]*?)\.ts(['"])/g, '$1$2.js$3')
        .replace(/(require\(['"])([^'"]*?)\.tsx(['"]\))/g, '$1$2.js$3')
        .replace(/(require\(['"])([^'"]*?)\.ts(['"]\))/g, '$1$2.js$3')
}

const files = walk(buildDir)
let renamed = 0
let updated = 0

// First pass: update import paths in all JS/TS files
for (const filePath of files) {
    if (/\.[jt]sx?$/.test(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8')
        const newContent = updateImportPaths(content)
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8')
            updated++
        }
    }
}

// Second pass: rename .ts/.tsx files to .js
for (const filePath of files) {
    const newPath = renameExtension(filePath)
    if (newPath !== filePath) {
        fs.renameSync(filePath, newPath)
        renamed++
    }
}

console.log(`Renamed ${renamed} file(s), updated imports in ${updated} file(s)`)
