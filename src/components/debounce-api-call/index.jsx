import { useEffect, useState } from "react";

function DebounceApiCall() {
  const [searchParam, setSearchParam] = useState("");
  const debounceParamValue = useDebounce(searchParam, 1000);
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
