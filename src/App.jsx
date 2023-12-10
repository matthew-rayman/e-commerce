import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Navitems from './components/Navitems'
import Blog from './blog/Blog'
import Footer from './components/Footer'
import Shop from './shop/Shop'
import "./App.css"
import SingleProduct from './shop/SingleProduct'
import CartPage from './shop/CartPage'
import SingleBlog from './blog/SingleBlog'
import About from './about/About'
import Contact from './contact/Contact'
import PrivateRoute from './privateRoute/privateRoute'
import Login from './components/Login'
import SignUp from './components/SignUp'
import "animate.css"
const App = () => {
  return (
    <div>
      <Navitems/>
      <div className=' min-vh-100'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<SingleBlog/>}/>
        <Route path='/shop/:id' element={<SingleProduct/>}/>
        <Route path='/cart-page' element={<PrivateRoute><CartPage/></PrivateRoute>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      </div>

      <Footer/>
    </div>
  )
}

export default App
