import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = ({product}) => {
    const {name,id,price,seller,ratingsCount,quantity,img} = product;

    const [preQuantity,setQuantity] = useState(quantity)
    const [cupon, setCupon] = useState("")
    const [size, setSize] = useState("Select Size")
    const [color, setColor] = useState("Select Color")

    const handleSizeSelect = (e)=>{
        setSize(e.target.value)
    }
    const handleColorSelect = (e)=>{
        setColor(e.target.value)
    }
    const handleDecrease = ()=> {
        if (preQuantity > 1){
            setQuantity(preQuantity - 1)
        }
    }
    const handleIncrease = ()=>{
        setQuantity(preQuantity+1)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const buyItem = {
            id : id,
            img: img,
            name:name,
            price:price,
            quantity:preQuantity,
            size: size,
            color: color,
            cupon: cupon
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id && item.size === size && item.color === color && item.cupon=== cupon)

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += quantity;
        }else{
            existingCart.push(buyItem)
        }

        localStorage.setItem("cart",JSON.stringify(existingCart));

        setQuantity(0);
        setSize("Select size")
        setColor("Select color")
        setCupon("")
    }

  return (
    <div>
      <div className="">
        <h4 className="">{name}</h4>
        <p className=" rating">
            <i className=" icofont-star"></i>
            <i className=" icofont-star"></i>
            <i className=" icofont-star"></i>
            <i className=" icofont-star"></i>
            <i className=" icofont-star"></i>
            <span>{ratingsCount} reviews</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>This {name} is a fantastic product that will meet all your needs. It's high-quality, reasonably priced, and comes in various sizes and colors. Don't miss out on this amazing deal!</p>
      </div>

      <div className="">
        <form onSubmit={handleSubmit}>
            <div className=" select-product size">
                <select value={size} onChange={handleSizeSelect}>
                    <option>Select size</option>
                    <option>SM</option>
                    <option>MD</option>
                    <option>LG</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                <i className=' icofont-rounded-down'></i>
            </div>

             <div className=" select-product color">
                <select value={color} onChange={handleColorSelect}>
                    <option>Select color</option>
                    <option>Black</option>
                    <option>Ash</option>
                    <option>Red</option>
                    <option>White</option>
                    <option>Blue</option>
                    <option>Pink</option>
                </select>
                <i className=' icofont-rounded-down'></i>
            </div>

            <div className=" cart-plus-minus">
                <div onClick={handleDecrease} className="dec qtybutton">-</div>
                <input onChange={(e) => setQuantity(parseInt(e.target.value,10))} type="text" className=' cart-plus-minus-box' name='qtybutton' id='qtybutton' value={preQuantity} />
                <div onClick={handleIncrease} className="inc qtybutton">+</div>

            </div>
            <div className=" discount-code mb-2">
                <input type="text" placeholder='Enter discount code' value={cupon} defaultChecked onChange={(e)=> setCupon(e.target.value)} />
            </div>
            <button type='submit' className=' lab-btn'>
                <span>Add to Cart</span>
            </button>
            <Link to="/cart-page" className='lab-btn bg-primary'>
                <span>Check Out</span>
            </Link>
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay
