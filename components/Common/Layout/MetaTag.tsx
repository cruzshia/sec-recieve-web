import Head from 'next/head'
import i18n from 'i18next'
import { memo } from 'react'

export default memo(({ t }: { t: i18n.TFunction }) => (
  <Head>
    <title>{t('title')}</title>

    <meta name='twitter:title' content={`@${t('meta_title')}`} />
    <meta name='twitter:site' content={`@${t('meta_title')}`} />
    <meta name='twitter:creator' content={t('meta_title')} />
    <meta
      name='twitter:description'
      key='twitter:description'
      content={`@${t('meta_desc')}`}
    />

    <meta property='og:title' content={`@${t('meta_title')}`} />
    <meta property='og:site_name' content={`@${t('meta_title')}`} />
    <meta
      property='og:description'
      key='og:description'
      content={`@${t('meta_desc')}`}
    />
    <meta name='Description' content={`@${t('meta_desc')}`} />
  </Head>
))
