import Head from "next/head";
import Layout from "components/Layout";
import { WindowAlertProvider } from "context/windowAlert";

import "../styles/animations/index.css";
import "../styles/index.css";

import "../styles/components/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <WindowAlertProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </WindowAlertProvider>
  );
}

export default MyApp;
