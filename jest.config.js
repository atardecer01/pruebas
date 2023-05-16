module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ["text-encoding"],
    
  };