import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "/src/context/ProductProvider.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductProvider>
				<Header />
				<App />
				<Footer />
			</ProductProvider>
		</BrowserRouter>
	</React.StrictMode>
);
