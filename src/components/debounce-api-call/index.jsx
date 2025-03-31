import { useEffect, useState } from "react";

function DebounceApiCall() {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);
  const debounceParamValue = useDebounce(searchParam, 1000);

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
