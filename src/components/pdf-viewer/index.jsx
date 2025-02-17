function PDFViewer() {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  async function fetchListOfProducts() {
    const apiResponse = await fetch(
      "https://dummyjson.com/products?limit=10&skip=0"
    );
    const result = await apiResponse.json();

    if (result && result.products && result.products.length) {
      setProducts(result.products);
    }
  }

  return <div>PDF Viewer</div>;
}

export default PDFViewer;
