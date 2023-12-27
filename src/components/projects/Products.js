import React, { useEffect, useState } from 'react'
import useShop from '../../ShopContext';

function Products({ product }) {
    const {name, price, isNew, url} = product;
    const [isInCart, setIsInCart] = useState(false);

    const {addToCart, removeFromCart, products} = useShop();

    useEffect(()=>{
      const isCart = products.find((pro)=> pro.id === product.id)
      setIsInCart(!!isCart)
    },[products])

    const handleClick = () =>{
      if(isInCart){
        removeFromCart(product)
      }
      else{
        addToCart(product)
      }
    }

  return (
    <div className='singleProduct' style={{background: `url(${url})`}}>
          <h3>{name}</h3>

       <div className='priceInfo'>
          <p>{price > 0 ? `$${price}` : "Free"}</p>
          <p>{isNew ? "New" : "Old"}</p>
       </div> 
       <button className={isInCart ? "btnPrimary" : "btnSecondary"} onClick={handleClick}>{isInCart ? "-" : "+"}</button>
    </div>
  )
}

export default Products;