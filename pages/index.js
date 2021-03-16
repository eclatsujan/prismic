import Head from "next/head";
import React, { Fragment, useRef } from "react";
import WhatweDo from "../components/WhatweDo";
import Banner from "../components/UI/banner";

import WebDevelopment from "../components/UI/web-development";
import config from "../config";
import ServiceSection from "../components/ServiceSection";
import {Client} from '../prismic/client';

import {Link, RichText, Date} from 'prismic-reactjs';

function Home({data,services}) {
    const {banner_title,banner_description,title,description,client_title,client_descripiton,clients}=data;
	return (
        <Fragment>
          <Head>
            {/* <title>{RichText.render(title)}</title> */}
          </Head>
          <Banner title={banner_title} description={banner_description} />
          <div className="as">
        <section className="about service-animation">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-9">
                <h2>{RichText.asText(title)}</h2>
				{RichText.render(description)}
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="roll-text">Areas of Expertise</div>
          <div className="container">
            <ServiceSection services={services} />
          </div>
        </section>
      </div>

      <div className="f-top" id="workedWith">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <h2>{RichText.asText(client_title)}</h2>
			  {RichText.render(client_descripiton)}
            </div>
            <div className="col-md-8">
              <ul className="row">
				  {clients.length>0?clients.map(({image,title,url},id)=>{
					  return (
						<li className="col-md-3 col-4" key={id}>
							<a href="#">
								<img src={image.url} alt={image.alt} className="img-fluid" />
							</a>
						</li>
					  )
				  }):null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    )
}

export async function getStaticProps(props) {
  console.log(props);
    const client = Client();
    const doc = await client.getByID("YE_i_REAACMA0dBF",{
		"fetchLinks":["service.description,service.image"]
	});
	const {data}=doc;

	let serviceIds=data.services.map((single)=>{
		return single.service.id;
	});

	const {results}=await client.getByIDs(serviceIds);
	let services=results.map((result)=>{
		let res={...result.data};
		res.slugs=result.slugs
		return res;
	});

    return {
        props: {
            data,
			services,
        },
    }
}
  
export default Home;