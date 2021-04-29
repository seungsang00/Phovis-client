import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from '../styles/themed-components'

interface IProps {
  styleTags: Array<React.ReactElement<{}>>
}

class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Phovis</title>
          {this.props.styleTags}
          <script
            type='text/javascript'
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&libraries=services`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
