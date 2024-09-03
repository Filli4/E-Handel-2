import React from 'react'

export default function BuyNow({Delete,itemId,className}) {

  
  return (

    <button onClick={()=>Delete(itemId)}
   className={className}
   type='button'
    >Delete</button>
  )
}
