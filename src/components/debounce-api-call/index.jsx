function DebounceApiCall() {
  const [searchParam, setSearchParam] = useState("");
  return (
    <div>
      <h1>Debounce API Call</h1>
      <div className="search-wrapper">
        <input
          type="text"
          value={searchparams}
          onChange={(event) => setSearchParam(event.target.value)}
        />
      </div>
    </div>
  );
}

export default DebounceApiCall;
