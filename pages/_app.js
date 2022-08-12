import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "@components/ui/navigationBar/Navbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </AnimatePresence>
  );
}

export default MyApp;
