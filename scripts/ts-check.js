#!/usr/bin/env node

/**
 * ts-check.js — Feedback pipeline for incrementally migrated TypeScript components
 *
 * Runs three checks on a single component (or all migrated components):
 *   1. TypeScript type-checking (tsc --noEmit)
 *   2. ESLint (with @typescript-eslint rules)
 *   3. Prettier formatting check
 *
 * Usage:
 *   node scripts/ts-check.js <component-name>   # e.g. "tag"
 *   node scripts/ts-check.js --all              # check every component with a tsconfig.json
 *   node scripts/ts-check.js <component> --fix  # auto-fix lint + format issues
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const COMPONENTS_DIR = path.join(ROOT, 'components')
const PRETTIER_CONFIG = path.join(
    ROOT,
    'node_modules/@dhis2/cli-style/config/prettier.config.js'
)

// ─── helpers ───────────────────────────────────────────────────────────
function run(cmd, cwd = ROOT) {
    try {
        execSync(cmd, { cwd, stdio: 'pipe', encoding: 'utf8' })
        return { ok: true, output: '' }
    } catch (err) {
        return { ok: false, output: (err.stdout || '') + (err.stderr || '') }
    }
}

function heading(text) {
    const line = '─'.repeat(60)
    console.log(`\n${line}`)
    console.log(`  ${text}`)
    console.log(line)
}

// ─── resolve which components to check ─────────────────────────────────
const args = process.argv.slice(2)
const fix = args.includes('--fix')
const filteredArgs = args.filter((a) => a !== '--fix')
const checkAll = filteredArgs.includes('--all')

let components = []

if (checkAll) {
    // Find all components that have a tsconfig.json (i.e. migrated to TS)
    for (const name of fs.readdirSync(COMPONENTS_DIR)) {
        const tsconfig = path.join(COMPONENTS_DIR, name, 'tsconfig.json')
        if (fs.existsSync(tsconfig)) {
            components.push(name)
        }
    }
} else if (filteredArgs.length > 0) {
    components = filteredArgs
} else {
    console.log(
        'Usage:\n' +
            '  node scripts/ts-check.js <component>        # e.g. "tag"\n' +
            '  node scripts/ts-check.js --all              # all migrated components\n' +
            '  node scripts/ts-check.js <component> --fix  # auto-fix lint+format\n'
    )
    process.exit(0)
}

if (components.length === 0) {
    console.log(
        'No migrated components found (no tsconfig.json in any component dir).'
    )
    process.exit(0)
}

// ─── run checks ────────────────────────────────────────────────────────
let allPassed = true

for (const name of components) {
    const compDir = path.join(COMPONENTS_DIR, name)
    const tsconfig = path.join(compDir, 'tsconfig.json')

    if (!fs.existsSync(tsconfig)) {
        console.error(`⚠  Component "${name}" has no tsconfig.json — skipping.`)
        continue
    }

    console.log(`\n${'═'.repeat(60)}`)
    console.log(`  Checking component: ${name}`)
    console.log(`${'═'.repeat(60)}`)

    // 1. TypeScript
    heading('1/3  TypeScript (tsc --noEmit)')
    const tsc = run(`npx tsc --noEmit --project ${tsconfig}`)
    if (tsc.ok) {
        console.log('  PASS — no type errors')
    } else {
        allPassed = false
        console.log('  FAIL')
        console.log(tsc.output)
    }

    // 2. ESLint
    heading(`2/3  ESLint${fix ? ' (with --fix)' : ''}`)
    const glob = `"${compDir}/src/**/*.{ts,tsx}"`
    const eslintCmd = fix ? `npx eslint --fix ${glob}` : `npx eslint ${glob}`
    const eslint = run(eslintCmd)
    if (eslint.ok) {
        console.log('  PASS — no lint issues')
    } else {
        allPassed = false
        console.log('  FAIL')
        console.log(eslint.output)
    }

    // 3. Prettier
    heading(`3/3  Prettier${fix ? ' (with --write)' : ''}`)
    const prettierCmd = fix
        ? `npx prettier --write --config ${PRETTIER_CONFIG} ${glob}`
        : `npx prettier --check --config ${PRETTIER_CONFIG} ${glob}`
    const prettier = run(prettierCmd)
    if (prettier.ok) {
        console.log('  PASS — formatting is correct')
    } else {
        allPassed = false
        console.log('  FAIL')
        console.log(prettier.output)
    }
}

// ─── summary ───────────────────────────────────────────────────────────
console.log(`\n${'═'.repeat(60)}`)
if (allPassed) {
    console.log('  All checks passed!')
} else {
    console.log('  Some checks failed. See output above.')
    console.log('  Tip: run with --fix to auto-fix lint and formatting issues.')
}
console.log(`${'═'.repeat(60)}\n`)

process.exit(allPassed ? 0 : 1)
