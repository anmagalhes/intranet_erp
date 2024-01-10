// jest.config.js
module.exports = {
  projects: [
    {
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.jsx?$': ['swc-jest'],
      },
      testMatch: ['<rootDir>/erp/__tests__/*.test.js'],
      // Outras configurações específicas para o ambiente do navegador (jsdom)
    },
    {
      testEnvironment: 'node',
      // Outras configurações específicas para o ambiente Node.js
    },
  ],
};
