import { Html, Head, Main, NextScript } from 'next/document'

import { siteMeta } from '../lib/constants'

const siteLang = siteMeta?.siteLang ?? 'ja'

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
