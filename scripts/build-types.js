#!/usr/bin/env node

/**
 * NOTA BENE
 *
 * Emits TypeScript declarations for the package this is run from, into its
 * own `build/types`.
 *
 * Emit is per package because each package publishes its own types, and one
 * `tsc` run writes to one `outDir`. The compiler options are read from the
 * root `tsconfig.json` rather than restated here, so they cannot drift from
 * the ones used to type-check.
 *
 * `tsc` cannot do this from the command line: `include` is a config-file
 * field with no CLI equivalent, and `--project` refuses to be combined with
 * file arguments (TS5042). The compiler API has no such restriction.
 */

const path = require('node:path')
const fg = require('fast-glob')
const ts = require('typescript')

const PROJECT_ROOT = path.resolve(__dirname, '..')
const packageSrc = path.join(process.cwd(), 'src')

const { config } = ts.readConfigFile(
    path.join(PROJECT_ROOT, 'tsconfig.json'),
    ts.sys.readFile
)
const { options } = ts.parseJsonConfigFileContent(config, ts.sys, PROJECT_ROOT)

const program = ts.createProgram({
    rootNames: [
        // Type-checked by tsconfig.json, but not published, so not emitted.
        ...fg.sync('**/*.{ts,tsx}', {
            cwd: packageSrc,
            absolute: true,
            ignore: ['**/*.test.*', '**/*.stories.*', '**/locales/**'],
        }),
        // Ambient declarations are shared, and live outside any package.
        ...fg.sync('typings/**/*.d.ts', { cwd: PROJECT_ROOT, absolute: true }),
    ],
    options: {
        ...options,
        noEmit: false,
        declaration: true,
        emitDeclarationOnly: true,
        rootDir: packageSrc,
        outDir: path.join(process.cwd(), 'build', 'types'),
    },
})

const { diagnostics } = program.emit()
const problems = [...ts.getPreEmitDiagnostics(program), ...diagnostics]

if (problems.length) {
    console.error(
        ts.formatDiagnosticsWithColorAndContext(problems, {
            getCanonicalFileName: (f) => f,
            getCurrentDirectory: ts.sys.getCurrentDirectory,
            getNewLine: () => ts.sys.newLine,
        })
    )
    process.exit(1)
}
