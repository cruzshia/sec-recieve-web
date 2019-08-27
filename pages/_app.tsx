import App from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import createStore from '../store'
import { Store } from 'redux'
import { Provider } from 'react-redux'

interface MyAppProps {
  store: Store
  query?: { [key: string]: string }
}

class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(createStore)(MyApp)
