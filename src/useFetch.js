import { useState, useEffect } from "react";

// Custom hook used over the application to fetch the data from db
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        // in production setup the setTimeout would not exist
        // Here for dev & debug purpose we have setTimeout (to verify Loading functionality)

        setTimeout(() => {
            // Adding the url parameter, so that we can use it dynamically from different source files
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        // For example: when the resource is not found by server, like 404, it will be tracked here
                        // Let's throw an Error with message, which cactch block will use to render on UI
                        throw Error('Could not fetch the data for mentioned resource');
                    }
                    // if no error, then we need to extract the json data from server response
                    return res.json();
                })
                .then(data => {
                    // Once data is recieved
                    // Replacing the data update, as a generic variable 
                    setData(data);
                    // update the error variable state to null, to reset the error value 
                    setError(null);
                    setIsPending(false);
                })
                .catch(err => {
                    // auto catches network / connection error
                    // for example: if the server is down, connection not established
                    if (err.name === "AbortError") {
                        console.log("Fetch Aborted")
                    } else {
                        setError(err.message);
                        setIsPending(false);
                        setData(null);
                    }
                })
        }, 0);

        return () => abortCont.abort();


    }, [url]) // empty [] bracket is the dependency array indicating method execution only once

    // return all the needful state variables, so that these can be used in JSX template to show & render the DOM elements along with filled in data state
    return { data, isPending, error }
}

export default useFetch;