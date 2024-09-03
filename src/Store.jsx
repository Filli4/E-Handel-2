import React, { useEffect, useState } from 'react'

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
        </div>
      )))}
      
    </div>
  )
}
