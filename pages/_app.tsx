import NextApp from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../modules'

export default class CustomApp extends NextApp {
  constructor(props: any) {
    super(props)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Phovis</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}
