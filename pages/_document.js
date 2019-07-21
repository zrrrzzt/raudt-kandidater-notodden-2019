import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='no'>
        <Head>
          <link rel='apple-touch-icon' href='static/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='static/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='static/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='static/favicon-16x16.png' />
          <link rel='manifest' href='static/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='static/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
