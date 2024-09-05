// Example of how to use:

// const [singleProducts, setSingleProducts] = useState([]);

// useEffect(() => {
// 	async function HandleFetch() {
// 		FetchItems(setSingleProduct, 1);
// 	}
// 	HandleFetch();
// }, []);

// --Viktor--
const FetchSingleItem = async (setSingleProduct, id) => {
	// Försök att hämta en produkt baserat på dess id
	try {
		// Utför en fetch
		const url = `https://fakestoreapi.com/products/${id}`;
		const response = await fetch(url);

		// Om svaret inte är ok så visa error
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Konvertera json-objekt till javascript-objekt
		const result = await response.json();

		// Sätt SingleProduct till resultatet
		setSingleProduct(result);
	} catch (error) {
		console.log(error);
	}
};

export default FetchSingleItem;
