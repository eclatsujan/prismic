import React from "react";
import Whatwedo from "../../components/WhatweDo";
import config from "../../config";
import BlogComponent from "../../components/BlogComponent";
import { useRouter } from "next/router";

function index({ blogs, what_we_do, page, noofBlogs }) {
  const router = useRouter();
  const lastpage = Math.ceil(noofBlogs / 2);
  return (
    <div>
      <div>
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
            <div className="row">
              <div className="col-md-12 title">
                <h1>
                  B<span>logs</span>
                </h1>
              </div>
            </div>
            <BlogComponent my_blogs={blogs} />
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className={`page-item ${page <= 1 && "disabled"}`}>
                  <button
                    className={`page-link`}
                    onClick={() => router.push(`/blogs?page=${page - 1}`)}
                    disabled={page <= 1}
                  >
                    Previous
                  </button>
                </li>

                {/* <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li> */}
                <li className={`page-item ${page >= lastpage && "disabled"}`}>
                  <button
                    className={`page-link `}
                    onClick={() => router.push(`/blogs?page=${page + 1}`)}
                    disabled={page >= lastpage}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <section className="whatwedo">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="title">What we do</span>
              </div>
              <Whatwedo whatwedo={what_we_do} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 2;
  const blogs = await fetch(`${config.URL}/blogs?_limit=2&_start=${start}`);
  const what_we_do = await fetch(`${config.URL}/what-we-dos`);
  const numberofBlogsresponse = await fetch(`${config.URL}/blogs/count`);
  const noofBlogs = await numberofBlogsresponse.json();
  const blogs_data = await blogs.json();
  const what_we_do_data = await what_we_do.json();
  return {
    props: {
      blogs: blogs_data,
      what_we_do: what_we_do_data,
      page: +page,
      noofBlogs,
    },
    // unstable_revalidate: 1 * 60,
  };
}
export default index;
