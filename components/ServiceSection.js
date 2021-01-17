import React, { useState, useEffect } from "react";
import Link from "next/link";
import ServiceComponent from "./ServiceComponent";

// import useFetch from '../../other/hooks/useFetch';
// import Service from './Service';

function ServiceSection({ mydata }) {
  // const fetcher = url => fetch(url).then(r => r.json())
  // const { data, error } = useSWR(`http://localhost:1337/services`, fetcher)
  console.log("mydata");
  if (mydata.statusCode && mydata.statusCode == 403) {
    return "Cannot Load data due to some error";
  }
  if (mydata.length == 0) {
    return "No any data here";
  }

  // const {data,loading} =  useFetch(`${config.URL}/services`)
  return (
    <>
      {mydata && (
        <>
          {mydata.map((single, id) => (
            <React.Fragment key={id}>
              <ServiceComponent ser_data={single} index={id + 1} />
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
}

export default ServiceSection;
