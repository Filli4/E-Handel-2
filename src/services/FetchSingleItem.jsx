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
	try {
		const url = `https://fakestoreapi.com/products/${id}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		setSingleProduct(result);
		console.log("Result from fetch at site load is: ", result);
	} catch (error) {
		console.log(error);
	}
};

export default FetchSingleItem;
