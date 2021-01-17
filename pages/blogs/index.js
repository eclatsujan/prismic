import React, { Fragment } from "react";
import WhatweDo from "../../components/WhatweDo";
import Icon from "../../components/UI/Icon";
import { ALL_POSTS } from "../../queries/posts";
import { Query } from "@apollo/react-components";
import Head from "next/head";
import moment from "moment";
import Link from "next/link";
import Spinner from '../../components/UI/Spinner';
import config from "../../config";
import BlogComponent from '../../components/BlogComponent'


function index({blogs,what_we_do}) {
    return (
        <div>
            <header className="row d-flex align-items-center " style={{zIndex: 2}}>
                <div className="col-md-1">
                    <a href="#"><img src="img/favicon.svg" className="img-fluid" alt /></a>
                </div>
                <div className="col-md-11">
                    <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#"><i className="fas fa-bars" /></a></li>
                    </ul>
                </div>
            </header>            
            <div>
            <div className="container">
                <div className="row">
                <div className="col-md-12 rd-pag">
                    <span>Blogs</span>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="47.625" height="16.5" viewBox="-18.837 -6.179 47.625 16.5">
                        <path className="stroke arrow-line" fill="none" stroke="#000" strokeWidth=".2" strokeMiterlimit={10} d="M-17.087-5.491h40.858v8.756" style={{strokeDashoffset: 0, strokeDasharray: 'none'}} />
                        <path className="arrow arrow-triangle" d="M27.913 2.052l-4.142 7.182-4.148-7.182h8.29z" style={{opacity: 1}} />
                    </svg>
                    </span>
                </div>
                </div>
            </div>       
                <div className="main-contain">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 title">
                        <h1>B<span>logs</span></h1>
                        </div>
                    </div>
                    <BlogComponent my_blogs={blogs}/>
                    </div>
                </div>
                
            <section className="whatwedo">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <span className="title">What we do</span>
                    </div>
                    <WhatweDo whatwedo={what_we_do}/>
                </div>
                </div>
            </section>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const blogs = await fetch(`${config.URL}/blogs`)
    const what_we_do = await fetch(`${config.URL}/what-we-dos`)
    const blogs_data = await blogs.json()
    const what_we_do_data = await what_we_do.json()
  
    return { 
      props: 
          { 
            blogs:blogs_data,
            what_we_do:what_we_do_data,
          },
        // revalidate:1*60, 
    };
  }
export default index
