import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

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


   return (
      <div className="home">
         <BlogList blogs={ blogs } title="My NEW Blog" handleDelete={handleDelete} 
         />
      </div>
   );
}

export default Home;