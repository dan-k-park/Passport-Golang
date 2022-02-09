import "../styles/index.scss";
import type { AppProps } from "next/app";
import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return;
  <AppContext.Provider value={}>
    <Component {...pageProps} />
  </AppContext.Provider>;
}

export default MyApp;
