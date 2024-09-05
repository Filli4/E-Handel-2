import { useState, useEffect } from "react";
import React from 'react'
import FetchItems from "../services/FetchItems"
import Card from "./Card"


export default function Shop() {
   
    const [products, setProducts] = useState([]);

    useEffect(() => {
    	async function HandleFetch() {
    		FetchItems(setProducts, 20);

	}
	HandleFetch();
}, []);


  return (
<div className="flex flex-wrap gap-x-7 justify-center p-2 bg-gray-100 ">
    {products.map((product)=>(
<Card
key={product.id}
imgSrc={product.image}
title={product.title}
price={product.price}
description={product.description} 

/>

    ))}
  
</div>
   
  )
}
