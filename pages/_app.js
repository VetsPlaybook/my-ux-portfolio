import "@styles/globals.css";
import { AnimatePresence } from "framer-motion";

function Application({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default Application;
