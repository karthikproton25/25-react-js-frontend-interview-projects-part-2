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

useEffect(() => {
  fetchProducts();
}, []);

useEffect(() => {
  const cpyProducts = [...products];
  setFilteredItems(
    currentSelectedCategory !== ""
      ? cpyProducts.filter(
          (productItem) =>
            productItem.category.toLowerCase() ===
            currentSelectedCategory.toLowerCase()
        )
      : cpyProducts
  );
}, [currentSelectedCategory]);


return (
  <div className="filter-products-container">
    <h1>Filter Products By Category</h1>
    <div className="filter-categories-container">
      {uniqueCategories.map((uniqueCategoryItem) => (
        <button
          onClick={() =>
            setCurrentSelectedCategory(
              currentSelectedCategory !== "" &&
                currentSelectedCategory === uniqueCategoryItem
                ? ""
                : uniqueCategoryItem
            )
          }
          className={`${
            currentSelectedCategory === uniqueCategoryItem ? "active" : ""
          }`}

const uniqueCategories =
  products && products.length > 0
    ? [...new Set(products.map((productItem) => productItem.category))]
    : [];

return {};

export default FilterProducts;
