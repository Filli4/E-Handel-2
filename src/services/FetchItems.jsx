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
	const url = `https://fakestoreapi.com/products?limit=${amount}`;
	const response = await fetch(url);
	const result = await response.json();
	setProducts(result);
	console.log("Result from fetch at site load is: ", result);
};

export default FetchItems;
