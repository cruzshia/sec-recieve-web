import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  defaultNS: 'common',
  defaultLanguage: 'en',
  otherLanguages: ['zh-TW'],
  whitelist: ['en', 'zh-TW'],
  localePath: 'static/locales'
})

export default NextI18NextInstance

export const { appWithTranslation, withTranslation } = NextI18NextInstance
