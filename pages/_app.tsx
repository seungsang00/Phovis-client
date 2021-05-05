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
          <link
            href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
            rel='stylesheet'
            type='text/css'></link>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Girassol&display=swap'
            rel='stylesheet'
          />
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
