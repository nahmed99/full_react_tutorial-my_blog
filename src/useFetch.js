import { useState, useEffect } from 'react';

// A custom hook:
const useFetch = (URL) => {

   // useState controls the rendering of the page; the webpage renders 
   // upon first being 'called', and then everytime there is a change of
   // state (of a useStaet variable)...
   const [data, setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);


   // useEffect will run upon initial load (and render) and then anytime 
   // there is a re-render upon state data changes.
   // Be careful of any change of state within the useEffect - could end up
   // with a continuous/indefinite loop of renders.
   useEffect(() => {
      fetch(URL)
      .then(res => {
         console.log(res);
         if (!res.ok) {
            // this checks if the request was unsuccessful - e.g., it won't be if our URL was incorrect - server fine, url etc not okay.

            // This throw Error will be caught in the catch statement below.
            throw Error('Could not fetch the data from requested URL: ' + URL);

         }
         return res.json()
      })
      .then((data) => {
         setData(data); // This won't cause an indefinite loop, due to the empty dependency array below.
         setIsPending(false);
         setError(null);
      })
      .catch(err => {
         // This catch is for cases where we can't connect to the server, OR
         // for errors that we have thrown above.
         // console.log("FETCH ERROR: " + err.message);
         setError("FETCH ERROR: " + err.message);
         setIsPending(false);
      })
   }, [URL]); 
   // useEffect dependency array - to control when it runs, after re-render.
   // An empty array ensures that useEffect only runs after the initial render.
   // It doesn't run on any subsequent renders.

   return {data, isPending, error}
}

export default useFetch;