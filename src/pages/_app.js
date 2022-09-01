import Head from 'next/head'
import Layout from '../components/Layout'

import '../styles/globals.css'
import '../styles/main.css'
import '../styles/form.css'
import '../styles/layout.css'
import '../styles/animations.css'
import '../styles/under-construction.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
