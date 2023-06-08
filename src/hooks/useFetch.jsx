//custom hooks have to start with use
import { useState, useEffect } from "react";
export const useFetch = (url) => {
  // null becuase we won't have the info to begin with
  const [data, setData] = useState(null);
  //place content while we are waiting for the data to return. true is when the data is loading
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  //use useRef to wrap an object/array argument
  //which is an useEffect dependency

  useEffect(
    () => {
      //controller is for the fetch being aborted by the user
      const controller = new AbortController();
      const fetchData = async () => {
        setIsPending(true);

        try {
          //{} add header, get or post and signal controller.
          const res = await fetch(url);
          console.log(res);
          //if there is no response

          if (!res.ok) {
            throw new Error(`Response text is ${res.statusText}`);
          }
          const json = await res.json();
          setData(json);
          setIsPending(false);
          setError(null);
        } catch {
          (e) => {
            if (e.name === "AbortError") {
              console.log("the fetch was aborted");
            } else {
              isPending(false);
              setError("Could not fetch data");
              console.log(`Error is e`);
            }
          };
        }
      };
      fetchData();
      return () => {
        controller.abort();
      };
    },
    //empty array if you want to run it once. url is a dynamic value and fetchTrips b/c the function is outside the useEffect
    [url]
  );
  return { data, isPending, error };
};

export default useFetch;
