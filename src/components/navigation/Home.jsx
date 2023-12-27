import React from 'react'
import productData from '../projects/productData'
import Products from '../projects/Products'

function Home() {
  return(
    <div className='productGrid'> 
      {
        productData.map((product)=><Products product={product}/>)
      }
    </div>
  )
}

export default Home