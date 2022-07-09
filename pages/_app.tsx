import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import {useEffect} from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Be Connect</title>
        </Head>

        <Component {...pageProps} />
      </>
  )
}

export default MyApp;
