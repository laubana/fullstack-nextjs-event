import Head from "next/head";

import "../styles/globals.css";

import Layout from "@components/Layout/Layout";
import ToastContextProvider from "@contexts/ToastContext";

export default ({ Component, pageProps }) => {
  return (
    <ToastContextProvider>
      <Head>
        <title>Next Event</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ToastContextProvider>
  );
};
