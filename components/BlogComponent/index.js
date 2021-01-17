import React from 'react'
import config from '../../config'
import Link from "next/link";

// import Image from 'next/image'
import {getDate,getDay} from '../../other/helper/DateFormatter'
function index({my_blogs}) {
    if(my_blogs.statusCode ==403){
        return "Some error has occur"
    } 
    if(my_blogs.length ==0){
        return "No any blog posts"
    }
    return (
        <div className="row blog">
            { 
                my_blogs.map((blog_data=>(
                <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <div className="date">
                            {getDay(blog_data.created_at)}
                            <span>
                                {getDate(blog_data.created_at)}
                            </span>
                        </div>
                                         <Link href={`/blog/${blog_data.slug}`} passHref={true}>
                    <a>{blog_data.title}</a>
                  </Link>
 <p>
                  <Link href={`/blog/${blog_data.slug}`}>
                    <a>{blog_data.description.substring(0, 200)}</a>
                  </Link>
                </p>
                        </div>	
                        <div className="col-md-6">
                        <div className="img-area">
                            {/* 383-581 */}
                            <a href="#">
                                <img src={`${config.URL}${blog_data.feature_image.url}`} className="img-fluid" alt width={383} height={581}/>
                                {/* <Image
                                    src={`${blog_data.feature_image.url}`}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500} */}
                                
                                </a>
                        </div>
                    </div>
                </div>
            </div>
                )))
            }

        </div>
  
  )
}

export default index
