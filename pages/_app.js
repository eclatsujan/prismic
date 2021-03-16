import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Client} from '../prismic/client';

import "bootstrap/scss/bootstrap.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/scss/style.scss";
import "../style/scss/animation.scss";

function MyApp({ Component, pageProps,settings }) {
  return (
    <>
      {/* <ApolloProvider client={client}> */}
      <Header />
      <Component {...pageProps} />
      <Footer settings={settings} />
      {/* </ApolloProvider> */}
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
    const client = Client();
    const {data} = await client.getByID("YE_lSREAACYA0dsC");
    return {settings:data}
}

export default MyApp;
