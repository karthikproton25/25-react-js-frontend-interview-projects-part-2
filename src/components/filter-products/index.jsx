import { useEffect, useState } from "react";
import "./filter.css";

function FilterProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      const result = await apiResponse.json();

      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);
        setFilteredItems(result.products);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
}

return {};

export default FilterProducts;
