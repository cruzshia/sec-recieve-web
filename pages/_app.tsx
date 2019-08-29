import App from 'next/app'
import { Provider } from 'react-redux'
import React from 'react'
import { Store } from 'redux'
import { WithTranslation } from 'next-i18next'
import createStore from '../store'
import withRedux from 'next-redux-wrapper'
import { withTranslation } from '@App/server/i18n'

interface MyAppProps extends WithTranslation {
  store: Store
  query?: { [key: string]: string }
}

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps, store } = this.props
    console.log(333333)
    console.log(this.props)
    console.log(this.props.t)
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(createStore)(withTranslation('common')(MyApp))
