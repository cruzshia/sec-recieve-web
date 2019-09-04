import '../styles/index.sass'

import App, { AppContext } from 'next/app'

import { Provider } from 'react-redux'
import React from 'react'
import { Store } from 'redux'
import { WithTranslation } from 'next-i18next'
import { appWithTranslation } from '@App/server/i18n'
import createStore from '../store'
import i18next from 'i18next'
import withRedux from 'next-redux-wrapper'

interface MyAppProps extends WithTranslation {
  store: Store
  query?: { [key: string]: string }
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    if (ctx.req) {
      const i18n = (ctx.req as any).i18n as i18next.i18n
      const lang = (ctx.query.lng as string) || i18n.language

      await i18n.changeLanguage(lang)
    }

    return {
      pageProps
    }
  }
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(createStore)(appWithTranslation(MyApp))
