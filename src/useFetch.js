import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw Error("fetching data failed!");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoaded(false);
          setError(false);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsLoaded(false);
        });
    }, 1000);
  }, [url]);

  return { data, error, isLoaded };
}

export default useFetch;
