import Head from "next/head";
import Layout from "common/layouts/MainLayout";
import { WindowAlertProvider } from "context/windowAlert";
import { navOptions } from "data";

import { GoogleAnalyticsComponent } from "common/features/googleAnalytics";

import "../styles/animations/index.css";
import "styles/index.sass";

import "arthsy";

import "../styles/components/index.css";

import "styles/animations/fadeIn.sass";

function MyApp({ Component, pageProps }) {
  return (
    <WindowAlertProvider>
      <Layout menuOptions={navOptions}>
        <Head>
          <meta name="viewport" content="width=device-width" />
          <title>Nícolas Arths</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
      <GoogleAnalyticsComponent />
    </WindowAlertProvider>
  );
}

export default MyApp;
