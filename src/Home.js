import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

   // useState controls the rendering of the page; the webpage renders 
   // upon first being 'called', and then everytime there is a change of
   // state (of a useStaet variable)...
   const [blogs, setBlogs] = useState(null);

   const [isPending, setIsPending] = useState(true);

   const [name, setName] = useState('Kidda?');


   // useEffect will run upon initial load (and render) and then anytime 
   // there is a re-render upon state data changes.
   // Be careful of any change of state within the useEffect - could end up
   // with a continuous/indefinite loop of renders.
   useEffect(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
         return res.json()
      })
      .then((data) => {
         setBlogs(data); // This won't cause an indefinite loop, due to the empty dependency array below.
         setIsPending(false);
      })
   }, []); 
   // useEffect dependency array - to control when it runs, after re-render.
   // An empty array ensures that useEffect only runs after the initial render.
   // It doesn't run on any subsequent renders.

   // useEffect(() => {
   //    console.log("useEffect RAN!!!");
   //    console.log(name);
   // }, [name]);  // This useEffect will only run when the state (name) changes.


   return (
      <div className="home">

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