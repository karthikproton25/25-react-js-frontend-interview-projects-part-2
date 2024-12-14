function RandomQuoteGenerator() {
    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState(null);
  
    async function fetchQuote() {
      try {
        setLoading(true);
        const apiResponse = await fetch("https://api.quotable.io/quotes/random", {
          method: "GET",
        });
        const result = await apiResponse.json();
  
        console.log(result);
  
        if (result && result.length > 0) {
          setLoading(false);
          setQuote(result[0]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      fetchQuote();
    }, []);
  