import React from 'react'
import useShop from '../../ShopContext'

function Cart() {
  const { products, total, removeFromCart,} = useShop();

  return (
    <div className='cartContainer'>

      <h4>This is Cart Page</h4>
      {
        products.map((pro)=>(
          <div className='cartflex'>
            <div className="cartImage">
              <img src={pro.url} width={100} height={80}/>
              <h2>{pro.name}</h2>
              <div className="cartPrice">
                <span>${pro.price}</span>
                <button onClick={()=> removeFromCart(pro)}>delete</button>
              </div>
            </div>
          </div>
        ))
      }
      <h4>Total Price : ${total}</h4>
    </div>
  )
}

export default Cart