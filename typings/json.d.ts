// Lets TypeScript modules import a JSON file without `resolveJsonModule`,
// which would have the compiler parse the file. The value is `unknown`, so
// importers narrow it themselves.
declare module '*.json' {
    const value: unknown
    export default value
}
