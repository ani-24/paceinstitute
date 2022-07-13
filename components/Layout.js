import Head from "next/head";
import Circles from "./Circles";
import Jumptotop from "./Jumptotop";
import Wame from "./Wame";

const Layout = ({ children }) => {
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
        {children} <Circles />
      </main>
      <Jumptotop />
      <Wame />
    </>
  );
};

export default Layout;
