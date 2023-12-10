import React, { useEffect, useState } from 'react'
import Pageheader from '../components/Pageheader';
import { Link } from 'react-router-dom'
import CheckOutPage from './CheckOutPage';
import delBtn from "/images/shop/del.png"

const CartPage = () => {
    const [cartItems,setCartItems] = useState([])

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    useEffect(()=>{
        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedItems)
    },[])

    const calculateTotalPrice = (item) =>{
        return item.price * item.quantity
    }

    const handleIncrease = (item) =>{
        item.quantity += 1;
        setCartItems([...cartItems])

        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    const handleDecrease = (item) =>{
      if(item.quantity > 1){
        item.quantity -= 1;
        setCartItems([...cartItems]);

        localStorage.setItem("cart", JSON.stringify(cartItems))
      }
    }

    const handleRemoveItem = (item) =>{
      const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id)

      setCartItems(updateCart)
      updateLocalStorage(updateCart)
    } 

    const updateLocalStorage = (cart) =>{
      localStorage.setItem("cart",JSON.stringify(cart))
    }
    const cartSubTotal = cartItems.reduce((total,item) =>{
      return total + calculateTotalPrice(item)
    },0)

    const orderTotal = cartSubTotal

  return (
    <div>
      <Pageheader title={"Shop Cart"} curPage={"Cart Page"}/>
      
      <div className=" animate__animated animate__fadeInDown animate__slow shop-cart py-5">
        <div className=" container">
          <div className=" section-wrapper">
            <div className=" cart-top">
              <table>
                <thead>
                  <tr>
                    <th className=' cat-product'>Product</th>
                    <th className="cat-price">Price</th>
                    <th className=" cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item,indx) =>(
                      <tr key={indx}>
                        <td className=' product-item cat-product'>
                          <div className=" p-thumb">
                            <Link to="/shop"><img src={item.img} alt="" /></Link>
                          </div>
                          <div className=" p-content">
                            <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>

                        <td className=" cat-price">${item.price}</td>
                        <td className=" cat-quantity">
                           <div className=" cart-plus-minus">
                                <div onClick={()=> handleDecrease(item)} className="dec qtybutton">-</div>
                                <input type="text" className=' cart-plus-minus-box' name='qtybutton' id='qtybutton' readOnly value={item.quantity} />
                                <div onClick={()=> handleIncrease(item)} className="inc qtybutton">+</div>

                            </div>
                        </td>
                        <td className=" cat-toprice">${calculateTotalPrice(item)}</td>
                        <td className=" cat-edit">
                          <a href="#" onClick={()=> handleRemoveItem(item)}>
                            <img src={delBtn} alt="" />
                          </a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className=" cart-bottom">
               <div className=" cart-checkout-box">
                <form className=" coupon">
                   <input type="text" className=' cart-page-input-text' name='coupon' id='coupon' placeholder='Coupon code ...' />
                   <input type="submit" value="Apply Coupon" />
                </form>

                <form className=" cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div className="">
                    <CheckOutPage/>
                  </div>
                </form>
               </div>

               <div className=" shiping-box">
                <div className="row">
                  <div className=" col-md-6 col-12">
                    <div className=" calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className=" outline-select">
                        <select>
                          <option value="uk">United Kingdom(UK)</option>
                          <option value="">United States(US)</option>
                          <option value="">Malaysia</option>
                          <option value="">Singapore</option>
                          <option value="">Myanmar</option>
                        </select>
                        <span className=" select-icon">
                          <i className=" icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className=" outline-select shipping-select">
                        <select>
                          <option value="uk">London</option>
                          <option value="">New York City(NYC)</option>
                          <option value="">Kuala Lumpur</option>
                          <option value="">Singapore</option>
                          <option value="">Yangon</option>
                        </select>
                        <span className=" select-icon">
                          <i className=" icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input type="text" name='postalCode' id='postalCode' placeholder='Postal Code/ZIP *'
                      className=' cart-page-input-text' />
                      <button type='submit'>Update Adress</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className=" cart-overview">
                      <h3>Cart Total</h3>
                      <ul className=" lab-ul">
                        <li className="">
                          <span className=" pull-left">Cart SubTotal</span>
                          <p className=" pull-right">${cartSubTotal}</p>
                        </li>
                        <li className="">
                          <span className=" pull-left">Shipping and Handlingl</span>
                          <p className=" pull-right">Free Shipping</p>
                        </li>
                        <li className="">
                          <span className=" pull-left">Order Total</span>
                          <p className=" pull-right">${orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
