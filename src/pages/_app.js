import Head from "next/head";
import Layout from "components/Layout";
import { WindowAlertProvider } from "context/windowAlert";
import { navOptions } from "data";

import "../styles/animations/index.css";
import "../styles/index.css";
import "styles/index.sass"

import "../styles/components/index.css";

import "styles/animations/fadeIn.sass"

function MyApp({ Component, pageProps }) {
  return (
    <WindowAlertProvider>
      <Layout menuOptions={navOptions}>
        <Head>
          <meta name="viewport" content="width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </WindowAlertProvider>
  );
}

export default MyApp;
