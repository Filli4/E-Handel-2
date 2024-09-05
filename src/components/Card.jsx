import React from "react";
import ViewDetails from "./Buttons/ViewDetails";


export default function Card({ imgSrc, title, price, description, id }) {


	return (
		<>
			<div className="max-w-sm rounded overflow-hidden shadow-lg p-3 my-4 bg-white flex flex-col justify-between">
				<img className="w-full h-64 object-contain" src={imgSrc} alt={title} />

				<div className=" px-6 py-4 text-center ">
					<div className="font-bold text-xl mb-2  snap-center"> {title}</div>
					<span className="text-gray-800 text-lg font-semibold">${price}</span>
					<p className=" text-gray-700 text-base">{description}</p>

          <ViewDetails id ={id.toString()}/>
				</div>
			</div>
		</>
	);
}
