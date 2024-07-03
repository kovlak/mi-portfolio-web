import '@testing-library/jest-dom';

jest.mock('next-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => { }),
            },
        };
    },
    serverSideTranslations: () => {
        return Promise.resolve({
            _nextI18Next: {
                initialI18nStore: {},
                initialLocale: 'en',
                userConfig: null,
            },
        });
    },
}));