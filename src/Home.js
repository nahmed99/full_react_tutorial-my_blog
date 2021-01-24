import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

   // useState controls the rendering of the page; the webpage renders 
   // upon first being 'called', and then everytime there is a change of
   // state (of a useStaet variable)...
   const [blogs, setBlogs] = useState([
      { title: "My new website", body: "Kidda Yaara?", author: "Bhai Saab", id: 1 },
      { title: "Welcome...", body: "Kidda Uncle?", author: "Uncle Jee", id: 2 },
      { title: "Some Top Tips", body: "Kidda Bey?", author: "Mama", id: 3 },
      { title: "Some othee website", body: "Kidda Bhai?", author: "Bhai Saab", id: 4 }
   ]);

   const [name, setName] = useState('Kidda?');


   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
   }

   // useEffect will run upon initial load (and render) and then anytime 
   // there is a re-render upon state data changes.
   // Be careful of any change of state within the useEffect - could end up
   // with a continuous/indefinite loop of renders.
   // useEffect(() => {
   //    console.log("useEffect RAN!!!");
   //    console.log(blogs);
   // }, []); 
   // useEffect dependency array - to control when it runs, after re-render.
   // An empty array ensures that useEffect only runs after the initial render.
   // It doesn't run on any subsequent renders.

   useEffect(() => {
      console.log("useEffect RAN!!!");
      console.log(name);
   }, [name]);  // This useEffect will only run when the state (name) changes.


   return (
      <div className="home">
         <BlogList blogs={ blogs } title="My NEW Blog" handleDelete={handleDelete} 
         />
         <button onClick={() => setName("Yaara")}>Change Name</button>
         <p>{ name }</p>
      </div>
   );
}

export default Home;