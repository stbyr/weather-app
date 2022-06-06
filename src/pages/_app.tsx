import React from "react";
import "../styles/GlobalStyles.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setLoading(false);
  });

  return (
    <>
      <NextSeo
        title="Das Wetter"
        description="Eine Wetter App für deine Stadt"
        openGraph={{
          title: "Das Wetter",
          description: "Eine Wetter App für deine Stadt",
          images: [
            {
              url: "http://openweathermap.org/img/wn/02d@2x.png",
              width: 800,
              height: 600,
              alt: "Das Wetter Icon",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
