import React from "react";
import { useNavigate } from "react-router-dom";

export default function ViewDetails(id) {

	const navigate = useNavigate();
	return (
		<button
			className="bg-indigo-600 shadow-md font-semibold p-3 rounded-md hover:bg-indigo-500 text-sm text-white"
			onClick={() => navigate(`/product/${id.id}`)}>
			View Details
		</button>
	);
}
