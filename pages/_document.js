import { Html, Head, Main } from 'next/document'

import { siteMeta } from '../lib/constants'

const siteLang = siteMeta?.siteLang ?? 'ja'

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
      </body>
    </Html>
  )
}
