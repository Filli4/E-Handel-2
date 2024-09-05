// Example of how to use:

// const [products, setProducts] = useState([]);

// useEffect(() => {
// 	async function HandleFetch() {
// 		FetchItems(setProducts, 32);
// 	}
// 	HandleFetch();
// }, []);

// --Viktor--
const FetchItems = async (setProducts, amount = 20) => {
	// Försök att hämta alla produkter baserat på dess id
	try {
		// Utför en fetch
		const url = `https://fakestoreapi.com/products?limit=${amount}`;
		const response = await fetch(url);

		// Om svaret inte är ok så visa error
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Konvertera json-objekt till javascript-objekt
		const result = await response.json();

		// Sätt Products till resultatet
		setProducts(result);
	} catch (error) {
		console.log(error);
	}
};

export default FetchItems;
