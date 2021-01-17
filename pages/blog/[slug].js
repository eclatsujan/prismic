import React from "react";
import { useRouter } from "next/router";
import config from "../../config";
import { getDate, getDay } from "../../other/helper/DateFormatter";
import WhatweDo from "../../components/WhatweDo";

function BlogDetail({ post,error,what_we_do }) {
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
                <a href="#">Blog</a>
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
              <span>Blogs</span>
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
            {error ? (
              <h1>No post</h1>
            ) : (
              <>
                <div className="row blog-detail">
                  <div className="col-md-3">
                    <div className="date">
                      {getDay(post.created_at)}
                      <span>{getDate(post.created_at)}</span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <h1>{post.title}</h1>
                    {post.description}
                    <img
                      src={`${config.URL}${post.feature_image.url}`}
                      className="img-fluid"
                      alt
                      width={510}
                      height={340}
                      alt
                    />
                  </div>
                </div>
                <div className="col-md-12 blog">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="date">
                        19
                        <span>June, 2020</span>
                      </div>
                      <h4>
                        <a href="#">
                          Why Keywords Are No Longer the Center Stage of SEO
                        </a>
                      </h4>
                      <p>
                        <a href="#">
                          What you need to know, in a nutshell, is this: If you
                          want to rank high on Google search results, your
                          marketing efforts need to focus on your users and
                          their customer journey. SEO boils down to producing
                          quality content and aligning your information with the
                          way users search online.
                        </a>
                      </p>
                    </div>
                    <div className="col-md-3">
                      <div className="date">
                        19
                        <span>June, 2020</span>
                      </div>
                      <h4>
                        <a href="#">
                          Why Keywords Are No Longer the Center Stage of SEO
                        </a>
                      </h4>
                      <p>
                        <a href="#">
                          What you need to know, in a nutshell, is this: If you
                          want to rank high on Google search results, your
                          marketing efforts need to focus on your users and
                          their customer journey. SEO boils down to producing
                          quality content and aligning your information with the
                          way users search online.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <WhatweDo whatwedo={what_we_do}/>
      </div>
    </>
  );
}

// export async function getServerSideProps({ params }) {
//   // const router = useRouter();
//   // if (router.isFallback) {
//   //   return <div>Loading...</div>;
//   // }
//   try {
//     const res = await fetch(`${config.URL}/blog/${params.slug}`);
//     const post = await res.json();
//     return {
//       props: {
//         post: post,
//         error: false,
//       }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     return {
//       props: {
//         post: {},
//         error: true,
//       }, // will be passed to the page component as props
//     };
//   }
// }
// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         slug: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }
export async function getStaticPaths() {
  let res = await fetch(`${config.URL}/blogs`);
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
    const what_we_do = await fetch(`${config.URL}/what-we-dos`)
    const what_we_do_data = await what_we_do.json()

  let res = await fetch(`${config.URL}/blog/${params.slug}`);
  let post = await res.json();

  return { props: { post,
            what_we_do:what_we_do_data,

} };
}
export default BlogDetail;