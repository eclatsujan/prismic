import React from "react";
import Link from "next/link";
import config from "../../frontend-techie-it/config";

function ServiceComponent({ ser_data, index }) {
  return (
    <>
      {index % 2 == 0 ? (
        <div
          className="row d-flex align-items-center"
          style={{ position: "relative" }}
        >
          {/* design-wire.svg */}
          <div className="col-md-6">
            <img
              src={`${config.URL}${ser_data.feature_image_sketch.url}`}
              className="img-fluid"
              id="design-wire-sk"
            />
          </div>
          <div className="col-md-6" style={{ position: "absolute" }}>
            {/* <object type="image/svg+xml" data="./img/services/design-wire.svg" ></object> */}
            <img
              src={`${config.URL}${ser_data.Feature_Image.url}`}
              id="design-wire"
            />
          </div>
          <div className="col-md-6 parallex">
            <Link href={`/service/${ser_data.slug}`} passHref={true}>
              <a>
                <h2>{ser_data.title}</h2>
              </a>
            </Link>
            <p id="dec">{ser_data.home_excerpt}</p>
          </div>
        </div>
      ) : (
        <div
          className="row d-flex align-items-center"
          style={{ position: "relative" }}
        >
          <div className="col-md-6 text-right parallex">
            <Link href={`/service/${ser_data.slug}`} passHref={true}>
              <a>
                <h2>{ser_data.title}</h2>
              </a>
            </Link>
            <p id="dec">{ser_data.home_excerpt}</p>
          </div>
          <div className="col-md-6" style={{ position: "relative" }}>
            <img
              src={`${config.URL}${ser_data.Feature_Image.url}`}
              id="webdevelopment-wire"
              style={{ position: "absolute" }}
              className="img-fluid"
            />
            <img
              src={`${config.URL}${ser_data.feature_image_sketch.url}`}
              id="webdevelopment-wire-sk"
              className="img-fluid"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ServiceComponent;
