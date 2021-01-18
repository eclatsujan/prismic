import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "bootstrap/scss/bootstrap.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/scss/style.scss";
import "../style/scss/animation.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <ApolloProvider client={client}> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* </ApolloProvider> */}
    </>
  );
}
export default MyApp;
