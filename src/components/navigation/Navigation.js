import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from "../navigation/Home"
import Contact from "../navigation/Contact"
import About from "../navigation/About"
import Cart from "../navigation/Cart"
import useShop from '../../ShopContext'


function Navigation() {
  const {products} = useShop();

  return (
    <div className='navContainer'> 

        <div className='navigation'>
          <NavLink to="/"><span className='logo'>Mowlid's Logo</span></NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="Cart">Cart</NavLink>
          <NavLink to="cart"><button>{products.length}</button></NavLink>
        </div> 
        <div>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Contact' element={<Contact />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Cart' element={<Cart />}/>
            </Routes>
        </div>
    </div>

  )
}

export default Navigation