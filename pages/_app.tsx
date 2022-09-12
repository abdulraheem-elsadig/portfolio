import type { AppProps } from "next/app";
import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import "../sass/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Social />
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
