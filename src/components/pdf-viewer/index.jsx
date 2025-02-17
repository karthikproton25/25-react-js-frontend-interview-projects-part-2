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

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  async function handleFetchProductDetails(getId) {
    const apiResponse = await fetch(`https://dummyjson.com/products/${getId}`);
    const result = await apiResponse.json();

    if (result) setProductDetails(result);
  }
  console.log(productDetails);
  return (
    <div>
      <h1>PDF Viewer</h1>
      <ul>
        {products && products.length > 0
          ? products.map((productItem) => (
              <li
                onClick={() => handleFetchProductDetails(productItem.id)}
                key={productItem.id}
              >
                {productItem.title}
              </li>
            ))
          : null}
      </ul>
      <div className="pdf-viewer-page">
        <PDFViewer style={{ width: "100%", height: "800px" }}>
          <PdfViewComponent productDetails={productDetails} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default PDFViewer;
