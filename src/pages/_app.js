import Head from 'next/head'
import Layout from '../components/Layout'

import '../styles/globals.css'
import '../styles/main.css'
import '../styles/form.css'
import '../styles/layout.css'
import '../styles/under-construction.css'
import '../styles/projects.css'
import '../styles/task-dealer.css'

import '../styles/components/index.css'
import '../styles/animations/index.css'

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
