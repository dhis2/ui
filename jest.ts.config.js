module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testRegex: '.(test|spec).tsx?$',
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
    ],
    roots: ['<rootDir>/components'],
};
