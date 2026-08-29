declare module '*/locales/index.js' {
    const i18n: {
        t: (value: string, options?: Record<string, unknown>) => string
    }
    export default i18n
}
