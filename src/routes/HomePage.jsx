import React from "react";
import Store from "../Store"

function HomePage() {
	return (
		<div className="flex items-center justify-center  bg-gray-100">
			<h2 className="text-4xl font-bold text-blue-500">Home Page</h2>
			<Store/>
		</div>
	);
}

export default HomePage;
