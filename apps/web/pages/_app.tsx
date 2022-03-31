import './styles.css'

import { LiteralProvider } from '@literal-ui/core'
import { AppProps } from 'next/app'

import { Layout } from '../components'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LiteralProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LiteralProvider>
  )
}
