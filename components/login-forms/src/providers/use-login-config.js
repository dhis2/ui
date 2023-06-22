// mock this for now

const defaultProviderValues = {
    applicationDescription:
        'This is the long application subtitle where there is a lot of information included in the subtitle so it must handle this much information',
    applicationFooter: 'Application left side footer text',
    applicationNotification:
        'this is placeholder for the application notification.',
    allowAccountRecovery: true,
    applicationTitle: 'Example application title that could be very long',
    countryFlag: 'http://localhost:8080/dhis-web-commons/flags/norway.png',
    useCountryFlag: true,
    loginPageLogo: 'http://localhost:8080/api/staticContent/logo_front',
    useLoginPageLogo: true,
    emailConfigured: true,
    selfRegistrationEnabled: true,
    selfRegistrationNoRecaptcha: false,
    systemUiLocale: 'en',
    uiLocale: 'en',
    dir: 'ltr',
    htmlTemplate: 'standard',
}

const defaultLocales = [
    { locale: 'ar', name: 'العربية – Arabic' },
    { locale: 'zh', name: '中文 – Chinese' },
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'français – French' },
    { locale: 'nb', name: 'norsk – Norwegian' },
    { locale: 'es', name: 'español – Spanish' },
]

export const useLoginConfig = () => ({
    ...defaultProviderValues,
    defaultLocales,
    refreshOnTranslation: () => {console.log('translation should occur')}
})