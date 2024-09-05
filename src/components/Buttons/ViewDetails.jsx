import React from "react";
import { useNavigate } from "react-router-dom";

export default function ViewDetails(id) {

	const navigate = useNavigate();
	return (
		<button
			className="bg-green-300 shadow-md font-semibold p-3  
    rounded-md 
    hover:bg-green-500"
			onClick={() => navigate(`/product/${id.id}`)}>
			View Details
		</button>
	);
}
