import React from 'react'
import { Link } from 'react-router-dom'

const title = "Most Popular Posts"

const postList = [ { id:1, imgUrl: '/images/blog/10.jpg', imgAlt: 'rajibraj91', title: 'BOLD is dedicated to spreading the word about how children develop & learn. ', date: 'Dec 6,2023', }, { id:2, imgUrl: '/images/blog/11.jpg', imgAlt: 'rajibraj91', title: 'Schools are now welcoming students back after closing temporarily for about four months.', date: 'Nov 19,2023', }, { id:3, imgUrl: '/images/blog/12.jpg', imgAlt: 'rajibraj91', title: 'World Teachers Day is held annually on 5 October to celebrate all teachers around the globe.', date: 'Oct 5,2023', }, { id:4, imgUrl: '/images/blog/09.jpg', imgAlt: 'rajibraj91', title: 'YouTube TV introduced a host of new features.', date: 'Jun 20,2023', }, ]

const PopularPosts = () => {
  return (
    <div className=' widget widget-post'>
        <div className=" widget-header">
            <h5 className=" title">{title}</h5>
        </div>
        <ul className=" widget-wrapper">
            {
                postList.map((blog,i)=>(
                    <li className=" d-flex flex-wrap justify-content-between" key={i}>
                        <div className=" post-thumb">
                            <Link to={`/blog/${blog.id}`}>
                                <img src={blog.imgUrl} alt="" className="" />
                            </Link>
                        </div>
                        <div className=" post-content">
                            <Link to={`/blog/${blog.id}`}>
                               <h5 className=" fw-semibold fs-6">{blog.title}</h5>
                            </Link>
                            <p>{blog.date}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default PopularPosts
