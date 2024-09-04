import React from 'react'

export default function AddToCart({Add,itemId,className}) {
  return (
    <button onClick={()=>Add(itemId)} 
    className={className}
    
    >

      AddToCart
    </button>
  )
}
