import React, { Fragment } from "react";
import WhatweDo from "../../components/WhatweDo";
import Head from "next/head";
import Icon from "../../components/UI/Icon";
import config from "../../config";
import ServiceSection from "../../components/ServiceSection";
const index = ({ services, what_we_do }) => {
  return (
    <Fragment>
      <Head>
        <title>Techie IT:Services</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-md-12 rd-pag">
            <span>Services</span>
            <span>
              <Icon />
            </span>
          </div>
        </div>
      </div>
      <div className="main-contain">
        <div className="container">
          <div className="row">
            <div className="col-md-6 title ">
              <h1>
                A <br /> <span>Full-Servic10de</span> <br /> Digital Agency
              </h1>
              <h2 className="service-animation">
                Techie IT offers everything from web design, corporate identity,
                digital marketing, mobile, and brand positioning.
              </h2>
              <p>
                Techie IT Pvt. Ltd. is a Nepali IT company that specializes in
                providing IT support and solution to individuals as well as
                small and medium businesses.
                <br />
                <br />
                Established in 2015 with aim to be “your enthusiastic
                supporter”, we value the development of long term relationships
                with our clients. We always aim to demonstrate integrity and
                reliability, and to ultimately become a trusted partner.
              </p>
            </div>
            <div className="col-md-6">
              <SvgComponent />
            </div>
          </div>
          <div className="services">
            <ServiceSection mydata={services} />
          </div>
        </div>
        {/* </div> */}
      </div>
      <WhatweDo whatwedo={what_we_do} />
    </Fragment>
  );
};

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 864 895"
      width={864}
      height={895}
      style={{
        width: "100%",
        height: "100%",
      }}
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h864v895H0z" />
        </clipPath>
        <clipPath id="prefix__h">
          <path
            fill="#fff"
            d="M269.25-150.5c0 7.042-5.708 12.75-12.75 12.75H-128c-7.042 0-12.75-5.708-12.75-12.75s5.708-12.75 12.75-12.75h384.5c7.042 0 12.75 5.708 12.75 12.75"
          />
        </clipPath>
        <clipPath id="prefix__g">
          <path d="M0 0h1131v1000H0z" />
        </clipPath>
        <clipPath id="prefix__f">
          <path d="M0 0h1131v1000H0z" />
        </clipPath>
        <clipPath id="prefix__e">
          <path d="M0 0h1131v1000H0z" />
        </clipPath>
        <clipPath id="prefix__d">
          <path
            fill="#fff"
            d="M118-229.694v538.638c0 8.729-7.094 15.806-15.844 15.806h-272.312c-8.75 0-15.844-7.077-15.844-15.806v-538.638c0-8.729 7.094-15.806 15.844-15.806h272.312c8.75 0 15.844 7.077 15.844 15.806"
          />
        </clipPath>
        <clipPath id="prefix__c">
          <path
            fill="#fff"
            d="M118-229.694v538.638c0 8.729-7.094 15.806-15.844 15.806h-272.312c-8.75 0-15.844-7.077-15.844-15.806v-538.638c0-8.729 7.094-15.806 15.844-15.806h272.312c8.75 0 15.844 7.077 15.844 15.806"
          />
        </clipPath>
        <clipPath id="prefix__b">
          <path
            fill="#fff"
            d="M118-229.694v538.638c0 8.729-7.094 15.806-15.844 15.806h-272.312c-8.75 0-15.844-7.077-15.844-15.806v-538.638c0-8.729 7.094-15.806 15.844-15.806h272.312c8.75 0 15.844 7.077 15.844 15.806"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <g display="block">
          <path
            fill="#F95645"
            d="M726.5 256.046c9.382 0 17 8.384 17 18.71v355.488c0 10.326-7.618 18.71-17 18.71h-611c-9.382 0-17-8.384-17-18.71V274.756c0-10.326 7.618-18.71 17-18.71h611z"
          />
          <path
            d="M726.5 256.046c9.382 0 17 8.384 17 18.71v355.488c0 10.326-7.618 18.71-17 18.71h-611c-9.382 0-17-8.384-17-18.71V274.756c0-10.326 7.618-18.71 17-18.71h611z"
            fill="none"
          />
        </g>
        <g
          clipPath="url(#prefix__e)"
          transform="translate(74.501 -78.375) scale(.87975)"
          display="block"
        >
          <path
            strokeLinecap="round"
            stroke="#FFF"
            strokeWidth={11.743500000000001}
            d="M426.259 646.546h155.666"
            fill="none"
            display="block"
          />
          <path
            strokeLinecap="round"
            stroke="#FFF"
            strokeWidth={8.6119}
            d="M424.259 677.546h240.448M424.259 702.546h222.894"
            fill="none"
            opacity={0.47}
            display="block"
          />
        </g>
        <g
          clipPath="url(#prefix__h)"
          transform="translate(461 443.5)"
          display="block"
        >
          <path
            fill="#FFF"
            d="M262.25-150.5c0 6.899-5.601 12.5-12.5 12.5h-364c-6.899 0-12.5-5.601-12.5-12.5s5.601-12.5 12.5-12.5h364c6.899 0 12.5 5.601 12.5 12.5z"
          />
          <path
            d="M262.25-150.5c0 6.899-5.601 12.5-12.5 12.5h-364c-6.899 0-12.5-5.601-12.5-12.5s5.601-12.5 12.5-12.5h364c6.899 0 12.5 5.601 12.5 12.5z"
            fill="none"
          />
        </g>
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
export default index;
