import React, { useEffect, useState } from 'react'
import blogList from "../utilis/blogdata"
import Pageheader from '../components/Pageheader'
import { useParams } from 'react-router-dom'
import Tags from "../shop/Tags"
import PopularPosts from '../shop/PopularPosts'

const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];


const SingleBlog = () => {
    useEffect(() => {
   window.scrollTo({ top: 0, left: 0 })
}, [])
    const [blog,setBlog] = useState(blogList)
    const {id} = useParams()
    const result = blog.filter((b) => b.id == id)
    
  return (
    <div>
      <Pageheader title="Single Blog Page" curPage="Blog/ Blog Details"/>
      
      <div className=" animate__animated animate__fadeInDown animate__slow blog-section blog-single py-5 section-bg">
        <div className=" container">
            <div className=" row  justify-content-center">
                <div className=" col-lg-7 col-12">
                    <article>
                        <div className=" section-wrapper">
                            <div className=" row row-cols-1 justify-content-center g-4">
                                <div className="col">
                                    <div className=" post-item style-2">
                                        <div className=" post-inner">
                                            {
                                                result.map((item)=>(
                                                    <div className="" key={item.id}>
                                                        <div className=" post-thumb">
                                                            <img src={item.imgUrl} className=' w-100' alt="" />
                                                        </div>

                                                        <div className=" post-content">
                                                            <h3>{item.title}</h3>
                                                            <div className=" meta-post">
                                                                <ul className=" lab-ul">
                                                                    {
                                                                        item.metaList.map((val,i)=> (
                                                                        <li  key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                           <p> Serenity hasir taken poseson mying entre soung these sweet morngs sprng whch enoywith whole heart 
                                                           create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my
                                                            dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths 
                                                            spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui 
                                                            existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison 
                                                            of my entre soulng these sweet present moment and yet feel that never was greater artst 
                                                            </p>

                                                            <blockquote>
                                                                <p> Dynamically recaptiualize distributed technologies is wherease turnkey channels and
                                                                     onotonectally provide access to resource leveling expertise
                                                                     vias worldwide deliverables uolisticly extend aserser are diverse vortals .
                                                                </p>

                                                                <cite>
                                                                    <a href="#">...Melissa Hunter</a>
                                                                </cite>
                                                            </blockquote>

                                                            <p> whole heart create an alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo 
                                                                 happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi 
                                                                 which was the blis of soulis mineing assoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talenter should ncapable ofing is dramg singe wonderful serenty has taken
                                                                 possesison of my entre soulng these sweet present moment and yet feel that never was greater artst.
                                                            </p>
                                                            <img src="/images/blog/single/01.jpg" alt="" />
                                                            <p> Serenity hasir taken poseson mying entre soung these sweet morngs sprng whch enoywith whole 
                                                                heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend 
                                                                absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis 
                                                                mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is 
                                                                drawing singe wonderful serenty has taken possesison of my entre
                                                                soulng these sweet present moment and yet feel that never was greater artst
                                                            </p>
                                                            <div className=" video-thumb">
                                                                <img src="/images/blog/single/02.jpg" alt="" />
                                                                <a target='_blank' href="https://youtube.com/playlist?list=PLmQKoPepuLJ94zayCli6MF677AXBRw1da&si=CxKw5J3SzsMGv9dC" className=' video-button popup'>
                                                                    <i className=" icofont-ui-play"></i>
                                                                </a>
                                                            </div>
                                                            <p> whole heart create an alones and feel the charm of exstenceth spot whch
                                                              the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy
                                                              my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear 
                                                              frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is dramg 
                                                              singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel 
                                                              that never was greater artst
                                                            </p>

                                                            <div className=" tags-section">
                                                                <ul className=" lab-ul tags">
                                                                    <li>
                                                                        <a href="#">Agency</a>
                                                                    </li>
                                                                     <li>
                                                                        <a href="#">Business</a>
                                                                    </li>
                                                                     <li>
                                                                        <a href="#">Personal</a>
                                                                    </li>
                                                                </ul>
                                                                <ul className=" lab-ul social-icons">
                                                                    {
                                                                        socialList.map((val,i)=>(
                                                                            <li key={i}>
                                                                                <a href="#" className={val.className}>
                                                                                    <i className={val.iconName}></i>
                                                                                </a>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className=" navigations-part">
                                    <div className=" left">
                                        <a href="#" className=' prev'>
                                            <i className=" icofont-double-left"></i> Previous Blog
                                        </a>
                                        <a href="#" className="title">
                                            The Challenge Global Learning In Public Education.
                                        </a>
                                    </div>
                                     <div className=" right">
                                        <a href="#" className=' next'>
                                           Next Blog <i className=" icofont-double-right"></i> 
                                        </a>
                                        <a href="#" className="title">
                                            The Importance Of Intrinsic for Students.
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className=" col-lg-4 col-12">
                    <aside>
                        <Tags/>
                        <PopularPosts/>
                    </aside>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
