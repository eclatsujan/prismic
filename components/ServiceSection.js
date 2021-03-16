import React, { useState, useEffect } from "react";
import Link from "next/link";
import ServiceComponent from "./ServiceComponent";

// import useFetch from '../../other/hooks/useFetch';
// import Service from './Service';

function ServiceSection({ services }) {
  // const fetcher = url => fetch(url).then(r => r.json())
  // const { data, error } = useSWR(`http://localhost:1337/services`, fetcher)
  if (services.length == 0) {
    return "No any data here";
  }

  // const {data,loading} =  useFetch(`${config.URL}/services`)
  return (
    <>
      {services && (
        <>
          {services.map((service, id) => (
            <React.Fragment key={id}>
              <ServiceComponent service={service} index={id + 1} />
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
}

export default ServiceSection;
