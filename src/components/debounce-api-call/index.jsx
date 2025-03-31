import { useEffect, useState } from "react";

function DebounceApiCall() {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);
  const debounceParamValue = useDebounce(searchParam, 1000);

  async function fetchListOfRecipes() {
    try {
      setPending(true);
      const apiResponse = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceParamValue}`
      );
      const result = await apiResponse.json();

      if (result && result.recipes && result.recipes.length > 0) {
        setPending(false);
        setRecipes(result.recipes);
      } else {
        setPending(false);
        setRecipes([]);
      }
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchListOfRecipes();
  }, [debounceParamValue]);
  return (
    <div>
      <h1>Debounce API Call</h1>
      <div className="search-wrapper">
        <input
          type="text"
          value={searchparams}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Recipe Name"
        />
      </div>
    </div>
  );
}

export default DebounceApiCall;
