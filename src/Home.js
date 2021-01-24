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


   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
   }

   // useEffect will run upon initial load (and render) and then anytime 
   // there is a re-render upon state data changes.
   // Be careful of any change of state within the useEffect - could end up
   // with a continuous/indefinite loop of renders.
   useEffect(() => {
      console.log("useEffect RAN!!!");
      console.log(blogs);
   });


   return (
      <div className="home">
         <BlogList blogs={ blogs } title="My NEW Blog" handleDelete={handleDelete} 
         />
      </div>
   );
}

export default Home;