const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
  },
  fallbackLng: {
    default: ['en'],
  },
  localePath: path.resolve('./public/locales'),
}