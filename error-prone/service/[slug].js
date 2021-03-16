import React from "react";
import { useRouter } from "next/router";
import config from "../../config";
import { getDate, getDay } from "../../other/helper/DateFormatter";

function BlogDetail({ service, error }) {
  const getFirstSpaceText = (str) => {
    return str.split(" ")[0];
  };
  console.log(getFirstSpaceText("askjdkghasd iagsdh "));

  return (
    <>
      <div>
        <header
          className="row d-flex align-items-center "
          style={{ zIndex: 2 }}
        >
          <div className="col-md-1">
            <a href="#">
              <img src="/img/favicon.svg" className="img-fluid" alt />
            </a>
          </div>
          <div className="col-md-11">
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-bars" />
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12 rd-pag">
              <span>Service</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47.625"
                  height="16.5"
                  viewBox="-18.837 -6.179 47.625 16.5"
                >
                  <path
                    className="stroke arrow-line"
                    fill="none"
                    stroke="#000"
                    strokeWidth=".2"
                    strokeMiterlimit={10}
                    d="M-17.087-5.491h40.858v8.756"
                    style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                  />
                  <path
                    className="arrow arrow-triangle"
                    d="M27.913 2.052l-4.142 7.182-4.148-7.182h8.29z"
                    style={{ opacity: 1 }}
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="main-contain">
          <div className="container">
            <div className="row">
              <div className="col-md-6 title">
                <h1>
                  <br /> <span> {getFirstSpaceText(service.title)}</span> <br />{" "}
                  {service.title.replace(getFirstSpaceText(service.title), " ")}
                </h1>
                <h2>{service.home_excerpt}</h2>
              </div>
              <div className="col-md-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 864 895"
                  width={864}
                  height={895}
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_16">
                      <rect width={864} height={895} x={0} y={0} />
                    </clipPath>
                    <clipPath id="__lottie_element_18">
                      <path
                        fill="#ffffff"
                        clipRule="nonzero"
                        d=" M269.25,-150.5 C269.25,-143.45799255371094 263.5419921875,-137.75 256.5,-137.75 C256.5,-137.75 -128,-137.75 -128,-137.75 C-135.04200744628906,-137.75 -140.75,-143.45799255371094 -140.75,-150.5 C-140.75,-157.54200744628906 -135.04200744628906,-163.25 -128,-163.25 C-128,-163.25 256.5,-163.25 256.5,-163.25 C263.5419921875,-163.25 269.25,-157.54200744628906 269.25,-150.5"
                        fillOpacity={1}
                      />
                    </clipPath>
                    <clipPath id="__lottie_element_22">
                      <path d="M0,0 L1131,0 L1131,1000 L0,1000z" />
                    </clipPath>
                    <clipPath id="__lottie_element_35">
                      <path d="M0,0 L1131,0 L1131,1000 L0,1000z" />
                    </clipPath>
                    <clipPath id="__lottie_element_48">
                      <path d="M0,0 L1131,0 L1131,1000 L0,1000z" />
                    </clipPath>
                    <clipPath id="__lottie_element_61">
                      <path
                        fill="#ffffff"
                        clipRule="nonzero"
                        d=" M118,-229.69400024414062 C118,-229.69400024414062 118,308.9440002441406 118,308.9440002441406 C118,317.6730041503906 110.90599822998047,324.75 102.15599822998047,324.75 C102.15599822998047,324.75 -170.156005859375,324.75 -170.156005859375,324.75 C-178.906005859375,324.75 -186,317.6730041503906 -186,308.9440002441406 C-186,308.9440002441406 -186,-229.69400024414062 -186,-229.69400024414062 C-186,-238.42300415039062 -178.906005859375,-245.5 -170.156005859375,-245.5 C-170.156005859375,-245.5 102.15599822998047,-245.5 102.15599822998047,-245.5 C110.90599822998047,-245.5 118,-238.42300415039062 118,-229.69400024414062"
                        fillOpacity={1}
                      />
                    </clipPath>
                    <clipPath id="__lottie_element_64">
                      <path
                        fill="#ffffff"
                        clipRule="nonzero"
                        d=" M118,-229.69400024414062 C118,-229.69400024414062 118,308.9440002441406 118,308.9440002441406 C118,317.6730041503906 110.90599822998047,324.75 102.15599822998047,324.75 C102.15599822998047,324.75 -170.156005859375,324.75 -170.156005859375,324.75 C-178.906005859375,324.75 -186,317.6730041503906 -186,308.9440002441406 C-186,308.9440002441406 -186,-229.69400024414062 -186,-229.69400024414062 C-186,-238.42300415039062 -178.906005859375,-245.5 -170.156005859375,-245.5 C-170.156005859375,-245.5 102.15599822998047,-245.5 102.15599822998047,-245.5 C110.90599822998047,-245.5 118,-238.42300415039062 118,-229.69400024414062"
                        fillOpacity={1}
                      />
                    </clipPath>
                    <clipPath id="__lottie_element_67">
                      <path
                        fill="#ffffff"
                        clipRule="nonzero"
                        d=" M118,-229.69400024414062 C118,-229.69400024414062 118,308.9440002441406 118,308.9440002441406 C118,317.6730041503906 110.90599822998047,324.75 102.15599822998047,324.75 C102.15599822998047,324.75 -170.156005859375,324.75 -170.156005859375,324.75 C-178.906005859375,324.75 -186,317.6730041503906 -186,308.9440002441406 C-186,308.9440002441406 -186,-229.69400024414062 -186,-229.69400024414062 C-186,-238.42300415039062 -178.906005859375,-245.5 -170.156005859375,-245.5 C-170.156005859375,-245.5 102.15599822998047,-245.5 102.15599822998047,-245.5 C110.90599822998047,-245.5 118,-238.42300415039062 118,-229.69400024414062"
                        fillOpacity={1}
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_16)">
                    <g
                      transform="matrix(1,0,0,1,440,429)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1.1005799770355225,-19,23.5)"
                      >
                        <path
                          fill="rgb(249,86,69)"
                          fillOpacity={1}
                          d=" M305.5,-178.5 C314.8822937011719,-178.5 322.5,-170.88229370117188 322.5,-161.5 C322.5,-161.5 322.5,161.5 322.5,161.5 C322.5,170.88229370117188 314.8822937011719,178.5 305.5,178.5 C305.5,178.5 -305.5,178.5 -305.5,178.5 C-314.8822937011719,178.5 -322.5,170.88229370117188 -322.5,161.5 C-322.5,161.5 -322.5,-161.5 -322.5,-161.5 C-322.5,-170.88229370117188 -314.8822937011719,-178.5 -305.5,-178.5 C-305.5,-178.5 305.5,-178.5 305.5,-178.5z"
                        />
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={4}
                          stroke="rgb(136,136,136)"
                          strokeOpacity={1}
                          strokeWidth={0}
                          d=" M305.5,-178.5 C314.8822937011719,-178.5 322.5,-170.88229370117188 322.5,-161.5 C322.5,-161.5 322.5,161.5 322.5,161.5 C322.5,170.88229370117188 314.8822937011719,178.5 305.5,178.5 C305.5,178.5 -305.5,178.5 -305.5,178.5 C-314.8822937011719,178.5 -322.5,170.88229370117188 -322.5,161.5 C-322.5,161.5 -322.5,-161.5 -322.5,-161.5 C-322.5,-170.88229370117188 -314.8822937011719,-178.5 -305.5,-178.5 C-305.5,-178.5 305.5,-178.5 305.5,-178.5z"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,606.6657104492188,510.0030517578125)"
                      opacity={1}
                      style={{ display: "none" }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="rgb(220,220,220)"
                          fillOpacity={1}
                          d=" M80.12384033203125,-213.5122528076172 C80.12384033203125,-213.5122528076172 90.07546997070312,-213.5 90.07546997070312,-213.5 C90.07546997070312,-213.5 86.98817443847656,-213.50738525390625 86.98817443847656,-213.50738525390625"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity={0}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={24}
                          d=" M80.12384033203125,-213.5122528076172 C80.12384033203125,-213.5122528076172 90.07546997070312,-213.5 90.07546997070312,-213.5 C90.07546997070312,-213.5 86.98817443847656,-213.50738525390625 86.98817443847656,-213.50738525390625"
                        />
                      </g>
                    </g>
                    <g
                      clipPath="url(#__lottie_element_67)"
                      style={{ display: "none" }}
                      transform="matrix(1,0,0,1,455,412.5)"
                      opacity={1}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,1,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity={1}
                          d=" M90.5,-214 C90.5,-214 90.5,-214 90.5,-214"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={4}
                          stroke="rgb(250,85,83)"
                          strokeOpacity={1}
                          strokeWidth={1340}
                          d=" M90.5,-214 C90.5,-214 90.5,-214 90.5,-214"
                        />
                      </g>
                    </g>
                    <g
                      clipPath="url(#__lottie_element_64)"
                      style={{ display: "none" }}
                      transform="matrix(1,0,0,1,455,412.5)"
                      opacity={1}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,1,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity={1}
                          d=" M90.5,-214 C90.5,-214 90.5,-214 90.5,-214"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={4}
                          stroke="rgb(252,85,84)"
                          strokeOpacity={1}
                          strokeWidth={1340}
                          d=" M90.5,-214 C90.5,-214 90.5,-214 90.5,-214"
                        />
                      </g>
                    </g>
                    <g
                      clipPath="url(#__lottie_element_61)"
                      style={{ display: "none" }}
                      transform="matrix(1,0,0,1,455,412.5)"
                      opacity={1}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,1,0)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity={1}
                          d=" M90.5,-214 C90.5,-214 90.5,-214 90.5,-214"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={4}
                          stroke="rgb(252,86,85)"
                          strokeOpacity={1}
                          strokeWidth="1337.5165135587501"
                          d=" M90.5,-214 C90.5,-214 90.5,-214 90.5,-214"
                        />
                      </g>
                    </g>
                    <g
                      clipPath="url(#__lottie_element_48)"
                      style={{ display: "block" }}
                      transform="matrix(0.8797500133514404,0,0,0.8797500133514404,74.50137329101562,-78.375)"
                      opacity={1}
                    >
                      <g
                        style={{ display: "block" }}
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,607.5,580)"
                        opacity={1}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={15}
                            d=" M231.5,-85 C231.5,-85 129.23199462890625,-85 32.66699981689453,-85"
                          />
                        </g>
                      </g>
                      <g
                        style={{ display: "block" }}
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,605.5,611)"
                        opacity="0.47000000000000003"
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={11}
                            d=" M231.5,-85 C231.5,-85 28.39699935913086,-85 -75.625,-85"
                          />
                        </g>
                      </g>
                      <g
                        style={{ display: "block" }}
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,605.5,636)"
                        opacity="0.47000000000000003"
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={11}
                            d=" M231.5,-85 C231.5,-85 54.99399948120117,-85 -53.20399856567383,-85"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      clipPath="url(#__lottie_element_35)"
                      transform="matrix(0.8408499956130981,0,0,0.8408499956130981,74.49932861328125,-104.92498779296875)"
                      opacity={0}
                      style={{ display: "none" }}
                    >
                      <g
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,607.5,580)"
                        opacity={1}
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M231.5,-85 C231.5,-85 231.5,-85 231.5,-85"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,605.5,611)"
                        opacity="0.47000000000000003"
                        style={{ display: "none" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M231.5,-85 C231.5,-85 231.5,-85 231.5,-85"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,605.5,636)"
                        opacity="0.47000000000000003"
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M231.5,-85 C231.5,-85 231.5,-85 231.5,-85"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      clipPath="url(#__lottie_element_22)"
                      style={{ display: "none" }}
                      transform="matrix(1,0,0,1,-129.5,-28.5)"
                      opacity={1}
                    >
                      <g
                        style={{ display: "none" }}
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,607.5,580)"
                        opacity={1}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M231.5,-85 C231.5,-85 231.5,-85 231.5,-85"
                          />
                        </g>
                      </g>
                      <g
                        style={{ display: "none" }}
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,605.5,611)"
                        opacity="0.47000000000000003"
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M231.5,-85 C231.5,-85 231.5,-85 231.5,-85"
                          />
                        </g>
                      </g>
                      <g
                        style={{ display: "block" }}
                        transform="matrix(-0.7828999757766724,0,0,-0.7828999757766724,605.5,636)"
                        opacity="0.47000000000000003"
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={4}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={0}
                            d=" M231.5,-85 C231.5,-85 231.5,-85 231.5,-85"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      clipPath="url(#__lottie_element_18)"
                      style={{ display: "block" }}
                      transform="matrix(1,0,0,1,461,443.5)"
                      opacity={1}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,67.75,-150.5)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity={1}
                          d=" M194.5,0 C194.5,0 194.5,0 194.5,0 C194.5,6.898749828338623 188.89874267578125,12.5 182,12.5 C182,12.5 -182,12.5 -182,12.5 C-188.89874267578125,12.5 -194.5,6.898749828338623 -194.5,0 C-194.5,0 -194.5,0 -194.5,0 C-194.5,-6.898749828338623 -188.89874267578125,-12.5 -182,-12.5 C-182,-12.5 182,-12.5 182,-12.5 C188.89874267578125,-12.5 194.5,-6.898749828338623 194.5,0z"
                        />
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={4}
                          stroke="rgb(128,241,173)"
                          strokeOpacity="0.5700000000000001"
                          strokeWidth={0}
                          d=" M194.5,0 C194.5,0 194.5,0 194.5,0 C194.5,6.898749828338623 188.89874267578125,12.5 182,12.5 C182,12.5 -182,12.5 -182,12.5 C-188.89874267578125,12.5 -194.5,6.898749828338623 -194.5,0 C-194.5,0 -194.5,0 -194.5,0 C-194.5,-6.898749828338623 -188.89874267578125,-12.5 -182,-12.5 C-182,-12.5 182,-12.5 182,-12.5 C188.89874267578125,-12.5 194.5,-6.898749828338623 194.5,0z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="services">
              <div className="row d-flex align-items-center">
                <div className="col-md-12">
                  <img
                    src={`${config.URL}${service.Feature_Image.url}`}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-12">
                  <p>
                    We recognize the fact that usability, functionality, and
                    visualization are three of the most important factors when
                    designing interfaces or websites. Using this strategy, we
                    work with you to ensure that your messaging and marketing
                    goals are realized with the designs we create.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="whatwedo">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="title">What we do</span>
              </div>
              <Whatwedo whatwedo={what_we_do} />
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  let res = await fetch(`${config.URL}/services`);
  let posts = await res.json();
  let paths = posts.map((post) => ({
    params: { slug: post.slug.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let res = await fetch(`${config.URL}/service/${params.slug}`);

  let service = await res.json();

  return { props: { service } };
}
export default BlogDetail;
