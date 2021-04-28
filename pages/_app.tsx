import NextApp from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../modules'
import { GlobalStyle } from '@styles/global-styles'
import theme from '@styles/theme'
import { ThemeProvider } from '@styles/themed-components'

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
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}
