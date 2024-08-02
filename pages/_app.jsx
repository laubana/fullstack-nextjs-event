import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import ToastContextProvider from "../context/ToastContext";

export default ({ Component, pageProps }) => {
  return (
    <ToastContextProvider>
      <Layout>
        <Head>
          <title>Next Event</title>
          <meta
            name="description"
            content="Find a lot of great events that allow you to evolve."
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ToastContextProvider>
  );
};
