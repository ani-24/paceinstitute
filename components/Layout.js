import Head from "next/head";
import Circles from "./Circles";
import Jumptotop from "./Jumptotop";
import Wame from "./Wame";
import Header from "./Header";
import Footer from "./Footer";

import Router from "next/router";
import nProgress from "nprogress";

const Layout = ({ children }) => {
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
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
      <Jumptotop />
      <Wame />
    </>
  );
};

export default Layout;
