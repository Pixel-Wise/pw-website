module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy', // Mapea los archivos de estilos
        '^src/(.*)$': '<rootDir>/src/$1', // Mapea las importaciones que comienzan con 'src/'
    },
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
};
