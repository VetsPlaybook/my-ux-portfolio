import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "@components/ui/navigationBar/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        <NavBar>
          <Component {...pageProps} />
        </NavBar>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
