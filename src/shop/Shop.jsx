import React, { useEffect, useState } from 'react'
import Pageheader from '../components/Pageheader'
import data from "../products.json"
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPosts from './PopularPosts'
import Tags from './Tags'

const showResults = "Showing 1-12 of 137 Results"

const Shop = () => {
  useEffect(() => {
   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}, [])
    const [Gridlist,setGridList] = useState(true)
    const [products, setproducts] = useState(data)

    const [currentPage,setCurrentPage] = useState(1)
    const productsPerPage = 12

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    };

    const [selectedCategory, setSelectedCategory] = useState("All");
    const allCategories = [...new Set(data.map((val)=> val.category))]

    const filterItem = (catgValue) =>{
      const newItem = data.filter((newVal) =>{
        return newVal.category === catgValue
      })
      setSelectedCategory(catgValue)
      setproducts(newItem)
    }
  return (
    <div className=''>
      <Pageheader title="Our Shop Page" curPage="Shop"/>
      <div className=" animate__animated animate__fadeInUp  shop-page py-5">
        <div className=" container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-12">
                    <article>
                        <div className=" shop-title d-flex flex-wrap justify-content-between">
                            <p>{showResults}</p>
                                 <div className={`product-view-mode ${Gridlist?"gridActive":"listActive"}`}>
                                <a className='grid' onClick={()=> setGridList(!Gridlist)}>
                                    <i className=' icofont-ghost'></i>
                                </a>
                                <a className='list' onClick={()=> setGridList(!Gridlist)}>
                                    <i className=' icofont-listine-dots'></i>
                                </a>
                            </div>
                        </div>
                        <div>
                             <ProductCards Gridlist={Gridlist} products={currentProducts} />
                        </div>
                        <Pagination  productsPerPage={productsPerPage} totalProducts={products.length}
                                     paginate={paginate} activePage={currentPage}
                        />
                    </article>
                </div>
                 <div className="col-lg-4 col-12">
                  <aside>
                    <Search products={products} Gridlist={Gridlist} />
                    <ShopCategory 
                    filterItem={filterItem}
                    setproducts={setproducts}
                    allCategories={allCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    />
                    <PopularPosts/>
                    <Tags/>
                  </aside>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
