import Document, {
  DocumentComponentContext,
  Head,
  Main,
  NextScript
} from 'next/document'

import React from 'react'
import { ServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document<DocumentComponentContext> {
  static async getInitialProps(ctx: any) {
    // const initialProps = await Document.getInitialProps(ctx)

    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <React.Fragment key='styles'>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      ]
    }
  }

  render() {
    return (
      <html lang={'en'}>
        <title>Sev Recieve</title>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, user-scalable=no'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com/' />

          <noscript>
            <img
              height='1'
              width='1'
              src='https://www.facebook.com/tr?id=439945563214829&ev=PageView&noscript=1'
            />
          </noscript>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
          {/* <link
            rel="shortcut icon"
            href="/static/images/fav.ico"
            type="image/x-icon"
          /> */}
          {/* <!-- Twitter Card data --> */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@1SecRecieve' />
          <meta name='twitter:creator' content='1SecRecieve' />
          {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
          <meta
            name='twitter:image:src'
            content='/static/images/og-image.jpg'
          />
          {/* <!-- Open Graph data --> */}
          {/* <meta property="og:url" content={url} /> */}
          <meta
            property='og:image'
            content='https://machix.com/static/images/og-image.jpg'
          />
          <meta property='og:type' content='website' />
          <meta name='twitter:title' content='@1SecRecieve' />
          <meta property='og:title' content='@1SecRecieve' />
          <meta property='og:site_name' content='@1SecRecieve' />
          <meta
            name='twitter:description'
            key='twitter:description'
            content={'@1SecRecieve Share you account'}
          />
          <meta
            property='og:description'
            key='og:description'
            content='@1SecRecieve Share you account'
          />
          <meta name='Description' content='@1SecRecieve Share you account' />
        </Head>
        <body lang={'en'}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
