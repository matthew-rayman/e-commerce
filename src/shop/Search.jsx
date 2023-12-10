import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = ({Gridlist,products}) => {
    const [search,setSearch] = useState("")
    const filterProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className=' widget widget-search'>
        <form className=" search-wrapper mb-3">
            <input type="text" name='search' id='search' placeholder='Search...' 
                   defaultValue={search} onChange={(e)=> setSearch(e.target.value)} className="" />
                   <button type='submit'>
                     <i className=' icofont-search-2'></i>
                   </button>
        </form>

        <div>
            {
                search && filterProducts.map((product) =>(
                    <Link key={product.id} to={`/shop/${product.id}`}>
                        <div className=" d-flex gap-3 p-2">
                            <div>
                                <div className=" pro-thumb h-25">
                                    <img src={product.img} width={70} className=' flex-{grow|shrink}-0' alt="" />
                                </div>
                            </div>
                            <div className=" product-content">
                                <p>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </p>
                                <h6>${product.price}</h6>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
      
    </div>
  )
}

export default Search
