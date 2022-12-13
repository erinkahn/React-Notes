import 'useEffect, useState' from react;

export function useFetch(url) {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState();
  const [error, isError] = useState();
  
  useEffect(() => {
    const controller = new AbortController(); // to cleanup the effect later
    
    setLoading(true);
    
    fetch(url, {signal: controller.signal}) // check if there's a signal
      .then(url)
      .catch(setError)
      .finally(() => setLoading(false))
    
    return () => { // cleanup
      controller.abort()
    }
  }, [url])
  
  return { loading, data, error }
}
