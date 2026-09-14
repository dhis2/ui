#!/usr/bin/env node

/**
 * NOTA BENE
 *
 * Emits TypeScript declarations for the package this is run from, into its
 * own `build/types`.
 *
 * Declarations have to be emitted per package, because each package
 * publishes its own — one `tsc` run writes to one `outDir`. Expressing that
 * as a `tsconfig.build.json` in every package would restate the compiler
 * options next to the ones in the root `tsconfig.json`, where they could
 * drift. So the options are read from that config and only the paths are
 * overridden here.
 *
 * `tsc` cannot do this from the command line: `include` is a config-file
 * field with no CLI equivalent, and `--project` refuses to be combined with
 * file arguments (TS5042). The compiler API has no such restriction.
 */

const path = require('node:path')
const fg = require('fast-glob')
const ts = require('typescript')

const PROJECT_ROOT = path.resolve(__dirname, '..')
const ROOT_CONFIG = path.join(PROJECT_ROOT, 'tsconfig.json')

/* Sources that are type-checked but must not produce published declarations. */
const NOT_PUBLISHED = [
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.stories.ts',
    '**/*.stories.tsx',
    '**/locales/**',
]

const readRootOptions = () => {
    const { config, error } = ts.readConfigFile(ROOT_CONFIG, ts.sys.readFile)

    if (error) {
        throw new Error(
            ts.flattenDiagnosticMessageText(error.messageText, '\n')
        )
    }

    const { options, errors } = ts.parseJsonConfigFileContent(
        config,
        ts.sys,
        PROJECT_ROOT
    )

    if (errors.length) {
        throw new Error(
            errors
                .map((e) =>
                    ts.flattenDiagnosticMessageText(e.messageText, '\n')
                )
                .join('\n')
        )
    }

    return options
}

const report = (diagnostics) => {
    if (!diagnostics.length) {
        return false
    }

    console.error(
        ts.formatDiagnosticsWithColorAndContext(diagnostics, {
            getCanonicalFileName: (f) => f,
            getCurrentDirectory: ts.sys.getCurrentDirectory,
            getNewLine: () => ts.sys.newLine,
        })
    )

    return true
}

const packageDir = process.cwd()
const src = path.join(packageDir, 'src')

const sources = fg.sync('**/*.{ts,tsx}', {
    cwd: src,
    absolute: true,
    ignore: NOT_PUBLISHED,
})

if (sources.length === 0) {
    console.log(`No TypeScript sources in ${path.relative(PROJECT_ROOT, src)}`)
    process.exit(0)
}

/* Ambient declarations are shared, and live outside any package. */
const ambient = fg.sync('typings/**/*.d.ts', {
    cwd: PROJECT_ROOT,
    absolute: true,
})

const program = ts.createProgram({
    rootNames: [...sources, ...ambient],
    options: {
        ...readRootOptions(),
        noEmit: false,
        declaration: true,
        emitDeclarationOnly: true,
        rootDir: src,
        outDir: path.join(packageDir, 'build', 'types'),
    },
})

const emitResult = program.emit()
const failed = report([
    ...ts.getPreEmitDiagnostics(program),
    ...emitResult.diagnostics,
])

if (failed || emitResult.emitSkipped) {
    console.error('Failed to emit type declarations')
    process.exit(1)
}

console.log(
    `Emitted type declarations for ${path.basename(packageDir)} ` +
        `(${sources.length} source files)`
)
