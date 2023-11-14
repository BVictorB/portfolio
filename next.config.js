module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  async redirects() {
    return [
      {
        source: '/*',
        destination: 'https://www.linkedin.com/in/victor-boucher-18267813b/',
        permanent: false,
      },
    ];
  }
}
