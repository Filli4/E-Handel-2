import { useState, useEffect, useContext } from "react"; // Importera nödvändiga hooks
import FetchItems from "/src/services/FetchItems.jsx"; // Importera funktionen för att hämta alla produkter
import FetchSingleItem from "/src/services/FetchSingleItem.jsx"; // Importera funktionen för att hämta en enskild produkt
import Card from "../components/Card";
import { ProductProvider, ProductContext } from "/src/context/ProductProvider.jsx"; 
import HomeCto from "../components/HomeCto";

function HomePage() {
  // Hantera state för produkter och en enskild produkt
 const { products, setProducts,singleProduct, setSingleProduct } = useContext(ProductContext);
  // Hämta alla produkter när komponenten laddas
  useEffect(() => {
    FetchItems(setProducts, 4); // Hämta 8 produkter
  }, []);
  // Hämta en enskild produkt när komponenten laddas
  useEffect(() => {
    FetchSingleItem(setSingleProduct, 7); // Hämta produkt med ID 7
  }, []);
 
  return (
    <div>

      <HomeCto />

      {/* Visa en enskild produkt */}
      {/* {singleProduct && (
        	<Card
			key={singleProduct.id}
			imgSrc={singleProduct.image}
			title={singleProduct.title}
			price={singleProduct.price}
			id={singleProduct.id}
		/>
      )} */}


      {/* Visa alla produkter */}
      <h2 className="">What is new!</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 pt-6">
        {products.map((product) => (
            <Card
              key={product.id}
              imgSrc={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
            />
        ))}
    </div>
	</div>
  );
}
export default HomePage;