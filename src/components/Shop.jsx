import { useState, useEffect } from "react";
import React from 'react'
import FetchItems from "../services/FetchItems"
export default function Shop() {
   
    const [products, setProducts] = useState([]);

    useEffect(() => {
    	async function HandleFetch() {
    		FetchItems(setProducts, 20);

	}
	HandleFetch();
}, []);


  return (

    <div >
    {products.map((product)=>(
        <div key={product.id}>
    <img src={product.image} alt={product.title} />
    <h1>{product.title}</h1>
    <span>{product.price}</span>
    <p>{product.description}</p>
    
    </div>
    ))}
    </div>
  )
}
