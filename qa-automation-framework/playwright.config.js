module.exports = {
  testDir: './tests',
  timeout: 30000,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://example.com',
    headless: true,
  },
};