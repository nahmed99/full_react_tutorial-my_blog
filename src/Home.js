import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

   const [blogs, setBlogs] = useState([
      { title: "My new website", body: "Kidda Yaara?", author: "Bhai Saab", id: 1 },
      { title: "Welcome...", body: "Kidda Yaara?", author: "Uncle Jee", id: 2 },
      { title: "Some Top Tips", body: "Kidda Yaara?", author: "Mama", id: 3 }
   ]);

   return (
      <div className="home">
         <BlogList blogs={ blogs } title="My NEW Blog" />
      </div>
   );
}

export default Home;