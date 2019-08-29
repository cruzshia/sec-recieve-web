import NextI18Next from 'next-i18next'
import path from 'path'

const NextI18NextInstance = new NextI18Next({
  defaultNS: 'common',
  defaultLanguage: 'en',
  otherLanguages: ['zh-TW'],
  whitelist: ['en', 'zh-TW'],
  localePath: path.resolve(__dirname, '/static/locales')
})

export default NextI18NextInstance

export const { appWithTranslation, withTranslation } = NextI18NextInstance
