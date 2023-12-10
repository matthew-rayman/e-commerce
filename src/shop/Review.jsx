import React, { useState } from 'react'
import Rating from '../components/Rating';
let ReviewList = [ { imgUrl: "/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiastically built, this e-commerce platform sparks innovative initiatives, paving the way for long-term, high-impact success. The awesome theme, SEO, PSD porta, and covalent leadership work in unison, ensuring seamless monetization without depleting valuable resources.", }, { imgUrl: "/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Rooted in enthusiast passion, this e-commerce site introduces innovative initiatives for long-term, high-impact success. The awesome theme, SEO, PSD porta, and covalent leadership harmonize effortlessly, facilitating monetization without draining valuable resources.", }, { imgUrl: "/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: 
"Striking an innovative chord, this e-commerce platform seamlessly integrates high-impact design, SEO, and PSD porta for effective monetization under covalent leadership, all without overtaxing resources.", }, { imgUrl: "/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: 
"Crafting a dynamic blend of innovation and seamless monetization, this e-commerce platform excels with its high-impact design, SEO, PSD porta, all guided by covalent leadership.", }, ];

const Review = ({seller}) => {

    const [reviewShow,setReviewShow] = useState(true)
  return (
    <div className=''>
        <ul className={` review-nav lab-ul ${reviewShow? "RevActive" : "DescActive"}`}>
            <li className="desc" onClick={()=> setReviewShow(!reviewShow)}>Description</li>
            <li className="rev" onClick={()=> setReviewShow(!reviewShow)}>Reviews</li>
        </ul>

        <div className={`review-content ${reviewShow? "review-content-show" : "description-show"}`}>
            <div className=" review-showing">
                <ul className=' content lab-ul'>
                    {
                        ReviewList.map((review,i)=>(
                            <li key={i}>
                                <div className=" post-thumb">
                                    <img src={review.imgUrl} alt="" />
                                </div>
                                <div className=" post-content">
                                    <div className=" entry-meta">
                                        <div className=" posted-on">
                                            <a href="#">{review.name}</a>
                                            <p>{review.date}</p>
                                        </div>
                                    </div>
                                    <div className=" entry-content">
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <div className=" client-review">
                    <div className=" review-form">
                        <div className=" review-title">
                            <h5>Add a review</h5>
                        </div>

                        <form action="action" className='row'>
                            <div className=" col-md-4 col-12">
                                <input type="text" name='name' id='name' placeholder='Full Name *' />
                            </div>
                            <div className=" col-md-4 col-12">
                                <input type="email" name='email' id='email' placeholder='Your Email *' />
                            </div>
                            <div className=" col-md-4 col-12">
                                <div className=" rating">
                                    <span className=' me-2'>Your Rating :</span>
                                    <Rating/>
                                </div>
                            </div>
                            <div className=" col-md-12 col-12">
                                <textarea name="message" id="message" placeholder='Type Message Here'  rows="8"></textarea>
                            </div>
                            <div className=" col-12">
                                <button type='submit' className=' default-button'>
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className=" description">
                <p>
                    Step into a world of style, comfort, and innovation at . Our online store is your destination for top-quality products that elevate your lifestyle. Explore a diverse range of fashion, footwear, and cutting-edge electronics, all designed to meet your unique needs.
                </p>
                <div className=" post-item">
                    <div className=" post-thumb">
                        <img src="/images/shop/01.jpg" alt="" />
                    </div>
                    <div className=" post-content">
                        <ul className=" lab-ul">
                                <li>Quality Craftsmanship: Each product is crafted with precision and attention to detail.</li>
                                <li>Fashion-forward Designs: Stay ahead in style with our thoughtfully curated collection.</li>
                                <li>Comfort and Innovation: Experience the perfect blend of comfort and innovation.</li>
                                <li>Reliable Performance: Our products are designed to meet the highest standards of quality and performance.</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Discover the essence of style, comfort, and innovation with {seller}. Our carefully curated collection of products is designed to enhance every aspect of your lifestyle.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Review
