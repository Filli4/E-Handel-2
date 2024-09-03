import React, { useEffect, useState } from 'react'
import BuyNow from "./components/Buttons/BuyNow"
export default function Store() {

    const[data, setData] = useState([])
    

    async function fetchData(params) {
        try {
            const response= await fetch("/StoreData.json")
            const result = await response.json()
            setData(result)
            console.log(data);
            
        } catch (error) {
            console.log("Error");
            
        }
        
    }
    useEffect(()=>{
        fetchData()
    },[])


    const Delete = (id) => {
      setData(data.filter((item)=> item.id !== id))

    }


  return (
    <div className='bg-slate-500 p-3 m-2 flex justify-center content-center flex-wrap gap-2'>
        {data.length === 0 ?(
            <p>No Data Availble</p>
        ): (data.map((item) => (
        <div key={item.id} className="flex w-72 my-3 flex-row flex-wrap bg-slate-50 p-10 rounded-lg "> 
          <img src={item.image} alt={item.title} /> 
         <div className="flex flex-row p-6"> 
            <h1>{item.title}</h1>
            <h3>{item.price}</h3>
          </div>
          <p>{item.description}</p>
          <BuyNow
          Delete={Delete}
          itemId={item.id}
          type="button"
           className='justify-center items-center flex flex-wrap bg-gradient-to-b from-red-300 to-red-600 border-2 border-black px-3 w-full h-16 rounded-lg font-semibold '
          />
        </div>
      )))}
      
    </div>
  )
}
