// Example of how to use:

// const [products, setProducts] = useState([]);

// useEffect(() => {
// 	async function HandleFetch() {
// 		FetchItems(setProducts, 32);
// 	}
// 	HandleFetch();
// }, []);

// --Viktor--
const FetchItems = async (setProducts, amount) => {
	try {
		const url = `https://fakestoreapi.com/products?limit=${amount}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		setProducts(result);
	} catch (error) {
		console.log(error);
	}
};

export default FetchItems;
