import React, { Fragment } from "react";
import WhatweDo from "../../components/WhatweDo";
import Icon from "../../components/UI/Icon";
import Head from "next/head";
import config from "../../config";
import { useRouter } from "next/router";

const index = ({ works, what_we_do, page, noofBlogs }) => {
  const router = useRouter();
  const lastpage = Math.ceil(noofBlogs / 2);
  return (
    <Fragment>
      <Head>
        <title>Techie IT:Blog</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-md-12 rd-pag">
            <span>Works</span>
            <span>
              <Icon />
            </span>
          </div>
        </div>
      </div>
      <div className="main-contain">
        <div className="container">
          <div className="row">
            <div className="col-md-12 title">
              <h1>
                Work we've <br />
                <span>spent many nights </span>
              </h1>
            </div>
          </div>
        </div>
        {works && (
          <div className="container mtb">
            <div className="row">
              <div className="col-md-12">
                {works.statusCode == 403 ? (
                  <h1>Cannot Load data due to some error</h1>
                ) : (
                  works.map((work) => (
                    <div className="w-showcase">
                      <div className="w-background" />
                      <div className="w-text">
                        <h3>
                          <a href={`${work.website_url}`}>{work.title}</a>
                        </h3>
                        <p>{work.description}</p>
                      </div>
                      <img
                        src={`${config.URL}${work.feature_image.url}`}
                        className="img-fluid"
                        alt
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <WhatweDo whatwedo={what_we_do} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const works = await fetch(`${config.URL}/works`);
  const what_we_do = await fetch(`${config.URL}/what-we-dos`);
  const works_data = await works.json();
  const what_we_do_data = await what_we_do.json();

  return {
    props: {
      works: works_data,
      what_we_do: what_we_do_data,
    },
    // revalidate:1*60,
  };
}
export default index;
