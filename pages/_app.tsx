import '../styles/index.sass'

import App, { AppContext } from 'next/app'

import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import React from 'react'
import { Store } from 'redux'
import { ThemeProvider } from '@material-ui/styles'
import { WithTranslation } from 'next-i18next'
import { appWithTranslation } from '@App/server/i18n'
import createStore from '../store'
import i18next from 'i18next'
import theme from '@App/lib/theme'
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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(createStore)(appWithTranslation(MyApp))
