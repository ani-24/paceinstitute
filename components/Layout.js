import Head from "next/head";
import Circles from "./Circles";
import Jumptotop from "./Jumptotop";
import Wame from "./Wame";
import Header from "./Header";
import Footer from "./Footer";

import Router from "next/router";
import nProgress from "nprogress";

import "nprogress/nprogress.css";
import { useState } from "react";
import Loading from "./Loading";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
    setLoading(false);
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <main className="relative">
        <Header />
        {children}
        <Footer />
        <Circles />
      </main>
      <Loading visibility={loading} />
      <Jumptotop />
      <Wame />
    </>
  );
};

export default Layout;
