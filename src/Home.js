import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

   // To run the JSON server, use:
   //    npx json-server --watch data/db.json --port 8000
   // The following data will be 'served' by the JSON server.
   const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

   // useState controls the rendering of the page; the webpage renders 
   // upon first being 'called', and then everytime there is a change of
   // state (of a useStaet variable)...
   const [name, setName] = useState('Kidda?');


   // useEffect(() => {
   //    console.log("useEffect RAN!!!");
   //    console.log(name);
   // }, [name]);  // This useEffect will only run when the state (name) changes.


   return (
      <div className="home">

         { error && <h3> { error }</h3> }

         {isPending && <div><h1>Loading...</h1></div>}

         {/* The && is used to ensure that blogs contains data 
             before BlogList is rendered */}
         { blogs && <BlogList blogs={ blogs } title="My NEW Blog" /> }
         <button onClick={() => setName("Yaara")}>Change Name</button>
         <p>{ name }</p>
      </div>
   );
}

export default Home;