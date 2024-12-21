function FilterProducts() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        try {
            setLoading(true);
            const apiResponse = await fetch("https://dummyjson.com/products", {
              method: "GET",
            });

        }
    }

return {

}