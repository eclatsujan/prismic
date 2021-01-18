import Head from "next/head";
import React, { Fragment, useRef } from "react";
import WhatweDo from "../components/WhatweDo";
import Banner from "../components/UI/banner";

import Link from "next/link";
import WebDevelopment from "../components/UI/web-development";
import config from "../config";
import ServiceSection from "../components/ServiceSection";

function Home({ services, what_we_do }) {
  // const webSvgRef = useRef(null)
  const clicked = () => {
    alert("ghgg");
  };
  return (
    <Fragment>
      <Head>
        <title>Techie IT</title>
      </Head>
      <Banner />

      <div className="as">
        <div className="t-circle">
          <Tcircle />
        </div>
        <section className="about service-animation">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-9">
                <h2>
                  Techie IT is a Nepali IT company that specializes in providing
                  IT support and solution to individuals as well as small and
                  medium businesses.
                  <br />
                  <span>
                    We seek out challenging and fulfilling projects that combine
                    design and technology in unique ways.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="roll-text">Areas of Expertise</div>
          <div className="container">
            <ServiceSection mydata={services} />
            <div className="row rdmore">
              <div className="col-md-12 text-center">
                <Link href="/services" passHref>
                  <a className="rdbtn">
                    more services{" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <WhatweDo whatwedo={what_we_do} />
      </div>

      <div className="f-top" id="workedWith">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <h2>We’ve worked with big and small alike.</h2>
              <p>
                We’ve been grateful to partner with a wide variety of
                businesses. These are some of the clients who have trusted us to
                realize their projects.
              </p>
            </div>
            <div className="col-md-8">
              <ul className="row">
                <li className="col-md-3 col-4">
                  <a href="#">
                    <img
                      src="img/client/kathmandupati.png"
                      alt="KathmanduPati"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="col-md-3 col-4">
                  <a href="#">
                    <img
                      src="img/client/health-aawaj.png"
                      alt="KathmanduPati"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="col-md-3 col-4">
                  <a href="#">
                    <img
                      src="img/client/jatatatai.png"
                      alt="KathmanduPati"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="col-md-3 col-4">
                  <a href="#">
                    <img
                      src="img/client/utsav-deals.png"
                      alt="KathmanduPati"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="col-md-3 col-4">
                  <a href="#">
                    <img
                      src="img/client/enroz.png"
                      alt="KathmanduPati"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="col-md-3 col-4">
                  <a href="#">
                    <img
                      src="img/client/rara-films.png"
                      alt="KathmanduPati"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="col-md-3 col-4">
                  <a href="#">
                    <img
                      src="img/client/west-himalaya.png"
                      alt="KathmanduPati"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li className="col-md-3 col-4">
                  <a href="#">
                    <img
                      src="img/client/education-samachar.png"
                      alt="KathmanduPati"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
function Tcircle() {
  return (
    <svg
      className="t-circle-svg"
      viewBox="0 0 1820 1230"
      style={{
        opacity: 1,
      }}
    >
      <circle
        className="t-circle-one"
        cx={450}
        cy={435.8}
        r={509.5}
        data-svg-origin="535.7999877929688 535.7999877929688"
        transform="matrix(-0.17364,-0.9848,0.9848,-0.17364,101.18069722481926,1156.5006613095434)"
        style={{
          strokeDashoffset: 0.00001,
          strokeDasharray: "none",
          transformOrigin: "0px 0px 0px",
        }}
      />
      <circle
        className="t-circle-one"
        cx={1440.8}
        cy={694.8}
        r={529}
        data-svg-origin="1284.800048828125 694.7999877929688"
        transform="matrix(-0.17364,-0.9848,0.9848,-0.17364,823.6588212022089,2080.731788672624)"
        style={{
          strokeDashoffset: 0.00001,
          strokeDasharray: "none",
          transformOrigin: "0px 0px 0px",
        }}
      />
      <g className="t-circle-plus">
        <circle
          cx={811.8}
          cy={203.8}
          r={32}
          data-svg-origin="985.7999877929688 257.79998779296875"
          transform="matrix(0.93969,-0.34202,0.34202,0.93969,-28.721775081229453,352.7106947406122)"
          style={{
            strokeDashoffset: 0.00001,
            strokeDasharray: "none",
            transformOrigin: "0px 0px 0px",
          }}
        />
        <line
          x1={803.8}
          y1={253.1}
          x2={803.8}
          y2={280.1}
          style={{
            strokeDashoffset: 0.00001,
            strokeDasharray: "none",
          }}
        />
        <line
          x1={790.3}
          y1={266.6}
          x2={817.3}
          y2={266.6}
          style={{
            strokeDashoffset: 0.00001,
            strokeDasharray: "none",
          }}
        />
      </g>
    </svg>
  );
}

export async function getStaticProps() {
  const services = await fetch(`${config.URL}/services`);
  const what_we_do = await fetch(`${config.URL}/what-we-dos`);
  const services_data = await services.json();
  const what_we_do_data = await what_we_do.json();

  return {
    props: {
      services: services_data,
      what_we_do: what_we_do_data,
    },
    // revalidate:1*60,
  };
}

export default Home;
