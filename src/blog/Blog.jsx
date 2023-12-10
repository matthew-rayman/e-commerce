import React, { useEffect } from 'react'
import Pageheader from '../components/Pageheader'
import blogList from "../utilis/blogdata"
import { Link } from 'react-router-dom'

const Blog = () => {
  useEffect(() => {
   window.scrollTo({ top: 0, left: 0 })
}, [])
  return (
    <div>
      <Pageheader title="Our Blog Page" curPage="Blog"/>
      <div className=" animate__animated animate__fadeInUp blog-section py-5 section-bg">
        <div className=" container">
          <div className=" section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 justify-content-center">
              {
                blogList.map((blog,i) =>(
                  <div className="col" key={i}>
                    <div className=" post-item">
                      <div className=" post-inner">
                        <div className=" post-thumb">
                          <Link to={`/blog/${blog.id}`}>
                            <img src={blog.imgUrl} alt="" />
                          </Link>
                        </div>
                        <div className=" post-content">
                          <Link to={`/blog/${blog.id}`}><h4> {blog.title}</h4></Link>
                          <div className=" meta-post">
                            <ul className=" lab-ul">
                              {
                                blog.metaList.map((val,i)=> (
                                  <li  key={i}><i className={val.iconName}></i>{val.text}</li>
                                ))
                              }
                            </ul>
                          </div>
                          <p>{blog.desc}</p>
                        </div>

                        <div className=" post-footer">
                          <div className=" pf-left">
                                <Link to={`/blog/${blog.id}`} className=' lab-btn-text'>{blog.btnText}
                                <i className=" icofont-external-link"></i></Link>
                          </div>

                          <div className="pf-right">
                            <i className=" icofont-comment"></i>
                            <span className=' comment-count'>{blog.commentCount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
